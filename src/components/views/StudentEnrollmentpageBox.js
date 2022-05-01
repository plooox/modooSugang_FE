import * as React from 'react';
import EnrollmentTable from './EnrollmentTable'
import EnrolledTable from './EnrolledTable'
import BasketTable from './BasketTable'
import { Button } from '@mui/material';
import axios from 'axios';


// 수강신청 페이지 프레임

export default function StuEnrolmentpageBox() {
            
        const [data_enroll, setResData] = React.useState([]);
        const handleEnroll = async(joinData) =>{
            await axios({
              url: 'api/student/enroll/lecture_list/',
              method: "post",
              baseURL: 'http://localhost:8080',
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
            {
                accessor:  'remaining' ,
                Header: '잔여 인원',
            },
        ],
        []
    );

                
    const [data_basket, setBasketData] = React.useState([]);
    const handleBasket = async(joinData) =>{
        await axios({
          url: 'api/student/enrolled/basket_list/',
          method: "post",
          baseURL: 'http://localhost:8080',
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
          url: 'api/student/enroll/myenroll/',
          method: "post",
          baseURL: 'http://localhost:8080',
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