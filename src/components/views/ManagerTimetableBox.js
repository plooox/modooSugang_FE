import React, { useState, useEffect } from 'react';
import ManagerTimeTable from './ManagerTimeTable';
import ManagerBoxLayout from './ManagerBoxLayout';
import FileUploadButton from '../assets/FileUploadButton';
import { Grid } from '@mui/material';
import axios from 'axios';

export default function ManagerTimetableBox() {
    const columns = React.useMemo(
        () => [
            {
                accessor: 'lecture_id' ,
                Header: '과목코드',
            },
            {
                accessor:  'lecture_name' ,
                Header:     '과목명',
            },
            {
                accessor: 'lecture_major',
                Header: '학과'
            },
            {
                accessor:  'lecture_classify' ,
                Header: '전공/교양'
            },
            {
                accessor:   'lecture_time',
                Header: '시간'
            },
            {
                accessor:  'lecture_class' ,
                Header: '분반'
            },
            {
                accessor:  'lecture_credit' ,
                Header: '학점'
            },
            {
                accessor:  'lecture_professor' ,
                Header: '교수',
            },
            {
                accessor:  'lecture_room' ,
                Header: '강의실',
            },
        ],
        []
    );

    // 서버에 api 요청 (GET)
    const [resData, setResData] = React.useState([]);
    const InitGetMethod = async() => {
        await axios({
            baseURL: 'http://localhost:8080/api/manage/timetable/'+sessionStorage.getItem('univ'),
            method: 'GET',
            withCredentials: true.valueOf,
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
            InitGetMethod();
        }      
    },[]);
    
    React.useEffect(()=> {
        InitGetMethod();
    });
    
    return (
        <ManagerBoxLayout>
            <ManagerTimeTable columns={columns} data={resData}></ManagerTimeTable>
            <Grid  container justifyContent='flex-end'>
                <FileUploadButton></FileUploadButton>
            </Grid>
        </ManagerBoxLayout>
    );
}
