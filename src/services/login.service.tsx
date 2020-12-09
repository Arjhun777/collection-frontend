import { getOrSetToken } from "../utils/helper";
import { API } from "../utils/interceptors";

const login = (loginDetails:object) => {
    return API.post('/api/login', loginDetails).then((res) => {
        if (res.status === 200)
            getOrSetToken(res.data.token);
    });
}

const signup = (loginDetails:object) => {
    return API.post('/api/signup', loginDetails);
}

export const loginService = {
    login,
    signup
}