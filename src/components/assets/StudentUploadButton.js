import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function StudentUploadButton() {
  
  const [file, setFile] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const uploadFile = async() => {
    const formData = new FormData();
    formData.append('univ', sessionStorage.getItem('univ'));
    formData.append('file', file)
    await axios({
      method: "POST",
      baseURL: 'http://localhost:8080/api/manage/upload/studentInfo',
      // baseURL: '/api/manage/upload/studentInfo',
      withCredentials: true,
      data: formData
    }).then(function callback(response){
      console.log("응답");
      handleClose();
    })
    .catch(  function CallbackERROR(response){
      alert("ERROR!");
    });
  }

  const Input = styled('input')({
    display: 'none',
  });
  return (
    <Box display='flex' justifyContent='flex-end' sx={{m: 4}}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <div class = "upload">
          <Button onClick={handleOpen} variant="contained" style={{backgroundColor: "#24527a"}}>Upload</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <label htmlFor="contained-button-file">
                <input type="file" onChange={ (e)=>{
                  setFile(e.target.files[0]);
                } } />
                <Button  variant="contained" style={{backgroundColor: "#24527a"}} 
                  onClick={ () => uploadFile() }>업로드</Button>
              </label>
            </Box>
          </Modal>
        </div>
      </Stack>
    </Box>
  );
}