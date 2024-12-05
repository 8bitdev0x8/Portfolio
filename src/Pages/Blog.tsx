import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, addComment } from '../blogSlice';
import { RootState } from '../store';
import './Blog.css';

const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state: RootState) => state.blog.blogPosts);
  const comments = useSelector((state: RootState) => state.blog.comments);
  const likes = useSelector((state: RootState) => state.blog.likes);

  const [newComment, setNewComment] = useState({
    title: '',
    author: '',
    content: '',
    image: null as File | null,
  });

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setNewComment((prev) => ({ ...prev, image: file }));
  };

  const handleSaveComment = (e: React.FormEvent<HTMLFormElement>, postId: number) => {
    e.preventDefault();

    const currentDateTime = new Date().toLocaleString();
    const commentWithImage = {
      ...newComment,
      image: newComment.image ? URL.createObjectURL(newComment.image) : null,
      timestamp: currentDateTime,
    };

    dispatch(addComment({ postId, comment: commentWithImage }));

    setNewComment({ title: '', author: '', content: '', image: null });
  };

  const handleLike = (postId: number) => {
    dispatch(likePost(postId));
  };

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <article key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>
            <em>{post.date}</em>
          </p>
          <p>{post.content}</p>
          <p>
            {post.image &&
              post.image.map((image, idx) => (
                <div key={idx} className="image-container">
                  <img src={image} alt={`${post.title} - Image ${idx + 1}`} />
                </div>
              ))}
          </p>
          <p><strong>Author:</strong> {post.author}</p>

          <div className="reactions">
            <button onClick={() => handleLike(post.id)} className="like-button">
              👍 Like
            </button>
            <span>{likes[post.id]} Likes</span>
          </div>

          <h3>Comments</h3>
          <form onSubmit={(e) => handleSaveComment(e, post.id)}>
            <input
              type="text"
              name="title"
              placeholder="Comment Title"
              value={newComment.title}
              onChange={handleCommentChange}
            />
            <input
              type="text"
              name="author"
              placeholder="Your Name"
              value={newComment.author}
              onChange={handleCommentChange}
            />
            <textarea
              name="content"
              placeholder="Write your comment..."
              value={newComment.content}
              onChange={handleCommentChange}
            />
            <input type="file" onChange={handleImageUpload} />
            <button type="submit">Save Comment</button>
          </form>

          {comments[post.id]?.map((cmt, idx) => (
            <div key={idx} className="comment">
              <h4>{cmt.title}</h4>
              <p>{cmt.author}</p>
              <p>{cmt.content}</p>
              {cmt.timestamp && <p className="timestamp"><em>{cmt.timestamp}</em></p>}
              {cmt.image && <img src={cmt.image} alt="Comment Attachment" />}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};

export default Blog;
