<template>
    <div class="content">

        <div class="row d__breadcrumbs">
            <div class="breadcrumbs">
                <breadcrumb :paths="paths" />
            </div>
            <div class="page__options">
                <div class="option save">
                    <div class="icon">
                        <img src="@/assets/icons/dashboard/save.svg" class="responsive-img" alt="save" />
                    </div>
                    <div class="title">
                        <span> Save  </span>
                    </div>
                </div>

               <logon-label /> <!--custom component-->

                <div class="option themes">
                    <div class="color"></div>
                    <div class="title">
                        <span>Themes</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row d__tiles">
            <div class="tiles__content"
                v-for="tile in tiles"
                :key="tile.title">

                <div class="tiles__icon">
                    <img class="responsive-img icon tiles__image" :src="tile.icon" />
                </div>

                <div class="tiles__info">
                    <div class="counter"> {{ tile.counter }} </div>
                    <div class="tile__title">{{ tile.title }}</div>
                </div>

            </div>
        </div>

        <div class="row d__cards">
            <tasks-card />

            <timeline-card />

            <div class="d__box">
                <div class="d__box__header">
                    <label>Client</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
            <div class="d__box">
                <div class="d__box__header">
                    <label>Timer</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
            <div class="d__box">
                <div class="d__box__header">
                    <label>Payment</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
            <div class="d__box">
                <div class="d__box__header">
                    <label>Invoice</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
            <div class="d__box">
                <div class="d__box__header">
                    <label>Calendar</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
            <div class="d__box">
                <div class="d__box__header">
                    <label>Pass Box</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
        </div>

    </div>
</template>
<script src="./DashboardContent.js"></script>
<style lang="scss" scoped src="./DashboardContent.scss"></style>