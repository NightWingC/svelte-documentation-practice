<script>
    export let user;
    const card = "p-6 bg-gray-100 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center";
    const circulo = "rounded-full border-gray-100 shadow-sm";
</script>

<a href={`/users/${ user.id }`} class={ card }>
    <img src={ user.avatar } alt={ user.name } class={ circulo }>
    <h2>{ user.name }</h2>
</a>