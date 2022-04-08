import './App.css';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import Manage from './components/Manage';
import ManageInfo from './components/Manage_Info';
import ManagePeriod from './components/Manage_Period';
import ManageSearch from './components/Manage_Search';
import Student from './components/Student';
import StudentBucket from './components/Student_Bucket';
import StudentClass from './components/Student_Class';
import StudentMyPage from './components/Student_Mypage';
import StudentMainpage from './components/Student_Mainpage'
import StudentEnrollmentpage from './components/Student_Enrollmentpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="signIn/*" element={<SignIn/>}/>
        <Route path="manage/" element={<Manage/>}/>
        <Route path="manage/info" element={<ManageInfo/>}/>
        <Route path="manage/period" element={<ManagePeriod/>}/>
        <Route path="manage/search" element={<ManageSearch/>}/>
        <Route path="student/" element={<Student/>}/>
        <Route path="student/bucket" element={<StudentBucket/>}/>
        <Route path="student/class" element={<StudentClass/>}/>
        <Route path="student/mypage" element={<StudentMyPage/>}/>
        <Route path='/StudentMainpage' element={<StudentMainpage></StudentMainpage>}></Route>
        <Route path='/Enrolment' element={<StudentEnrollmentpage></StudentEnrollmentpage>}></Route>
        {/* <Route path='/Inquiry' element={<Next></Next>}></Route>
        <Route path='/Basket' element={<Next></Next>}></Route> */}
      </Routes>
    </BrowserRouter>
// =======
// import {HashRouter as Router, Routes, Route} from 'react-router-dom'
// import Next from './components/nextpage'
// import StudentMainpage from './components/StudentMainpage'
// import StudentEnrolmentpage from './components/StudentEnrolmentpage';
// import React from 'react';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Homepage></Homepage>}></Route>
//         <Route path='/Next' element={<Next></Next>}></Route>

//       </Routes> 
//     </Router>
    
    
//     // <div className="App">
//     //   <Homepage></Homepage>  {/* 첫 메인페이지 */}  
//     // </div>
  );
}

export default App;
