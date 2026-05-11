import { useEffect, useState } from "react";

export function useTypewriter(words: string[], typeSpeed = 90, deleteSpeed = 50, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    let timeout: number;

    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      timeout = window.setTimeout(() => {}, 200);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((t) =>
            deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
