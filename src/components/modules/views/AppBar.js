import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};
const LogoImage =
  'https://user-images.githubusercontent.com/82520143/161506667-c500b236-f034-4d85-b3b2-b16933d7403a.png';

function AppAppBar() {
  return (
    <div>
      <AppBar
        style={{background: '#24527a'}} 
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            sx={{
            height: 120,
            }}
            alt="Logo"
            src={LogoImage}
          />

          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'모두의 수강신청'}
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
