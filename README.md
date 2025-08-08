# Calorie AI Tracker

A modern web app that uses AI (ChatGPT API or any of your choosing) to estimate nutritional values for foods you enter.  
Just type something like `300g of rice` and get a frosted-glass widget with calories, protein, carbs, and fat!

![ezgif-76ebe88359f7e0](https://github.com/user-attachments/assets/5bfd3711-a9fa-4fc7-bb6b-ae4037a4fd3f)


---

## Features

- ✨ AI-powered nutrition lookup (OpenAI GPT-3.5 Turbo)
- 🧊 Beautiful frosted glass widgets for each entry
- 🎨 Responsive, modern UI with custom CSS
- 🔒 Prevents rapid submissions to respect API limits

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/CalorieAITracker.git
cd CalorieAITracker
```

### 2. Install dependencies

No dependencies needed for the frontend.  
If you want to run a backend proxy for security, see [Security Note](#security-note).

### 3. Set up your OpenAI API key

- Create a file called `api-config.js` in the root directory:
    ```js
    export const chatApiKey = "YOUR_OPENAI_API_KEY";
    ```

### 4. Run locally

Just open `index.html` in your browser.

---

## Usage

1. Enter a food description (e.g., `2 eggs and 100g spinach`).
2. Click the paper plane button.
3. See the nutritional breakdown appear in a frosted glass widget!

---

## Customization

- Edit `style.css` to change the look and feel.
- The frosted glass effect is controlled by the `.frosted-widget` class.
- You can adjust the prompt in `script.js` to change how the AI responds.

---


## License

MIT

---

## Credits

- [OpenAI API](https://platform.openai.com/)
- [Google Fonts](https://fonts.google.com/)
