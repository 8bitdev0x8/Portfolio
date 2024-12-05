import React, { useState } from 'react';
import './Blog.css';
import Blog1_Image1 from '../Images/Blog_Images/Blog1/1.jpeg';
import Blog1_Image2 from '../Images/Blog_Images/Blog1/2.jpeg';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
  author: string;
  image: string[] | null;
}

interface Comment {
  title: string;
  author: string;
  content: string;
  image: string | null;
  timestamp: string; // New property for date and time
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Behind the Scenes: Shooting and Editing Our Video",
    date: "November 29, 2024",
    content: "Brainstorming Ideas Our group started by brainstorming a variety of creative product shoot ideas. Each membercontributed unique perspectives, resulting in several intriguing concepts.Selecting the Theme After discussing the options, we held a vote and decided to create a short video promoting safety for women. Assigning Roles Roles were divided among the team. I was responsible for video editing and managing the lighting. Additionally, I helped identify a suitable location for the shoot. The story required an outdoor setting, so we initially considered shooting in the city. However, managing a crowd with a small team of four, including two actors, proved impractical. We ultimately chose a quieter location on the Limerick campus. Challenges on Shoot Day The shoot day presented several hurdles. The overcast weather disrupted continuity, and interruptions from people walking through the area delayed progress. Despite these challenges, we managed to shoot half the story. Unfortunately, rain forced us to pack up early. Shifting to an Indoor Concept After the outdoor shoot setbacks, we revisited the brainstorming phase. The team decided on an indoor product shoot to avoid weather and crowd issues. Storyboarding and Planning The storyboard and script were finalized before moving forward with the new plan. This ensured we had a clear direction during the shoot. Equipment and Cast We shot the entire video using an iPhone. A friend volunteered to act, adding authenticity to the project. Execution We set up the required props and carefully arranged the frames and lighting for each scene. Once all necessary shots were captured, the team wrapped up. Post-Production The footage was uploaded to cloud storage for safekeeping. The next day, we gathered to edit the video. This included sound design, color grading, stabilization, and final touch-ups. Final Output The completed video was exported and compressed to under 25 MB without compromising quality. This comprehensive process encapsulated our journey from brainstorming to delivering a polished product.",
    author: "Jojy Saju Joseph",
    image: [Blog1_Image1, Blog1_Image2 ],
  },
  {
    id: 2,
    title: "Behind the Scenes: Shooting and Editing Our Video",
    date: "November 20, 2024",
    content: "We’ve reached our first major milestone! Thanks to all our supporters who made this possible. Here’s a quick recap of our journey so far.",
    author: "Jojy Saju Joseph",
    image: null,
  },
  {
    id: 3,
    title: "What’s Next?",
    date: "November 10, 2024",
    content: "The future is bright, and we have big plans ahead. Keep following us to stay updated on our latest projects and initiatives!",
    author: "Emily White",
    image: null,
  },
];

const Blog: React.FC = () => {
  const [comments, setComments] = useState<{ [postId: number]: Comment[] }>({});
  const [likes, setLikes] = useState<{ [postId: number]: number }>(
    blogPosts.reduce((acc, post) => {
      acc[post.id] = 0; // Initialize each post with 0 likes
      return acc;
    }, {} as { [postId: number]: number })
  );

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

    const currentDateTime = new Date().toLocaleString(); // Get current date and time

    const commentWithImage = {
      ...newComment,
      image: newComment.image ? URL.createObjectURL(newComment.image) : null,
      timestamp: currentDateTime, // Add the timestamp
    };

    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), commentWithImage],
    }));

    setNewComment({ title: '', author: '', content: '', image: null });
  };

  const handleLike = (postId: number) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
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
              {cmt.timestamp && <p className="timestamp"><em>{cmt.timestamp}</em></p>} {/* Display the timestamp */}
              {cmt.image && <img src={cmt.image} alt="Comment Attachment" />}
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};

export default Blog;
