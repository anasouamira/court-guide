import { useState } from "react";
import { matchService } from "../utils/chatbotLogic";

const Chatbot = ({ services = [], onNavigate }) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const matched = matchService(trimmed, services);

    setResponse(
      matched
        ? { type: "match", service: matched }
        : { type: "nomatch" }
    );

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 flex justify-center">

      {/* FLOATING PANEL */}
      <div className="w-full max-w-3xl">

        {/* RESPONSE */}
        {response && (
          <div className="mb-3 rounded-2xl bg-white/90 backdrop-blur border border-gray-200 shadow-xl px-4 py-4">
            
            {response.type === "match" ? (
              <div className="flex items-center justify-between gap-4">
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">
                    {response.service.icon}
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Service found
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {response.service.title}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onNavigate(response.service.id);
                    setResponse(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl active:scale-95 transition"
                >
                  Open →
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-600">
                I didn’t find a match. Please choose a service from above.
              </p>
            )}

            <button
              onClick={() => setResponse(null)}
              className="text-xs text-gray-400 hover:text-gray-600 mt-2"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* INPUT PANEL */}
        <div className="bg-white/90 backdrop-blur border border-gray-200 shadow-2xl rounded-2xl px-3 py-3">
          <div className="flex items-center gap-2">

            {/* ICON */}
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-lg">
              💬
            </div>

            {/* INPUT */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about court services..."
              className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* BUTTON */}
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 flex items-center justify-center transition active:scale-95"
            >
              ➤
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;