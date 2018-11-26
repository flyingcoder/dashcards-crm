<template>
    <div class="files__tab">
        <div class="drop__files">
            <div class="drop__files_body">
                <v-layout row align-center justify-center fill-height class="drop__files_content">
                    <v-flex xs4 class="text-xs-center">
                        <div class="file__icon"><v-icon>file_copy</v-icon></div>
                        <div class="drop__title">Drop files here</div>
                        <div class="drop__text">or</div>
                        <div class="drop__btn"><v-btn large dark color="#3b589e">Choose your files</v-btn></div>
                    </v-flex>
                </v-layout>
            </div>
        </div>
        
        <custom-table
                :headers="headers"
                :has-checkbox="true"
                :has-header-icon="true"
                hide-actions
                @items-selected="selected_ids = $event"
                class="custom__table"
            >
            <template slot="toolbar">
                <v-layout row class="file__list_header">
                    <v-flex md10 sm8 xs7 class="file__tab">
                        <v-btn color="#b3b7c3" flat medium>
                            <v-icon dark left class="all">select_all</v-icon>All
                        </v-btn>
                        <v-btn color="#b3b7c3" flat medium>
                            <v-icon dark left class="image">image</v-icon>Image
                        </v-btn>
                        <v-btn color="#b3b7c3" flat medium>
                            <v-icon dark left class="video">video_library</v-icon>Video
                        </v-btn>
                        <v-btn color="#b3b7c3" flat medium>
                            <v-icon dark left class="docs">file_copy</v-icon>Document
                        </v-btn>
                        <v-btn color="#b3b7c3" flat medium>
                            <v-icon dark left class="other">settings_applications</v-icon>Other
                        </v-btn>
                        <v-btn color="#3b589e" dark>
                            Add Link
                        </v-btn>
                    </v-flex>
                    <v-flex md2 sm4 xs5 class="file__option text-xs-right">
                        <v-btn fab flat small class="list__view">
                            <v-icon>list</v-icon>
                        </v-btn>
                        <v-btn fab flat small class="grid__view">
                            <v-icon>grid_on</v-icon>
                        </v-btn>
                        <v-btn fab flat small class="sort__option">
                            <v-icon>more_horiz</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </template>
        </custom-table>
    </div>
</template>

<script src="./FilesTab.js"></script>
<style lang="scss" scoped src="./FilesTab.scss"></style>

<style scoped>

>>>.content__wrapper .buzz__tables .buzz__tablesTwo{
    padding: 0;
    border: none;
    background-color: #fff;
}
</style>


