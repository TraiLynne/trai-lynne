import { writtenFont } from "../../fonts";
import styles from "./about.module.css";

export default function About() {
  return (
    <div>
      <h1 className={`${writtenFont.className} ${styles.header}`}>
        Dear Reader
      </h1>

      <p className={styles.paragraph}>
        Welcome to the World Wide Web! While I assume you’re not new here, I’m
        glad you’ve found your way to my little corner of it.
      </p>

      <p className={`${writtenFont.className} ${styles.header}`}>
        I’m Trai Lynne Compton!
      </p>

      <p className={styles.paragraph}>
        I’m a <span className={styles.highlight}>lifelong learner</span> who
        builds reliable, accessible software with{" "}
        <span className={styles.highlight}>human impact</span> in mind. My
        curiosity began with MySpace, and it continues through every language,
        system, and problem I encounter.
      </p>

      <p className={styles.paragraph}>
        I’m a{" "}
        <span className={styles.underline}>
          full-stack software and site reliability engineer
        </span>
        . In other words, I build software and websites—and help keep them up
        and running. I love software because of its reach: one useful tool can{" "}
        <span className={styles.highlight}>make someone’s life easier</span>{" "}
        from almost anywhere in the world.
      </p>

      <p className={styles.paragraph}>
        That possibility is what drives me. Metrics can tell part of the story,
        but I’m most interested in the people behind them. Whether it’s an end
        user or another engineer, I want my work to leave someone’s day a little
        easier than I found it.
      </p>

      <p className={styles.paragraph}>
        My journey began in middle school, when a computer class introduced me
        to <span className={styles.underline}>HTML, CSS, and JavaScript</span>.
        I would go home, experiment with what I had learned, and then build—and
        rebuild—my MySpace profile. It became my{" "}
        <span className={styles.highlight}>first playground on the web</span>.
      </p>

      <p className={styles.paragraph}>
        Later, I attended two coding bootcamps and went all in on my coding
        adventure.{" "}
        <span className={styles.underline}>
          Ruby was my first programming language
        </span>
        , and I still speak it at home sometimes. These days, I’m much{" "}
        <span className={styles.underline}>more fluent in JavaScript</span>.
        I’ve also begun{" "}
        <span className={styles.underline}>learning Python</span> through my
        work experience and computer science studies.
      </p>

      <p className={styles.paragraph}>
        Since then, I’ve honed my skills at places like CureMint, Charter
        Communications, and Cisco Systems, with every role giving me something
        new to learn. You’ll soon be able to find more of that story on my
        résumé.
      </p>

      <p className={styles.paragraph}>
        I’m always looking for ways to master my craft, both on and off the
        clock.{" "}
        <span className={`${styles.underline} ${styles.highlight}`}>
          My tech icons are Shuri of Wakanda and Oracle of Gotham
        </span>{" "}
        —two brilliant problem-solvers who remind me just how much more there is
        to learn.
      </p>

      <p className={styles.paragraph}>
        As I begin my next chapter, I’m looking for opportunities to build
        dependable software, strengthen the systems behind it, and discover
        better ways to solve{" "}
        <span className={styles.highlight}>meaningful problems</span>.
      </p>

      <p className={writtenFont.className} style={{ textAlign: "center" }}>
        Thanks for stopping by my corner of the web!
      </p>

      <p className={writtenFont.className} style={{ textAlign: "center" }}>
        —Trai
      </p>
    </div>
  );
}
