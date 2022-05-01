import * as React from 'react';
import EnrollmentTable from './EnrollmentTable'
import EnrolledTable from './EnrolledTable'
import BasketTable from './BasketTable'
import { Button } from '@mui/material';
import { Box, Select, MenuItem, Input } from '@mui/material';
import axios from 'axios';

// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {  
    return (
        <Box>
            <Input
                sx={{minWidth:70}}
                value={filterValue || ''}
                onChange={e => {
                    setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                }}
                placeholder={`Search`}
            />
        </Box>
    )
  }
function NullColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {  
    return (
        <Box sx={{minWidth: 70 }}/>
    )
  }
  
  // Selection Filter
  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    // Render a multi-select box
    return (
        <Box sx={{minWidth: 70 }}>
            <Select
                sx={{ minWidth: 70 }}
                value={filterValue}
                defaultValue=""
                onChange={e => {
                setFilter(e.target.value || undefined)
                }}
            >
                <MenuItem value="">All</MenuItem>
                {options.map((option, i) => (
                <MenuItem key={i} value={option}>
                    {option}
                </MenuItem>
                ))}
            </Select>
        </Box>
    )
  }


// 수강신청 페이지 프레임
export default function StuEnrolmentpageBox() {
            
        const [data_enroll, setResData] = React.useState([]);
        const handleEnroll = async(joinData) =>{
            await axios({
              url: '/api/student/enroll/lecture_list/',
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

          React.useEffect(() => {
            handleEnroll(joinData);
          }, []);
        
          const joinData = {
            semester : "2022_1",
            id : sessionStorage.getItem("id"),
            univ : sessionStorage.getItem("univ"),
          };

    const columns_Enroll = React.useMemo(
        () => [
            {
                accessor: 'lecture_id' ,
                Header: '과목코드',
                Filter: DefaultColumnFilter,
            },
            {
                accessor:  'lecture_name' ,
                Header:     '과목명',
                Filter: DefaultColumnFilter,
            },
            {
                accessor: 'lecture_major',
                Header: '학과',
                Filter: DefaultColumnFilter,
            },
            {
                accessor:  'lecture_classify' ,
                Header: '전공/교양',
                Filter: SelectColumnFilter,
                filter: 'includes',
            },
            {
                accessor:   'lecture_time',
                Header: '시간',
                Filter: DefaultColumnFilter,
            },
            {
                accessor:  'lecture_room' ,
                Header: '분반',
                Filter: NullColumnFilter,
            },
            {
                accessor:  'lecture_credit' ,
                Header: '학점',
                Filter: SelectColumnFilter,
                filter: 'includes',
            },
            {
                accessor:  'lecture_limit' ,
                Header: '잔여 인원',
                Filter: NullColumnFilter,
            },
        ],
        []
    );
                
    const [data_basket, setBasketData] = React.useState([]);
    const handleBasket = async(joinData) =>{
        await axios({
            baseURL: '/api/student/enrolled/basket_list/',
            method: "post",
            withCredentials: true,
            data: joinData
        })
        .then(function callback(response){
            setBasketData(response.data);
        })
        .catch(  function CallbackERROR(response){
          alert("ERROR!");
        });
      };

      React.useEffect(() => {
        handleBasket(joinData);
      }, []);

    const columns_basket = React.useMemo(
        () => [
            {
                accessor: 'index' ,
                Header: '과목코드',
            },
            {
                accessor: 'name' ,
                Header:    '과목명',
            },
            {
                accessor: 'major',
                Header: '학과'
            },
            {
                accessor:  'classify' ,
                Header: '전공/교양'
            },
            {
                accessor:   'time',
                Header: '시간'
            },
            {
                accessor:  'classes' ,
                Header: '분반'
            },
            {
                accessor:  'credit' ,
                Header: '학점'
            },
        ],
        []
    );


    const [data_my, setMyData] = React.useState([]);
    const handleMy = async(joinData) =>{
        await axios({
            baseURL: '/api/student/enroll/myenroll/',
            method: "post",
            withCredentials: true,
            data: joinData
        })
        .then(function callback(response){
            setMyData(response.data);
        })
        .catch(  function CallbackERROR(response){
          alert("ERROR!");
        });
      };

      React.useEffect(() => {
        handleMy(joinData);
      }, []);

      const columns_My = React.useMemo(
        () => [
            {
                accessor: 'index' ,
                Header: '과목코드',
            },
            {
                accessor:  'name' ,
                Header:     '과목명',
            },
            {
                accessor: 'major',
                Header: '학과'
            },
            {
                accessor:  'classify' ,
                Header: '전공/교양'
            },
            {
                accessor:   'time',
                Header: '시간'
            },
            {
                accessor:  'classes' ,
                Header: '분반'
            },
            {
                accessor:  'credit' ,
                Header: '학점'
            },
        ],
        []
    );
    

    return (
        <>
        <EnrollmentTable columns={columns_Enroll} data={data_enroll}></EnrollmentTable>
        <BasketTable columns={columns_basket} data={data_basket}></BasketTable>
        <EnrolledTable columns={columns_My} data={data_my}></EnrolledTable>
        </>
    );
}