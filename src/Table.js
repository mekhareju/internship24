import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';

const Table = () => {
  const data = React.useMemo(
    () => [
      { name: 'John', age: 28 },
      { name: 'Jane', age: 32 },
      { name: 'Joe', age: 40 },
      { name: 'Jim', age: 28 },
    ],
    []
  );

  const columnHelper = createColumnHelper();

  const columns = React.useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('age', {
        header: 'Age',
        cell: info => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table style={{ borderCollapse: 'collapse', width: '50%', margin: '20px auto' }}>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td
                key={cell.id}
                style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
