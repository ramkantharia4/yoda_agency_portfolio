from fastapi import FastAPI, Request, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
import json
import os
import sqlite3
from datetime import datetime

# --- Database Setup ---
DB_PATH = os.path.join(os.path.dirname(__file__), "portfolio.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS interactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT,
            path TEXT,
            user_token TEXT
        )
    ''')
    conn.commit()
    conn.close()

init_db()

app = FastAPI(
    title="Yoda Dayo Unified Portfolio Backend",
    description="Unified API for Recommendations, Sessions, and Tracking.",
    version="2.1.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], # Vite default
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the rules from JSON file
RULES_PATH = os.path.join(os.path.dirname(__file__), "rules.json")
with open(RULES_PATH, "r") as f:
    RULES = json.load(f)

# --- Recommendation Logic ---

def detect_price_query(text: str) -> bool:
    price_words = ["price", "cost", "charge", "fee", "budget", "how much"]
    return any(word in text.lower() for word in price_words)

def match_services(text: str):
    text = text.lower()
    matches = []
    for service, keywords in RULES.items():
        if any(keyword in text for keyword in keywords):
            matches.append(service)
    return matches

def get_plan_recommendation(user_input: str, matched_services: list):
    authority_triggers = ["full brand identity", "brand book", "5 pages", "a/b testing", "social media templates", "performance reports"]
    empire_triggers = ["executive", "custom iconography", "social media kit", "full-stack ecosystem", "scale-up", "unlimited ad sets", "24/7", "dedicated project manager"]
    
    input_lower = user_input.lower()
    has_empire = any(t in input_lower for t in empire_triggers) or "scale" in input_lower or "empire" in input_lower or "automation" in input_lower or len(matched_services) >= 5
    has_authority = not has_empire and (any(t in input_lower for t in authority_triggers) or "growth" in input_lower or "authority" in input_lower or len(matched_services) >= 3)
    
    if has_empire:
        return "The Empire Custom", "ideal for businesses scaling for maximum market impact and ROI."
    elif has_authority:
        return "The Authority Custom", "designed for growing brands ready to dominate their niche."
    else:
        return "The Blueprint Custom", "best for early-stage startups needing a professional launch."

@app.post("/recommend")
async def recommend(request: Request):
    data = await request.json()
    user_input = data.get("message", "").strip()

    if not user_input:
        return {"response": "Please describe your business needs so I can recommend a plan."}

    if detect_price_query(user_input):
        return {
            "response": (
                "You need to schedule a call with the boss for the price. "
                "You'll find a button just above for scheduling the meet."
            )
        }

    matched_services = match_services(user_input)
    if not matched_services:
        return {"response": "No exact plan matches your needs. You can choose to 'Customize your own Plan'."}

    plan_name, reason = get_plan_recommendation(user_input, matched_services)

    response_text = f"Based on your needs, we recommend:\n\n🏆 **{plan_name}**\nThis plan is {reason}\n\nIt will cover your requirements for:\n"
    for service in matched_services:
        service_name = service.replace("_", " ").title()
        response_text += f"✅ {service_name}\n"

    response_text += "\nWant to discuss next steps? Tap 'Schedule a Meet'."
    return {"response": response_text}

# --- Session Management ---

@app.post("/login")
async def login_user(request: Request, response: Response):
    data = await request.json()
    email = data.get("email")
    password = data.get("password")

    if (email == "test@example.com" and password == "1234") or (email == "yodadayorp@gmail.com"):
        token = "user-session-" + email 
        response.set_cookie(
            key="session_token",
            value=token,
            httponly=True,
            secure=False,           # Set to True in production with HTTPS
            samesite="Lax",
            max_age=60 * 60 * 24,
        )
        return {"message": "Login successful"}

    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/check-session")
async def check_session(request: Request):
    token = request.cookies.get("session_token")
    if not token:
        return {"logged_in": False}
    return {"logged_in": True, "token": token}

@app.post("/logout")
async def logout(response: Response):
    response.delete_cookie("session_token")
    return {"message": "Logged out"}

# --- Tracking Logic ---

@app.post("/track")
async def track_event(request: Request):
    data = await request.json()
    path = data.get("path")
    timestamp = data.get("timestamp")
    token = request.cookies.get("session_token")

    user_identifier = token if token else "Anonymous"
    
    # Save to SQLite
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('INSERT INTO interactions (timestamp, path, user_token) VALUES (?, ?, ?)',
                   (timestamp, path, user_identifier))
    conn.commit()
    conn.close()

    print(f"[TRACK] {timestamp} - User({user_identifier}) visited {path}")
    return {"status": "tracked"}

@app.get("/dashboard", response_class=HTMLResponse)
async def view_interactions():
    """Simple endpoint to view recently tracked events."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM interactions ORDER BY id DESC LIMIT 100')
    rows = cursor.fetchall()
    conn.close()

    # Simple CSS for dashboard
    style = """
    <style>
        body { font-family: 'Inter', sans-serif; background: #000; color: #fff; padding: 40px; }
        h1 { color: #3b82f6; letter-spacing: -1px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; background: #111; border-radius: 12px; overflow: hidden; }
        th, td { padding: 15px; text-align: left; border-bottom: 1px solid #222; }
        th { background: #1a1a1a; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
        tr:hover { background: #161616; }
        .token { color: #3b82f6; font-family: monospace; }
        .path { color: #10b981; }
    </style>
    """

    html_content = f"<html><head>{style}</head><body>"
    html_content += "<h1>Yoda Dayo Interaction Logs</h1>"
    html_content += "<table><tr><th>ID</th><th>Timestamp</th><th>Path</th><th>User (Session Token)</th></tr>"
    for row in rows:
        token_display = f"<span class='token'>{row[3]}</span>"
        path_display = f"<span class='path'>{row[2]}</span>"
        html_content += f"<tr><td>{row[0]}</td><td>{row[1]}</td><td>{path_display}</td><td>{token_display}</td></tr>"
    html_content += "</table></body></html>"
    
    return html_content

@app.get("/")
def home():
    return {"message": "Yoda Dayo Unified Backend 2.1 is running 🚀"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
