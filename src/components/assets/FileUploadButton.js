import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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

export default function FileUploadButton() {
  const [file, setFile] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /**
   * 파일 업로드 확인
   */
    const onChangeFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      console.log(e.target.files)
    }
  }

  const Input = styled('input')({
    display: 'none',
  });
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" style={{backgroundColor: "#24527a"}}>Upload</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChangeFile}/>
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
      </Modal>
    </div>
  );
}
