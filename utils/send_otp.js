import axios from "axios";

async function sendOtp(mobile) {
    try {
        const r = await axios.post(process.env.BACKEND_URI + `/api/send-otp`, {
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
