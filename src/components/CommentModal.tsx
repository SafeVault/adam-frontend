import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Avatar1 from "../assets/avater1.jpeg";

const avatars = {
  1: Avatar1,
};

export default function CommentModal() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "The Founder (Work)",
      text: "I think there should be a tab here for active employee and inactive. (Inactive would be those that are no longer part)",
      time: "7 days ago",
      avatar: avatars[1],
    },
    {
      id: 2,
      name: "Duche Kelvin",
      text: "If someone is no longer part, the person can be deleted from the system, as simple as that",
      time: "7 days ago",
      avatar: "D",
    },
    {
      id: 3,
      name: "The Founder (Work)",
      text: "Okay that works",
      time: "3 days ago",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const addComment = () => {
    if (newComment.trim() === "") return;
    const newEntry = {
      id: comments.length + 1,
      name: "You",
      text: newComment,
      time: "Just now",
      avatar:
        avatars[
          ((comments.length % Object.keys(avatars).length) +
            1) as keyof typeof avatars
        ],
    };
    setComments([...comments, newEntry]);
    setNewComment("");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 sm:px-6 md:px-0">
      <div className="w-full max-w-lg sm:max-w-md bg-white p-4 shadow-lg rounded-lg relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="text-xl" />
        </button>
        <h2 className="text-lg font-semibold mb-3">Comment</h2>
        <div className="space-y-4 overflow-y-auto max-h-60 sm:max-h-48">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-3">
              {comment.avatar ? (
                <img
                  src={comment.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-black font-bold">
                  {comment.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold">
                  {comment.name}{" "}
                  <span className="text-gray-400 text-xs">{comment.time}</span>
                </p>
                <p className="text-sm text-gray-700">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 border rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Reply..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={addComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
