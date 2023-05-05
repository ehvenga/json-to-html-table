import '../css/JSONtoTable.css';

const extractHeaders = (jsonData) => {
  const headers = new Set();
  jsonData.forEach((item) => {
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
    const ul = document.createElement('ul');
    value.forEach((item) => {
      const li = document.createElement('li');
      li.appendChild(displayValue(item, depth + 1));
      ul.appendChild(li);
    });
    return ul;
  }

  const keys = Object.keys(value);
  const table = document.createElement('table');
  table.classList.add('nested-table');
  const tbody = document.createElement('tbody');
  keys.forEach((key) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.appendChild(document.createTextNode(key));
    td2.appendChild(displayValue(value[key], depth + 1));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
};

const json_to_html_table = ({ jsonData }) => {
  const headers = extractHeaders(jsonData);
  const table = document.createElement('table');
  table.classList.add('main-table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(header));
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  jsonData.forEach((item, rowIndex) => {
    const tr = document.createElement('tr');
    headers.forEach((header, colIndex) => {
      const td = document.createElement('td');
      td.appendChild(displayValue(item[header]));
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  return table;
};

module.exports = json_to_html_table;
