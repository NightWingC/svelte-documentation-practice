<script>
   let { data } = $props();
</script>

<center class="mt-10 pt-10">
    <div class="my-10 py-5">
        <img src={ data.avatar } alt={ data.name } class="rounded-full border border-gray-100 shadow-sm" />
        <h1 class="text-4xl my-3 uppercase bold">{data.name} {data.lastname}</h1>
        <h1 class="text-1xl my-3 uppercase">{data.email}</h1>
    </div>
</center>