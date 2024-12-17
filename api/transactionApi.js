import api from "./api"


export const getTransaction = async () => {
  try {
    const res = await api.get("transactions")
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const addTransaction = async (data) => {
  try {
    const res = await api.post("transactions", data)
    return res.data
  } catch (error) {
    console.error(error)
  }
}