import React, { useState } from 'react';
import { Comment } from 'interfaces/comment-interface';
import { FaArrowUp, FaArrowDown, FaReply } from 'react-icons/fa';

interface CommentProps {
  comment: Comment;
  onUpvote: () => void;
  onDownvote: () => void;
  onReply: (commentId: string, replyContent: string) => void;
}

const CommentComponent: React.FC<CommentProps> = ({ comment, onUpvote, onDownvote, onReply }) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState('');

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
    setReplyContent('');
    setShowReplyForm(false);
  };

  return (
    <div className="pl-4 border-l-2">
      <h4 className="text-lg">{comment.author}</h4>
      <p>{comment.content}</p>
      <p className="text-sm text-gray-500">
       {'Posted on 43 min ago'}
      </p>
      <div className="flex items-center space-x-2">
        <button
          className={`mr-2 focus:outline-none ${isUpvoted ? 'text-green-500' : ''}`}
          onClick={handleUpvote}
        >
          <FaArrowUp />
        </button>
        <span>{comment.voteCount}</span>
        <button
          className={`mr-2 focus:outline-none ${isDownvoted ? 'text-red-500' : ''}`}
          onClick={handleDownvote}
        >
          <FaArrowDown />
        </button>
        <button
          className="mr-2 focus:outline-none"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          <FaReply />
        </button>
      </div>
      {showReplyForm && (
        <form className="mt-2" onSubmit={handleReply}>
          <textarea
            className="w-full p-2 mb-2"
            placeholder="Reply to this comment..."
            value={replyContent}
            onChange={(event) => setReplyContent(event.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2" type="submit">
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