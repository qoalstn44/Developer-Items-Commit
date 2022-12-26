import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { dbService } from '../../firebase';

const initialState = {
  comments: [],
};

// createAsyncThunk 부분
export const getComment = createAsyncThunk('getComment', async (commentId) => {
  const data = [];
  const q = query(
    collection(dbService, `posts/${commentId}/comment`),
    orderBy('createAt', 'desc')
  );
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    const commentData = {
      id: doc.id,
      ...doc.data(),
    };
    data.push(commentData);
  });
  return data;
});

export const addComment = createAsyncThunk(
  'addComment',
  async ({ postId, comment }) => {
    const commentData = {
      createAt: Date.now(),
      creator: 'kim',
      body: comment,
      // displayName: authService.currentUser.displayName,
      // photoURL: authService.currentUser.photoURL,
    };
    await addDoc(collection(dbService, `posts/${postId}/comment`), commentData);
    return commentData;
  }
);
export const updateComment = createAsyncThunk(
  'updateComment',
  async ({ postId, commentId, newBody }) => {
    await updateDoc(doc(dbService, `posts/${postId}/comment/${commentId}`), {
      body: newBody,
    });
    return { commentId, newBody };
  }
);
export const deleteComment = createAsyncThunk(
  'deleteComment',
  async ({ postId, commentId }) => {
    await deleteDoc(doc(dbService, `posts/${postId}/comment/${commentId}`));
    return { commentId };
  }
);

// createSlice 부분
export const commentModule = createSlice({
  name: 'Posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.comments = [action.payload, ...state.comments];
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.comments = state.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            body: action.payload.newBody,
          };
        } else {
          return comment;
        }
      });
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload.commentId
      );
    });
  },
});

export default commentModule.reducer;
