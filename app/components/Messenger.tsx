import ChatHistory from "./ChatHistory";
import UserInput from "./UserInput";

export default function Messenger() {
  return (
    <div className="outline w-4/6 md:w-1/2 h-48 md:h-96">
      <ChatHistory />
      <UserInput />
    </div>
  );
}
