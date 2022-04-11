import * as React from 'react';
import EnrollmentTable from './EnrollmentTable'
import EnrolledTable from './EnrolledTable'
import BasketTable from './BasketTable'
import { Button } from '@mui/material';

// 데이터 객체 생성
function createData(code, lecture, department, category, time, classroom, score, to) {
    return { 
        code: code,
        lecture: lecture,
        department: department,
        category: category,
        time: time,
        classroom: classroom,
        score: score,
        to: to,
        btn: row =>(
            <div>
                <Button >신청</Button>
            </div>
        ),
    };
  }

export default function StuEnrolmentpageBox() {
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
                accessor:  'classroom' ,
                Header: '분반'
            },
            {
                accessor:  'score' ,
                Header: '학점'
            },
            {
                accessor:  'to' ,
                Header: '잔여 인원',
            },
        ],
        []
    );

    const columns_basket = React.useMemo(
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
                accessor:  'professor' ,
                Header: '교수명',
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
            createData('AAA-0001', '알고리즘개론', '컴퓨터공학과', '전공필수', '[월]10:30~12:00 [수]9:00~10:30', 1, 3, '10/60'),
            createData('AAA-0002', '자료구조개론', '컴퓨터공학과', '전공필수', '[월]10:30~12:00 [수]9:00~10:30', 1, 3, '10/60'),
            createData('BBB-0003', '해석학1', '수학과', '전공필수', '[월]10:30~12:00 [수]9:00~10:30', 1, 3, '10/60'),
            createData('DDD-0004', '논어', '공통', '교양', '[월]10:30~12:00 [수]9:00~10:30', 1, 3, '10/60'),
            createData('EEE-0005', '전자기학', '전기전자공학부', '전공필수', '[월]10:30~12:00 [수]9:00~10:30', 1, 3, '10/60'),
          ],
          []
    );
    
    function createData_basket(code, lecture, category, time, professor, classroom, score) {
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

        
        const data_basket = React.useMemo(
            () => [
                createData_basket('AAA-0001', '알고리즘개론', '전공필수', '[월]10:30~12:00 [수]9:00~10:30','지준영', 'A', 3),
                createData_basket('AAA-0002', '자료구조개론', '전공필수', '[월]10:30~12:00 [수]9:00~10:30', '지준영', 'A', 3),
                createData_basket('BBB-0003', '해석학1', '전공필수', '[월]10:30~12:00 [수]9:00~10:30','지준영', 'A', 3),
                createData_basket('DDD-0004', '논어', '교양', '[월]10:30~12:00 [수]9:00~10:30','지준영', 'B', 3),
                createData_basket('EEE-0005', '전자기학', '전공필수', '[월]10:30~12:00 [수]9:00~10:30','지준영', 'B', 3),
              ],
              []
        );
        
    return (
        <>
        <EnrollmentTable columns={columns} data={data}></EnrollmentTable>
        <BasketTable columns={columns_basket} data={data_basket}></BasketTable>
        <EnrolledTable columns={columns} data={data}></EnrolledTable>
        </>
    );
}