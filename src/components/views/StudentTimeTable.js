import * as React from 'react';
import MypageResultTable from './MypageResultTable'
import StudentMypageTimetable from './StudentMypageTimetable'
import axios from 'axios';

export default function StuEnrolmentpageBox() {
    
    const [major, setMajor] = React.useState(0);
    const [culture, setCulture] = React.useState(0);
    const [experiment, setExperiment] = React.useState(0);

    // 전공, 교양, 실험 학점 계산기
    const settingSummary = () => {
        var ma = 0;
        var cu = 0;
        var ex = 0;
        for (var i = 0; i<resData.length; i++) {
            if (resData[i]["lecture_classify"] === "전공") {
                console.log("1");
                ma = ma + resData[i]["lecture_credit"];
            } else if (resData[i]["lecture_classify"] === "교양") {
                console.log("2");
                cu = cu + resData[i]["lecture_credit"];
            } else if (resData[i]["lecture_classify"] === "실험") {
                console.log("");
                ex = ex + resData[i]["lecture_credit"];
            }
        }
        setMajor(ma);
        setCulture(cu);
        setExperiment(ex);
    }

    // 서버에 api 요청 (POST)
    // data: {
    //     univ: sessionStorage.getItem('univ'),
    //     id: sessionStorage.getItem('id'),
    // }
    const [resData, setResData] = React.useState([]);
    const InitPostMethod = async() => {
        await axios({
            baseURL: '/api/student/Mypage/Basket',
            method: 'POST',
            withCredentials: true.valueOf,
            data: {
                univ: sessionStorage.getItem("univ"),
                id: sessionStorage.getItem("id"),
                semester : "2022_1",
            }
        },
        )
        .then(function callback(response){
            // Table data -> 서버에서 받은 데이터
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
    // 한번만 실행
    React.useEffect(() => {
        const univName = sessionStorage.getItem('univ');
        const ids = sessionStorage.getItem('id');
        if(univName !== "" && ids !== ""){
            InitPostMethod();
        }      
    },[]);
    // 값이 바뀔때마다 반복 실행
    React.useEffect(() => { 
        settingSummary();
    },);
      
    return (
        <>
               <StudentMypageTimetable data={resData}></StudentMypageTimetable>
        </>
    );
}
