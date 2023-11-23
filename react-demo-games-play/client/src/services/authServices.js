import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
        // username - the server will write and other info
    });

    return result;
};

// async not needed here we just return the promise - registerSubmitHandler is awaited
export const register = (email, password) => request.post(
    `${baseUrl}/register`,
    {
        email,
        password,
    });


// logout
export const logout = () => request.get(`${baseUrl}/logout`);