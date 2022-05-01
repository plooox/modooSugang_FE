import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Grid, Modal, Switch, Typography } from '@mui/material';
import { useTable, useGlobalFilter, useSortBy, useRowSelect } from 'react-table';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';


// 수강신청 페이지 3번 테이블 [현재 신청 내역]

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


export default function EnrolledTable({columns, data}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false); 
  const handleOpen = () => setOpen(true);

  if (data.length > 0) {
    var step;
    for (step = 0; step < data.length; step++) {
      var session_code_value = data[step]['index'];
      var session_code_key = "DeleteCodeA" + step;
      sessionStorage.setItem(session_code_key, session_code_value);
    }
  }
  
    function SelectCode(row){  
      var index = row.index;
      var CodeBysessionKey = "DeleteCodeA" + index;
      const code = sessionStorage.getItem(CodeBysessionKey);
      sessionStorage.setItem('code', code); // 선택한 항목의 code값 가져오기
      setOpen(true);
      };


  const handledrop = async() =>{
      // value 수정 필요
      const RequestEnroll = {
        id : sessionStorage.getItem("id"),
        code : sessionStorage.getItem("code"), // 세션에 저장된 code값
        univ : sessionStorage.getItem("univ"),
        student : sessionStorage.getItem("id"),
        semester : "2022_1",
      };  
      await axios({
        baseURL: '/api/student/enroll/drop/lecture',
        method: "post",
        withCredentials: true,
        data: RequestEnroll,
      })
      .then(function callback(response){
        if (response.data === true){ 
          alert("수강을 취소했습니다.");
          window.location.href = '/student/enrolment';
        }
        else {
          alert("알 수 없는 이유로 취소에 실패했습니다..");
          window.location.href = '/student/enrolment';
        }
      })
      .catch(  function CallbackERROR(response){
        alert("ERROR!");
      });
  };

  // 수강취소 버튼
  const tableEvent = (hooks) => {
    hooks.visibleColumns.push((columns) => [
        ...columns,
        {
        id: "enrollment",
        Header: "신청/취소",
        Cell: ({row}) => ( 
          <Button onClick={() => {
            SelectCode(row);
              }}>취소</Button>
          ),
        }, 
    ], 
    );
  };
      


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy,  tableEvent, useRowSelect,);
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
    <>
    {/* 팝업 창 UI Rendering */}
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            수강을 취소 하시겠습니까?
          </Typography>
          <div>
            <Button onClick={()=>{handledrop()}}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </div>
        </Box>
      </Modal>


      {/* 상단 바 UI Rendering */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Box sx={{mt: 8, display: 'flex', flexwrap: 'wrap'}}>
            <Typography variant="h7">
              [ 현재 신청 내역 ]
            </Typography>
          </Box>
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
      <Grid  container justifyContent='flex-end'>
        <Link to='../student/mypage'>
          <Button variant='contained' style={{backgroundColor: "#24527a"}}>My page 이동</Button>
        </Link>
      </Grid>
      
    </>

  );
}
