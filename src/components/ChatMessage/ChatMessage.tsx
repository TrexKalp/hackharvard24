"use client"; // Add this line at the top of your file

import { useState } from "react";

const ChatMessage: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    // Example list of tuples (id, message)
    const messages: [string, string][] = [
        ["983142913", "Hi, how can I help you today?"],
        ["user1", "fewafef"],
        ["AI", "Sorry, I couldn't find any information in the documentation about that."]
    ];

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle message send logic
        console.log("Message sent:", message);
        setMessage(""); // Clear the input field after sending
    };

    return (
        <div
            className="h-screen overflow-hidden flex flex-col items-start justify-start"
            style={{ background: "#edf2f7", padding: '1rem' }}
        >
            {/* Heading */}
            <div className="flex flex-col space-y-1.5 mb-6">
                <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
                <p className="text-sm text-[#6b7280] leading-3">Powered by Mendable and Vercel</p>
            </div>

            {/* Messages */}
            <div className="flex flex-col space-y-4 w-full">
                {messages.map(([id, msg], index) => (
                    <div key={index} className={`flex gap-3 text-gray-600 text-sm ${id === "AI" ? "justify-start" : "justify-end"}`}>
                        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                            <div className="rounded-full bg-gray-100 border p-1">
                                {/* You can replace this with an appropriate icon or avatar */}
                                <svg
                                    stroke="none"
                                    fill="black"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    height="20"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                                    />
                                </svg>
                            </div>
                        </span>
                        <p className={`leading-relaxed ${id === "AI" ? "text-left" : "text-right"}`}>
                            <span className="block font-bold text-gray-700">{id === "AI" ? "AI" : "You"}</span>
                            {msg}
                        </p>
                    </div>
                ))}
            </div>

            {/* Input box */}
            <form className="flex items-center justify-start w-full mt-4" onSubmit={handleSendMessage}>
                <input
                    className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2 ml-2"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatMessage;
