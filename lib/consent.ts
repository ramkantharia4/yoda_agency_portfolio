
/**
 * YodaDayo Agency - Consent Management System
 * GDPR Compliant
 */

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

const CONSENT_KEY = 'agency_consent';
const EXPIRY_DAYS = 365;

export type ConsentType = 'granted' | 'denied' | 'none';

export const getConsent = (): ConsentType => {
    if (typeof window === 'undefined') return 'none';

    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) return 'none';

    try {
        const { status, expires } = JSON.parse(saved);
        if (new Date().getTime() > expires) {
            localStorage.removeItem(CONSENT_KEY);
            return 'none';
        }
        return status;
    } catch (e) {
        return 'none';
    }
};

export const setConsent = (status: 'granted' | 'denied') => {
    const expires = new Date().getTime() + EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ status, expires }));

    if (status === 'granted') {
        executeTrackingScripts();
    }
};

/**
 * Placeholder for Meta Pixel and Google Analytics
 * These only run if consent is 'granted'
 */
export const executeTrackingScripts = () => {
    if (typeof window === 'undefined' || getConsent() !== 'granted') return;

    console.log('--- TRACKING SCRIPTS EXECUTED: GA4 (G-MDF8KMGEJ4) ---');

    // Google Analytics GA4 Integration
    const GA_ID = 'G-MDF8KMGEJ4';

    // 1. Load the script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // 2. Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); }
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
        page_path: window.location.pathname,
    });
};

export const resetConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
};
