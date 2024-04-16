import React, { useState } from "react";
import Input from "./Input";
import Preview from "./Preview";
import ColumnPreview from "./ColumnPreview";

const Column = () => {
  // State variables for columns parameters
  const [columnsCount, setColumnsCount] = useState<number>(1);
  const [columnsGap, setColumnsGap] = useState<number>(0);
  const [columnsLines, setColumnsLines] = useState<string>("none");
  const [copied, setCopied] = useState<boolean>(false);
  // Functions to handle parameter changes
  const handleColumnsCountChange = (value: string) =>
    setColumnsCount(parseInt(value));
  const handleColumnsGapChange = (value: string) =>
    setColumnsGap(parseInt(value));
  const handleColumnsLinesChange = (value: string) => setColumnsLines(value);

  // Generate CSS code snippet
  const generateCSSCode = () => {
    return `columns: ${columnsCount};\n column-gap: ${columnsGap}px;\n column-rule: ${columnsLines};`;
  };

  // Copy CSS code to clipboard
  const copyCodeToClipboard = () => {
    const codeToCopy = generateCSSCode();
    navigator.clipboard.writeText(codeToCopy);
    // Set copied state to true and reset after 2 seconds
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <h1>Working-----------------</h1>
      <div className="container">
        <div className="controls">
          <div className="inputs">
            <Input
              label="Columns Count"
              value={columnsCount.toString()}
              onChange={handleColumnsCountChange}
            />
            <Input
              label="Columns Gap"
              value={columnsGap.toString()}
              onChange={handleColumnsGapChange}
            />
            <Input
              label="Columns Lines"
              value={columnsLines}
              onChange={handleColumnsLinesChange}
            />
          </div>
        </div>

        <ColumnPreview
          columnsCount={columnsCount}
          columnsGap={columnsGap}
          columnsLines={columnsLines}
        />

        {/* <div>
      <h2>CSS Code</h2>
      <pre className="code-editor">{generateCSSCode()}</pre>
      <button onClick={copyCodeToClipboard}>Copy</button>
      {copied && <span className="copied-message">Copied!</span>}
    </div> */}
      </div>
    </>
  );
};

export default Column;
