<template>
    <div class="content">

        <div class="row">
            <div class="breadcrumbs">
                <v-breadcrumbs>
                    <v-breadcrumbs-item class="page__title">
                        Dashboard
                    </v-breadcrumbs-item>
                </v-breadcrumbs>
            </div>
            <div class="page__options">
                <div class="save">
                    <button>
                        <div class="icon">
                            <img src="@/assets/icons/dashboard/save.svg" class="responsive-img" alt="save" />
                        </div>
                        <div class="title">
                            <span> Save </span> 
                        </div>
                    </button>
                </div>
                <div class="status">
                    <div class="left">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="title">
                        <span>Log on</span>
                    </div>
                </div>
                <div class="themes">
                    <button>
                        <div class="color"></div>
                        <div class="title">
                            <span>Themes</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <div class="row d__tiles">
            <div class="tiles__content"
                v-for="tile in tiles"
                :key="tile.title">

                <div class="tiles__icon">
                    <img class="responsive-img icon" :src="tile.icon" />
                </div>

                <div class="tiles__info">
                    <div class="counter"> {{ tile.counter }} </div>
                    <div class="tile__title">{{ tile.title }}</div>
                </div>

            </div>
        </div>

        <div class="row d__cards">
            <div class="d__box">
                <div class="d__box__header">
                    <label>Tasks</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
            <div class="d__box">
                <div class="d__box__header">
                    <label>Timeline</label>
                </div>
                <div class="d__box__content">
                    test
                </div>
            </div>
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