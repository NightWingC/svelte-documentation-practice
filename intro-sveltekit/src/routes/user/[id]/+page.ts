 import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const res = await fetch(`https://reqres.in/api/users/${ params.id }`, {
         headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
    const { data } = await res.json();
    console.log( data )
    return {
        id: params.id,
        name: data.first_name,
        lastname: data.last_name,
        email: data.email,
        avatar: data.avatar,
    };
};