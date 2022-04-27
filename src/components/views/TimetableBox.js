import * as React from 'react';
import { Button } from '@mui/material';
import Timetable from './TimeTable';
import ManagerBoxLayout from './ManagerBoxLayout';
import StudentUploadButton from '../assets/StudentUploadButton';
import { Grid } from '@mui/material';
import axios from 'axios';


export default function TimetableBox() {
    // Column 정보 입력
    const columns = React.useMemo(
        () => [
            {
                accessor: 'student_id' ,
                Header: '학번',
            },
            {
                accessor: 'student_name' ,
                Header:  '이름',
            },
            {
                accessor: 'student_birth' ,
                Header:  '생년월일',
            },
            {
                accessor: 'student_major',
                Header: '전공'
            },
            {
                accessor:  'student_second',
                Header: '부/복수 전공'
            },
            {
                accessor:   'student_grade',
                Header: '학년'
            },
            {
                accessor:  'student_phone' ,
                Header: '연락처'
            },
            {
                accessor:  'student_credit' ,
                Header: '취득학점'
            },
            {
                accessor:  'student_enroll' ,
                Header: '입학 정보',
            },
        ],
        []
    );

    sessionStorage.setItem('univ','카카오대학교');
    // 서버에 api 요청 (GET)
    const [resData, setResData] = React.useState([]);
    const InitGetMethod = async() => {
        await axios({
            url: '/api/manage/info/'+ sessionStorage.getItem('univ'),
            method: 'GET',
            baseURL: 'http://localhost:8080',
            withCredentials: true.valueOf,
            data: {
                univ:univName,
            }
        },
        )
        .then(function callback(response){
            console.log(response.data)
            setResData(response.data);
        })
        .catch(function CallbackERROR(response){
            console.log('fail');
            alert("ERROR");
        });
    }
    const [univName, setUniv] = React.useState("");
    React.useEffect(() => {
        const univ = sessionStorage.getItem('univ');
        if(univ !== "" ){
            // console.log(univ);
            InitGetMethod();
        }      
    },[]);
    
    React.useEffect(()=> {
        InitGetMethod();
    },[]);

    return (
        <ManagerBoxLayout>
            <Timetable columns={columns} data={resData}></Timetable>
            <Grid  container justifyContent='flex-end'>
                <StudentUploadButton></StudentUploadButton>
            </Grid>
        </ManagerBoxLayout>
    );
}
