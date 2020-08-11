<template>
    <div class="member-profile">
        <!-- <table-header :paths="paths" :no-button="true" /> -->

        <div class="profile mt-1">
            <div class="profile-content">
                <Upper :currentuserid="user_id" />
                <Lower />
            </div>
        </div>
    </div>
</template>

<script src="./MemberProfile.js"></script>
<style lang="scss" scoped src="./MemberProfile.scss"></style>
