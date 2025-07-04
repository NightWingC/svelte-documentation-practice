<script>
    export let title;
    export let description;
    export let image; 
</script>

<div class="card" style="width: 18res;">
    <img src={ image } alt={ title } />
    <div class="card-body">
        <h5 class="card-title">{ title }</h5>
        <p class="card-text">{ description }</p>
        <button class="btn btn-primary">Ver mas..</button>
        <button class="btn btn-danger">Favorito</button>
    </div>
</div>