<script>
    import { users } from "../store/userStore";
    import UserCard from "../components/userCard.svelte";
</script>

<svelte:head>
    <title>Introducción a SvelteKit</title>
</svelte:head>

<center class="mt-9">
    <img src="/logo.png" alt="logo" width="250">
    <h1 class="bold text-5xl">Users API</h1>
</center>

<div class="py-5 grid gap-5 md:grid-cols-3">
    {#each $users as item }
        <UserCard user={ item } />
    {/each}
</div>