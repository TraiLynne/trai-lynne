import { Rock_Salt, Libre_Barcode_39_Text } from "next/font/google";

export const writtenFont = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
});

export const barcodeFont = Libre_Barcode_39_Text({
  subsets: ["latin"],
  weight: "400",
});

const fonts = {
  writtenFont,
  barcodeFont,
};

export default fonts;