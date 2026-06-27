import { CSSProperties } from "react";
import { writtenFont } from "../../fonts";



export default function Projects() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={writtenFont.className} style={headerStyle} >Projects</h1>
      <p>Stay Tuned!</p>
      <p>There is so much more on the way!</p>
    </div>
  )
}

const headerStyle: CSSProperties = {
  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
  fontWeight: "bold",
  margin: 0,
  padding: "1rem"
}