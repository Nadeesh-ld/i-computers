import { useState } from "react";

export default function Testpage() {

  const [happy, setHappy] = useState(0);
  const [sad, setSad] = useState(0);
  const [angry, setAngry] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6">

      {/* Title */}
      <h1 className="text-2xl font-bold">Emoji Reaction</h1>

      {/* Display Box */}
      <div className="w-[300px] h-[300px] border-[6px] border-blue-500 flex flex-col items-center justify-center text-xl gap-2">
        <p>😊 Happy: {happy}</p>
        <p>😢 Sad: {sad}</p>
        <p>😡 Angry: {angry}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded text-xl"
          onClick={() => setHappy(happy + 1)}
        >
          😊
        </button>

        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded text-xl"
          onClick={() => setSad(sad + 1)}
        >
          😢
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded text-xl"
          onClick={() => setAngry(angry + 1)}
        >
          😡
        </button>
      </div>

    </div>
  );
}