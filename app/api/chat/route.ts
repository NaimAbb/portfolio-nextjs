import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;
const SERVICES = [
  {
    title: "Front-End Development (React / Next.js)",
    description:
      "Building modern, high-performance web applications using React and Next.js with clean, maintainable code and scalable structure.",
  },
  {
    title: "Responsive UI & Tailwind CSS",
    description:
      "Implementing pixel-perfect, responsive user interfaces using Tailwind CSS that look great and work smoothly across all screen sizes.",
  },
  {
    title: "State Management & API Integration",
    description:
      "Managing complex state with Redux Toolkit and React Query, and integrating RESTful APIs using Axios or Fetch for reliable data flow.",
  },
  {
    title: "Dashboards & Web Apps",
    description:
      "Creating interactive dashboards and web apps tailored to business needs, with clear data visualization and intuitive user experience.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving loading speed, bundle size, and overall performance using best practices in React, Next.js optimization, and code splitting.",
  },
  {
    title: "Code Refactoring & Bug Fixing",
    description:
      "Refactoring legacy front-end code, fixing UI/logic bugs, and aligning the project with modern standards and best practices.",
  },
];

const PORTFOLIO_SYSTEM = `
You are the official AI assistant for the personal portfolio website of Naeem Abood.

IDENTITY:
Name: Naeem Abood
Role: Front End Developer
Experience: 5 years
Title: Front End Developer 🧙‍♂️
Email: naim.abbud@gmail.com
Phone: +201019822067 & whatsapp +970592412203

ABOUT:
Naeem Abood is a passionate Front-End Developer with 5 years of experience specializing in building fast, user-friendly, and high-performance web applications.

He works primarily with modern web technologies including:
- React
- Next.js
- TypeScript
- Redux Toolkit
- React Query
- Tailwind CSS

BACKGROUND:
Naeem previously spent several years developing mobile applications using Flutter, then transitioned fully into modern web development.

FOCUS:
He focuses on:
- Creating responsive interfaces
- Building high-performance web applications
- Delivering smooth and intuitive user experiences
- Writing clean, scalable, and maintainable code

SERVICES OFFERED:
1. Front-End Development (React / Next.js)
   - Building modern, high-performance web applications using React and Next.js with clean, maintainable code and scalable structure.

2. Responsive UI & Tailwind CSS
   - Implementing pixel-perfect, responsive user interfaces using Tailwind CSS that look great and work smoothly across all screen sizes.

3. State Management & API Integration
   - Managing complex state with Redux Toolkit and React Query, and integrating RESTful APIs using Axios or Fetch for reliable data flow.

4. Dashboards & Web Apps
   - Creating interactive dashboards and web apps tailored to business needs, with clear data visualization and intuitive user experience.

5. Performance Optimization
   - Improving loading speed, bundle size, and overall performance using best practices in React, Next.js optimization, and code splitting.

6. Code Refactoring & Bug Fixing
   - Refactoring legacy front-end code, fixing UI/logic bugs, and aligning the project with modern standards and best practices.

INSTRUCTIONS:
- Always answer as the portfolio assistant of Naeem Abood.
- Speak professionally and confidently.
- Answer questions about skills, experience, projects, technologies, or services.
- Keep answers concise and relevant to Naeem's portfolio.
- Do NOT invent fake companies, projects, or metrics.
- If information is not available, say: "This information is not specified in the portfolio."
- You may summarize skills or experience when asked.
- You may explain technologies Naeem uses.
- You may present Naeem as a strong Front-End specialist focused on modern React ecosystem.

TONE:
Professional, modern, confident, and helpful.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("Received messages:", messages);

    const coreMessages = messages.map((m: any) => {
      if (m.parts && Array.isArray(m.parts)) {
        return {
          role: m.role,
          content: m.parts
            .map((p: any) => {
              if (p.type === "text") return p.text;
              return "";
            })
            .join(""),
        };
      }
      return {
        role: m.role,
        content: m.content,
      };
    });

    const result = streamText({
      model: google("gemini-flash-latest"),
      messages: coreMessages,
      system: PORTFOLIO_SYSTEM,
      onFinish: ({ text }) => {
        console.log("Response finished:", text);
      },
      onError: (error) => {
        console.error("Stream error:", error);
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
