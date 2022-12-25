import axios from "axios";

async function verifyOtp(otp, mobile) {
  try {
    const r = await axios.post(`http://192.168.29.33:5001/api/validate-otp`, {
      mobile,
      otp,
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

export default verifyOtp;
