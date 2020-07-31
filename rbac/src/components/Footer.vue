<template>
    <footer>
        <p>{{footer}}</p>
    </footer>
</template>

<script>
export default {
    name: 'footer',
    data(){
        return {
            footer : "copy right @author Hshen9527, 2020-7-31"
        }
    }
}
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
    text-align: center;
}
p{
    color: white;
}
</style>>
