<script>
    let { data } = $props();
    console.log( data )
</script>

<div class="mt-10 pt-10">
    <h1 class="text-3xl uppercase">Artista: </h1>
    <h2 class="text-3xl uppercase">Canción: </h2>
    <p class="text-1xl">{ data.lyrics }</p>
</div>