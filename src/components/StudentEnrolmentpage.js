import * as React from 'react';
import AppFooter from './views/AppFooter';
import AppBar from './views/AppBar';
import withRoot from './withRoot';
import StuEnrolmentpageBox from './views/StuEnrolmentpageBox'

function StudentEnrolmentpage() {
  return (
    <React.Fragment>
        <AppBar></AppBar>
        <StuEnrolmentpageBox></StuEnrolmentpageBox>
        <AppFooter></AppFooter>
    </React.Fragment>
  );
}

export default withRoot(StudentEnrolmentpage);
