<template>
    <header>
        <h1>Microfrontend App 2</h1>
    </header>
    <p>
        The whole micro app 2 is loaded here. 
    </p>
    <div class="card">
        This is a Card from microfrontend app 2.
        <button class="blue-button" @click="goToPageTwo">Go to Page Two</button>
    </div>
</template>

<script setup>
    import '~/assets/scss/styles.scss';

    const props = defineProps({
        router: Object,
    });

    const goToPageTwo = () => {
        if (props.router) {
            props.router.push('/micro2/pagetwo');
        } else {
            console.error('Router is not available');
        }
    };
</script>