import { useEffect, useRef, useState } from "react";
import SideOtpBox from "./SideOtpBox";
import Head from "./Head";
// 1, 2, 3, 6, 10
export function Otp({ number }) {
  const ref = useRef(Array(number).fill(""));
  const [desabled, setDesabled] = useState(true);
  const [array, setArray] = useState([]);
  useEffect(() => {
    setDesabled(array.length != number);
  }, [array.length, number]);
  return (
    <main className="m-32 flex-column  justify-items-center">
      <Head />
      <div className=" ">
        {Array(number)
          .fill(1)
          .map((x, index) => (
            <SideOtpBox
              reference={(e) => (ref.current[index] = e)}
              key={index}
              onDone={() => {
                array.push(1);
                console.log(array.length);
                if (index + 1 != number) {
                  ref.current[index + 1].focus();
                }
                if (array.length == number) {
                  setDesabled((e) => (e = false));
                }
              }}
              goback={() => {
                const current = ref.current[index];
                const prevRef = ref.current[index - 1];
                const a = array.pop();

                if (index <= 0) {
                  if (current) {
                    current.value = "";
                  }
                }
                if (current && current.value == "") {
                  if (prevRef) {
                    prevRef.focus();
                  }
                } else {
                  current.value = "";
                  prevRef.focus();
                }
              }}
              onDesable={() => {
                console.log(array.length);
                setDesabled((c) => (c = true));
              }}
            />
          ))}
      </div>
      <div>
        <button
          className="p-4 bg-blue-200 rounded-xl"
          disabled={desabled}
          onClick={() => {
            console.log("clicked");
            console.log(array.length);
            console.log(number);
          }}
        >
          SignUp
        </button>
      </div>
    </main>
  );
}
