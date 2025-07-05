<script>
    import Card from "./Card.svelte";
    export let posts;
    let event = "Here, there are nothing"; 

    function seeMore( e ){
        alert("See more information...")
        console.log(e)
        evento = e.detail.id
    }

    function favorite( event ){
        alert("Save favorite...")
        console.log(event)
        event = event.detail
    }

</script>

<div class="row mt-3">
    {#each posts as post }
        <div class="col-sm-4">
            <Card 
                description={ post.description }
                image={ post.image }
                title={ post.title } 
                on:see-more={seeMore}
                on:favo={ favorite }
            />
        </div>
    {/each}
</div>
<h1>{ event }</h1>
