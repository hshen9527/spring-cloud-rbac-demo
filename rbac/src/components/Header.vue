<template>
    <header>
        {{header}}
    </header>
</template>

<script>
export default {
    name: 'header',
    data() {
        return{
            header : "Header"
        }
    }
}
</script>

<style scoped>
header{
    background: #222;
    padding: 6px;
    text-align: center;
}
</style>