import { useState } from "react";
import "./style.css";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
  }
  function generateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div className="qrCode-wrapper">
      <input
        type="text"
        name="qr-code"
        placeholder="Enter here"
        value={input}
        onChange={handleChange}
      />
      <button onClick={generateQrCode}>Generate Qr-Code</button>
      <QRCode id="qr-code" value={qrCode} size={400} bgColor="#fff" />
    </div>
  );
};

export default QrCodeGenerator;
