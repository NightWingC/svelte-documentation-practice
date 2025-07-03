<script>
    const name = "<strong style='color: red;'>Sandra</strong>";
    const apiUrl = "https://apicom";

    let name2 = "jorge";
    let v1 = 0;
    let v2 = 0;

    let check = false;

    function alerta1(){
        alert("Alerta 1")
    }

    const alerta2 = () => alert("Alerta 2")

    let contador = 0;
    let texto = "";
    $: resultado = contador * 10;
    $: if(resultado === 30 ) {
        texto = "OK"
    } else {
        texto = "Ouch"
    };

    let login = false;
    const cambio = () => login = !login;
</script>

<main>
    <p>Hola {@html name }</p>

    <h1>Databinging</h1>
    <h2>{ name2 }</h2>
    <input type="text" bind:value={name2}>

    <hr />
    Valor 1 <input type="range" bind:value={ v1 }>
    Valor 2 <input type="range" bind:value={ v2 }>
    <p>{ v1 } + { v2 } = { v1 + v2 }</p>

    <hr />
    Habilitar boton <input type="checkbox" bind:checked={ check } />
    <button disabled={ !check }>Guardar</button>

    <hr />
    <h1>OnClick</h1>
    <button on:click={ alerta1 }>Alerta 1</button>
    <button on:click={ alerta2 }>Alerta 2</button>
    <button on:click={ () => alert("Alerta 3") }>Alerta 3</button>

    <hr />
    <h1>Variables reactivas</h1>
    <button on:click={() => contador += 1}>Contador</button>
    <p>Contador: { contador }, Resultado X 10: { resultado }</p>
    <p>{ texto }</p>

    <hr />
    <h1>Bloque If</h1>
    {#if login}
        <h2>Estas logueado</h2>
    {:else}
        <h2>Iniciar sesión</h2>
    {/if}
    <button on:click={ cambio }>Login</button>
</main>