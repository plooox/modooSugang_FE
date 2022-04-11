import * as React from 'react';
import { Button } from '@mui/material';
import ManagerBoxLayout from './ManagerBoxLayout';
import SearchLogTable from './SearchLogTable';

// 데이터 객체 생성
function createData(code, lecture, score, category, retake, enrolldate, canceldate, isEnrolled) {
    return { 
        code: code,
        lecture: lecture,
        score: score,
        category: category,
        retake: retake? 'Y' : 'N',
        enrolldate: enrolldate,
        canceldate: canceldate,
        isEnrolled: isEnrolled? 'Y' : 'N',
    };
  }

export default function ManagerSearchLogBox() {
    // Column 정보 입력
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
                accessor: 'score',
                Header: '학점'
            },
            {
                accessor:  'category' ,
                Header: '이수 구분'
            },
            {
                accessor:   'retake',
                Header: '재수강 여부'
            },
            {
                accessor:   'enrolldate',
                Header: '신청 내역'
            },
            {
                accessor:   'canceldate',
                Header: '신청 내역'
            },
            {
                accessor:  'isEnrolled' ,
                Header: '수강 여부'
            },
        ],
        []
    );
    
    const data = React.useMemo(
        () => [
            createData('AAA-0001', '알고리즘개론', 3, '전공필수', false, '2021-03-30', '2021-04-30', true),
            createData('AAA-0002', '자료구조개론', 3, '전공필수', false, '2021-03-30', '2021-04-30', true),
            createData('BBB-0003', '해석학1', 3, '전공필수', false, '2021-03-30', '2021-04-30', true),
            createData('DDD-0004', '논어', 2, '교양', true, '2021-03-30', '2021-04-30', true),
            createData('EEE-0005', '전자기학', 3, '전공필수', true, '2021-03-30', '2021-04-30', true),
          ],
          []
    );
    
      
    return (
        <ManagerBoxLayout>
            <SearchLogTable columns={columns} data={data}></SearchLogTable>
        </ManagerBoxLayout>
    );
}
