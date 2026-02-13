const { google } = require("@ai-sdk/google");
const { generateText } = require("ai");
const fs = require("fs");
const path = require("path");

// Manually parse .env.local
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

async function verify() {
  try {
    const { text } = await generateText({
      model: google("gemini-2.0-flash"),
      prompt: "Hello, are you working?",
    });
    console.log("Verification success! Response:", text);
  } catch (error) {
    console.error("Verification failed:", error);
  }
}

verify();
