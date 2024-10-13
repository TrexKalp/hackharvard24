"use client";

import React, { useState } from 'react';

const currentUser = "657169285"; // Replace with actual current user ID

// List of names
const names = [
  "217515329",
  "747193156",
  "098161758",
  "147591275",
];

const avatarSources = [
  "/images/user/blue-icon.png",
  "/images/user/red-icon.png",
  "/images/user/green-icon.png",
];

const avatarsDict = {};

for (let i = 0; i < names.length; i++) {
  const avatarIndex = i % avatarSources.length;
  avatarsDict[names[i]] = avatarSources[avatarIndex];
}
avatarsDict[currentUser] = "/images/user/gray-icon.png";

// Message data structure
const initialMessages = {
  "217515329": [
    ["217515329", "Given the patient's limited range of motion and persistent pain, I recommend we move forward with surgery."],
  ],
  "747193156": [
    ["747193156", "For this fracture, I'd recommend conservative management with a cast; surgery seems unnecessary."],
  ],
  "098161758": [
    ["098161758", "Their knee osteoarthritis is advancing rapidly; a total knee replacement might be the best option."],
  ],
  "147591275": [
    ["147591275", "The ACL tear looks pretty clean—arthroscopic surgery should give him a solid recovery window."],
  ],
  "981987351": [
    ["981987351", "Or we could try hyaluronic acid injections first to see if it delays surgery for a bit longer."],
  ],
};

const QuickChat: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState("217515329");
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages); // Use state to manage messages

  // Filter messages for the current and selected user
  const filteredMessages = Object.entries(messages).flatMap(([senderId, msgList]) =>
      msgList.filter(([sender]) => (sender === currentUser && senderId === selectedUser) || sender === selectedUser)
  );

  // Function to send a message
  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessages = { ...messages }; // Create a new copy of messages
      if (!newMessages[selectedUser]) {
        newMessages[selectedUser] = [];
      }
      newMessages[selectedUser].push([currentUser, inputMessage]);
      setMessages(newMessages); // Update state
      setInputMessage(""); // Clear the input
    }
  };

  // Function to handle key press (Enter)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage(); // Trigger sendMessage on Enter key press
    }
  };

  return (
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-hidden">
          {/* Adjusted the height and added max-h-90vh to limit sidebar height */}
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 max-h-[90vh] overflow-y-auto">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div className="ml-2 font-bold text-2xl">QuickChat</div>
            </div>
            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4">
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                    src={avatarsDict[selectedUser]}
                    alt="Avatar"
                    className="h-full w-full"
                />
              </div>
              <div className="text-sm font-semibold mt-2">{selectedUser}</div>
              <div className="text-xs text-gray-500">Orthopedic Surgeon, MD</div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span
                    className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">{names.length}</span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {names.map((name) => (
                    <button key={name} className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                            onClick={() => setSelectedUser(name)}>
                      <div className="flex items-center justify-center h-8 w-8 rounded-full">
                        <img
                            src={avatarsDict[name]}
                            alt="Avatar"
                            className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="ml-2 text-sm font-semibold">{name}</div>
                    </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-2">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    {/* Render filtered messages */}
                    {filteredMessages.map(([sender, message], idx) => (
                        <div key={idx}
                             className={`col-start-${sender === currentUser ? "1" : "6"} col-end-13 p-3 rounded-lg`}>
                          <div
                              className={`flex items-center justify-${sender === currentUser ? "start flex-row-reverse" : "start"}`}>
                            <div className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                              <img
                                  src={avatarsDict[sender]}
                                  alt="Avatar"
                                  className="h-full w-full rounded-full"
                              />
                            </div>
                            <div
                                className={`relative ${sender === currentUser ? "mr-3" : "ml-3"} text-sm py-2 px-4 shadow rounded-xl`}>
                              <div>{message}</div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Input area */}
              <div className="relative flex flex-row items-center h-16 border-t border-gray-300 mt-2">
                <input
                    type="text"
                    placeholder="Write a message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown} // Trigger message sending on key press
                    className="flex-1 h-10 border-0 outline-none rounded-xl px-4"
                />
                <button
                    className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-indigo-300 transition duration-150 ease-in"
                    onClick={sendMessage}
                >
                  <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default QuickChat;