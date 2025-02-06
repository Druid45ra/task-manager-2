import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => await axios.get(API_URL);
export const createTask = async (task) => await axios.post(API_URL, task);
export const updateTask = async (id, updates) =>
  await axios.put(`${API_URL}/${id}`, updates);
export const deleteTask = async (id) => await axios.delete(`${API_URL}/${id}`);
