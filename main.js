// main.js (OpenAI API integration, site improvements)

// Securely load your API key (see deployment docs for environment variable setup)
const OPENAI_API_KEY = window?.env?.OPENAI_API_KEY || '';
const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

async function callOpenAI(prompt, schema) {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key missing. See deployment and env setup.');
  }
  const system = { role: 'system', content: 'You are a basketball training assistant for Hoopscope.' };
  const body = {
    model: 'gpt-4-turbo',
    messages: [system, { role: 'user', content: prompt }],
    ...(schema ? { response_format: { type: 'json_object' } } : {})
  };
  try {
    const response = await fetch(OPENAI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(body)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error?.message || 'API error');
    if (schema && result.choices[0].message.function_call?.arguments) {
      return JSON.parse(result.choices[0].message.function_call.arguments);
    } else {
      return result.choices[0].message.content;
    }
  } catch (err) {
    console.error('OpenAI Error:', err);
    throw err;
  }
}

// Attach event listeners, lazy loading, accessibility fixes, etc.
document.addEventListener('DOMContentLoaded', () => {
  // Add loading="lazy" to images
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  // ...rest of improved event listeners and AI handlers as outlined in changelog and repo...
});

// Export for Node/browser
if (typeof module !== 'undefined') module.exports = { callOpenAI };