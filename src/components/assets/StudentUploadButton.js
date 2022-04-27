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
  // const [file, setFile] = React.useState(null);
  const [file, changeFile] = React.useState();
  const [fileName, changeFileName] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  changeFile(e.target.files[0]);
                  changeFileName(e.target.files[0].name);
                } } />
                <form>
                  <div class = "address"><input type="text" id='UploadAddress'/>
                  <Button  variant="contained" style={{backgroundColor: "#24527a"}} 
                    onClick={ (e) => UploadAddress() }>업로드</Button>
                  </div>
                </form>
              </label>
            </Box>
          </Modal>
        </div>
      </Stack>
    </Box>
  );
}

function UploadAddress(e){
    const handlePost = async(joinData) =>{
      await axios({
        url :'api/manage/upload/studentInfo',
        method: "post",
        baseURL:'http://localhost:8080',
        withCredentials: true,
        data: joinData
      }).then(function callback(response){
        console.log("응답");
      })
      .catch(  function CallbackERROR(response){
        alert("ERROR!");
      });
    };
    let url = document.getElementById('UploadAddress').value;
  
    if(url == ""){
      alert("주소를 입력해주세요.")
    }else{
      const joinData = {
        url: url,
      };
      handlePost(joinData);
      console.log(joinData);
    }
  }