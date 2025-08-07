import { chatApiKey } from './api-config.js';

document.getElementById('food-wrapper').addEventListener('submit', async function(e) {
    e.preventDefault();
    const foodInput = document.getElementById('foodItem').value.trim();
    if (!foodInput) return;

    // Build the prompt for OpenAI
    const prompt = `Give me the nutritional values (calories, protein, carbs, fat) for: ${foodInput}. Respond in a short, clear list.`;

    // Call OpenAI API work in progress

    const data = await response.json();
    const nutritionText = data.choices?.[0]?.message?.content || "No data found.";

    // Create frosted glass widget
    const widget = document.createElement('div');
    widget.className = 'frosted-widget';
    widget.innerHTML = `<strong>${foodInput}</strong><br><pre>${nutritionText}</pre>`;

    document.getElementById('calorieItems').prepend(widget);
    e.target.reset();
});