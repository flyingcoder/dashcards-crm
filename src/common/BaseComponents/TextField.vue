<template functional>
    <v-text-field :value="props.value" @input="listeners['update:value']($event)" filled hide-details v-bind="data.attrs">
        <template v-slot:append>
            <slot name="append"></slot>
        </template>
    </v-text-field>
</template>
<script>
export default {
    inheritAttrs: false,
    props: {
        value: String
    }
}
</script>