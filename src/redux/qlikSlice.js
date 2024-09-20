import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import enigma from 'enigma.js';
import schema from 'enigma.js/schemas/12.170.2.json';

// Qlik Cloud WebSocket URL and App ID
const qlikServerUrl = 'wss://nl79r320hz7o1pi.sg.qlikcloud.com';
const appID = '0fddbfcd-fb95-43f3-98b6-5c1288319f38';

// Thunk to connect to Qlik app
export const connectToQlikApp = createAsyncThunk('qlik/connectToQlikApp', async () => {
  const session = enigma.create({
    schema,
    url: `${qlikServerUrl}/app/${appID}`,
    createSocket: (url) => new WebSocket(url),
  });

  try {
    const qlikApp = await session.open();
    return qlikApp;
  } catch (error) {
    throw error;
  }
});

// Thunk to fetch Qlik object data
export const fetchQlikObject = createAsyncThunk('qlik/fetchQlikObject', async (objectId, { getState }) => {
  const qlikApp = getState().qlik.qlikApp;

  if (!qlikApp) throw new Error('No Qlik app connection available');

  try {
    const qlikObject = await qlikApp.getObject(objectId);
    return qlikObject;
  } catch (error) {
    throw error;
  }
});

// Redux slice to handle the Qlik app state
const qlikSlice = createSlice({
  name: 'qlik',
  initialState: {
    qlikApp: null,
    objectData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(connectToQlikApp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(connectToQlikApp.fulfilled, (state, action) => {
        state.loading = false;
        state.qlikApp = action.payload;
      })
      .addCase(connectToQlikApp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchQlikObject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQlikObject.fulfilled, (state, action) => {
        state.loading = false;
        state.objectData = action.payload;
      })
      .addCase(fetchQlikObject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default qlikSlice.reducer;
