<template>
    <div class="loaders">
        <br/> <br/>
        <br/> <br/>
        <div class="loader1">
            <div v-for="num in 12" :class="['circle'+num, 'circle']" v-bind:key="num"></div>
        </div>
        <br/> <br/>
        <br/> <br/>
        <div class="loader2">
            <div v-for="num in 12" :class="['circle'+num, 'circle']" v-bind:key="num"></div>
        </div>
        <br/> <br/>
        <br/> <br/>
        <div class="loader3">
            <div v-for="num in 12" :class="['circle'+num, 'circle']" v-bind:key="num"></div>
        </div>
        <br/> <br/>
        <br/> <br/>
        <div class="loader4">
            <div v-for="num in 3" :class="['circle'+num, 'circle']" v-bind:key="num"></div>
        </div>
        <br/> <br/>
        <br/> <br/>
    </div>
</template>
<script src="./Loader.js">
</script>
<style lang="scss" scoped src="./Loader.scss">
</style>
