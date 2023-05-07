import React from 'react';
import './JsonToTable.css';

const extractHeaders = (data) => {
  console.log('data', data);
  const headers = new Set();
  data?.forEach((item) => {
    Object.keys(item).forEach((key) => {
      headers.add(key);
    });
  });
  return Array.from(headers);
};

const displayValue = (value, depth = 1) => {
  if (
    depth > 10 ||
    value === null ||
    typeof value === 'string' ||
    typeof value === 'number'
  ) {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (Array.isArray(value)) {
    return (
      <ul>
        {value?.map((item, index) => (
          <li key={index}>{displayValue(item, depth + 1)}</li>
        ))}
      </ul>
    );
  }

  const keys = Object.keys(value);
  return (
    <table className='nested-table'>
      <tbody>
        {keys?.map((key, index) => (
          <tr key={index}>
            <td>{key}</td>
            <td>{displayValue(value[key], depth + 1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const JsonToTable = ({ data }) => {
  const headers = extractHeaders(data);
  return (
    <table className='main-table'>
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {headers?.map((header, colIndex) => (
              <td key={`${rowIndex}-${colIndex}`}>
                {displayValue(item[header])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
