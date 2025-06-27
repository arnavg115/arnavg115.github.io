import { useEffect, useState } from "react";

// import "../styles/Home.module.css";

export const Nav = () => {
  const target = "ls -a links/ \n";
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
      }, 100);
    }

    return () => {
      clearInterval(i);
    };
  }, [text, done]);

  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg col-span-2 sm:col-span-1 font-dot text-white  p-10 box whitespace-pre-wrap`}
    >
      <h1 className={`${!done ? "txt" : "other"} font-mono`}>$ {text}</h1>
      {done ? (
        <ul className="text-blue-400">
          <li>
            <a href="https://github.com/arnavg115" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="/cv.pdf" target="_blank">
              CV
            </a>
          </li>
          <li>
            <a href="https://x.com/Gorrilla115" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://scholar.google.com/citations?user=yqf01RMAAAAJ&hl=en"
              target="_blank"
            >
              Scholar
            </a>
          </li>
          <li>
            <a href="https://gorrilla1115.bsky.social" target="_blank">
              Bsky
            </a>
          </li>
          <li>
            <a href="mailto:agurha@ucsd.edu" target="_blank">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arnav-gurha-4801b11b1"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
