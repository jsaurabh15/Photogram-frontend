import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            src="https://cdn.pixabay.com/photo/2017/03/24/18/40/russian-2171864_1280.jpg"
          >
          </Avatar>
          <p>saurabhj...</p>
        </div>
    </div>
  )
}

export default StoryCircle
