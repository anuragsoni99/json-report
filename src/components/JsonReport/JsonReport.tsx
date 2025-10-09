import { formatKey } from "../../utils";
import { Accordion } from "../Accordian/Accordian";

type JsonValue = string | number | boolean | JsonObject | JsonArray | null;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

interface JsonReportProps {
  data: JsonValue;
  label?: string;
  level?: number;
}

const cardStyle = {
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  borderRadius: 8,
  border: "1px solid #ddd",
  padding: 16,
  marginBottom: 12,
  backgroundColor: "#fff",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  width: "100%", // full width; no margin or padding shifting left edge
  boxSizing: "border-box",
  overflow: "hidden",
};

const getBorderColor = (level: number) => {
  const colors = ["#c0c0c0", "#a0a0a0", "#808080", "#606060", "#404040"];
  return colors[Math.min(level, colors.length - 1)];
};

const JsonReport: React.FC<JsonReportProps> = ({ data, label, level = 0 }) => {
  if (Array.isArray(data)) {
    return (
      <div
        style={{
          ...cardStyle,
          borderLeft: `4px solid ${getBorderColor(level)}`,
          boxSizing: "border-box",
        }}
      >
        <Accordion title={label ?? `Array (${data.length})`}>
          {data.map((item, idx) => (
            <JsonReport
              key={idx}
              data={item}
              label={`Item ${idx + 1}`}
              level={level + 1}
            />
          ))}
        </Accordion>
      </div>
    );
  }

  if (typeof data !== "object" || data === null) {
    // Primitive value, show label and value inline
    return (
      <div
        style={{
          marginBottom: 6,
          color: "#34495e",
          fontWeight: 600,
          minWidth: 120,
        }}
      >
        {label && <span>{formatKey(label)}: </span>}
        <span
          style={{
            color: "#7f8c8d",
            fontStyle: typeof data === "string" ? "italic" : "normal",
          }}
        >
          {String(data)}
        </span>
      </div>
    );
  }

  // For object, separate keys by primitive, object, and array
  const entries = Object.entries(data);
  const primitiveEntries = entries.filter(
    ([, v]) => typeof v !== "object" || v === null
  );
  const objectEntries = entries.filter(
    ([, v]) => typeof v === "object" && v !== null && !Array.isArray(v)
  );
  const arrayEntries = entries.filter(([, v]) => Array.isArray(v));

  return (
    <div
      style={{
        ...cardStyle,
        borderLeft: `4px solid ${getBorderColor(level)}`,
        boxSizing: "border-box",
      }}
    >
      {label && (
        <div
          style={{
            fontWeight: "700",
            color: "#2c3e50",
            marginBottom: 12,
            fontSize: 16,
          }}
        >
          {formatKey(label)}
        </div>
      )}
      {/* Primitives in flex-wrap row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          marginBottom: 12,
          justifyContent: "flex-start", // align items to left
        }}
      >
        {primitiveEntries.map(([key, value]) => (
          <div
            key={key}
            style={{
              minWidth: 140,
              color: "#34495e",
              fontWeight: 600,
              flex: "0 0 auto", // do not grow or shrink, keep minimal width
              display: "inline-flex",
              gap: 4,
            }}
          >
            <span>{formatKey(key)}:</span>
            <span
              style={{
                color: "#7f8c8d",
                fontStyle: typeof value === "string" ? "italic" : "normal",
              }}
            >
              {String(value)}
            </span>
          </div>
        ))}
      </div>
      {/* Objects */}
      {objectEntries.map(([key, value]) => (
        <JsonReport key={key} data={value} label={key} level={level + 1} />
      ))}
      {/* Arrays */}
      {arrayEntries.map(([key, value]) => (
        <JsonReport key={key} data={value} label={key} level={level + 1} />
      ))}
    </div>
  );
};

export default JsonReport;
