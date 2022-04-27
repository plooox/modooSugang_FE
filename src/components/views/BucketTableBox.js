import * as React from 'react';
import { Button } from '@mui/material';
import BucketTable from './BucketTable'
import axios from 'axios';

// 장바구니 2번 테이블 프레임

export default function StuEnrolmentpageBox() {

                    
    const [data, setResData] = React.useState([]); // 1번테이블에 띄울 data 호출
    const handleEnroll = async(joinData) =>{
        await axios({
          url: 'api/student/enrolled/basket_list/',
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
        id : '21611868',
        univ : "구름대학교",
      };


    // Column 정보 입력
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
        <BucketTable columns={columns} data={data}></BucketTable>
        </>
    );
}
