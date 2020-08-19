import { Node } from "tiptap";

export default class Youtube extends Node {
    get name() {
        return "youtube"
    }

    get schema() {
        return {
            attrs: {
                src: {
                    default: null
                }
            },
            group: "block",
            selectable: true,
            parseDOM: [{
                tag: "iframe",
                getAttrs: dom => ({
                    src: dom.getAttribute("src")
                })
            }],
            toDOM: node => [
                "iframe",
                {
                    src: node.attrs.src.includes('youtube') ? `${node.attrs.src}` : `https://www.youtube.com/embed/${node.attrs.src}`,
                    frameborder: 0,
                    allowfullscreen: "true",
                    width: 600,
                    height: 350,
                    class: 'yt-iframe mx-auto'
                }
            ]
        }
    }

    commands({ type }) {
        return attrs => (state, dispatch) => {
            const { selection } = state;
            const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
            const node = type.create(attrs);
            const transaction = state.tr.insert(position, node)
            dispatch(transaction)
        };
    }
}