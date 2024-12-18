import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    
  },
});


export default api;
