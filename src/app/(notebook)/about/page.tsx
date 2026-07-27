import { CSSProperties } from "react";
import { writtenFont } from "../../fonts";

export default function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={writtenFont.className} style={headerStyle}>
        Dear Reader
      </h1>

      <p>
        Welcome to the World Wide Web! While I assume you’re not new here, I’m
        glad you’ve found your way to my little corner of it.
      </p>

      <p>I’m Trai Lynne Compton!</p>

      <p>
        I’m a lifelong learner who builds reliable, accessible software with
        human impact in mind. My curiosity began with MySpace, and it continues
        through every language, system, and problem I encounter.
      </p>

      <p>
        I’m a full-stack software and site reliability engineer. In other words,
        I build software and websites—and help keep them up and running. I love
        software because of its reach: one useful tool can make someone’s life
        easier from almost anywhere in the world.
      </p>

      <p>
        That possibility is what drives me. Metrics can tell part of the story,
        but I’m most interested in the people behind them. Whether it’s an end
        user or another engineer, I want my work to leave someone’s day a little
        easier than I found it.
      </p>

      <p>
        My journey began in middle school, when a computer class introduced me
        to HTML, CSS, and JavaScript. I would go home, experiment with what I
        had learned, and then build—and rebuild—my MySpace profile. It became my
        first playground on the web.
      </p>

      <p>
        Later, I attended two coding bootcamps and went all in on my coding
        adventure. Ruby was my first programming language, and I still speak it
        at home sometimes. These days, I’m much more fluent in JavaScript. I’ve
        also begun learning Python through my work experience and computer
        science studies.
      </p>

      <p>
        Since then, I’ve honed my skills at places like CureMint, Charter
        Communications, and Cisco Systems, with every role giving me something
        new to learn. You’ll soon be able to find more of that story on my
        résumé.
      </p>

      <p>
        I’m always looking for ways to master my craft, both on and off the
        clock. My tech icons are Shuri of Wakanda and Oracle of Gotham—two
        brilliant problem-solvers who remind me just how much more there is to
        learn.
      </p>

      <p>
        As I begin my next chapter, I’m looking for opportunities to build
        dependable software, strengthen the systems behind it, and discover
        better ways to solve meaningful problems.
      </p>

      <p>Thanks for stopping by my corner of the web!</p>

      <p>—Trai</p>
    </div>
  );
}

const headerStyle: CSSProperties = {
  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
  fontWeight: "bold",
  margin: 0,
  padding: "1rem",
};
