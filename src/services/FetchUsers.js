export const getUserList = () => {
    const URL = `https://api.github.com/users/`;
    return fetch(URL, {
        method: 'GET', 
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
      },})
        .then((res) =>{
            console.log('API Response', res.json());
            return res.json()});
}