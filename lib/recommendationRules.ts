export const PLAN_DATA = {
    starter: {
        name: "The Blueprint",
        description: "Best for early-stage founders/startups needing a clean launch.",
        tags: [
            "starter", "basic", "beginner", "early", "launch", "new", "starting",
            "logo", "simple", "clean", "one page", "landing page", "mvp", "idea",
            "cheap", "budget", "low cost", "fast", "visuals", "design", "first website"
        ]
    },
    growth: {
        name: "The Authority",
        description: "Best for growing businesses needing a full brand identity & website.",
        tags: [
            "growth", "scaling", "expand", "professional", "rebrand", "identity",
            "branding", "brand", "website", "multi page", "seo", "traffic", "leads",
            "content", "social media", "blog", "marketing", "redesign", "refresh",
            "business", "corporate", "agency", "consulting", "services"
        ]
    },
    premium: {
        name: "The Empire",
        description: "Best for established players needing automation, ads, & total dominance.",
        tags: [
            "premium", "empire", "scale", "automation", "ads", "advertising", "meta",
            "facebook", "instagram", "crm", "funnel", "sales", "revenue", "complex",
            "app", "platform", "dashboard", "integration", "comprehensive", "full stack",
            "custom", "enterprise", "high end", "luxury", "global", "dominate"
        ]
    }
};

export interface RecommendationResult {
    text: string;
    plan: 'starter' | 'growth' | 'premium' | null;
    confidence: number;
    matchedKeywords: string[];
}

export const getAIRecommendation = (userInput: string): RecommendationResult => {
    const input = userInput.toLowerCase();

    // Quick price check override
    const priceWords = ["price", "cost", "how much", "quote", "rates"];
    if (priceWords.some(w => input.includes(w))) {
        return {
            text: "It sounds like you're interested in pricing. To give you an accurate quote based on your specific needs, we recommend scheduling a quick call.",
            plan: null,
            confidence: 100,
            matchedKeywords: ["pricing"]
        };
    }

    let scores = { starter: 0, growth: 0, premium: 0 };
    let matches: { [key: string]: string[] } = { starter: [], growth: [], premium: [] };

    // Scoring Logic
    Object.entries(PLAN_DATA).forEach(([key, data]) => {
        data.tags.forEach(tag => {
            if (input.includes(tag)) {
                scores[key as keyof typeof scores] += 1;
                matches[key].push(tag);
            }
        });
    });

    // Determine winner
    let bestPlan: 'starter' | 'growth' | 'premium' | null = null;
    let maxScore = 0;

    (Object.keys(scores) as Array<keyof typeof scores>).forEach(key => {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            bestPlan = key;
        } else if (scores[key] === maxScore && maxScore > 0) {
            // Tie-breaking: Premium > Growth > Starter
            if (key === 'premium') bestPlan = 'premium';
            else if (key === 'growth' && bestPlan !== 'premium') bestPlan = 'growth';
        }
    });

    // Calculate confidence (simple heuristic)
    // 1 match = 60%, 2 matches = 80%, 3+ matches = 95 - 99%
    let confidence = 0;
    if (maxScore === 0) confidence = 0;
    else if (maxScore === 1) confidence = 65 + Math.random() * 10;
    else if (maxScore === 2) confidence = 80 + Math.random() * 10;
    else confidence = 95 + Math.random() * 4;

    // Formatting the output
    if (!bestPlan) {
        // Fallback Logic: Detect general sentiment
        // If "branding" was mentioned but didn't hit well (unlikely now with better tags), default to Growth
        if (input.includes("brand")) {
            return {
                text: "You mentioned branding. For a robust brand identity, we typically recommend 'The Authority' plan to establish a strong market presence.",
                plan: 'growth',
                confidence: 75,
                matchedKeywords: ["brand"]
            };
        }

        return {
            text: "We analyzed your request but need a bit more detail to pinpoint the perfect plan. \n\nHowever, most ambitious businesses start with a Strategy Call to align on goals.",
            plan: null,
            confidence: 20,
            matchedKeywords: []
        };
    }

    const planData = PLAN_DATA[bestPlan as keyof typeof PLAN_DATA];
    const uniqueMatches = Array.from(new Set(matches[bestPlan]));

    let response = `Based on your focus on ${uniqueMatches.slice(0, 3).join(", ")}, we've identified the optimal path:\n\n`;
    response += `**${planData.name}**\n${planData.description}`;

    return {
        text: response,
        plan: bestPlan,
        confidence: Math.min(99.9, confidence),
        matchedKeywords: uniqueMatches
    };
};
