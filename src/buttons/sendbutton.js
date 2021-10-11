import Button from '@mui/material/Button';
import React from 'react'
import SendIcon from '@material-ui/icons/Send';


function Send () {
    return (

        <Button startIcon = {<SendIcon/>}  size = "large" variant = "contained" color ="primary">
            Send
            </Button>
    )
}

