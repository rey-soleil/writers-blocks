"use client";

import {
  ChatCompletionResponseMessageRoleEnum,
  CreateChatCompletionResponse,
} from "openai";
import { useEffect, useState } from "react";

export default function ChatHistory() {
  const [messages, setMessages] = useState<CreateChatCompletionResponse[]>();

  async function fetchFirstMessage() {
    const message: CreateChatCompletionResponse = await fetch("/api/chat")
      .then((response) => response.json())
      .catch((error) => console.log(error));
    return message;
  }

  useEffect(() => {
    fetchFirstMessage().then((message) => setMessages([message]));
  }, []);

  return (
    <div>
      {messages?.map((message) => (
        <div key={message.id} className="m-4">
          {message.choices[0].message?.role ===
            ChatCompletionResponseMessageRoleEnum.Assistant && (
            <div className="text-left bg-slate-500 p-2 w-2/3 text-white rounded-sm">
              {message.choices[0].message.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
