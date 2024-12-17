import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api"

export const getUser  = async () => {
  try {
    const res = await api.get("users/me")
    console.log(res);
    return res.data
  } catch (error) {
    console.error(error)
  }
}