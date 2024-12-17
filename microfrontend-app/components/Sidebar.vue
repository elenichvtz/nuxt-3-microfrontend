<template>
    <div style="padding: 0 0.75rem;">
        <h4>Micro App 1</h4>
        <button class="button--nav" @click="goToPageOne">
            Page One
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
    const goToPageOne = () => {
        if (props.router) {
            props.router.push('/micro1/pageone');
        } else {
            console.error('Router is not available');
        }
    };
</script>