// should add error handling

const buildOptions = (data) => {
    const options = {};

    if(data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        };
    }

    const token = localStorage.getItem('accsessToken');

    if (token){
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        };
    }

    return options;
}

const request = async (method, url, data) => {

    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if(response.status === 204){
        return {};
    }

    const result = await response.json();

    // not a bad recomendation
    if(!response.ok){
        throw result;
    }

    return result;
};

// partial application
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');
