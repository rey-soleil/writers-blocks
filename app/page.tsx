import Messenger from "./components/Messenger";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20">
      <h1 className="font-bold text-4xl p-10">Writer&apos;s Blocks</h1>
      <Messenger />
    </main>
  );
}
