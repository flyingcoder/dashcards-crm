<template>
    <div class="payment">
        <table-header :paths="paths" :noButton="true" />
        <div class="payment-wrapper">
            <v-card flat class="ma-2 payment-content">
                <v-progress-linear v-if="loading" height="10" indeterminate></v-progress-linear>
                <v-card-text>
                    <v-row no-gutters>
                        <v-col>
                            <v-card class="mx-1" outlined>
                                <v-sheet class="v-sheet--offset mx-auto" color="success" elevation="12" max-width="calc(100% - 32px)">
                                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                                </v-sheet>
                                <v-card-actions>
                                    <v-btn text>View Report</v-btn>
                                    <v-btn text>Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card class="mx-1" outlined>
                                <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="12" max-width="calc(100% - 32px)">
                                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                                </v-sheet>
                                <v-card-actions>
                                    <v-btn text>View Report</v-btn>
                                    <v-btn text>Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card class="mx-1" outlined>
                                <v-sheet class="v-sheet--offset mx-auto" color="warning" elevation="12" max-width="calc(100% - 32px)">
                                    <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                                </v-sheet>
                                <v-card-actions>
                                    <v-btn text>View Report</v-btn>
                                    <v-btn text>Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col md="8">
                            <v-card class="mx-auto mt-4 text-center" dark>
                                <v-card-text>
                                    <GChart :resizeDebounce="500" :settings="{packages: ['bar']}" :data="chartData" :options="chartOptions" :createChart="(el, google) => new google.charts.Bar(el)" @ready="onChartReady" />
                                </v-card-text>
                                <v-card-text>
                                    <div class="display-1 font-weight-thin">Sales Last 24h</div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions class="justify-center">
                                    <v-btn block text>Go to Report</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col md="4">
                            <v-card :loading="loading" class="ml-2 mt-4">
                                <v-card-title>Recent Activities</v-card-title>
                                <v-card-text>
                                    <Empty headline="Under construction!"></Empty>
                                </v-card-text>
                                <v-divider class="mx-4"></v-divider>
                                <v-card-title>Transaction History</v-card-title>
                                <v-card-text>
                                    <Empty headline="Under construction!"></Empty>
                                </v-card-text>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
<script src="./Payment.js"></script>
<style lang="scss" scoped src="./Payment.scss"></style>
<style>
.v-sheet--offset {
    top: -20px;
    position: relative;
}
</style>