<template>
    <div :class="[className, 'field']">

        <div class="v-icon">
            <img v-bind:src="imagePath" alt="">
        </div>

        <input
                :type="inputType"
                :placeholder="placeholder"
                :value="value"
                @input="emit_input_value"
        >

    </div>
</template>
<script src="./CustomFields.js"></script>
<style lang="scss" scoped src="./CustomField.scss"></style>