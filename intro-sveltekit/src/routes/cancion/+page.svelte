<script>
    import {goto} from "$app/navigation";
    let artista = "";
    let cancion = "";
    let mensaje = "Todos los campos son necesarios";
    let show = false;

    function submit(){
        if(artista === "" || cancion === "") {
            show = true;
        } else {
            goto(`/cancion/${ artista }/${ cancion }`);
        }
    } 

</script>

<h1 class="mt-10 pt-10 text-5xl">Buscar letra de cancion</h1>
    {#if show}
        <h1 class="text-2xl text-red-400">{ mensaje }</h1>
    {/if}
<div class="mt-10">
    <input type="text" placeholder="Buscar" bind:value={artista} class="w-full rounded-md text-lg p-4 border-2">
</div>
<div class="mt-10">
    <input type="text" placeholder="Buscar" bind:value={cancion} class="w-full rounded-md text-lg p-4 border-2">
</div>

<!-- <a href={`/cancion/${ artista }/${ cancion }`} class="bg-blue-400 text-white bold py-2 px-4 rounded text-lg">Buscar</a> -->
 <button class="bg-blue-400 text-white bold py-2 px-4 mt-5 rounded text-lg" on:click={ submit }>Buscar</button>