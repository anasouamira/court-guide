import { useState } from "react";
import { matchService } from "../utils/chatbotLogic";

const Chatbot = ({ services = [], onNavigate }) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const matched = matchService(trimmed, services);

    setResponse(matched ? { type: "match", service: matched } : { type: "nomatch" });
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="w-full">
      {response && (
        <div className="mb-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
          {response.type === "match" ? (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">
                  {response.service.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-500">Service found</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {response.service.title}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate(response.service.id);
                  setResponse(null);
                }}
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
              >
                Open service
              </button>
            </div>
          ) : (
            <p className="text-sm text-gray-700">
              I couldn’t find a direct match. Please select a service card above.
            </p>
          )}

          <button
            onClick={() => setResponse(null)}
            className="mt-2 text-xs font-medium text-gray-500 hover:text-gray-700"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-xl">
        <label htmlFor="court-chatbot-input" className="sr-only">
          Ask a question about court services
        </label>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
            💬
          </div>

          <input
            id="court-chatbot-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about court services"
            className="h-10 min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            aria-label="Send question"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
