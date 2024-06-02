import React, { useState } from 'react';
export const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360); 
  const s = Math.floor(Math.random() * 30) + 50; 
  const l = Math.floor(Math.random() * 30) + 70; 
  return `hsl(${h}, ${s}%, ${l}%)`;
};
export function Cell({ value, rowIndex,colIndex, onChange }) {
  const backgroundColor = getRandomColor();
  console.log(`Cell rendered: (${rowIndex}, ${colIndex})`);
  return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} style={{ backgroundColor }}/>;
}
function ExcelRerender() {
  const initialTableData = Array(5).fill().map(() => Array(5).fill(''));
  const [tableData, setTableData] = useState(initialTableData);
  const handleCellChange = (rowIndex, colIndex, value) => {
    console.log(rowIndex,colIndex, value);
    const newData = [...tableData];
    newData[rowIndex][colIndex] = value;
    setTableData(newData);
};
return (
  <div>
    <h1>All the cells rerenders after eventChange</h1>
    <table>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <Cell
                  value={cell}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
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
export default ExcelRerender;
