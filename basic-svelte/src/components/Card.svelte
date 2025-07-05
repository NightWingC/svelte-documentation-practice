<script>
    import { createEventDispatcher  } from "svelte";
    const dispatch = createEventDispatcher;
    export let title;
    export let description;
    export let image; 

    function see(){
        dispatch("see-more", {id: 123})
    }

    function favorite(){
        dispatch("favo", "Hi how are you?")
    }
</script>

<div class="card" style="width: 18res;">
    <img src={ image } alt={ title } />
    <div class="card-body">
        <h5 class="card-title">{ title }</h5>
        <p class="card-text">{ description }</p>
        <button on:click={see} class="btn btn-primary">Ver mas..</button>
        <button on:click={favorite} class="btn btn-danger">Favorito</button>
    </div>
</div>