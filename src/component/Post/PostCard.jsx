import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, likePostAction } from "../../redux/post/post.action";
import { isLikeByRegisteredUser } from "../../utils/isLikeByRegisteredUser";

const PostCard = ({item}) => {

    const [showComments, setShowComments] = useState(false);
    const dispatch = useDispatch();
    const {auth} = useSelector(store => store)

    const handleShowComments = () => setShowComments(!showComments);

    const handleCreateComment = (content) => {
        const reqData = {
            postId: item.id,
            data: {
                content
            }
        }
        dispatch(createCommentAction(reqData))
    }

    const handleLikePost = () => {
        dispatch(likePostAction(item.id))
    }


    return (
        <Card className="">
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={item.user.firstName + " " + item.user.lastName}
                subheader={`@${item.user.firstName.toLowerCase()}_${item.user.lastName.toLowerCase()}`}
            />
            <CardMedia
                component="img"
                height="194"
                image={item?.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {item?.caption}
                </Typography>
            </CardContent>
            <CardActions className="flex justify-between">
                <div>
                    <IconButton onClick={handleLikePost}>
                        {
                            isLikeByRegisteredUser(auth.user?.id ,item) ? <FavoriteIcon /> : <FavoriteBorderIcon/>
                        }
                    </IconButton>
                    <IconButton>
                        {
                            <ShareIcon />
                        }
                    </IconButton>
                    <IconButton onClick={handleShowComments}>
                        {
                            <ChatBubbleIcon />
                        }
                    </IconButton>
                </div>
                <div >
                   <IconButton>
                        {true ? <BookmarkIcon /> : <BookmarkBorderIcon/>}
                   </IconButton>
                </div>
             </CardActions>

           { showComments &&  <section>
                <div className="flex items-center space-x-5 mx-3 my-5">
                    <Avatar sx={{}} />
                    <input onKeyPress={(e) => {
                        if(e.key === "Enter") {
                            handleCreateComment(e.target.value)
                            console.log("enter pressed", e.target.value)
                        }
                    }} className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2" type="text"  placeholder="Write your comment..."/>
                </div>
                <Divider/>

                {
                    item.comments?.map((comment) => <div className="mx-3 space-y-2 my-5 text-sm">
                    <div className="flex items-center space-x-5">
                            <Avatar sx={{height:"2rem", width: "2rem", fontSize: "0.8rem"}}>
                                {comment.user.firstName[0].toUpperCase()}
                            </Avatar>

                            <p>{comment.content}</p>
                        </div>
                    </div>
                )}
             </section>}
        </Card>
    );
};

export default PostCard;
