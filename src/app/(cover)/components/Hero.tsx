import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import { CSSProperties } from "react";

export default function Hero() {
    return (
        <div style={containerStyle}>
            <div style={logoWrapperStyle}>
                <Image fill src={Logo} alt="Logo" style={{objectFit: "contain"}} />
            </div>
        </div>
    )
}

const containerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const logoWrapperStyle: CSSProperties = {
    position: "relative",
    width: "min(98vw, 40vh)",
    aspectRatio: "1 / 1",
};