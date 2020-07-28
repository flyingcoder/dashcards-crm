<template>
    <div class="timer-card">
        <div class="timer__content">
            <dash-card title="Timer" :view-more-link="viewMoreLink" class="timer__content" :dashboard="dashboard"
                       @close="$emit('close')" @expand="expand"
            >
                <div slot="content">
                    <TimerContent />
                </div>
            </dash-card>
        </div>
    </div>
</template>
<script src="./TimerCard.js"></script>
