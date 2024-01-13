import React from "react";
import { Card, Grid } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
const Authentication = () => {
    return (
        <div>
            <Grid container>
                <Grid className='h-screen overflow-hidden' item xs={7}>
                    <img className='h-full w-full' src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png" alt="" />
                </Grid>
                <Grid item xs={5}>
                    <div className= 'px-20 flex flex-col justify-center h-full'>

                        <Card className='card p-8'>
                            <h1 className="logo text-center">Photogram</h1>
                            <p className= "text-center text-sm pb-2 mt-2">Connecting Lives, Sharing Stories: Your Social World, Your Way</p>

                            <Routes>
                                <Route path="/" element={<Login/>}  />
                                <Route path="/login" element={<Login/>}  />
                                <Route path="/register" element={<Register/>}  />
                            </Routes>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Authentication;
