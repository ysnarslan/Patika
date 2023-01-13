import axios from 'axios'

export const getData = async (user_id) => {
    const {data: users} = await axios('https://jsonplaceholder.typicode.com/users/' + user_id)
    const {data: post} = await axios('https://jsonplaceholder.typicode.com/posts?id=' + user_id)

    return {users, "post": post}
}
