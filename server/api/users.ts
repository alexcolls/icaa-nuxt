import usersData from "../data/users.json";

const dataTable = usersData.responses[0].body

export default defineEventHandler(async (event) => {
  const { startRow, endRow } = getQuery(event);

  if (startRow && endRow) {
    let start = Number(startRow);
    let end = Number(endRow) + 1;
    console.log(start, end);
    if (start > dataTable.length) start = 0;
    if (end > dataTable.length) end = dataTable.length;
    console.log(start, end);
    
    return dataTable.slice(start, end);
  }
  return dataTable;
});
