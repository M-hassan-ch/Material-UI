import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';

export default function TxtField() {
  const [Data, setData] = useState('');

  return (
    <>
      <Container>
        <TextField multiline maxRows={4} label="Description" color='secondary' variant="outlined" onChange={(e)=>{
          setData(e.target.value);
        }}/>

        <Button onClick={()=>{
          console.log(Data);
        }}>Click me</Button>
      </Container>

    </>
  )
}
