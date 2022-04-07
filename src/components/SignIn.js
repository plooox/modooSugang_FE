import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Produce404© '}
      <Link color="inherit" href="../">
        모두의 수강신청
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function getCheckboxValue()  {
  // 선택된 목록 가져오기
  const query = 'input[name="LogIn_CheckBox"]:checked';
  const selectedEls = 
      document.querySelectorAll(query);
  
  // 선택된 목록에서 value 찾기
  let result = '';
  selectedEls.forEach((el) => {
    result += el.value;
  });
  if(result == 'manager') { window.location.href = "../manage"}
  else {window.location.href = "../student"}

}

function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <FormControlLabel
            control={<Checkbox value="manager" name="LogIn_CheckBox" color="primary" />}
            label="관리자"
        />
        <TextField margin="normal" required fullWidth id="email" label="Username" name="email" autoComplete="email" autoFocus />
        <TextField margin="normal" required fullWidth id="password" label="Password" name="password" type="password" autoComplete="current-password" />
        
        <Stack spacint={2} direction="row">
        <Button type="submit" halfWidth variant="contained" sx={{ mt: 3, mb: 2}} onClick={getCheckboxValue} > SIGN IN </Button>
        <Button type="submit" halfWidth variant="contained" sx={{ mt: 3, mb: 2, ml: 5 }}> ID/PW찾기 </Button>
        </Stack>

        <Copyright sx={{ mt: 8, mb: 4}} />     
      </Box>
    </Container>

  );
}

export default SignIn