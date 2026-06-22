import { CSSProperties } from 'react';

export default function Barcode() {
  return (
    <footer style={containerStyle}>
      <div>
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
  height: '10vh',
  textAlign: 'center',
};