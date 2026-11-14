"use client";
import { useState, useRef, useEffect } from "react";

function getTimeString() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "How can I help you learn more about Simon and his Resume?",
      time: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // Set the initial assistant message's time on the client after hydration
  useEffect(() => {
    if (messages[0].time === "") {
      setMessages((msgs) => [
        { ...msgs[0], time: getTimeString() },
        ...msgs.slice(1),
      ]);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    let newMessages = [
      ...messages,
      { role: "user", content: messageInput, time: getTimeString() },
    ];
    setMessages(newMessages);
    setMessageInput("");
    setIsLoading(true);
    const apiMessage = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: newMessages.map(({ role, content }) => ({ role, content })),
      }),
    }).then((res) => res.json());
    setMessages([
      ...newMessages,
      { role: "assistant", content: apiMessage.message, time: getTimeString() },
    ]);
    setIsLoading(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <a id="top" href="#top" className="logo-holder">
          <div className="logo">S</div>
          <div className="logo-text">SimonsDevHub</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="mailto:mezampehsimon@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Simon Mezampeh
              </h1>
              <p>
                I'm a self-taught programmer and a Software Engineering student
                at Takoradi Technical University. I work with Python, C++, Java,
                PHP, and HTML/CSS, and I’m currently building a portfolio with
                an Azure-powered AI chatbot.
                <span>
                  I'm passionate about AI, web development, and hacking, and I
                  value continuous learning, adaptability, and staying humble.
                  Inspired by Cristiano Ronaldo’s mindset: “Hard work beats
                  talent when talent doesn’t work hard.” I bring that same
                  energy into every problem I solve.
                </span>
              </p>
              <div className="call-to-action">
                <a href="Simon Mezampeh Resume.pdf" className="button black">
                  View Resume
                </a>
                <a
                  href="mailto:mezampehsimon@gmail.com"
                  className="button white"
                >
                  {" "}
                  Contact Me{" "}
                </a>
              </div>
              <div className="social-links"></div>
              <a href="https://github.com/Mezampeh" target="_blank">
                <img src="images/github.png" alt="Github" width="48" />
              </a>
              <a href="https://linkedin.com/in/muchacho365" target="_blank">
                <img src="images/linkedin.png" alt="Linkedin" width="48" />
              </a>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="images/avatar2.png" alt="Simon Mezampeh" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="images/html.png" alt="HTML" width="128" />
              <img src="images/css.png" alt="CSS" width="128" />
              <img src="images/python.png" alt="PYTHON" width="128" />
              <img src="images/javascript.png" alt="JavaScript" width="128" />
              <img src="images/azure.png" alt="Azure" width="128" />
              <img src="images/nextjs.png" alt="Next js" width="128" />
              <img src="images/react.png" alt="React" width="128" />
              <img src="images/sass.png" alt="SASS" width="128" />
              <img src="images/vb.png" alt="VB Net" width="128" />
              <img src="images/vscode.png" alt="VS Code" width="128" />
              <img src="images/cpp.png" alt="CPP" width="128" />
              <img src="images/java.png" alt="Java" width="128" />
              <img src="images/html.png" alt="HTML" width="128" />
              <img src="images/css.png" alt="CSS" width="128" />
              <img src="images/python.png" alt="PYTHON" width="128" />
              <img src="images/javascript.png" alt="JavaScript" width="128" />
              <img src="images/azure.png" alt="Azure" width="128" />
              <img src="images/nextjs.png" alt="Next js" width="128" />
              <img src="images/react.png" alt="React" width="128" />
              <img src="images/sass.png" alt="SASS" width="128" />
              <img src="images/vb.png" alt="VB Net" width="128" />
              <img src="images/vscode.png" alt="VS Code" width="128" />
              <img src="images/cpp.png" alt="CPP" width="128" />
              <img src="images/java.png" alt="Java" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Java</li>
                <li>SQL</li>
                <li>PHP</li>
              </ul>
              <h3>Tools</h3>
              <ul>
                <li>VS Code</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                I’m a self-taught programmer and Software Engineering student at
                Takoradi Technical University, passionate about building
                real-world applications. My core skills are Python and C++, with
                strong abilities in HTML, CSS, and backend development. I’ve
                built a user authentication system with SQL and phpMyAdmin, a
                personal website with HTML/CSS, and I’m currently integrating an
                Azure-powered AI chatbot using Next.js to help visitors learn
                more about me interactively. I’ve also interned at a computer
                hardware company, gaining hands-on experience with OS
                installation and PC repairs. I learn through platforms like
                Udemy, edX, and YouTube, following educators such as Mosh
                Hamedani, Andrei Neagoie, and David Malan. I regularly use VS
                Code, Git, GitHub, and Azure in my workflow. My goal is to join
                a forward-thinking tech company where I can grow and contribute.
                I approach every challenge with the mindset Cristiano Ronaldo
                lives by: "Hard work beats talent when talent doesn’t work hard.
              </p>
              <p></p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="images/avatar2.png"
                    alt="First Workspace"
                    width="100%"
                  />
                  <figcaption>First Workspace</figcaption>
                </div>
              </figure>
              <h3>First Workspace</h3>
              <div>2019-2021</div>
              <p>Work Description</p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="images/avatar2.png"
                    alt="First Workspace"
                    width="100%"
                  />
                  <figcaption>First Workspace</figcaption>
                </div>
              </figure>
              <h3>First Workspace</h3>
              <div>2019-2021</div>
              <p>Work Description</p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="images/avatar2.png"
                    alt="First Workspace"
                    width="100%"
                  />
                  <figcaption>First Workspace</figcaption>
                </div>
              </figure>
              <h3>First Workspace</h3>
              <div>2019-2021</div>
              <p>Work Description</p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              1
            </a>
            <a href="#" className="bento-item">
              2
            </a>
            <a href="#" className="bento-item">
              3
            </a>
            <a href="#" className="bento-item">
              4
            </a>
            <a href="#" className="bento-item">
              5
            </a>
            <a href="#" className="bento-item">
              6
            </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>Talk to me</small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Together AI Chatbot</h3>
              <p>
                This chatbot was built to help you get to know me better — it
                understands my background, strengths, and mindset. You can ask
                it anything about my skills, experience, or what I’m currently
                focused on, and it’ll give you honest answers that reflect who I
                am
              </p>
              <p>
                You can also download my resume if you'd like to see more
                details. Right now, I'm actively looking for a remote internship
                where I can make a real impact, learn fast, and grow into the
                kind of developer any team would want. If you think I could be a
                good fit for your project or company, I’d be glad to hear from
                you.
              </p>
              <a href="Simon Mezampeh Resume.pdf" className="button black">
                Download Resume
              </a>
            </div>
            <div className="chat-box-modern">
              <div className="scroll-area-modern" ref={scrollRef}>
                <ul className="chat-log-modern">
                  {messages.map((message, index) => (
                    <li
                      key={index}
                      className={`chat-bubble ${message.role} ${
                        index === messages.length - 1 && isLoading
                          ? "loading"
                          : ""
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <span className="avatar">
                          <img
                            src="images/avatar2.png"
                            alt="AI"
                            className="avatar-img"
                          />
                        </span>
                      ) : (
                        <span className="avatar user-avatar">You</span>
                      )}
                      <div className="bubble-content">
                        <div className="bubble-message">{message.content}</div>
                        <div className="bubble-meta">
                          <span className="bubble-time">{message.time}</span>
                          <span className="bubble-role">
                            {message.role === "assistant" ? "AI" : "You"}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                  {isLoading && (
                    <li className="chat-bubble assistant loading">
                      <span className="avatar">
                        <img
                          src="images/avatar2.png"
                          alt="AI"
                          className="avatar-img"
                        />
                      </span>
                      <div className="bubble-content">
                        <div className="bubble-message">
                          <span className="dot-flashing"></span>
                        </div>
                        <div className="bubble-meta">
                          <span className="bubble-time">...</span>
                          <span className="bubble-role">AI</span>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message-modern">
                <input
                  type="text"
                  placeholder="Ask me anything about Simon..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  disabled={isLoading}
                  autoComplete="off"
                />
                <button
                  className="button black"
                  disabled={isLoading || !messageInput.trim()}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-simple">
        <nav className="footer-nav">
          <a href="#top">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#">Blog</a>
          <a href="mailto:mezampehsimon@gmail.com">Contact</a>
        </nav>
        <div className="footer-content">
          <span>
            © {new Date().getFullYear()} Simon Mezampeh. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
