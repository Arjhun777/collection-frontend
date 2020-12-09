import { API, protectedAPI } from "../utils/interceptors";

const newUserDetails = (userDetails:object) => {
    return API.post('/api/userDetails/createUser', userDetails);
}

const getUserDetails = (pageNo:number) => {
    return protectedAPI.get('/api/userDetails/getDetails', {params: {pageNo}}).then((res) => {
        if (res.status === 200)
            return res.data;
    });
}

export const userDetailsService = {
    newUserDetails,
    getUserDetails
}