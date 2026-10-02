'use client';

import { useEffect, useState } from 'react';

const copy = {
  en: {
    skip: 'Skip to content',
    name: 'NSS Blood Donor',
    label: 'Development preview',
    title: 'Helping donors and hospitals coordinate.',
    description: 'We are building a Tamil and English service for blood donor coordination in Tamil Nadu.',
    statusTitle: 'The service is being built',
    status: 'Registration, requests and staff coordination are not available yet. This preview does not accept personal or medical information.',
    boundary: 'Hospitals make the final decision about donation after their own assessment.',
    emergency: 'For an urgent medical need, contact your hospital or local emergency services directly.',
    language: 'Choose language',
  },
  ta: {
    skip: 'உள்ளடக்கத்திற்குச் செல்லவும்',
    name: 'NSS இரத்த தானம்',
    label: 'உருவாக்க முன்னோட்டம்',
    title: 'இரத்த தானம் செய்பவர்களையும் மருத்துவமனைகளையும் ஒருங்கிணைக்க உதவுகிறோம்.',
    description: 'தமிழ்நாட்டில் இரத்த தான ஒருங்கிணைப்பிற்காக தமிழ் மற்றும் ஆங்கிலத்தில் ஒரு சேவையை உருவாக்குகிறோம்.',
    statusTitle: 'சேவை உருவாக்கப்பட்டு வருகிறது',
    status: 'பதிவு, கோரிக்கைகள் மற்றும் பணியாளர் ஒருங்கிணைப்பு இன்னும் கிடைக்கவில்லை. இந்த முன்னோட்டம் தனிப்பட்ட அல்லது மருத்துவத் தகவல்களைப் பெறாது.',
    boundary: 'மருத்துவமனைகள் தங்கள் பரிசோதனைக்குப் பிறகு இரத்த தானம் குறித்த இறுதி முடிவை எடுக்கின்றன.',
    emergency: 'அவசர மருத்துவத் தேவைக்கு, உங்கள் மருத்துவமனையையோ உள்ளூர் அவசர சேவைகளையோ நேரடியாகத் தொடர்பு கொள்ளவும்.',
    language: 'மொழியைத் தேர்ந்தெடுக்கவும்',
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const text = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <a className="skip-link" href="#main">{text.skip}</a>
      <header>
        <span className="brand">{text.name}</span>
        <fieldset className="language-selector">
          <legend className="visually-hidden">{text.language}</legend>
          <button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>English</button>
          <button type="button" lang="ta" aria-pressed={language === 'ta'} onClick={() => setLanguage('ta')}>தமிழ்</button>
        </fieldset>
      </header>
      <main id="main" tabIndex={-1}>
        <p className="eyebrow">{text.label}</p>
        <h1>{text.title}</h1>
        <p className="intro">{text.description}</p>
        <section aria-labelledby="status-title" className="status-card">
          <h2 id="status-title">{text.statusTitle}</h2>
          <p>{text.status}</p>
        </section>
        <p>{text.boundary}</p>
        <p className="emergency">{text.emergency}</p>
      </main>
    </>
  );
}
