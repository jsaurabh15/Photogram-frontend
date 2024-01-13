import { Avatar, Button, CardHeader } from '@mui/material'
import React from 'react'
import { red } from '@mui/material/colors';

const PopularUserCard = () => {
    return (
        <div>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    S
                </Avatar>
                }
                action={
                    <Button size='small'>
                        follow
                    </Button>
                }
                title="Saurabh Jain"
                subheader="@saurabhjain"
            />
        </div>
    )
}

export default PopularUserCard
