import axios from "axios";

async function addTask(token, data) {
  try {
    const r = await axios.post(
      `192.168.29.33:5001/api/add-new-task`,
      {
        taskname: data.taskname,
        subject: data.subject,
        description: data.description,
        startDate: "2022-12-28",
        endDate: "2023-01-12",
        endTime: "23:59",
        priority: data.priority,
        createdBy: data._id,
        followers: data.followers,
        leader: data.leader,
        beneficiary: { mobile: "7406444532", name: "Rahul" },
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return r.data;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
    return false;
  }
}

export default addTask;
