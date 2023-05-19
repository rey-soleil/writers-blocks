"use client";

import {
  ChatCompletionResponseMessage,
  ChatCompletionResponseMessageRoleEnum,
} from "openai";

type ChatHistoryProps = {
  messages: ChatCompletionResponseMessage[];
  setMessages: React.Dispatch<
    React.SetStateAction<ChatCompletionResponseMessage[]>
  >;
};

export default function ChatHistory({
  messages,
  setMessages,
}: ChatHistoryProps) {
  return (
    <div className="flex  max-h-96 flex-col overflow-y-scroll">
      {messages?.map((message, index) => (
        <div
          key={index}
          className={`flex w-full p-4 ${
            message?.role === ChatCompletionResponseMessageRoleEnum.User &&
            "justify-end"
          }`}
        >
          {message?.role ===
            ChatCompletionResponseMessageRoleEnum.Assistant && (
            <div className="w-max-2xl rounded-sm bg-slate-500 p-2 text-white">
              {message.content}
            </div>
          )}
          {message?.role === ChatCompletionResponseMessageRoleEnum.User && (
            <div className="w-max-2xl  rounded-sm bg-blue-500 p-2 text-white">
              {message.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
