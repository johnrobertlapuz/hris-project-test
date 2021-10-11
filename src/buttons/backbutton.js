import Button from '@mui/material/Button';
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Back () {
    return (

        <Button startIcon = {<ArrowBackIcon/>} size ="large" variant ="contained" color ="primary">
        Back
        </Button>
    )
}