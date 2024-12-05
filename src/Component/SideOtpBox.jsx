import { useState } from "react";
export default function SideOtpBox({ reference, onDone, goback, onDesable }) {
  const [inputval, setInputVal] = useState("");
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (e.key == "Backspace") {
            goback();
            onDesable();
          }
        }}
        value={inputval}
        onChange={(e) => {
          const val = e.target.value;
          if (
            val == "1" ||
            val == "2" ||
            val == "3" ||
            val == "4" ||
            val == "5" ||
            val == "6" ||
            val == "7" ||
            val == "8" ||
            val == "9"
          ) {
            setInputVal(val);
            onDone();
          }
        }}
        ref={reference}
        type="text"
        className="m-1 w-12 h-16 rounded-xl bg-blue-600 outline-none text-white p-4"
      />
    </>
  );
}
