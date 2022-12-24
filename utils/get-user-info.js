import axios from "axios";

async function getUser(token) {
    try {
        const r = await axios.get(process.env.BACKEND_URI + `/api/user-info`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
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

export default getUser;
