"use client";

type UserInputProps = {
  userMessage: string;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function UserInput({
  userMessage,
  setUserMessage,
}: UserInputProps) {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send message to server
  }

  return (
    <form
      className="outline flex flex-row items-center space-x-4 p-4"
      onSubmit={onSubmit}
    >
      <textarea
        className="w-full outline"
        value={userMessage}
        onChange={({ target }) => setUserMessage(target.value)}
      ></textarea>
      <input type="submit" value="submit" className="bg-slate-200 h-fit p-2" />
    </form>
  );
}
