"use client";

import { useState, FormEvent } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text:
        "Hi 👋 I’m the RainClean Assistant. I can help with services, price ranges and booking a clean. Tell me your postcode and what you need cleaned.",
    },
  ]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMessage: Message = { from: "user", text: input.trim() };
    const updatedMessages = [...messages, userMessage];

    // update chat immediately
    setMessages(updatedMessages);
    setInput("");
    setIsThinking(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      const botMessage: Message = { from: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        from: "bot",
        text:
          "Sorry, there was a problem talking to RainClean support. Please try again, or use the Contact page / WhatsApp link.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-sky-700 text-white px-4 py-3 rounded-full shadow-lg text-sm font-semibold"
      >
        Chat with RainClean 💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden border border-sky-300 text-[14px]">
      {/* Header */}
      <div className="bg-sky-800 text-white px-4 py-3 flex justify-between items-center">
        <span className="font-semibold">RainClean Assistant</span>
        <button onClick={() => setIsOpen(false)} className="text-xs font-bold">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 flex flex-col gap-3 p-4 max-h-80 overflow-y-auto bg-slate-100">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              msg.from === "user"
                ? "self-end bg-sky-700 text-white px-3 py-2 rounded-lg shadow max-w-[80%] leading-relaxed"
                : "self-start bg-white text-slate-900 px-3 py-2 rounded-lg shadow max-w-[80%] leading-relaxed"
            }
          >
            {msg.text}
          </div>
        ))}

        {isThinking && (
          <div className="self-start bg-white text-slate-500 px-3 py-2 rounded-lg shadow max-w-[70%] text-xs italic">
            RainClean Assistant is thinking…
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="border-t border-slate-200 p-3 flex gap-2 bg-white"
      >
        <input
          className="flex-1 border border-slate-300 rounded px-3 py-2 text-[14px] font-semibold text-slate-900 placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          placeholder="Type a message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={isThinking}
          className="bg-sky-700 disabled:bg-sky-400 text-white text-[14px] px-4 py-2 rounded font-semibold"
        >
          {isThinking ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}
