<template>
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