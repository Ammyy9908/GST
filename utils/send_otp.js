import axios from "axios";

async function sendOtp(mobile) {
  try {
    const r = await axios.post(`http://192.168.29.170:5001/api/send-otp`, {
      mobile,
    });

    return r.data;
  } catch (e) {
    console.log(e);
    if (e.response && e.response.data) {
      return e.response.data;
    }
    return false;
  }
}

export default sendOtp;
