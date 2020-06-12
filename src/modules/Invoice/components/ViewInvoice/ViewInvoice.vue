<template>
    <div class="invoice-template-dialog">
        <custom-dialog :hasFooter="false" ref="dialog" :title="dialogTitle" @button1="cancel" :maxWidth="900">
            <template v-slot:extra-buttons>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" class="mr-2" text outlined @click="downloadPDF">
                            <v-icon left>mdi-download</v-icon> Download PDF
                        </v-btn>
                    </template>
                    <span>Download PDF</span>
                </v-tooltip>
            </template>
            <template v-slot:content>
                <v-row wrap class="custom-dialog">
                    <v-col grow v-if="item">
                        <iframe class="iframe" :style="style" :srcdoc="parseTemplate" @onload="resizeIframe"></iframe>
                    </v-col>
                </v-row>
            </template>
        </custom-dialog>
    </div>
</template>
<script src="./ViewInvoice.js"></script>