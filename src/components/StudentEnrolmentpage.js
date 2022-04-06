import * as React from 'react';
import AppFooter from './views/AppFooter';
import AppBar from './views/AppBar';
import withRoot from './withRoot';
import BasketTable from './views/BasketTable'
import EnrolledTable from './views/EnrolledTable'

function StudentEnrolmentpage() {
  return (
    <React.Fragment>
        <AppBar></AppBar>
        <BasketTable></BasketTable>
        <EnrolledTable></EnrolledTable>
        <AppFooter></AppFooter>
    </React.Fragment>
  );
}

export default withRoot(StudentEnrolmentpage);
