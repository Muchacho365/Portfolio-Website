import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL;

const DATA_RESUME = `Simon Mezampeh
Address: Sekondi Takoradi
Phone: +233 55 061 4909
Email: mezampehsimon@gmail.com

Education:
- Software Engineering Student, Takoradi Technical University

Top Achievements & Projects:
- Built an airport website using HTML, CSS, and JavaScript.
- Developed this personal portfolio website using Next.js, React.js, and integrated a chatbot powered by Gemini AI.
- Achieved 5th place in a competitive hackathon.
- User Authentication System with SQL and phpMyAdmin
- Personal Website with HTML/CSS

Technical Proficiencies:
- Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Vite
- Backend: SQL, Python, C++
- Frameworks & Libraries: Next.js, React.js, Vite
- Tools: VS Code, Git, GitHub, Azure, Gemini AI

Career Goals:
- Excel in my studies and achieve top results at university.
- Join a forward-thinking tech company where I can grow and contribute.
- Secure a rewarding job in the tech industry.

Experience:
- Intern, Computer Hardware Company: OS Installation and PC Repairs

Challenges Overcome:
- Overcame financial barriers to paid courses by leveraging free resources like YouTube and self-study.

Favorite Programming Languages:
- Previously favored Python for its popularity, but now prefer JavaScript for its versatility, rich ecosystem, and ability to work on both frontend and backend (thanks to React and Node.js).

Teamwork & Collaboration:
- Value friendliness, adaptability, and consistency. I believe adapting to different personalities and working styles increases team productivity.

Hobbies & Interests:
- Enjoy gaming, football, K-dramas, and anime.

Proudest Moment:
- Unlocking my ability to understand how programs work as a student; looking forward to more developer milestones.

Preferred Company Culture:
- Thrive in environments with a sense of hospitality and support.

Learning Philosophy:
- Used to only watch tutorials, but now I practice everything I learn—hands-on experience is key.

Certifications & Awards:
- Hackathon certificate (5th place).

Open Source & Community:
- No major contributions yet, but I aspire to participate in programs like GSoC in the future.

Development Workflow & Tools:
- VS Code, Git, GitHub, and looking to add Visual Studio to my toolkit.

Learning Platforms:
- Udemy, edX, YouTube
- Educators: Mosh Hamedani, Andrei Neagoie, David Malan

Fun Fact:
- My favorite footballer is Cristiano Ronaldo.

Soft Skills:
- Friendly, leadership, adaptability.

Personal Quote:
- "Hard work beats talent when talent doesn’t work hard." - Cristiano Ronaldo
`;

export async function POST(request) {
    const { messages } = await request.json();
    const gemini = new Gemini({ apiKey });

    messages.unshift({
        role: "system",
        content: `You are PortfolioGPT, a friendly, engaging, and knowledgeable AI assistant for Simon Mezampeh's portfolio. Always answer questions based only on the resume provided below.
Your goals:
- Be detailed, helpful, and positive in your answers.
- Group related information and summarize where appropriate to avoid crowding.
- Use clear structure: bullet points, headings, and line breaks for readability. Add extra whitespace between sections if it helps.
- You have some flexibility to elaborate, rephrase, or organize the information in a way that is most helpful and attractive for the user, as long as you only use the details from the resume below (do not use global knowledge).
- Add a touch of personality and encouragement (emojis are welcome if they fit the context 🎉).
- If you don't know the answer, politely say so and encourage the user to ask something else.

Resume:
${DATA_RESUME}`,
    });

    const response = await together.chat.completions.create({
        model,
        messages,
        max_tokens: 256,
    });

    return NextResponse.json({
        message: response.choices[0].message.content,
    });
}
