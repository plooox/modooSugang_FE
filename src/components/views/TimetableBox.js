import * as React from 'react';
import AdminpageBoxLayout from './ManagerBoxLayout'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FileUploadButton from '../assets/FileUploadButton';
import { Grid } from '@mui/material';

const columns = [
    { id: 'code', label: '과목코드', minWidth: 100 },
    { id: 'name', label: '과목명', minWidth: 170 },
    { id: 'department', label: '학과', minWidth: 100 },
    { id: 'category', label: '전공/교양', minWidth: 100 },
    { id: 'time', label: '시간', minWidth: 230 },
    {
      id: 'classes',
      label: '분반',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'score',
      label: '학점',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toFixed(1),
    },
  ];
  
function createData(code, name, department, category, time, classes, score) {
    return { code, name, department, category, time, classes, score };
}
  
const rows = [
    createData('AAA-0001', '알고리즘개론', '컴퓨터공학과', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3),
    createData('AAA-0002', '자료구조개론', '컴퓨터공학과', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3),
    createData('BBB-0003', '해석학1', '수학과', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3),
    createData('DDD-0004', '논어', '공통', '교양', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3),
    createData('EEE-0005', '전자기학', '전기전자공학부', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', 1, 3),

  ];
  
export default function AdminpageBox() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    return (
    <AdminpageBoxLayout>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                {columns.map((column) => (
                <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                >
                    {column.label}
                </TableCell>
                ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                        );
                    })}
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

        <Grid container justifyContent='flex-end'>
            <FileUploadButton></FileUploadButton>
        </Grid>
    </AdminpageBoxLayout>
  );
}