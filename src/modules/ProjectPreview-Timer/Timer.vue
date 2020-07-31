<template>
    <div class="timer__tab">
        <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="get_more_timers" icon="mdi-clock"
                  :title="tableTitle" :key="componentKey" :noMoreData="noMoreData" :hasFooter="true" :showSelect="false"
                  :loading="loading"
        >
            <template v-slot:row-slot="{ item }">
                <td>
                    <Avatars v-if="item.assigned.length" :items="item.assigned" :deep="false" :count="4" />
                    <v-avatar v-else :size="40" title="Unassigned">
                        <v-icon large>mdi-account-question-outline</v-icon>
                    </v-avatar>
                </td>
                <td class="text-cap clickable-td" @click="set_and_view_task(item)">
                    {{ item.title | ucwords }}
                </td>
                <td>
                    {{ item.milestone.title | ucwords }}
                </td>
                <td class="text-cap status__col">
                    <template v-if="item.status.toLowerCase() === 'completed'">
                        <div class="status__completed fullwidth text-center">{{ item.status | ucwords }}</div>
                    </template>
                    <template v-else-if="item.status.toLowerCase() === 'pending' || item.status.toLowerCase() === 'urgent'">
                        <div class="status__pending fullwidth text-center">{{ item.status | ucwords }}</div>
                    </template>
                    <template v-else-if="item.status.toLowerCase() === 'behind'">
                        <div class="status__behind fullwidth text-center">{{ item.status | ucwords }}</div>
                    </template>
                    <template v-else-if="item.status.toLowerCase() === 'open'">
                        <div class="status__open fullwidth text-center">{{ item.status | ucwords }}</div>
                    </template>
                </td>
                <td>
                    <PlayPause v-if="item.assigned.length" :item="item" @row-item-updated="item = $event" />
                    <v-chip label small outlined v-else>Unassigned</v-chip>
                </td>
            </template>
        </VueTable>
        <TaskViewDialog ref="view_task_dialog" :task="task" @close-task-preview="closeViewDialog" />
    </div>
</template>
<script src="./Timer.js"></script>
<style lang="scss" scoped src="./Timer.scss"></style>