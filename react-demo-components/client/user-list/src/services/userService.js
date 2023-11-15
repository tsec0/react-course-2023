/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {

    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        // data is written in a result of object values
        const data = Object.values(result);

        return data;

    } catch (error) {

        // Logs the error / error message in the console
        console.log(error);
    }
}

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;
}

export const remove = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    });

    return 'Successfully deleted!';
}

export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber,
        }
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(body),
    });

    const result = await response.json();

    return result;
}