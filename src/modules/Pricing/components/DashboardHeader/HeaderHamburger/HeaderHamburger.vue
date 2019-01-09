<template functional>

    <button 
        class="sidebar__collapse opened"
        @click="props.methods.collapse()"
    >
        <span class="icon">
            <img src="@/assets/icons/header/chevron.png" class="chevron" alt="chevron" />
            <img src="@/assets/icons/header/menu.png" class="menu" alt="chevron" />
        </span>
    </button>

</template>
<style lang="scss" src="./HeaderHamburger.scss">
</style>
<script src="./HeaderHamburger.js">
</script>
