<script>
    import { users } from "../store/userStore";
    import UserCard from "../components/userCard.svelte";
    let buscador = "";
    let filtro = [];
    
    $: {
        if(buscador) {
            filtro = $users.filter((user) => user.name.toLowerCase().includes(buscador.toLowerCase()));
        } else {
            filtro = [...$users];
        }
    }
    console.log( buscador )
</script>

<svelte:head>
    <title>Introducción a SvelteKit</title>
</svelte:head>

<center class="mt-9">
    <img src="/logo.png" alt="logo" width="250">
    <h1 class="bold text-5xl">Users API</h1>
</center>

<input type="text" placeholder="Buscar" bind:value={buscador} class="w-full rounded-md text-lg p-4 border-2">

<div class="py-5 grid gap-5 md:grid-cols-3">
    {#each filtro as item}
        <UserCard user={item} />
    {/each}
</div>