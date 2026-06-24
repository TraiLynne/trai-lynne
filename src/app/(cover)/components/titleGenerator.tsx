"use client";

import { useEffect, useState } from "react";
import { codeFont } from "@/src/app/fonts";
import titles from "@/src/app/(cover)/data/titles";
import styles from "@/src/app/(cover)/styles/titleGen.module.css"

const TYPE_SPEED = 100;
const DELETE_SPEED = 50;
const HOLD_TIME = 1500;
const SWITCH_DELAY = 300;

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
        }, TYPE_SPEED);
      } else {

        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, HOLD_TIME);
      }
    }

    // DELETING PHASE
    else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            currentTitle.slice(0, displayText.length - 1)
          );
        }, DELETE_SPEED);
      } else {

        timeout = setTimeout(() => {
          setIsDeleting(false);


          setTitleIndex((prev) => {
            let next = prev;

            while (next === prev) {
              next = Math.floor(Math.random() * titles.length);
            }

            return next;
          });
        }, SWITCH_DELAY);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <h2 className={`${codeFont.className} ${styles.title}`}>
      {displayText || "\u00A0"}
    </h2>
  );
}