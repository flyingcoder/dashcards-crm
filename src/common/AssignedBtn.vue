<template>
    <div class="assigned-btn">
    <span v-for="(user, i) in users" :key="i" @click="profile(user.id)">
      {{ user.first_name + ' ' + user.last_name }}
    </span>
    </div>
</template>
<script>
    export default {
        name: 'AssignedBtn',
        props: {
            users: Array
        },
        methods: {
            profile(id) {
                this.$router.push('/dashboard/team/profile/' + id)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .assigned-btn {
        span {
            cursor: pointer;
            background-color: #ff5252;
            color: #fff;
            padding: 1px 5px;
            border-radius: 7px;
            margin-right: 5px;
        }
    }
</style>
