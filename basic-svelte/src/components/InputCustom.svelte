<script>
    export let control = "textarea";
    export let value;
    export let placeHolder;
    export let type = "text";
    export let name;
    export let id;
</script>

<div class="form-group">
    <label id={id}>{ name }</label>
    {#if control=== "textarea"}
        <textarea 
            id={ id } 
            rows="10" 
            placeholder={ placeHolder } 
            value={ value} 
            on:input
            class="form-control"
        ></textarea>
    {:else}
        <input 
            type={ type }
            placeholder={ placeHolder }
            class="form-control"
            id={ id }
            value={ value }
            on:input
        >
    {/if}
</div>