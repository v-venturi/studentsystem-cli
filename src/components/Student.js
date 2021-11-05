import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

export default function Student() {
  return (

    <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" />
      <TextField id="outlined-basic" label="Student Adress" variant="outlined" />
    </Box>
    </Container>
  );
}
