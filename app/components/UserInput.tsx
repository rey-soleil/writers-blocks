"use client";

export default function UserInput() {
  return (
    // TODO: wrap in <form> element
    <div className="outline flex flex-row items-center space-x-4 p-4">
      <textarea className="w-full outline"></textarea>
      <button className="bg-slate-200 h-fit p-2">submit</button>
    </div>
  );
}
