export const isLikeByRegisteredUser = (regUserId, post) => {
    
    for(let user of post.liked) {
        if(user?.id === regUserId) {
            return true;
        }
    }
    return false;
}