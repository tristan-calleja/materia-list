// import React from 'react';
// import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
// import { Container } from "react-bootstrap";
// import {matchSorter} from 'match-sorter';

// // Define a default UI for filtering
// function GlobalFilter({
//   preGlobalFilteredRows,
//   globalFilter,
//   setGlobalFilter,
// }) {

//   const count = preGlobalFilteredRows.length;
//   const [value, setValue] = React.useState(globalFilter);
//   const onChange = useAsyncDebounce(value => {
//     setGlobalFilter(value || undefined)
//   }, 200);

//   return (
//     <span>
//       Search:{' '}
//       <input
//         value={value || ""}
//         onChange={e => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//         placeholder={`${count} records...`}
//         style={{
//           fontSize: '1.1rem',
//           border: '0',
//         }}
//       />
//     </span>
//   )
// }

// // Define a default UI for filtering
// function DefaultColumnFilter({
//   column: { filterValue, preFilteredRows, setFilter },
// }) {
//   const count = preFilteredRows.length

//   return (
//     <input
//       value={filterValue || ''}
//       onChange={e => {
//         setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
//       }}
//       placeholder={`Search ${count} records...`}
//     />
//   )
// }

// // This is a custom filter UI for selecting
// // a unique option from a list
// function SelectColumnFilter({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) {
//   // Calculate the options for filtering
//   // using the preFilteredRows
//   const options = React.useMemo(() => {
//     const options = new Set()
//     preFilteredRows.forEach(row => {
//       options.add(row.values[id])
//     })
//     return [...options.values()]
//   }, [id, preFilteredRows])

//   // Render a multi-select box
//   return (
//     <select
//       value={filterValue}
//       onChange={e => {
//         setFilter(e.target.value || undefined)
//       }}
//     >
//       <option value="">All</option>
//       {options.map((option, i) => (
//         <option key={i} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   )
// }

// function fuzzyTextFilterFn(rows, id, filterValue) {
//   return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
// }

// // Let the table remove the filter if the string is empty
// fuzzyTextFilterFn.autoRemove = val => !val

// // Our table component
// function Table({ columns, data }) {
//   const filterTypes = React.useMemo(
//     () => ({
//       // Add a new fuzzyTextFilterFn filter type.
//       fuzzyText: fuzzyTextFilterFn,
//       // Or, override the default text filter to use
//       // "startWith"
//       text: (rows, id, filterValue) => {
//         return rows.filter(row => {
//           const rowValue = row.values[id]
//           return rowValue !== undefined
//             ? String(rowValue)
//                 .toLowerCase()
//                 .startsWith(String(filterValue).toLowerCase())
//             : true
//         })
//       },
//     }),
//     []
//   )

//   const defaultColumn = React.useMemo(
//     () => ({
//       // Let's set up our default Filter UI
//       Filter: DefaultColumnFilter,
//     }),
//     []
//   )

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//     state,
//     visibleColumns,
//     preGlobalFilteredRows,
//     setGlobalFilter,
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn, // Be sure to pass the defaultColumn option
//       filterTypes,
//     },
//     useFilters, // useFilters!
//     useGlobalFilter // useGlobalFilter!
//   )

//   // We don't want to render all of the rows for this example, so cap
//   // it for this use case
//   const firstPageRows = rows.slice(0, 10)

//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render('Header')}
//                   {/* Render the columns filter UI */}
//                   <div>{column.canFilter ? column.render('Filter') : null}</div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//           <tr>
//             <th
//               colSpan={visibleColumns.length}
//               style={{
//                 textAlign: 'left',
//               }}
//             >
//               <GlobalFilter
//                 preGlobalFilteredRows={preGlobalFilteredRows}
//                 globalFilter={state.globalFilter}
//                 setGlobalFilter={setGlobalFilter}
//               />
//             </th>
//           </tr>
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {firstPageRows.map((row, i) => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//       <br />
//       <div>Showing the first 20 results of {rows.length} rows</div>
//       {/* <div>
//         <pre>
//           <code>{JSON.stringify(state.filters, null, 2)}</code>
//         </pre>
//       </div> */}
//     </>
//   )
// }

// // Define a custom filter filter function!
// function filterGreaterThan(rows, id, filterValue) {
//   return rows.filter(row => {
//     const rowValue = row.values[id]
//     return rowValue >= filterValue
//   })
// }

// // This is an autoRemove method on the filter function that
// // when given the new filter value and returns true, the filter
// // will be automatically removed. Normally this is just an undefined
// // check, but here, we want to remove the filter if it's not a number
// filterGreaterThan.autoRemove = val => typeof val !== 'number';


// function NewTable() {

//     const data = React.useMemo(
//         () => [
//           {
//             Brand: 'Brand',
//             Piece: 'Piece',
//             Category: "Category",
//             Priority: "Priority",
//             Price: "Price",
//             Notes: "Notes",
//             Website: "Website",
//             Actions: "Actions",
//           },
//         ],
//     []
//     );
    
//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'Brand',
//                 accessor: 'Brand',
//             },
//             {
//                 Header: 'Piece',
//                 accessor: 'Piece',
//             },
//             {
//                 Header: 'Category',
//                 accessor: 'Category',
//             },
//             {
//                 Header: 'Priority',
//                 accessor: 'Priority',
//             },
//             {
//                 Header: 'Price',
//                 accessor: 'Price',
//             },
//             {
//                 Header: 'Notes',
//                 accessor: 'Notes',
//             },
//             {
//                 Header: 'Website',
//                 accessor: 'Website',
//             },
//             {
//                 Header: 'Actions',
//                 accessor: 'Actions',
//             },
//             ], []
//     );
    
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//       } = useTable({ columns, data });

//     return (
//         <Container className="mt-3">
//             <Table columns={columns} data={data} />
//         </Container>
//     )
// }

// export default NewTable;


