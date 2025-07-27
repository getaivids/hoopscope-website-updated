// openai-service.js: All OpenAI integration logic
// API key securely managed server-side (e.g., process.env.OPENAI_API_KEY)

export async function getWorkoutPlanAI(prompt) {
  try {
    const response = await fetch('/api/openai/workout', { // No direct key in client
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    if (!response.ok) throw new Error('API call failed');
    return await response.json();
  } catch (error) {
    handleAPIErrors(error);
  }
}

export async function getArticleSummaryAI(article, userPrompt) {
  try {
    const response = await fetch('/api/openai/article', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ article, userPrompt })
    });
    if (!response.ok) throw new Error('API call failed.');
    return await response.json();
  } catch (error) {
    handleAPIErrors(error);
  }
}

export function handleAPIErrors(error) {
  // Optionally show error to user, log for analytics
  alert('Sorry, a problem occurred: ' + error.message);
  console.error('OpenAI API error:', error);
}
