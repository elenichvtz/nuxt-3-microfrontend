<template>
    <div style="padding: 0 0.75rem;">
        <h4>Micro App 2</h4>
        <button class="button--nav" @click="goToPageTwo">
            Page Two
        </button>
    </div>
</template>

<script setup>
    import '~/assets/scss/styles.scss';

    // Props
    const props = defineProps({
        router: Object,
    });

    // Methods
    const goToPageTwo = () => {
        if (props.router) {
            props.router.push('/micro2/pagetwo');
        } else {
            console.error('Router is not available');
        }
    };
</script>