import React, { useState } from "react";
import { Comment } from "interfaces/comment-interface";
import { FaArrowUp, FaArrowDown, FaReply } from "react-icons/fa";
import { BsDot } from 'react-icons/bs';
import ReactQuill from 'react-quill';

interface CommentProps {
  comment: Comment;
  onUpvote: () => void;
  onDownvote: () => void;
  onReply: (commentId: string, replyContent: string) => void;
}

const CommentComponent: React.FC<CommentProps> = ({
  comment,
  onUpvote,
  onDownvote,
  onReply,
}) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const handleUpvote = () => {
    if (isUpvoted) {
      setIsUpvoted(false);
      onUpvote();
    } else {
      setIsUpvoted(true);
      setIsDownvoted(false);
      onUpvote();
    }
  };

  const handleDownvote = () => {
    if (isDownvoted) {
      setIsDownvoted(false);
      onDownvote();
    } else {
      setIsDownvoted(true);
      setIsUpvoted(false);
      onDownvote();
    }
  };

  const handleReply = (event: React.FormEvent) => {
    event.preventDefault();
    onReply(comment.id, replyContent);
    setReplyContent("");
    setShowReplyForm(false);
  };

  return (
    <div className="pl-4 border-l-2">
      <div className="flex flex-row ">
        <div className="text-xs text-primaryText dark:text-secondaryText ">{comment.author}</div>
        <BsDot className='text-primaryBtn-2 dark:text-secondaryBtn2' />
        <div className="text-xs text-primaryText text-opacity-50 dark:text-secondaryText dark:text-opacity-50 font-medium">{"Posted on 43 min ago"}</div>
      </div>

      <div className='py-2 text-primaryText dark:text-secondaryText'>{comment.content}</div>
      <div className="flex items-center space-x-2 mb-4 gap-2">
        <button
          className={`focus:outline-none ${
            isUpvoted ? "text-green-500" : "text-primaryText dark:text-secondaryText text-opacity-50 dark:text-opacity-50"
          }`}
          onClick={handleUpvote}
        >
          <FaArrowUp />
        </button>
        <span className='text-primaryText dark:text-secondaryText'>{comment.voteCount}</span>
        <button
          className={`focus:outline-none ${
            isDownvoted ? "text-red-500" : "text-primaryText dark:text-secondaryText text-opacity-50 dark:text-opacity-50"
          }`}
          onClick={handleDownvote}
        >
          <FaArrowDown />
        </button>
        <button
          className="focus:outline-none text-primaryText dark:text-secondaryText text-opacity-50 dark:text-opacity-50 "
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          <FaReply />
        </button>
      </div>
      {showReplyForm && (
        <form className="mt-2 flex flex-col items-end" onSubmit={handleReply}>
          <ReactQuill
            className="w-full p-2 mb-2"
            placeholder="Reply to this comment..."
            value={replyContent}
            onChange={(event) => setReplyContent(event)}
          />
          <button className="mr-2 rounded bg-primaryBtn text-primaryBtnText dark:bg-secondaryBtn dark:text-secondaryBtnText text-sm px-4 py-2 " type="submit">
            Submit Reply
          </button>
        </form>
      )}
      {comment.children.map((childComment) => (
        <CommentComponent
          key={childComment.id}
          comment={childComment}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onReply={onReply}
        />
      ))}
    </div>
  );
};

export default CommentComponent;
