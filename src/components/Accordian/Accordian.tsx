import { useState } from "react";
import { formatKey } from "../../utils";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: 12 }}>
      2nd Feature Branch Changes
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 16,
          fontWeight: "bold",
          color: "#2c3e50",
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: 0,
          marginBottom: 8,
          width: "100%",
          textAlign: "left",
        }}
        aria-expanded={open}
      >
        <span
          style={{
            display: "inline-block",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          ▶
        </span>
        {formatKey(title)}
      </button>
      {open && <div style={{ marginTop: 8 }}>{children}</div>}
    </div>
  );
};
