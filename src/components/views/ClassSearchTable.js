import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Grid, Modal, Stack, Switch, Typography } from '@mui/material';
import { useTable, useGlobalFilter, useSortBy, useRowSelect } from 'react-table'
import Search from '../assets/Search'
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ClassTable({columns, data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    selectedFlatRows,
    state: {selectedRowIds},
  } = useTable(
    { columns, data }, 
    useGlobalFilter, 
    useSortBy, 
    useRowSelect,
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [category, setcategory] = React.useState('');
  const handleChangeCategory = (event) => {
    setcategory(event.target.value);
  };

  return (
    <>
      {/* 상단 바 UI Rendering */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Box sx={{mt: 8, display: 'flex', flexwrap: 'wrap', justifyContent:'space-around'}}>
            <Typography variant="h7">
              [ 교과목 조회 ]
            </Typography>
            <FormControl sx={{ m: 1, ml: 5, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-label">전공/교양 선택</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChangeCategory}
              >
                <MenuItem value={10}>전공</MenuItem>
                <MenuItem value={20}>교양</MenuItem>
                <MenuItem value={30}>실험실습</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, ml:5, minWidth: 100 }}>
              <InputLabel id="demo-simple-select-label">학년</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChangeCategory}
              >
                <MenuItem value={10}>1학년</MenuItem>
                <MenuItem value={20}>2학년</MenuItem>
                <MenuItem value={30}>3학년</MenuItem>
                <MenuItem value={30}>4학년</MenuItem>
              </Select>
            </FormControl>
            <Search onSubmit={setGlobalFilter} />
          </Box>

          {/* Table */}
          <Table {...getTableProps()} stickyHeader aria-label="sticky table"> 
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  prepareRow(row);
                  return (
                    console.log(row),
                    <TableRow {...row.getRowProps()} hover role="checkbox" tabIndex={-1} key={row.id}>
                      {row.cells.map((cell) => (
                        <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                      ))}
                    </TableRow>
                  );
                  
              })}
              
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    </>
  );
}