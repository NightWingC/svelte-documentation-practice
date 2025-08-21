 import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {

    const res = await fetch(`https://api.lyrics.ovh/v1/${ params.artista }/${ params.cancion }`);
    const data = await res.json();
    console.log( data )
    return {
        lyrics: data.lyrics
    };
};