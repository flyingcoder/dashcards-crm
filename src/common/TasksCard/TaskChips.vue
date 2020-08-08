<template functional>
    <div class="task__chips text-xs-center">
        <v-chip
                small
                class="mx-1"
                :class="['task__chip', { active: props.activeChip === 'all' }]"
                @click="listeners['update:activeChip']('all')"
        >
            <v-avatar left class="task__avatar">{{ props.countAll }}</v-avatar>
            All
        </v-chip>

        <v-chip
                small
                class="mx-1"
                :class="['task__chip', { active: props.activeChip === 'completed' }]"
                @click="listeners['update:activeChip']('completed')"
        >
            <v-avatar left class="task__avatar">{{ props.countCompleted }}</v-avatar>
            Completed
        </v-chip>

        <v-chip
                small
                class="mx-1"
                :class="['task__chip', { active: props.activeChip === 'pending' }]"
                @click="listeners['update:activeChip']('pending')"
        >
            <v-avatar left class="task__avatar">{{ props.countPending }}</v-avatar>
            Pending
        </v-chip>

        <v-chip
                small
                class="mx-1"
                :class="['task__chip', { active: props.activeChip === 'open' }]"
                @click="listeners['update:activeChip']('open')"
        >
            <v-avatar left class="task__avatar">{{ props.countOpen }}</v-avatar>
            Open
        </v-chip>
        <v-chip
                small
                class="mx-1"
                :class="['task__chip', { active: props.activeChip === 'urgent' }]"
                @click="listeners['update:activeChip']('urgent')"
        >
            <v-avatar left class="task__avatar">{{ props.countUrgent }}</v-avatar>
            Urgent
        </v-chip>
    </div>
</template>

<script>
    export default {
        name: 'TaskChips',
        props: {
            countAll: { type: Number, default: 0 },
            countCompleted: { type: Number, default: 0 },
            countPending: { type: Number, default: 0 },
            countBehind: { type: Number, default: 0 },
            countUrgent: { type: Number, default: 0 },
            countOpen: { type: Number, default: 0 },
            activeChip: { type: String, default: 'all' }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/sass/_variables';

    .task__chips {
        padding: 10px 0;
        border-bottom: 1px solid $borderGray;
        text-align: center;

        .theme--light.v-chip {
            background-color: $white;
            border: 1px solid $borderGray;
            font-size: 12px;
            font-weight: 500;
            color: $chipGray;
            z-index: 0;
        }

        .task__avatar {
            background-color: $chipGray;
            border-color: $chipGray;
            color: $white;
            font-size: 12px;
            font-weight: 500;
            left: -6px;
        }

        .task__chip.active {
            background-color: $chipDark;
            border-color: $chipDark;
            color: $white;

            .task__avatar {
                background-color: $chipBlue;
                border-color: $chipBlue;
            }
        }
    }
</style>
<style scoped>
    >>> .task__chip .v-chip__content {
        cursor: pointer;
    }
</style>
