// import { useState } from "react";
import React from "react";

// import { DataGrid, GridCellParams } from "@mui/x-data-grid";
// import { useDemoData } from "@material-ui/x-grid-data-generator";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

import { PropsBeers } from "../interfaces";
// import { Rows } from "../interfaces";
import { changeBeers, removeBeers } from "../redux/actions";
import { useDispatch } from "react-redux";

const TableSecond: React.FC<PropsBeers> = ({ beers }: PropsBeers) => {
  // const arr = beers.map((item) => {
  //   const rows: Rows = {
  //     id: item.id,
  //     name: item.name,
  //     tagline: item.tagline,
  //     firstBrewed: item.first_brewed,
  //     description: item.description,
  //     image_url: item.image_url,
  //     volume: item.volume.value,
  //   };
  //   return rows;
  // });
  //
  // const columns = [
  //   { field: "name", headerName: "Name", width: 200 },
  //   { field: "tagline", headerName: "Tagline", width: 200 },
  //   { field: "firstBrewed", headerName: "First brewed", width: 100 },
  //   { field: "description", headerName: "Description", width: 500 },
  //   {
  //     field: "image_url",
  //     headerName: "Image",
  //     width: 400,
  //     renderCell: (params: GridCellParams) => (
  //       <img alt="text" height="100%" src={params.value} />
  //     ),
  //   },
  //   { field: "volume", headerName: "Volume", width: 130 },
  //   { field: "delete", headerName: "Delete", width: 150 },
  //   { field: "change", headerName: "Change", width: 150 },
  // ];
  //
  // return (
  //   <div className="redux-table" style={{ height: "100vh", width: "100%" }}>
  //     <DataGrid
  //       rows={arr}
  //       rowHeight={150}
  //       columns={columns}
  //       pageSize={5}
  //       rowsPerPageOptions={[5, 10, 15]}
  //       checkboxSelection
  //       /* eslint-disable */
  //       onSelectionModelChange={(item) => {
  //         console.log(item);
  //         // const selectedIDs = new Set(item);
  //         // const selectedRowData = arr.filter((row) =>
  //         //   selectedIDs.has(row.id.toString())
  //         // );
  //         // console.log(selectedRowData);
  //       }}
  //     />
  //   </div>
  // );

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const dispatch = useDispatch();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Checkbox</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Tagline</TableCell>
            <TableCell align="center">First brewed</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Delete</TableCell>
            <TableCell align="center">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beers?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.tagline}</TableCell>
              <TableCell align="center">{row.first_brewed}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">
                <img width="50px" src={row.image_url} alt="text" />
              </TableCell>
              <TableCell align="center">
                <DeleteIcon
                  onClick={() => dispatch(removeBeers(beers))}
                ></DeleteIcon>
              </TableCell>
              <TableCell
                onClick={() => dispatch(changeBeers(beers))}
                align="center"
              >
                ...
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSecond;
