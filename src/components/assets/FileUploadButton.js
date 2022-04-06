import * as React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



export default function FileUploadButton() {
  const [file, setFile] = React.useState(null);
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
    <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChangeFile}/>
      <Button variant="contained" component="span">
        Upload
      </Button>
    </label>
  );
}
