"use client";

import {
  ChatCompletionResponseMessageRoleEnum,
  CreateChatCompletionResponse,
} from "openai";

type ChatHistoryProps = {
  messages: CreateChatCompletionResponse[];
  setMessages: React.Dispatch<
    React.SetStateAction<CreateChatCompletionResponse[]>
  >;
};

export default function ChatHistory({
  messages,
  setMessages,
}: ChatHistoryProps) {
  return (
    <div className="overflow-y-scroll">
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
