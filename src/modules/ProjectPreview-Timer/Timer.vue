<template>
    <div class="timer__tab">
        <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="get_more_timers" icon="mdi-clock" :title="tableTitle" :key="componentKey" :noMoreData="noMoreData" :hasFooter="true" :showSelect="false" :loading="loading">
            <template v-slot:row-slot="{ item }">
                <td>
                    <Avatars :items="item.assignee" :deep="false" :count="5"></Avatars>
                </td>
                <td class="text-cap clickable-td" @click="set_and_view_task(item)">
                    {{ item.title }}
                </td>
                <td>
                    {{ item.milestone.title }}
                </td>
                <td class="text-cap status__col">
                    <template v-if="item.status === 'completed'">
                        <div class="status__completed">{{ item.status }}</div>
                    </template>
                    <template v-if="item.status === 'pending'">
                        <div class="status__pending">{{ item.status }}</div>
                    </template>
                    <template v-if="item.status === 'behind'">
                        <div class="status__behind">{{ item.status }}</div>
                    </template>
                    <template v-if="item.status === 'open'">
                        <div class="status__open">{{ item.status }}</div>
                    </template>
                </td>
                <td>
                    <PlayPause :item="item" @row-item-updated="item = $event"></PlayPause>
                </td>
            </template>
        </VueTable>
        <TaskViewDialog ref="view_task_dialog" :task="task" @close-task-preview="closeViewDialog"></TaskViewDialog>
    </div>
</template>
<script src="./Timer.js"></script>
<style lang="scss" scoped src="./Timer.scss"></style>