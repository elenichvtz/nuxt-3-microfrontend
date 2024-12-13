<template>
    <div class="card">
        This is a Card from microfrontend app 1.
        <button class="blue-button" @click="goToPageOne">Go to Page One</button>
    </div>
</template>

<script setup>
    import '~/assets/scss/styles.scss';

    const props = defineProps({
        router: Object,
    });

    const goToPageOne = () => {
        if (props.router) {
            props.router.push('/micro1/pageone');
        } else {
            console.error('Router is not available');
        }
    };
</script>