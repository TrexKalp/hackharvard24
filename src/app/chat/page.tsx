"use client";
import React, { useState, useEffect, useRef } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

// Dummy list of users with job positions and locations
const users = [
  { id: 1, name: "Anon456", position: "Cardiologist", location: "Houston, TX" },
  {
    id: 2,
    name: "MedUser789",
    position: "Neurologist",
    location: "New York, NY",
  },
  {
    id: 3,
    name: "RxDoc101",
    position: "Orthopedic Surgeon",
    location: "Los Angeles, CA",
  },
  {
    id: 4,
    name: "TreatPro303",
    position: "Pulmonologist",
    location: "Chicago, IL",
  },
  {
    id: 5,
    name: "Clinician202",
    position: "Oncologist",
    location: "Miami, FL",
  },
];

// Initial dummy chat history (some users may not have messages)
const initialChats = {
  1: [
    {
      sender: "RxMedic123",
      message:
        "A patient with Type 2 diabetes is struggling with glucose control despite being on metformin and insulin. Any recommendations?",
    },
  ],
  2: [
    {
      sender: "PediCareDoc456",
      message:
        "A 6-year-old patient presents with recurrent ear infections despite multiple rounds of antibiotics. Looking for alternative management options.",
    },
  ],
  3: [
    {
      sender: "OrthoExpert789",
      message:
        "I'm seeing recurrent fractures in a patient despite bisphosphonate therapy. Any suggestions on alternative treatments?",
    },
  ],
  4: [
    {
      sender: "CardioDoc012",
      message:
        "I have a patient with heart failure who continues to show fluid retention despite being on a high dose of diuretics.",
    },
  ],
  5: [
    {
      sender: "OncoTherapist345",
      message:
        "A patient with metastatic cancer is experiencing severe nausea from chemotherapy. I'm considering switching to a different antiemetic.",
    },
  ],
};

const DummyChatPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [chats, setChats] = useState<{
    [key: number]: { sender: string; message: string }[];
  }>(initialChats);
  const [messageInput, setMessageInput] = useState<string>("");

  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref to the chat container

  const handleUserClick = (userId: number) => {
    setSelectedUser(userId);
  };

  const handleSendMessage = () => {
    if (!selectedUser || messageInput.trim() === "") return;

    const newMessage = { sender: "You", message: messageInput };
    const updatedChats = {
      ...chats,
      [selectedUser]: [...(chats[selectedUser] || []), newMessage],
    };

    setChats(updatedChats);
    setMessageInput("");

    // Simulate a dummy response after sending a message
    setTimeout(() => {
      const dummyResponses = [
        "Have you considered increasing the patient's fluid intake for better hydration?",
        "Switching to a newer class of drugs may reduce side effects.",
        "In this case, adjusting the dosage could yield better results.",
        "Consider recommending physical therapy to manage the pain.",
        "Using an anti-inflammatory regimen might alleviate symptoms.",
      ];

      const dummyResponse = {
        sender: users.find((u) => u.id === selectedUser)?.name || "Unknown",
        message:
          dummyResponses[Math.floor(Math.random() * dummyResponses.length)],
      };
      const updatedChatsWithReply = {
        ...updatedChats,
        [selectedUser]: [...updatedChats[selectedUser], dummyResponse],
      };
      setChats(updatedChatsWithReply);
    }, 1000);
  };

  // Scroll to bottom when new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]); // This effect will run when `chats` changes

  const selectedUserProfile = users.find((user) => user.id === selectedUser);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Anonymous Medical Chat" />
      <div className="flex h-[600px] max-h-[600px] dark:bg-gray-900">
        {/* User List with Profile Box */}
        <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4 border-r flex flex-col dark:border-gray-700">
          {/* Profile Box */}
          {selectedUserProfile ? (
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 p-3 mb-4 rounded-lg shadow-md">
              <img
                src="/images/user/blue-icon.png" // Assuming you have this image in your public folder
                alt="Anonymous profile"
                className="w-16 h-16 rounded-full mb-3"
              />
              <div className="text-center text-gray-800 dark:text-gray-200">
                <p className="text-sm font-bold">{selectedUserProfile.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedUserProfile.position}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedUserProfile.location}
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-4 text-gray-800 dark:text-gray-200">
              <h2 className="font-bold">Select a User to Start Chatting</h2>
            </div>
          )}

          {/* User List */}
          <h2 className="font-bold my-4 text-gray-800 dark:text-gray-200">
            Network:
          </h2>
          <ul className="flex-1 overflow-y-auto text-gray-800 dark:text-gray-200">
            {users.map((user) => (
              <li
                key={user.id}
                className={`p-2 cursor-pointer ${
                  selectedUser === user.id
                    ? "bg-blue-200 dark:bg-blue-700"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleUserClick(user.id)}
              >
                {user.name}
              </li>
            ))}
          </ul>
          {/* Add New Chat Button */}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => setSelectedUser(null)}
          >
            Start New Chat
          </button>
        </div>

        {/* Chat Area */}
        <div className="w-3/4 flex flex-col px-4">
          {/* Chat History */}
          <div
            className="flex-1 bg-white dark:bg-gray-700 p-4 border rounded-lg overflow-y-auto h-[600px] max-h-[600px] dark:border-gray-600"
            ref={chatContainerRef} // Attach the ref to the chat history container
          >
            {selectedUserProfile ? (
              <>
                <h3 className="font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {selectedUserProfile?.name}'s Chat
                </h3>
                <div className="space-y-4">
                  {selectedUser && chats[selectedUser]?.length ? (
                    chats[selectedUser].map((chat, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          chat.sender === "You"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[60%] p-2 rounded-lg relative ${
                            chat.sender === "You"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100"
                          }`}
                          style={{
                            borderRadius: "20px",
                            padding: "10px 20px",
                            position: "relative",
                          }}
                        >
                          <strong>{chat.sender}</strong>: {chat.message}
                          {/* Speech bubble pointer */}
                          <div
                            className={`absolute w-0 h-0 border-t-8 border-b-8 ${
                              chat.sender === "You"
                                ? "border-l-[10px] border-l-blue-500 right-[-8px] top-[10px]"
                                : "border-r-[10px] border-r-gray-200 dark:border-r-gray-600 left-[-8px] top-[10px]"
                            } border-transparent`}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-800 dark:text-gray-200">
                      No messages yet. Start the conversation!
                    </p>
                  )}
                </div>
              </>
            ) : (
              <p className="text-gray-800 dark:text-gray-200">
                Select a user to view or start a chat.
              </p>
            )}
          </div>

          {/* Message Input */}
          {selectedUser && (
            <div className="mt-4 flex gap-4 items-center">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white dark:border-gray-500"
                placeholder="Type your message..."
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DummyChatPage;
