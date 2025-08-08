import { chatApiKey } from './api-config.js';

const form = document.getElementById('food-wrapper');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const foodInput = document.getElementById('foodItem').value.trim();
    if (!foodInput) return;

    // Disable button to prevent rapid submissions
    submitButton.disabled = true;

    const prompt = `Give me the nutritional values (calories, protein, carbs, fat) for: ${foodInput}. Respond in a short, clear list.`;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${chatApiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();
        console.log(data);

        let nutritionText;
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            nutritionText = data.choices[0].message.content;
        } else if (data.error && data.error.message) {
            nutritionText = "API Error: " + data.error.message;
        } else {
            nutritionText = "No data found.";
        }

        const widget = document.createElement('div');
        widget.className = 'frosted-widget';
        widget.innerHTML = `<strong>${foodInput}</strong><br><pre>${nutritionText}</pre>`;

        document.getElementById('calorieItems').prepend(widget);
        e.target.reset();
    } finally {
        // Re-enable button
        submitButton.disabled = false;
    }
});