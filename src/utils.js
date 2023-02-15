// make route to get api
export const apiGet = (url) => {
    return fetch('http://localhost:3000/' + url, {
        method: 'get',
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(
                `This is an HTTP error: the status is ${response.status}`
            )
        }
        return response.json()
    })
    .catch(e => {
        console.log(e)
    })
}