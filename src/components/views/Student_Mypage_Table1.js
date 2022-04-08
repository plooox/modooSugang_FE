import * as React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../assets/Typography';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MypageResultTable from './MypageResultTable'
import EnrolledTable from './EnrolledTable'
import StuEnrolmentpageBoxLayout from './StudentEnrollmentpageBoxLayout'
import { Button } from '@mui/material';

function createData(code, lecture, category, time, professor, classroom, score) {
    return { 
        code: code,
        lecture: lecture,
        category: category,
        time: time,
        professor : professor,
        classroom: classroom,
        score: score,
    };
  }

export default function StuEnrolmentpageBox() {
    const columns = React.useMemo(
        () => [
            {
                accessor: 'code' ,
                Header: '과목코드',
            },
            {
                accessor:  'lecture' ,
                Header:     '과목명',
            },
            {
                accessor:  'category' ,
                Header: '전공/교양'
            },
            {
                accessor:   'time',
                Header: '시간'
            },
            {
                accessor:   'professor',
                Header: '교수명'
            },
            {
                accessor:  'classroom' ,
                Header: '분반'
            },
            {
                accessor:  'score' ,
                Header: '학점'
            },
        ],
        []
    );
    
    const data = React.useMemo(
        () => [
            createData('AAA-0001', '알고리즘개론', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30','지준영', 1, 3),
            createData('AAA-0002', '자료구조개론', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30', '지준영', 1, 3),
            createData('BBB-0003', '해석학1', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30','지준영', 1, 3),
            createData('DDD-0004', '논어', '교양', '[월]10:30~12:00 \[수]9:00~10:30','지준영', 1, 3),
            createData('EEE-0005', '전자기학', '전공필수', '[월]10:30~12:00 \[수]9:00~10:30','지준영', 1, 3),
          ],
          []
    );
    
      
    return (
        <>
        <MypageResultTable columns={columns} data={data}></MypageResultTable>
        </>
    );
}
