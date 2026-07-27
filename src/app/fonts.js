import { Fira_Code, Hi_Melody, Libre_Barcode_39_Text } from "next/font/google";

const barcodeFont = Libre_Barcode_39_Text({
  subsets: ["latin"],
  weight: "400",
});

const codeFont = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const writtenFont = Hi_Melody({
  subsets: ["latin"],
  weight: "400",
});

export { barcodeFont, codeFont, writtenFont };
