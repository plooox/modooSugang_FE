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
import { useTable, useGlobalFilter, useSortBy, useRowSelect } from 'react-table'
import Search from '../assets/Search'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useFilters } from 'react-table/dist/react-table.development';


// 수강신청 페이지 1번 테이블 [신청 교과목 조회]

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


export default function BasketTable({columns, data}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false); 
  const handleOpen = () => setOpen(true);

  if (data.length > 0) {
  var step;
  for (step = 0; step < data.length; step++) {
    var session_code_value = data[step]['index'];
    var session_code_key = "lectureCode" + step;
    sessionStorage.setItem(session_code_key, session_code_value);
  }
}

  function SelectCode(row){  
    var index = row.index;
    var CodeBysessionKey = "lectureCode" + index;
    const code = sessionStorage.getItem(CodeBysessionKey);
    sessionStorage.setItem('code', code); // 선택한 항목의 code값 가져오기
    setOpen(true);
    };


  ///수강신청 요청 (API) , bool
  const handleApply = async() =>{
      // value 수정 필요
      const RequestEnroll = {
        id :  sessionStorage.getItem("id"),
        code : sessionStorage.getItem("code"), // 세션에 저장된 code값
        univ : sessionStorage.getItem("univ"),
      };  
      await axios({
        baseURL: '/api/student/enroll/apply/lecture',
        method: "post",
        withCredentials: true,
        data: RequestEnroll,
      })
      .then(function callback(response){
        if (response.data === true){ 
          alert("신청에 성공했습니다.");
          window.location.href = '/student/enrolment';
        }
        else {
          alert("신청 불가 또는 잔여 여석이 없습니다.");
          window.location.href = '/student/enrolment';
        }
      })
      .catch(  function CallbackERROR(response){
        alert("ERROR!");
      });
     };
    //const id = sessionStorage.getItem("id");

  // 수강신청 버튼
  const tableEvent = (hooks) => {
    hooks.visibleColumns.push((columns) => [
        ...columns,
        {
        id: "enrollment",
        Header: "신청/취소",
        Cell: ({row}) => ( 
          <Button onClick={() => {
            SelectCode(row);
              }}>신청</Button>
          ),
        }, 
    ], 
    );
  };

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  )

  // 추천 시스템
  const recommend = async() =>{
    alert("test");
    await axios({
      baseURL: '/api/student/enroll/lecture_list/recommend',
      method: "post",
      withCredentials: true,
      data: joinData
    })
    .then(function callback(response){
        setResData(response.data);
        BasketTable({columns, setResData});
    })
    .catch(  function CallbackERROR(response){
      alert("ERROR!");
    });
  }
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: {selectedRowIds},
  } = useTable(
    { columns, data }, 
    useGlobalFilter, 
    useFilters,
    useSortBy, 
    tableEvent, 
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <>
              <div>증원신청</div>
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            </>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
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
              
  const [data_enroll, setResData] = React.useState([]);
  const TableEnroll = async(joinData) =>{
      await axios({
        baseURL: '/api/student/enroll/lecture_list/',
        method: "post",
        withCredentials: true,
        data: joinData
      })
      .then(function callback(response){
          setResData(response.data);
      })
      .catch(  function CallbackERROR(response){
        alert("ERROR!");
      });
    };

    const joinData = {
      semester : "2022_1",
      univ : sessionStorage.getItem("univ"),
      id : sessionStorage.getItem("id"),
    };
    React.useEffect(() => {
      TableEnroll(joinData);
    }, []);


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
            신청하시겠습니까?
          </Typography>
          <div>
            <Button onClick={()=>{handleApply()}}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </div>
        </Box>
      </Modal>

      {/* 상단 바 UI Rendering */}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Box sx={{mt: 8, display: 'flex', flexwrap: 'wrap'}}>
            <Typography variant="h7">
              [ 신청 교과목 조회 ]
            </Typography>
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
      
      {/* 증원신청 버튼 */}
      <Grid container justifyContent='flex-end'>
        <Search onSubmit={setGlobalFilter} />
        <Button variant='contained' style={{backgroundColor: "#24527a"}} onClick={
          ()=>{
            console.log(selectedRowIds)
          }
        }>증원신청</Button>
      </Grid>
    </>
  );
}

// 증원신청 값 조회
{/* <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(
                d => d.original
              ),
            },
            null,
            2
          )}
        </code> */}