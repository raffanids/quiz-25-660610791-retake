// You can define interfaces for all React components here.
interface PostOwnnerProps{
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
}
export type { PostOwnnerProps };

interface CommentProps{
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
    replies : ReplyProps[];
}
export type { CommentProps };

// Do not forget to export properly.

interface ReplyProps {
    userImagePath : string;
    username : string;
    replyText : string;
    likeNum : number;
}
export type { ReplyProps };
