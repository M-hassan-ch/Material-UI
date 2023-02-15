import React from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

export default function Icon() {
    return (
        <>
            <Container>
                <AccessibilityNewIcon fontSize="large"></AccessibilityNewIcon>
                <AccessibilityNewIcon></AccessibilityNewIcon>
                <Button variant='contained' endIcon={<AccessibilityNewIcon/>}>Welcome</Button>
                <Button variant='contained' startIcon={<AccessibilityNewIcon/>}>Welcome</Button>
            </Container>

        </>
    )
}
