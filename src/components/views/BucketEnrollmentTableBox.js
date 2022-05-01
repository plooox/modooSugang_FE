import * as React from 'react';
import { Button } from '@mui/material';
import BucketEnrollmentTable from './BucketEnrollmentTable'
import axios from 'axios';

// 장바구니 페이지 1번 테이블 [교과목 조회]

export default function BucketEnrollmentTableBox() {

                
    const [data, setResData] = React.useState([]); // 1번테이블에 띄울 data 호출
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
        id : sessionStorage.getItem('id'),
        univ : sessionStorage.getItem('univ'),
      };



    const columns = React.useMemo(
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

    
      
    return (
        <>
        <BucketEnrollmentTable columns={columns} data={data}></BucketEnrollmentTable>
        </>
    );
}
