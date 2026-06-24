import { Rock_Salt, Libre_Barcode_39_Text, Fira_Code } from "next/font/google";

const barcodeFont = Libre_Barcode_39_Text({
    subsets: ["latin"],
    weight: "400",
});

const codeFont = Fira_Code({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const writtenFont = Rock_Salt({
    subsets: ["latin"],
    weight: "400",
});


export {
    barcodeFont,
    codeFont,
    writtenFont
};

