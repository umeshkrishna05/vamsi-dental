import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import "./Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Welcome to Vamsi Dental AI. I can help with appointments, dental symptoms, or clinic info. How are you today?" }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);
  

 const handleSend = async () => {
  if (!input.trim()) return;
  

  const userMsg = { role: "user", text: input };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");
  setIsTyping(true);
  

  try {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    console.log("AI Response:", data);

    setMessages((prev) => [
      ...prev,
     { role: "bot", text: data.reply || "No response from AI" }
    ]);

    setMessages((prev) => [
      ...prev,
      { role: "bot", text: data.reply }
    ]);

  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Server error. Please try again." }
    ]);
  }

  setIsTyping(false);
};


  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="bot-info">
              <div className="status-dot"></div>
              <h4>Vamsi Dental AI</h4>
            </div>
            <button onClick={() => setIsOpen(false)}><FaTimes /></button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role}`}>
                <div className="msg-content">{msg.text}</div>
              </div>
            ))}
            {isTyping && <div className="typing-indicator"><span></span><span></span><span></span></div>}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            <input 
              placeholder="Ask about dental pain, braces..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="send-btn"><FaPaperPlane /></button>
          </div>
        </div>
      )}

      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>
    </div>
  );
}