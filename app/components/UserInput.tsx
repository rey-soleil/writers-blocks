"use client";

type UserInputProps = {
  userMessage: string;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function UserInput({
  userMessage,
  setUserMessage,
  onSubmit,
}: UserInputProps) {
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
