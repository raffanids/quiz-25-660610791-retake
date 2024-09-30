"use client";

import { CommentProps } from "@/libs/types"
import { ReplyProps } from "@/libs/types"
import Replyy from "@/components/Reply";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}:CommentProps) {
  return (
    <div>
      {/* Comment Example */}
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            { likeNum > 0 &&
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>999 คน</span>
            </div>
            }
          </div>
        </div>
        {replies.map((reply:ReplyProps) => (<Replyy key = {reply.username} {...reply} />))}
    </div>
  );
}
