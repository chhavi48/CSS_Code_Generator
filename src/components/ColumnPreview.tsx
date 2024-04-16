import React, { CSSProperties } from "react";

interface ColumnPreviewProps {
  columnsCount: number;
  columnsGap: number;
  columnsLines: string;
}

const ColumnPreview: React.FC<ColumnPreviewProps> = ({
  columnsCount,
  columnsGap,
  columnsLines,
}) => {
  const containerStyle: CSSProperties = {
    width: "600px",
    height: "200px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    marginBottom: "20px",
    padding: "20px",
    boxSizing: "border-box",
    overflow: "auto",

  };

  const columnsStyle: CSSProperties = {
    columnCount: columnsCount,
    columnGap: `${columnsGap}px`,
    columnRule: `${columnsLines}`,
  };

  const contentStyle: CSSProperties = {
    marginBottom: "10px",
  };

  const columnNumbers = Array.from({ length: columnsCount }, (_, i) => i + 1);

  return (
    <>
      <div>
        <h2>Preview</h2>
        <div style={containerStyle}>
          {/* Create columns dynamically */}
          <div style={columnsStyle}>
            {/* Map through the array and create content for each column */}
            {columnNumbers.map((columnNumber) => (
              <div key={columnNumber} style={contentStyle}>
                Column {columnNumber}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2>CSS Code</h2>
        <pre className="code-editor">{`
        column-count: ${columnsCount};
        column-gap: ${columnsGap}px;
        column-rule: ${columnsLines};
      `}</pre>
      </div>
    </>
  );
};

export default ColumnPreview;
