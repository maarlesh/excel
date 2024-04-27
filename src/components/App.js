import React, { useState } from 'react';

function Cell({ value, onChange }) {
  return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
}

function App() {
  const [tableData, setTableData] = useState(Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => '')));

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = value;
    setTableData(newData);
  };

  return (
    <div>
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <Cell
                    value={cell}
                    onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
