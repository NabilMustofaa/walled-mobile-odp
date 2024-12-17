import api from "./api"

export const register  = async (data) => {
  try {
    const res = await api.post("auth/register", data)

    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const loginUser  = async (data) => {
  try {
    const res = await api.post("auth/login", data)

    return res.data
  } catch (error) {
    console.error(error)
  }
}