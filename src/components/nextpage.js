import * as React from 'react';
import AppFooter from './views/AppFooter';
import AppBar from './views/AppBar';
import withRoot from './withRoot';
import AdminpageBox from './views/ManagerBox'
import FileUploadButton from './assets/FileUploadButton'

function Nextpage() {
  return (
    <React.Fragment>
      {/* 
        AppBar: 맨 위 상단바 구현
        AdminpageBox: 가운데 테이블
        FileUploadButton: 업로드 버튼 구현
        AppFooter: 페이지 하단바 구현
      */}
      <AppBar></AppBar>
      <AdminpageBox></AdminpageBox>
      {/* <FileUploadButton></FileUploadButton> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Nextpage);
