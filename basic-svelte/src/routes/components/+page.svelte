<script>
    import CardGrid from "../../components/CardGrid.svelte";
    import Header from "../../components/Header.svelte";
    import InputCustom from "../../components/InputCustom.svelte";
    import Jumbootton from "../../components/Jumbootton.svelte";
    const color = "primary";
    let showVar = false;

    let posts = [
        { 
            id: 1,
            title: "Working with Svelte",
            description: "Working early with svelte course",
            image: "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_960_720.jpg",
        },{ 
            id: 2,
            title: "Working with Veu",
            description: "Working early with Vue course",
            image: "https://cdn.pixabay.com/photo/2020/03/06/14/35/camera-4907231_960_720.jpg",
        },{ 
            id: 3,
            title: "Working with Angular",
            description: "Working early with Angular course",
            image: "https://cdn.pixabay.com/photo/2019/08/01/13/02/usb-flash-4377455_960_720.jpg",
        }
    ];

    let title = "";
    let description = "";
    let image = "";

    const addPost = () => {
        const newPost = {
            id: Math.random(),
            title,
            description,
            image,
        }
        posts = [newPost, ...posts]
    }
</script>


<Header color={ color } title="Components" />
<div class="container">

    Show Jumbotron: <input type="checkbox" bind:checked={ showVar }>
    {#if showVar }
        <Jumbootton name="My components" let:show={ show }>
            <h2 slot="subtitle">Svelte course</h2>
            <span slot="description">New svelte course</span>
            <div class:show>
                {#if show}
                    <hr>
                    <button class="btn btn-danger">Button</button>
                {:else}
                    <h2>hover here</h2>
                {/if}
            </div>
        </Jumbootton>
    {/if}

    <CardGrid posts={ posts } />

    <form on:submit|preventDefault={addPost}>
        <!-- <input type="text" placeholder="Title" bind:value={ title } >
        <input type="text" placeholder="Description" bind:value={ description } >
        <input type="text" placeholder="Image Ur" bind:value={ image } > -->
        <InputCustom 
            type="text"
            name="Title"
            id="title"
            placeHolder="Title"
            value={ title }
            on:input={ event => (title = event.target?.value)}
        />
        <InputCustom 
            type="text"
            name="Image"
            id="image"
            placeHolder="Image"
            value={ image }
            on:input={ event => (image = event.target?.value)}
        />
        <InputCustom 
            control="textarea"
            name="Description"
            id="description"
            placeHolder="Description"
            value={ description }
            on:input={ event => (description = event.target?.value)}
        />
        <button type="submit" class="btn btn-info">Save</button>
    </form>
</div>