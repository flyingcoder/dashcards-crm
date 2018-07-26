<template>
    <div class="s__title">
        <div class="t__logo">
            <img class="responsive-img logo__lg" src="@/assets/logo/buzzooka-white.png" alt="logo">
            <img class="responsive-img logo__sm" src="@/assets/logo/mini-white.png" alt="logo">
        </div>
        <div class="t__hamburger">
            <button 
                class="t__toggle" 
                @click="collapse()"
                >
                <span class="icon">
                    <svg width="8px" height="15px">
                        <path fill="rgb(144, 152, 163)" d="M7.713,8.229 L1.696,14.689 C1.313,15.100 0.693,15.100 0.310,14.689 C-0.072,14.278 -0.072,13.612 0.310,13.201 L5.634,7.485 L0.311,1.770 C-0.072,1.359 -0.072,0.693 0.311,0.282 C0.693,-0.129 1.314,-0.129 1.696,0.282 L7.713,6.742 C7.905,6.947 8.000,7.216 8.000,7.485 C8.000,7.755 7.904,8.024 7.713,8.229 Z"/>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</template>
<style lang="scss" src="./DashboardLogo.scss"></style>
<script src="./DashboardLogo.js"></script>