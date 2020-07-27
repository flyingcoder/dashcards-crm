<template>
    <v-row no-gutters>
        <v-col md="12">
            <TableSection></TableSection>
        </v-col>
        <v-col md="12" class="my-2">
            <BottomRight></BottomRight>
        </v-col>
        <v-col md="3" sm="4" class="label mb-2">Notes</v-col>
        <v-col md="9" sm="8" class="value mb-2">
            <v-textarea label="Notes - any revelant information not already covered" :value="notes" class="textarea__field" flat solo dense outlined :rows="2" hide-details color="#657186" @input="update_textarea($event, 'notes')" />
        </v-col>
        <v-divider></v-divider>
        <v-col md="3" sm="4" class="label mb-2">Terms</v-col>
        <v-col md="9" sm="8" class="value mb-2">
            <v-textarea label="Terms and conditions - late fees, payment methods, delivery schedule" :value="terms" class="textarea__field" flat solo dense outlined :rows="2" hide-details color="#657186" @input="update_textarea($event, 'terms')" />
        </v-col>
    </v-row>
</template>
<script>
import { mapGetters} from 'vuex'
import TableSection from '@/modules/Invoice/components/InvoiceDialog/TableSection/TableSection.vue'
import BottomRight from '@/modules/Invoice/components/InvoiceDialog/BottomRight/BottomRight.vue'
export default {
    name: 'StepTwo',
    components: {
        TableSection,
        BottomRight
    },
    computed: {
        ...mapGetters('invoice', ['notes', 'terms', 'dialog'])
    },

    methods: {
        update_textarea(new_val, field) {
            this.$store.commit('invoice/set_textarea', { new_val, field })
        },
        isEmptyField(view, value) {
            if (view) {
                if (!value) {
                    return true
                }
            }
        }
    }
}
</script>