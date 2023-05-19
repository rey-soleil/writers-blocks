"use client";

import {
  ChatCompletionResponseMessage,
  ChatCompletionResponseMessageRoleEnum,
  CreateChatCompletionResponse,
} from "openai";
import { useEffect, useState } from "react";
import ChatHistory from "./ChatHistory";
import UserInput from "./UserInput";

export default function Messenger() {
  const [userMessage, setUserMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatCompletionResponseMessage[]>([]);

  async function fetchFirstMessage() {
    const response: CreateChatCompletionResponse = await fetch("/api/chat")
      .then((response) => response.json())
      .catch((error) => console.log(error));
    const message = response.choices[0].message!;
    return message;
  }

  useEffect(() => {
    fetchFirstMessage().then((message) => setMessages([message]));
  }, []);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessages((messages) => {
      messages.push({
        role: ChatCompletionResponseMessageRoleEnum.User,
        content: userMessage,
      });
      return messages;
    });
    setUserMessage("");
    // TODO: send message to server
  }

  return (
    <div className="outline w-4/6 md:w-1/2 min-h-[24rem] flex flex-col justify-between overflow-hidden">
      <ChatHistory messages={messages} setMessages={setMessages} />
      <UserInput
        userMessage={userMessage}
        setUserMessage={setUserMessage}
        onSubmit={onSubmit}
      />
    </div>
  );
}
