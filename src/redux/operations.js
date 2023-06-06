import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://647def07af984710854aa293.mockapi.io/";

export const fetchUsers = createAsyncThunk("users/fetchAll",
 async (_,thunkAPI) => {
    try{
      
    const response = await axios.get("/users");
    let result = response.data.map((item)=>{return {...item, status:"follow"}});

    return result;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }  
});

/* export const addContact = createAsyncThunk(
      "contacts/addContact",
      async ({name,number}, thunkAPI) => {
        try {
          const response = await axios.post("/contacts", {name, number});
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );

    export const deleteContact = createAsyncThunk(
      "contacts/deleteContact",
      async (contactId, thunkAPI) => {
        try {
          const response = await axios.delete(`/contacts/${contactId}`);
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );
 */