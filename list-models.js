const fs = require("fs");
const path = require("path");

// Manually parse .env.local because dotenv might not be installed
try {
  const envPath = path.resolve(__dirname, ".env.local");
  const envContent = fs.readFileSync(envPath, "utf8");
  const match = envContent.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
  if (match && match[1]) {
    process.env.GOOGLE_GENERATIVE_AI_API_KEY = match[1].trim();
  }
} catch (e) {
  console.error("Error reading .env.local:", e.message);
}

async function listModels() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    return;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    console.log("Available models:");
    if (data.models) {
      data.models.forEach((m) => {
        // Check if it supports generateContent
        if (
          m.supportedGenerationMethods &&
          m.supportedGenerationMethods.includes("generateContent")
        ) {
          console.log(`- ${m.name}`);
        }
      });
    } else {
      console.log("No models found or structure unexpected:", data);
    }
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

listModels();
