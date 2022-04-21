import * as React from 'react';
import MypageResultTable from './MypageResultTable'
import StudentMypageTimetable from './StudentMypageTimetable'
import axios from 'axios';

export default function StuEnrolmentpageBox() {

    // 서버에 api 요청 (GET)
    const [resData, setResData] = React.useState([]);
    const InitPostMethod = async() => {
        await axios({
            url: 'api/student/Mypage',
            method: 'POST',
            baseURL: 'http://localhost:8080',
            withCredentials: true.valueOf,
            data: {
                univ: sessionStorage.getItem('univ'),
                id: sessionStorage.getItem('id'),
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
            window.location.href = '/student';
        });
    }

    // Define Column
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
                Header: '학과',
            },
            {
                accessor: 'lecture_professor',
                Header: '교수',
            },
            {
                accessor: 'lecture_class',
                Header: '학년',
            },
            {
                accessor:  'lecture_classify' ,
                Header: '전공/교양',
            },
            {
                accessor:   'lecture_time',
                Header: '시간',
            },
            {
                accessor:  'lecture_classroom' ,
                Header: '분반',
            },
            {
                accessor:  'lecture_room' ,
                Header: '강의실',
            },
            {
                accessor:  'lecture_credit' ,
                Header: '학점',
            },
        ],
        []
    );

    React.useEffect(() => {
        const univName = sessionStorage.getItem('univ');
        const ids = sessionStorage.getItem('id');
        if(univName !== "" && ids !== ""){
            InitPostMethod();
        }      
    },[]);
      
    return (
        <>
        <MypageResultTable columns={columns} data={resData}></MypageResultTable>
        <StudentMypageTimetable></StudentMypageTimetable>
        </>
    );
}
