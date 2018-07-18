<template>
    <div class="content">

        <div class="row">
            <div class="breadcrumbs">
                <v-breadcrumbs>
                    <v-breadcrumbs-item>
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
                            Save
                        </div>
                    </button>
                </div>
                <div class="status">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <span class="title">Log on</span>
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
                    <div class="title">{{ tile.title }}</div>
                </div>

            </div>
        </div>

        <div class="row d__cards">
            <div class="d__box">Tasks</div>
            <div class="d__box">Timeline</div>
            <div class="d__box">Clients</div>
            <div class="d__box">Timer</div>
            <div class="d__box">Payment</div>
            <div class="d__box">Invoice</div>
            <div class="d__box">Calendar</div>
            <div class="d__box">PassBox</div>
        </div>

    </div>
</template>
<script src="./DashboardContent.js"></script>
<style lang="scss" scoped src="./DashboardContent.scss"></style>