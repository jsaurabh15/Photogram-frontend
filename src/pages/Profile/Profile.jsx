import { Avatar, Box, Button, Card, Divider, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PostCard from "../../component/Post/PostCard";
import UserReelsCard from "../../component/Reels/UserReelsCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
];

const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1];
const savedPost = [1, 1, 1, 1, 1];

const Profile = () => {
  const [value, setValue] = React.useState("post");
  const { auth } = useSelector((store) => store);
  const [open, setOpen] = useState(false);
  const handleOpenProfileModal= () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="h-full w-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg"
          />

          {true ? (
            <Button onClick={handleOpenProfileModal} variant="outlined" sx={{ borderRadius: "20px" }}>
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined" sx={{ borderRadius: "20px" }}>
              Follow
            </Button>
          )}
        </div>

        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </h1>
            <h1>
              @
              {auth.user?.firstName.toLowerCase() +
                "_" +
                auth.user?.lastName.toLowerCase()}
            </h1>
          </div>

          <div className="flex gap-5 items-center py-3">
            <span>41 posts</span>
            <span>35 followers</span>
            <span>5 followings</span>
          </div>

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
              ipsa.
            </p>
          </div>
        </div>
        <section>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs value={value} onChange={handleChange} centered>
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex  flex-wrap  justify-center gap-3 my-10">
                {reels.map((item) => (
                  <UserReelsCard />
                ))}
              </div>
            ) : (
              <div className="space-y-5 w-[70%] my-10">
                {savedPost.map((item) => (
                  <div className="border border-slate-100 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
