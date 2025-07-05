<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
    export let name;
    let show;

    function enter(){
        show = true;
    }

    function exit(){
        show = false;
    }

    // Creation method
    // script
    console.log("Execute script")
    // onMount
    onMount( async () => {
        console.log("Execute in third place")
        await tick()
        console.log("Executing when all methods is executed")
    })
    // onDestroy
    onDestroy(() => {
        console.log("Execute when component deleted")
    })

    // Update dom
    // beforeUpdate
    beforeUpdate(() => {
        console.log("Execute before updte dom")
    })
    // afterUpdete
    afterUpdate(() => {
        console.log("Execute before after dom")
    })
    // tick

</script>

<div class="jumbotorn mt-4" on:mouseenter={ enter } on:mouseleave={ exit }>
    <h1>{ name }</h1>
    <h2>
        <slot name="subtitle">
            <span>Add a subtitle here</span>
        </slot>
    </h2>
    <p>
        <slot name="description">
            <span>Descrition here</span>
        </slot>
    </p>
    <slot show={ show } />
</div>

<style>
    h2 {
        color: red;
        font-weight: bolder;
        text-decoration: underline;
    }
    p {
        text-align: justify;
        color: blue;
        text-decoration: uppercase;
        font-style: italic;
    }
</style>