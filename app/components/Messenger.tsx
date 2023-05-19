"use client";

import { useState } from "react";
import ChatHistory from "./ChatHistory";
import UserInput from "./UserInput";

export default function Messenger() {
  const [userMessage, setUserMessage] = useState<string>("");

  return (
    <div className="outline w-4/6 md:w-1/2 min-h-[100px] md:h-96 flex flex-col justify-between">
      <ChatHistory />
      <UserInput userMessage={userMessage} setUserMessage={setUserMessage} />
    </div>
  );
}
