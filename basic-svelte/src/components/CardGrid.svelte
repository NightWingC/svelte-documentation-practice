<script>
  import Card from "./Card.svelte";
  export let posts; 
</script>

<div class="row mt-3">
    {#each posts as post }
        <div class="col-sm-4">
            <Card 
                description={ post.description }
                image={ post.image }
                title={ post.title } 
            />
        </div>
    {/each}
</div>
