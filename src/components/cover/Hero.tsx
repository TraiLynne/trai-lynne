import Image from "next/image";
import Logo from "../../../public/images/logo.png";
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

const containerStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    textAlign: 'center',
};

const logoWrapperStyle: CSSProperties = {
    position: "relative",
    width: "98vw",
    maxWidth: "400px",
    aspectRatio: "1 / 1",
};