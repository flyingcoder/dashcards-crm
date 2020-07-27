<template>
    <div class="members-tab">
        <staff-dialog
                ref="add_dialog"
                title="Add New Staff"
                :dialog.sync="add_dialog"
                @save="handleAddStaff"
        />
        <staff-dialog
                ref="edit_dialog"
                title="Edit Staff"
                :dialog.sync="edit_dialog"
                :fields-to-edit="edit_item"
                :is-edit-dialog="edit_dialog"
                @save="update_item('update_team', $event)"
        />
        <delete-dialog
                :open-dialog.sync="delete_dialog"
                title="Delete Staff"
                text-content="Are you sure you want to delete this staff?"
                @delete="delete_item('delete_team', $event)"
        />
        <VueGrid :items="items" title="Staffs" @load-more="load_more_users" :key="componentKey" :noMoreData="noMoreData"
                 @delete="open_delete_dialog" @edit="open_edit_dialog">
            <template slot="header-toolbar" class="icons">
                <table-header noListButton noGridButton @click="add_dialog = true" />
            </template>
        </VueGrid>

    </div>
</template>

<script src="./Staffs.js"></script>
<style lang="scss" scoped src="./Staffs.scss"></style>
