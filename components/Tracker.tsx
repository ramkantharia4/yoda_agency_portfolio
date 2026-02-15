import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Tracker: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const trackPage = async () => {
            try {
                await fetch("http://127.0.0.1:8000/track", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include", // Important for cookie tracking
                    body: JSON.stringify({
                        path: location.pathname + location.search + location.hash,
                        timestamp: new Date().toISOString(),
                    }),
                });
            } catch (error) {
                // Silently fail to not interrupt user experience
                console.debug("Tracking skipped (backend might be offline)");
            }
        };

        trackPage();
    }, [location]);

    return null; // Invisible tracker
};
