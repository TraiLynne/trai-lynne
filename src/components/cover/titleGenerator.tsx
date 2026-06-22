"use client";

import { useEffect, useState } from "react";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const titles = [
  "Software Engineer",
  "Site Reliability Engineer",
  "Full Stack Web Developer",
  "Lifelong Learner",
  "Geek",
];

export default function TitleGenerator() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    // TYPING PHASE
    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(
            currentTitle.slice(0, displayText.length + 1)
          );
        }, 100);
      } else {
        // pause when fully typed
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    }

    // DELETING PHASE
    else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            currentTitle.slice(0, displayText.length - 1)
          );
        }, 50);
      } else {
        // pause before switching title
        timeout = setTimeout(() => {
          setIsDeleting(false);

          // pick next random index (no immediate repeat)
          setTitleIndex((prev) => {
            let next = prev;

            while (next === prev) {
              next = Math.floor(Math.random() * titles.length);
            }

            return next;
          });
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <h2 className={firaCode.className}>
      {displayText || "\u00A0"}
    </h2>
  );
}