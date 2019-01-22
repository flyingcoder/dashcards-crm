<template>
    <div class="profile-upper">
        <div class="background">
            <v-icon class="camera">camera_alt</v-icon>
            <v-icon class="settings">settings</v-icon>
        </div>
        <div class="icons">
            <v-avatar class="icon">
                <v-icon dark>account_circle</v-icon>
            </v-avatar>
            <v-avatar class="icon">
                <v-icon dark>notifications</v-icon>
            </v-avatar>
            <v-avatar class="icon">
                <v-icon dark>camera</v-icon>
            </v-avatar>

            <div class="user-img">
                <img src="@/assets/temp/user.png" alt="User">
            </div>
            
            <v-avatar class="icon">
                <v-icon dark>call</v-icon>
            </v-avatar>
            <v-avatar class="icon">
                <v-icon dark>message</v-icon>
            </v-avatar>
            <v-avatar class="icon">
                <v-icon dark>mail_outline</v-icon>
            </v-avatar>
        </div>
        <div class="user-info">
            <div class="info-div">
                <div class="hour">Total Hours</div>
                <div class="value">68</div>
            </div>
            <div class="info-div">
                <h4 class="name">Bonnin Gimenez <v-icon>edit</v-icon></h4>
                <div class="job-title">UI/UX Designer</div>
                <div class="address"> <v-icon>place</v-icon> Cebu, Philippines</div>
            </div>
            <div class="info-div">
                <div class="hour">Per Hour</div>
                <div class="value">$10</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./Upper.scss">
</style>

<script src="./Upper.js">
</script>
