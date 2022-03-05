import React from "react";

import { DataGrid, GridCellParams } from "@mui/x-data-grid";

import { PropsBeers, Rows } from "../interfaces";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const Table: React.FC<PropsBeers> = ({ beers }: PropsBeers) => {
  const arr = beers.map((item) => {
    const rows: Rows = {
      id: item.id,
      name: item.name,
      tagline: item.tagline,
      firstBrewed: item.first_brewed,
      description: item.description,
      image_url: item.image_url,
      volume: item.volume.value,
    };
    return rows;
  });

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "tagline", headerName: "Tagline", width: 200 },
    { field: "firstBrewed", headerName: "First brewed", width: 100 },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "image_url",
      headerName: "Image",
      width: 200,
      renderCell: (params: GridCellParams) => (
        <img alt="beer" height="100%" src={params.value} />
      ),
    },
    { field: "volume", headerName: "Volume", width: 130 },
  ];

  return (
    <div className="redux-table" style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={arr}
        rowHeight={200}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );

  // return (
  //     <TableContainer component={Paper}>
  //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //             <TableHead>
  //                 <TableRow>
  //                     <TableCell>Name</TableCell>
  //                     <TableCell align="center">Tagline</TableCell>
  //                     <TableCell align="center">First brewed</TableCell>
  //                     <TableCell align="center">Description</TableCell>
  //                     <TableCell align="center">Image</TableCell>
  //                 </TableRow>
  //             </TableHead>
  //             <TableBody>
  //                 {beers.map((row) => (
  //                     <TableRow
  //                         key={row.name}
  //                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //                     >
  //                         <TableCell component="th" scope="row">{row.name}</TableCell>
  //                         <TableCell align="center">{row.tagline}</TableCell>
  //                         <TableCell align="center">{row.first_brewed}</TableCell>
  //                         <TableCell align="center">{row.description}</TableCell>
  //                         <TableCell align="center"><img width='50px' src={row.image_url} alt="text" /></TableCell>
  //                     </TableRow>
  //                 ))}
  //             </TableBody>
  //         </Table>
  //     </TableContainer>
  // )
};

export default Table;
