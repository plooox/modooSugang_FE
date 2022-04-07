import logo from './logo.svg';
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
