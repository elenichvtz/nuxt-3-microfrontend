<template>
    <div style="border: 1px solid black; padding: 0.5rem;">
        Sidebar component from microfrontend 2:
        <button class="blue-button" @click="goToPageTwo">Go to Page Two</button>
        <br><br>
    </div>
    <br><br>
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