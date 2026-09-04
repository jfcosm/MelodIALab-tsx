import { Language } from '../../translations';

export interface TranslationResult {
  titles: Record<string, string>;
  descriptions: Record<string, string>;
  ctas: Record<string, string>;
}

const TARGET_LANGUAGES: Language[] = [
  'en', 'fr', 'it', 'de', 'ja', 'zh', 'ko', 'hi', 'gu', 'nl', 'ar'
];

const CTA_DICTIONARY: Record<string, Record<string, string>> = {
  explorar: {
    en: 'Explore', fr: 'Explorer', it: 'Esplora', de: 'Entdecken',
    ja: '探索する', zh: '探索', ko: '탐색', hi: 'अन्वेषण करें',
    gu: 'શોધો', nl: 'Ontdekken', ar: 'استكشف'
  },
  visitar: {
    en: 'Visit', fr: 'Visiter', it: 'Visita', de: 'Besuchen',
    ja: '訪問する', zh: '访问', ko: '방문', hi: 'विजिट करें',
    gu: 'મુલાકાત લો', nl: 'Bezoeken', ar: 'زيارة'
  },
  ver: {
    en: 'View', fr: 'Voir', it: 'Vedi', de: 'Ansehen',
    ja: '詳細を見る', zh: '查看', ko: '보기', hi: 'देखें',
    gu: 'જુઓ', nl: 'Bekijken', ar: 'عرض'
  },
  proximamente: {
    en: 'Soon', fr: 'Bientôt', it: 'Presto', de: 'Bald',
    ja: '近日公開', zh: '即将推出', ko: '곧 출시', hi: 'जल्द ही',
    gu: 'ટૂંક સમયમાં', nl: 'Binnenkort', ar: 'قريباً'
  }
};

/**
 * Traduce texto utilizando la API de Google Translate Web (gratuita / sin API key obligatoria)
 */
async function translateViaGoogleWeb(text: string, targetLang: string): Promise<string> {
  if (!text || !text.trim()) return '';
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (Array.isArray(data) && Array.isArray(data[0])) {
      return data[0].map((item: any) => item[0]).join('');
    }
    return text;
  } catch (err) {
    console.warn(`Translation error for ${targetLang}:`, err);
    return text;
  }
}

/**
 * Traduce texto utilizando la API de Gemini (Google AI) si se provee API Key
 */
async function translateViaGeminiAI(
  title: string,
  desc: string,
  cta: string,
  apiKey: string
): Promise<TranslationResult | null> {
  try {
    const prompt = `You are a professional multilingual translator for a high-tech audiovisual & software lab named MelodIALab.
Translate the following project details from Spanish into the following 11 languages:
Languages: en (English), fr (French), it (Italian), de (German), ja (Japanese), zh (Simplified Chinese), ko (Korean), hi (Hindi), gu (Gujarati), nl (Dutch), ar (Arabic).

Spanish source:
- Title: "${title}"
- Description: "${desc}"
- CTA button: "${cta}"

Output strictly a JSON object with this exact structure, with no markdown code fences:
{
  "titles": {
    "en": "...",
    "fr": "...",
    "it": "...",
    "de": "...",
    "ja": "...",
    "zh": "...",
    "ko": "...",
    "hi": "...",
    "gu": "...",
    "nl": "...",
    "ar": "..."
  },
  "descriptions": {
    "en": "...",
    "fr": "...",
    "it": "...",
    "de": "...",
    "ja": "...",
    "zh": "...",
    "ko": "...",
    "hi": "...",
    "gu": "...",
    "nl": "...",
    "ar": "..."
  },
  "ctas": {
    "en": "...",
    "fr": "...",
    "it": "...",
    "de": "...",
    "ja": "...",
    "zh": "...",
    "ko": "...",
    "hi": "...",
    "gu": "...",
    "nl": "...",
    "ar": "..."
  }
}`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      throw new Error(`Gemini API error: ${res.statusText}`);
    }

    const data = await res.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (rawText) {
      const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      if (parsed.titles && parsed.descriptions && parsed.ctas) {
        return {
          titles: { es: title, ...parsed.titles },
          descriptions: { es: desc, ...parsed.descriptions },
          ctas: { es: cta, ...parsed.ctas }
        };
      }
    }
    return null;
  } catch (error) {
    console.warn('Gemini translation failed, falling back to Google Translate web API:', error);
    return null;
  }
}

/**
 * Función principal para traducir un proyecto a los 11 idiomas
 */
export async function translatePortfolioItemWithAI(
  title: string,
  desc: string,
  cta: string,
  apiKey?: string,
  onProgress?: (current: number, total: number, langCode: string) => void
): Promise<TranslationResult> {
  const result: TranslationResult = {
    titles: { es: title },
    descriptions: { es: desc },
    ctas: { es: cta }
  };

  // 1. Intentar con Gemini si hay API Key disponible
  if (apiKey && apiKey.trim().length > 10) {
    const geminiRes = await translateViaGeminiAI(title, desc, cta, apiKey.trim());
    if (geminiRes) {
      return geminiRes;
    }
  }

  // 2. Fallback por red/Google Translate Web para cada idioma
  const normalizedCta = cta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const ctaMap = CTA_DICTIONARY[normalizedCta];

  for (let i = 0; i < TARGET_LANGUAGES.length; i++) {
    const lang = TARGET_LANGUAGES[i];
    if (onProgress) onProgress(i + 1, TARGET_LANGUAGES.length, lang);

    try {
      // Título: Por lo general los nombres propios/marcas se conservan, pero traducimos si tiene subtítulo
      const translatedTitle = await translateViaGoogleWeb(title, lang);
      result.titles[lang] = translatedTitle || title;

      // Descripción
      const translatedDesc = await translateViaGoogleWeb(desc, lang);
      result.descriptions[lang] = translatedDesc || desc;

      // CTA
      if (ctaMap && ctaMap[lang]) {
        result.ctas[lang] = ctaMap[lang];
      } else {
        const translatedCta = await translateViaGoogleWeb(cta, lang);
        result.ctas[lang] = translatedCta || cta;
      }
    } catch (e) {
      console.error(`Error translating into ${lang}:`, e);
      result.titles[lang] = title;
      result.descriptions[lang] = desc;
      result.ctas[lang] = cta;
    }
  }

  return result;
}
