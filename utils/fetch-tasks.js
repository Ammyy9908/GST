import axios from "axios";

async function fetchTasks(token) {
  try {
    const r = await axios.get(`192.168.29.33:5001/api/task-list`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return r.data;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
    return false;
  }
}

export default fetchTasks;