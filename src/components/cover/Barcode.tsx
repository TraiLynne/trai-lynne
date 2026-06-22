import { CSSProperties } from 'react';

export default function Barcode() {
  return (
    <footer style={containerStyle}>
      <div style={wrapperStyle}>
        <p>Copyright © {new Date().getFullYear()}</p>
        <p>Trai Lynne</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20vh',
  textAlign: 'center',
};

const wrapperStyle: CSSProperties = {
  position: "relative",
  maxWidth: "30vh",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "0.5rem",
  borderStyle: "solid",
  borderWidth: "thick",
  padding: "1rem",
}