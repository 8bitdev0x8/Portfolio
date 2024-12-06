import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Blog1_Image1 from '../src/Images/Blog_Images/Blog1/1.jpeg';
import Blog1_Image2 from '../src/Images/Blog_Images/Blog1/2.jpeg';

// Types
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
  timestamp: string;
}

// Initial state
interface BlogState {
  blogPosts: BlogPost[];
  comments: { [postId: number]: Comment[] };
  likes: { [postId: number]: number };
}

const initialState: BlogState = {
  blogPosts: [
    {
      id: 1,
      title: "Behind the Scenes: Shooting and Editing Our Video",
      date: "November 29, 2024",
      content: "Brainstorming Ideas - Our group started by brainstorming a variety of creative product shoot ideas. Each membercontributed unique perspectives, resulting in several intriguing concepts.Selecting the Theme After discussing the options, we held a vote and decided to create a short video promoting safety for women. Assigning Roles Roles were divided among the team. I was responsible for video editing and managing the lighting. Additionally, I helped identify a suitable location for the shoot. The story required an outdoor setting, so we initially considered shooting in the city. However, managing a crowd with a small team of four, including two actors, proved impractical. We ultimately chose a quieter location on the Limerick campus. Challenges on Shoot Day The shoot day presented several hurdles. The overcast weather disrupted continuity, and interruptions from people walking through the area delayed progress. Despite these challenges, we managed to shoot half the story. Unfortunately, rain forced us to pack up early. Shifting to an Indoor Concept After the outdoor shoot setbacks, we revisited the brainstorming phase. The team decided on an indoor product shoot to avoid weather and crowd issues. Storyboarding and Planning The storyboard and script were finalized before moving forward with the new plan. This ensured we had a clear direction during the shoot. Equipment and Cast We shot the entire video using an iPhone. A friend volunteered to act, adding authenticity to the project. Execution We set up the required props and carefully arranged the frames and lighting for each scene. Once all necessary shots were captured, the team wrapped up. Post-Production The footage was uploaded to cloud storage for safekeeping. The next day, we gathered to edit the video. This included sound design, color grading, stabilization, and final touch-ups. Final Output The completed video was exported and compressed to under 25 MB without compromising quality. This comprehensive process encapsulated our journey from brainstorming to delivering a polished product.",
      author: "Jojy Saju Joseph",
      image: [Blog1_Image1, Blog1_Image2],
    },
  ],
  comments: {},
  likes: {
    1: 0,
    2: 0,
    3: 0,
  },
};

// Slice
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    likePost(state, action: PayloadAction<number>) {
      const postId = action.payload;
      state.likes[postId] += 1;
    },
    addComment(state, action: PayloadAction<{ postId: number; comment: Comment }>) {
      const { postId, comment } = action.payload;
      if (!state.comments[postId]) {
        state.comments[postId] = [];
      }
      state.comments[postId].push(comment);
    },
  },
});

export const { likePost, addComment } = blogSlice.actions;

export default blogSlice.reducer;
