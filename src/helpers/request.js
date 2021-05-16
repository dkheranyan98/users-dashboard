import axios from 'axios';

const HOST = 'https://brainstorm-interview-task.herokuapp.com';

export const request = async ({
    dispatch,
    type,
    method,
    endpoint,
    headers,
    data,
    passData,
    params,
    onSuccess,
}) => {
    const url = HOST + endpoint;
    const options = {
        method,
        url,
        headers,
        data,
        params,
    };

    return await axios(options)
        .then((data) => {
            const payload = passData ? { responce: data.data, passData } : data.data;

            dispatch({
                type,
                payload,
            });
            onSuccess && onSuccess(data.data);
        })
        .catch((error) => {
            console.log('Request to ' + url + ' throw ' + error);
        })
        .finally(() => {
            console.log('Request to ' + url + ' has been finished');
        });
};