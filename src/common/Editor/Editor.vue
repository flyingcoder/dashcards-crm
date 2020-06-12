<template>
    <div class="editor">
        <editor-menu-bar v-if="hasTools && editable" :editor="editor" class="editor-menu-bar" v-slot="{ commands, isActive }">
            <div class="menubar pa-1">
                <v-menu bottom left>
                    <template v-slot:activator="{ on }">
                        <v-btn tile small icon v-on="on" class="menubar__button">
                            <v-icon>mdi-format-size</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="px-3" :class="{ 'is-active': isActive.heading({ level: 1 }) }" v-for="(item, i) in fontSizes" :key="i" @click="commands.heading({ level: item.level })">
                            <v-list-item-title>
                                <span :style="`font-size:${item.fSize}`">{{ item.label }}</span>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-tooltip top v-for="(item, i) in commandList" :key="item.icon">
                    <template v-slot:activator="{ on }">
                        <v-btn icon tile small v-on="on" class="menubar__button" :class="{ 'is-active': item.active(isActive) }" @click="item.method(commands)">
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{item.label}}</span>
                </v-tooltip>
                <v-tooltip v-if="isActive.table()" top v-for="(item, i) in tableCommandList" :key="item.icon">
                    <template v-slot:activator="{ on }">
                        <v-btn icon tile small v-on="on" class="menubar__button" :class="{ 'is-active': item.active(isActive) }" @click="item.method(commands)">
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{item.label}}</span>
                </v-tooltip>
            </div>
        </editor-menu-bar>
        <editor-floating-menu v-if="hasFloatingTools && editable" :editor="editor" v-slot="{ commands, isActive, menu }">
            <div class="editor__floating-menu" :class="{ 'is-active': menu.isActive }" :style="`top: ${menu.top}px`">
                <v-menu bottom left>
                    <template v-slot:activator="{ on }">
                        <v-btn small tile icon v-on="on" class="menubar__button">
                            <v-icon>mdi-format-size</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item class="px-3" :class="{ 'is-active': isActive.heading({ level: 1 }) }" v-for="(item, i) in fontSizes" :key="i" @click="commands.heading({ level: item.level })">
                            <v-list-item-title>
                                <span :style="`font-size:${item.fSize}`">{{ item.label }}</span>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-tooltip top v-for="(item, i) in commandList" :key="i">
                    <template v-slot:activator="{ on }">
                        <v-btn icon tile small v-on="on" class="menubar__button" :class="{ 'is-active': item.active(isActive) }" @click="item.method(commands)">
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{item.label}}</span>
                </v-tooltip>
                <v-tooltip v-if="isActive.table()" top v-for="(item, i) in tableCommandList" :key="item.icon">
                    <template v-slot:activator="{ on }">
                        <v-btn icon tile small v-on="on" class="menubar__button" :class="{ 'is-active': item.active(isActive) }" @click="item.method(commands)">
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{item.label}}</span>
                </v-tooltip>
            </div>
        </editor-floating-menu>
        <editor-menu-bubble class="menububble" :editor="editor" @hide="hideLinkMenu" v-slot="{ commands, isActive, getMarkAttrs, menu }">
            <div v-if="editable" class="menububble" :class="{ 'is-active': menu.isActive }" :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`">
                <form class="menububble__form" v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
                    <v-text-field dense clearable hide-details solo class="menububble__input" type="url" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu">
                        <template v-slot:append-outer>
                            <v-btn dense class="pb-3" icon @click="setLinkUrl(commands.link, linkUrl)">
                                <v-icon color="white">mdi-content-save</v-icon>
                            </v-btn>
                        </template>
                    </v-text-field>
                </form>
                <template v-else>
                    <v-btn class="menububble__button" @click="showLinkMenu(getMarkAttrs('link'))" :class="{ 'is-active': isActive.link() }">
                        <span>{{ isActive.link() ? 'Update Link' : 'Add Link'}}</span>
                        <v-icon small right>mdi-link</v-icon>
                    </v-btn>
                </template>
            </div>
        </editor-menu-bubble>
        <editor-content class="editor__content" :editor="editor" />
        <!-- //modals -->
        <YTModal ref="ytModal" @onConfirm="addYTCommand" />
        <ImgModal ref="imgModal" @onConfirm="addImgCommand" />
    </div>
</template>
<script src="./Editor.js"></script>
<style lang="scss" src="./sass/EditorMain.scss"></style>