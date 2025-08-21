import { writable } from "svelte/store";
export const users = writable([]);

const fetchUsers = async () => {
    const res = await fetch("https://reqres.in/api/users", {
         headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
    const json = await res.json();
    json.data.map(( user: any ) => {
        return {
            name: user.first_name,
            id: user.id,
            avatar: user.avatar,
        }
    });
}

fetchUsers();