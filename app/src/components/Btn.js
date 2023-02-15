import React from 'react'
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import { Container } from '@mui/material';

export default function Btn() {
    return (
        <>
            <Container>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Container>

            <ButtonGroup variant="contained">
                <Button >Contained</Button>
                <Button >Contained</Button>
                <Button >Contained</Button>
            </ButtonGroup>

        </>
    )
}
