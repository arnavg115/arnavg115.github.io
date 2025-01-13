import { PropsWithChildren, useEffect, useState } from "react";

// import "../styles/Home.module.css";

export const Box = (props: PropsWithChildren) => {
  const target = "ls -a \n";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const tick = () => {
    setDone(text.length == target.length);
    setText(target.substring(0, text.length + 1));
  };
  useEffect(() => {
    let i: any;
    if (!done) {
      i = setInterval(() => {
        tick();
      }, 150);
    }

    return () => {
      clearInterval(i);
    };
  }, [text, done]);

  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg col-span-2 font-dot text-white p-10 box whitespace-pre-wrap sm:col-span-1`}
    >
      {props.children}
    </div>
  );
};
