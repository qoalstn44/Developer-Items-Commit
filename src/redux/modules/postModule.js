import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { dbService } from '../../firebase';

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
export const addTodo = createAsyncThunk('addTodo', async (newTodo) => {
  const data = await axios.post('http://localhost:3001/todos', newTodo);
  return data.data;
});
export const deleteTodo = createAsyncThunk('deleteTodo', async (todoId) => {
  await axios.delete(`http://localhost:3001/todos/${todoId}`);
  return todoId;
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
export const confirmTodo = createAsyncThunk(
  'confirmTodo',
  async ({ todoId, isDone }) => {
    await axios.patch(`http://localhost:3001/todos/${todoId}`, {
      isDone: !isDone,
    });
    return { todoId, isDone };
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
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.status = 'complete';
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
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
    builder.addCase(confirmTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            isDone: !action.payload.isDone,
          };
        } else {
          return todo;
        }
      });
      state.status = 'complete';
    });
  },
});

export default postModule.reducer;
