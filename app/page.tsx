import Messenger from "./components/Messenger";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center pb-16">
      <h1 className="p-10 text-4xl font-bold">Writer&apos;s Blocks</h1>
      <Messenger />
    </main>
  );
}
