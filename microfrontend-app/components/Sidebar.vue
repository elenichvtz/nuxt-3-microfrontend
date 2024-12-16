<template>
    <div style="border: 1px solid black; padding: 0.5rem;">
        Sidebar component from microfrontend 1:
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