<template>
    <div class="invoice-template-dialog">
        <custom-dialog :hasFooter="false" ref="dialog" :open.sync="computedDialog" :title="dialogTitle" @button1="cancel" :maxWidth="900">
            <template v-slot:content>
                <v-card flat>
                    <v-card-title>
                    </v-card-title>
                    <v-card-text>
                        <p>In this guide, you'll learn how to create a fully functional HTML invoice template, with only basic HTML and CSS knowledge. We created this guide with simplicity in mind, so the only thing you'll need are basic web design skills. The invoice template you'll be creating consists only of HTML, CSS, and optionally image and font files. No scripting or programming knowledge is required whatsoever. You just need to include a simple HTML document which works out of the box and doesn't require any modifications on your side.</p>
                        <h1 class="my-2">Start building your first HTML invoice template</h1>
                        <p>Starting from scratch can be painful and time-consuming so we highly encourage you to use our default template as a starting point. Here you can see all the placeholders that are can be used and your template should contain most of them (we highly recommend using them all). See the Placeholders reference for a list of available placeholders and their meaning.</p>
                        <v-alert type="info" class="ma-3 subtitle-2" dense>What is placeholder? Placeholder is special markup text that will be replaced with real data contained in the invoice. E.g. Placeholder <code>{company_name}</code> is replaced with the name of the company like "Buzzooka".</v-alert>
                    </v-card-text>
                    <v-card-text>
                        <h1 class="text-center my-3">Some simple rules</h1>
                        <ul>
                            <li class="mb-2"><strong>Resource paths:</strong> When you include files, for example, CSS files, in your HTML make sure the paths are complete path when viewed directly in the browser.
                                <blockquote>
                                    <span>Good:</span><br>
                                    <code class="fullwidth py-2 my-2"> &lt;img src="https://mysite.com/my-image.jpg" /&gt;</code><br>
                                    <span>Bad:</span><br>
                                    <code class="fullwidth py-2 my-2"> &lt;img src="/my-image.jpg" /&gt; </code>
                                </blockquote>
                            </li>
                            <li class="mb-2">
                                <strong>Allowed tags and attributes:</strong> For security reasons, we have to restrict some of the tags that can be included in the invoice template. So using various input and embed tags in the HTML is forbidden and such will be removed from the template upon upload. Refer to Allowed tags and Allowed attributes references for more details.
                            </li>
                            <li class="mb-2">
                                <strong>JavaScript:</strong> Don't include JavaScript code in your HTML file. Any HTML code containing <code>&lt;script&gt;</code> tags or onevent attributes (e.g. onclick=&#8220;...&#8221;) will be removed when you upload the template.
                            </li>
                            <li class="mb-2">
                                <strong>HTML:</strong> To make sure the template works as expected you have to include the <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> tags. These are considered required HTML tags and every HTML invoice template should contain them, otherwise, the layout may be broken. Also, avoid using HTML elements with absolute or fixed positions, if you must, don't set the z-index more than 20.
                                <blockquote class="my-2 ">
                                    <span>Example HTML</span><br>
                                    <code class="py-2 px-5 fullwidth">
                                        &lt;!DOCTYPE html&gt;<br>
                                        &nbsp;&nbsp;&lt;html&gt;<br>
                                        &nbsp;&nbsp;&lt;head&gt;<br>
                                        &nbsp;&nbsp;&lt;meta charset="utf-8"&gt;<br>
                                        &nbsp;&nbsp;...<br>
                                        &nbsp;&nbsp;&lt;/head&gt;<br>
                                        &nbsp;&nbsp;&lt;body&gt;<br>
                                        &nbsp;&nbsp;&lt;div id="container"&gt;<br>
                                        &nbsp;&nbsp;...<br>
                                        &nbsp;&nbsp;&lt;/div&gt;<br>
                                        &nbsp;&nbsp;&lt;/body&gt;<br>
                                        &lt;/html&gt;
                                    </code>
                                </blockquote>
                            </li>
                            <li class="mb-2">
                                <strong>HTML Comments:</strong> We know it is good practice to describe the code with comments, but note that we remove all HTML comments after uploading the template to he server, so be careful especially with conditional Internet Explorer comments as you shouldn't use them at all. Also <b>never</b> add comments as a first element in the document.
                            </li>
                            <li class="mb-2">
                                <strong>Template styling:</strong> To comply with Buzzooka the template must have a fixed width of 820px and a minimum height of 1158px (if the height exceeds 1158px the invoice Print/PDF will expand on several pages), so the proportion is preserved for the A4 format. Changing the width can lead to a broken layout when displayed on the screen. Also to ensure perfect integration with Buzzooka never override the <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> styles. Instead, we encourage you to use one main <code>&lt;div id="container"&gt;</code> element and apply all top-level styles to it. For better PDF styling, we encourage you to use table layout or use inline css styling.
                                <blockquote class="pa-3">
                                    <strong class="my-2">Recommended:</strong><br>
                                    <code class="px-5 fullwidth">
                                    div#container {<br>
                                        font: normal 12px Arial, Helvetica, Sans-serif;<br>
                                        background: white;<br>
                                        padding: 20px;<br>
                                        }
                                    </code><br>
                                    <strong class="my-2">Not recommended:</strong><br>
                                    <code class="px-5 fullwidth">
                                    html {<br>
                                        font: normal 12px Arial, Helvetica, Sans-serif;<br>
                                        background: white;<br>
                                        }<br>
                                    body {<br>
                                        margin: 30px;<br>
                                        padding: 10px;<br>
                                        }
                                    </code>
                                </blockquote>
                            </li>
                            <li class="mb-2">
                                <strong>Logo image:</strong> The logo in the HTML template shouldn't be greater than 820 x 820 pixels, otherwise it can lead to unexpected behavior and broken layout. Recommended minimum for the logo is 150 x 100 pixels. Image url are available in the placeholder <code>{company_logo}</code>
                                <blockquote class="pa-3">
                                    <v-alert dark dense class="my-2 caption"><b>Note:</b> Always specify the width and the height of the logo in pixels, never set <code>auto</code> or <code>inherit</code> for the width and height of the logo image.</v-alert>
                                    <br>
                                    <strong class="text-right">Recommended:</strong><br>
                                    <code class="inline-block px-5 fullwidth">
                                        img.company-logo {<br>
                                        &nbsp;&nbsp;&nbsp; width: 200px;<br>
                                        &nbsp;&nbsp;&nbsp; height: 150px;<br>
                                        }
                                    </code>
                                    <br>
                                    <strong class="text-wrong">Not recommended:</strong><br>
                                    <code class="inline-block px-5 fullwidth">
                                        img.company-logo {<br>
                                        &nbsp;&nbsp;&nbsp; width: 40%;<br>
                                        &nbsp;&nbsp;&nbsp; height: auto;<br>
                                        }
                                    </code>
                                </blockquote>
                            </li>
                            <!-- <li>
                                    <strong>Licenses:</strong> If you use copyrighted work or otherwise protected intellectual property in your template (like fonts, HTML templates, images, etc.), make sure you always include their licenses in a file named LICENSES (without extension) in the final template archive file. This LICENSES file should contain all appropriate licenses merged together. 
                                </li> -->
                        </ul>
                    </v-card-text>
                    <v-card-text>
                        <h1 class="text-center my-3">Best practices when creating your HTML invoice template</h1>
                        <ul>
                            <li>
                                We encourage you to use HTML5 with CSS3 for your template, and always include the <code>&lt;!DOCTYPE html&gt;</code> tag at the beginning of your template. This will ensure proper rendering in different browsers.
                            </li>
                            <li>
                                Use UTF-8 charset for the template (<code>&lt;meta charset="utf-8"&gt;</code>).
                            </li>
                            <li>
                                For best preview in different browsers, we suggest you first reset your CSS styles and build your template on top of the reset styles. We prefer the <a class="css_Home_Link" href="http://meyerweb.com/eric/tools/css/reset/">Eric Meyer's "Reset CSS" 2.0</a>, but you can choose from different ones at <a class="css_Home_Link" href="http://www.cssreset.com">www.cssreset.com</a>.
                                <v-alert dense dark class="caption my-2">
                                    <b>Note:</b> If you decide to use reset CSS style make sure you include that stylesheet file in the final template because Buzzooka won't handle this automatically.
                                </v-alert>
                            </li>
                            <li>
                                We don't impose restrictions on the background color for your invoice templates, but you're encouraged to use a white background or lighter colors to make sure the templates are printer friendly.
                            </li>
                            <li>
                                Don't use <code>!important</code>, unless in extreme cases when this is absolutely necessary. Your style should work without any problems in Buzzooka as we don't override your styles, so using <code>!important</code> is not necessary.
                                <v-alert dense dark class="caption my-2">
                                    <b>Note:</b>
                                    If you decided to use <code>!important</code> note that this may lead to broken print layout so you may additionally need to tweak the <code>@media print</code> to fix any print layout issues.
                                </v-alert>
                            </li>
                            <li>
                                It is recommended to use classes for styling the template and its sections instead of using generic element styles.
                                <blockquote>
                                    <span class="text-right">Recommended:</span><br>
                                    <code class="px-5 py-2 fullwidth">
                                        span.invoice-title {<br>
                                        &nbsp;&nbsp;&nbsp; font-size: 20px;<br>
                                        &nbsp;&nbsp;&nbsp; margin-top: 10px;<br>
                                        }
                                    </code>
                                    <br>
                                    <br>
                                    <span class="text-wrong">Not recommended:</span><br>
                                    <code class="px-5 py-2 fullwidth">
                                        span {<br>
                                        &nbsp;&nbsp;&nbsp; font-size: 20px;<br>
                                        &nbsp;&nbsp;&nbsp; margin-top: 10px;<br>
                                        }</code>
                                </blockquote>
                            </li>
                            <li>
                                When your template uses external resources like images or fonts it's not recommended to include them inline in the CSS as base64 encoded data URI, because this may lead to quite large CSS files. Instead, always include them with relative paths.
                            </li>
                            <li>
                                When using custom fonts in the HTML invoice template it's recommended to include all font formats <code>ttf</code>, <code>otf</code>, <code>woff</code>, <code>woff2</code>, <code>eot</code> and <code>svg</code> with the <code>@font-face</code> CSS declaration. And for proper rendering fonts in the PDF invoice always include the <code>ttf</code> and <code>otf</code> font formats.
                                <blockquote>
                                    <v-alert type="info" dense class="my-2 caption"><b>Note:</b> Before using fonts in the templates always make sure you have the proper usage rights for displaying them on web and embedding in PDF.</v-alert>
                                    <v-alert dense dark class="my-2 caption"><b>Tip:</b> We highly recommend using <a class="css_Home_Link" href="http://www.google.com/fonts">Google Fonts</a> in your invoice and quote templates, that way you don't have to worry about the usage license as they are already open to the public. Also with this you'll avoid managing different font formats and their cross browser compatibility, not to mention the cleaner template structure and code.</v-alert>
                                </blockquote>
                            </li>
                        </ul>
                    </v-card-text>
                    <v-card-text>
                        <h3>Allowed HTML tags</h3>
                        <p>
                            <code>a</code>,
                            <code>b</code>,
                            <code>body</code>,
                            <code>br</code>,
                            <code>div</code>,
                            <code>em</code>,
                            <code>footer</code>,
                            <code>h1</code>,
                            <code>h2</code>,
                            <code>h3</code>,
                            <code>h4</code>,
                            <code>h5</code>,
                            <code>h6</code>,
                            <code>head</code>,
                            <code>header</code>,
                            <code>hr</code>,
                            <code>html</code>,
                            <code>i</code>,
                            <code>img</code>,
                            <code>label</code>,
                            <code>li</code>,
                            <code>link</code>,
                            <code>meta</code>,
                            <code>ol</code>,
                            <code>p</code>,
                            <code>pre</code>,
                            <code>section</code>,
                            <code>span</code>,
                            <code>strong</code>,
                            <code>style</code>,
                            <code>sub</code>,
                            <code>sup</code>,
                            <code>table</code>,
                            <code>tbody</code>,
                            <code>td</code>,
                            <code>tfoot</code>,
                            <code>th</code>,
                            <code>thead</code>,
                            <code>title</code>,
                            <code>tr</code>,
                            <code>ul</code>
                        </p>
                        <h3>Allowed HTML attributes</h3>
                        <p><code>cellpadding</code>, <code>cellspacing</code>, <code>charset</code>, <code>class</code>, <code>colspan</code>, <code>content</code>, <code>data-hide-on-qoute</code>, <code>data-iterate</code>, <code>data-logo</code>, <code>dir</code>, <code>height</code>, <code>href</code>, <code>http-equiv</code>, <code>id</code>, <code>lang</code>, <code>name</code>, <code>rel</code>, <code>rowspan</code>, <code>src</code>, <code>style</code>, <code>title</code>, <code>type</code>, <code>width</code>
                            <v-alert type="info" dense class="my-2 caption">
                                Note: We tried to use the latest HTML standards for this list, but if you think we missed some HTML tag or attribute give your suggestion at support@buzzooka.com. We personally review every message.
                            </v-alert>
                        </p>
                    </v-card-text>
                    <v-card-text class="table-wrapper" v-if="invoicefields">
                        <h3>Placeholder</h3>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Placeholder</th>
                                        <th class="text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(info, field) in invoicefields" :key="field">
                                        <td v-text="`{`+field+`}`"></td>
                                        <td v-html="info.description"></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </template>
        </custom-dialog>
    </div>
</template>
<script>
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    components: {
        CustomDialog,
    },

    props: {
        dialog: Boolean,
        invoicefields: [Array, Object]
    },

    data: () => ({
        open: false,
    }),

    mounted() {
        this.$event.$on('btnloading_off', status => (this.btnloading = status))
    },

    computed: {
        computedDialog: {
            get() {
                return this.dialog
            },
            set(val) {
                !val && this.$emit('close')
                this.$emit('update:dialog', val)
            }
        },
        dialogTitle() {
            return 'Invoice Template Guide and Rules'
        }
    },

    watch: {
        dialog: {
            handler(new_val) {
                this.open = new_val
                if (
                    new_val &&
                    !this.members.all_items.length &&
                    !this.milestones.items.length
                )
                    this.fill_dropdowns()
            }
        },
        open(new_val) {
            this.$emit('update:dialog', new_val)
        }
    },

    methods: {
        cancel() {
            this.dialog = false
        },

        open_dialog() {
            this.$refs.dialog.open_dialog()
        }
    }
}
</script>