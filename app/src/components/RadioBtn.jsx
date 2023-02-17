import { Container, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material'
import React, { useState } from 'react'

export default function () {
    const [Data, setData] = useState('try1')
    return (
        <>
            <Container>
                <FormControl>
                    <FormLabel>Category</FormLabel>
                    <RadioGroup value={Data} onChange={(e) => { setData(e.target.value) }}>
                        <FormControlLabel value={'try1'} label='Try1' control={<Radio />} />
                        <FormControlLabel value={'try2'} label='Try2' control={<Radio />} />
                        {/* <Radio /> */}
                    </RadioGroup>
                </FormControl>
            </Container>
        </>
    )
}
