import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
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
import { authService, dbService } from '../../firebase';

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk('getPosts', async () => {
  const data = [];
  const q = query(collection(dbService, 'posts'), orderBy('createAt', 'desc'));
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    const postData = {
      id: doc.id,
      ...doc.data(),
    };
    data.push(postData);
  });
  return data;
});
export const addPost = createAsyncThunk(
  'addPost',
  async ({ title, body, category }) => {
    const postData = {
      title: title,
      body: body,
      createAt: Date.now(),
      userUID: authService.currentUser.uid,
      clickCounter: 0,
      category: category,
    };
    await addDoc(collection(dbService, 'posts'), postData);
    return { title, body, category };
  }
);
export const deletePost = createAsyncThunk('deletePost', async ({ postId }) => {
  await deleteDoc(doc(dbService, `posts/${postId}/`));
  return { postId };
});
export const updateTodo = createAsyncThunk(
  'updateTodo',
  async ({ todoId, title, body }) => {
    await axios.patch(`http://localhost:3001/todos/${todoId}`, {
      title: title,
      body: body,
    });
    return { todoId, title, body };
  }
);
export const clickPost = createAsyncThunk(
  'clickPost',
  async ({ postId, eventPostCounter }) => {
    await updateDoc(doc(dbService, `posts/${postId}/`), {
      clickCounter: eventPostCounter + 1,
    });
    return { postId, eventPostCounter };
  }
);

export const postModule = createSlice({
  name: 'Posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = 'complete';
    });
    // builder.addCase(addPost.fulfilled, (state, action) => {
    //   state.posts = [...state.posts, action.payload];
    //   state.status = 'complete';
    // });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.status = 'complete';
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            title: action.payload.title,
            body: action.payload.body,
          };
        } else {
          return todo;
        }
      });
      state.status = 'complete';
    });
    builder.addCase(clickPost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            clickCounter: action.payload.eventPostCounter + 1,
          };
        } else {
          return post;
        }
      });
      state.status = 'complete';
    });
  },
});

export default postModule.reducer;
