import * as React from 'react';
import ManagerTimeTable from './ManagerTimeTable';
import ManagerBoxLayout from './ManagerBoxLayout';
import FileUploadButton from '../assets/FileUploadButton';
import { Grid } from '@mui/material';
import LectureTimeTableBox from './LectureTimeTableBox';


export default function ManagerTimetableBox() {
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
                accessor: 'department',
                Header: '학과'
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
                accessor:  'grade' ,
                Header: '학년'
            },
            {
                accessor:  'score' ,
                Header: '학점'
            },
            {
                accessor:  'professor' ,
                Header: '교수',
            },
            {
                accessor:  'to' ,
                Header: '잔여 인원',
            },
        ],
        []
    );
    const data = React.useMemo(
        () => [ {LectureTimeTableBox}],);
    
    
    return (
        <ManagerBoxLayout>
            <ManagerTimeTable columns={columns} data={data}></ManagerTimeTable>
            <Grid  container justifyContent='flex-end'>
                <FileUploadButton></FileUploadButton>
            </Grid>
        </ManagerBoxLayout>
    );
}
