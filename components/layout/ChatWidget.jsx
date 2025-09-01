"use client"
import { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ✅ Fixed: removed TypeScript syntax
  const [tab, setTab] = useState("chat");

  return (
    <>
      <div
        className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white shadow-2xl rounded-xl p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-gray-800">BusRank Support</h2>
            <button
              className="text-gray-500 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          <div className="flex border-b mb-3">
            <button
              className={`flex-1 py-2 font-medium ${
                tab === "chat" ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
              }`}
              onClick={() => setTab("chat")}
            >
              Chat
            </button>
            <button
              className={`flex-1 py-2 font-medium ${
                tab === "help" ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
              }`}
              onClick={() => setTab("help")}
            >
              Help
            </button>
          </div>

          <div>
            {tab === "chat" ? (
              <div className="text-gray-700">
                <p>👋 Hi! How can we assist you today?</p>
                <textarea
                  placeholder="Type your message..."
                  className="w-full border rounded-lg p-2 mt-2"
                />
                <button className="w-full mt-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                  Send
                </button>
              </div>
            ) : (
              <div className="text-gray-700">
                <p>📖 Frequently Asked Questions:</p>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>How to book a car?</li>
                  <li>What documents are required?</li>
                  <li>How to contact support?</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
