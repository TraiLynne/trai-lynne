import { Rock_Salt } from "next/font/google";
import { CSSProperties } from "react";

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"],
});



export default function About(){
    return (
        <div style={{textAlign: "center"}}>
            <h1 className={rockSalt.className} style={headerStyle} >Dear Reader</h1>
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