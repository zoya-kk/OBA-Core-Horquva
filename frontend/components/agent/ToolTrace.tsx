import { useState } from "react";

export default function ToolTrace() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div onClick={() => setExpanded(!expanded)} style={{ cursor: "pointer" }}>
        How I got this {expanded ? "▴" : "▾"}
      </div>
      {expanded && <div>{/* tool rows go here */}</div>}
    </div>
  );
}
