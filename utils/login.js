import axios from "axios";

async function login(email, password) {
    try {
        const r = await axios.post(process.env.BACKEND_URI + `/api/login`, {
            email,
            password: password,
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

export default login;
