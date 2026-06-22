import { CSSProperties } from "react";

export default function ConstructionArea() {
  return (
    <div style={containerStyle}>
      <p>Under Construction</p>
    </div>
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