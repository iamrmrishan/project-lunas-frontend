import React, { useState } from 'react';
import CommentComponent from './comment-card';
import { Comment } from 'interfaces/comment-interface';

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);

  const handleReply = (commentId: string, replyContent: string) => {
    const commentListCopy = JSON.parse(JSON.stringify(commentList));

    const addReply = (comments: Comment[]) => {
      for (let comment of comments) {
        if (comment.id === commentId) {
          const newReply: Comment = {
            id: 'uniqueId',
            author: 'User',
            content: replyContent,
            voteCount: 0,
            children: [],
          };
          comment.children.push(newReply);
          return;
        }
        addReply(comment.children);
      }
    };

    addReply(commentListCopy);
    setCommentList(commentListCopy);
  };

  const handleUpvote = (commentId: string) => {
    // your upvote logic
  };

  const handleDownvote = (commentId: string) => {
    // your downvote logic
  };

  return (
    <div className="p-4">
      {commentList.map((comment) => (
        <CommentComponent
          key={comment.id}
          comment={comment}
          onUpvote={() => handleUpvote(comment.id)}
          onDownvote={() => handleDownvote(comment.id)}
          onReply={handleReply}
        />
      ))}
    </div>
  );
};

export default Comments;
