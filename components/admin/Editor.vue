<template>
  <div>
    <bubble-menu :editor="editor" v-if="editor" class="bubble">
      <input
        class="editor-color"
        type="color"
        @input="editor.chain().focus().setColor($event.target.value).run()"
        :value="editor.getAttributes('textStyle').color || 'color'"
      />
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        H4
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        H5
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        H6
      </button>
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        Paragraph
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        Break
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <svg
          width="19"
          height="13"
          viewBox="0 0 19 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 2.18248C17.7068 2.49878 16.712 2.97324 16.0157 3.60584C15.3525 4.20681 15.0541 4.93431 15.1204 5.78832C15.5515 6.2944 16.082 6.7056 16.712 7.0219C17.3752 7.30657 18.0716 7.55961 18.801 7.78102C18.9668 8.35036 18.9834 8.93552 18.8508 9.5365C18.7513 10.1058 18.5358 10.6436 18.2042 11.1496C17.8726 11.6241 17.4747 12.0353 17.0105 12.3832C16.5794 12.7311 16.1318 12.9367 15.6675 13C14.9712 12.9684 14.2914 12.8418 13.6283 12.6204C12.9651 12.3674 12.3848 12.0195 11.8874 11.5766C11.3901 11.1338 10.9756 10.6119 10.644 10.0109C10.3455 9.37834 10.1963 8.66667 10.1963 7.87591C10.1963 6.92701 10.3953 6.02555 10.7932 5.17153C11.1911 4.28589 11.7382 3.49513 12.4346 2.79927C13.164 2.10341 14.0262 1.51825 15.0209 1.0438C16.0157 0.537714 17.1099 0.189782 18.3037 0L19 2.18248ZM8.80367 2.18248C7.51047 2.49878 6.51571 2.97324 5.81937 3.60584C5.1562 4.20681 4.85777 4.93431 4.92408 5.78832C5.35515 6.2944 5.88569 6.7056 6.51571 7.0219C7.17888 7.30657 7.87522 7.55961 8.60471 7.78102C8.77051 8.35036 8.78709 8.93552 8.65445 9.5365C8.55497 10.1058 8.33944 10.6436 8.00785 11.1496C7.67627 11.6241 7.27836 12.0353 6.81414 12.3832C6.38307 12.7311 5.93543 12.9367 5.4712 13C4.77487 12.9684 4.09511 12.8418 3.43194 12.6204C2.76876 12.3674 2.18848 12.0195 1.6911 11.5766C1.19372 11.1338 0.779232 10.6119 0.447644 10.0109C0.149215 9.37834 0 8.66667 0 7.87591C0 6.92701 0.198953 6.02555 0.596859 5.17153C0.994765 4.28589 1.54189 3.49513 2.23822 2.79927C2.96771 2.10341 3.82984 1.51825 4.82461 1.0438C5.81937 0.537714 6.91361 0.189782 8.10733 0L8.80367 2.18248Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6663 15.5H6.66634V13.8333H16.6663V15.5ZM4.99967 15.5H3.33301V13.8333H4.99967V15.5ZM16.6663 11.3333H6.66634V9.66667H16.6663V11.3333ZM4.99967 11.3333H3.33301V9.66667H4.99967V11.3333ZM16.6663 7.16667H6.68551V5.5H16.6663V7.16667ZM4.99967 7.16667H3.33301V5.5H4.99967V7.16667Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="bold"
      >
        B
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="italic"
      >
        I
      </button>
      <button
        @click="setLink"
        :class="{ 'is-active': editor.isActive('link') }"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.46492 21.0346C6.44276 21.0346 4.6197 19.8164 3.84572 17.9483C3.07175 16.0801 3.49925 13.9296 4.92892 12.4995L7.05092 10.3775L8.46492 11.7915L6.34392 13.9125C5.58598 14.6705 5.28997 15.7752 5.5674 16.8106C5.84482 17.8459 6.65354 18.6546 7.6889 18.9321C8.72426 19.2095 9.82898 18.9135 10.5869 18.1555L12.7079 16.0345L14.1219 17.4495L12.0009 19.5705C11.065 20.5111 9.79178 21.0382 8.46492 21.0346ZM9.17192 16.7415L7.75792 15.3275L14.8289 8.25653L16.2429 9.67053L9.17292 16.7405L9.17192 16.7415ZM16.9509 14.6205L15.5359 13.2065L17.6569 11.0855C18.4252 10.3299 18.7291 9.2202 18.4532 8.17851C18.1772 7.13683 17.3637 6.32318 16.3221 6.04698C15.2805 5.77077 14.1708 6.07445 13.4149 6.84253L11.2929 8.96353L9.87892 7.54953L12.0009 5.42753C13.956 3.4895 17.1099 3.4964 19.0565 5.44298C21.003 7.38956 21.01 10.5434 19.0719 12.4985L16.9509 14.6195V14.6205Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </bubble-menu>
    <floating-menu :editor="editor" v-if="editor" class="bubble float">
      <input
        type="color"
        class="editor-color"
        @input="editor.chain().focus().setColor($event.target.value).run()"
        :value="editor.getAttributes('textStyle').color"
      />
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        H4
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        H5
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        H6
      </button>
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        Paragraph
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        Break
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <svg
          width="19"
          height="13"
          viewBox="0 0 19 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 2.18248C17.7068 2.49878 16.712 2.97324 16.0157 3.60584C15.3525 4.20681 15.0541 4.93431 15.1204 5.78832C15.5515 6.2944 16.082 6.7056 16.712 7.0219C17.3752 7.30657 18.0716 7.55961 18.801 7.78102C18.9668 8.35036 18.9834 8.93552 18.8508 9.5365C18.7513 10.1058 18.5358 10.6436 18.2042 11.1496C17.8726 11.6241 17.4747 12.0353 17.0105 12.3832C16.5794 12.7311 16.1318 12.9367 15.6675 13C14.9712 12.9684 14.2914 12.8418 13.6283 12.6204C12.9651 12.3674 12.3848 12.0195 11.8874 11.5766C11.3901 11.1338 10.9756 10.6119 10.644 10.0109C10.3455 9.37834 10.1963 8.66667 10.1963 7.87591C10.1963 6.92701 10.3953 6.02555 10.7932 5.17153C11.1911 4.28589 11.7382 3.49513 12.4346 2.79927C13.164 2.10341 14.0262 1.51825 15.0209 1.0438C16.0157 0.537714 17.1099 0.189782 18.3037 0L19 2.18248ZM8.80367 2.18248C7.51047 2.49878 6.51571 2.97324 5.81937 3.60584C5.1562 4.20681 4.85777 4.93431 4.92408 5.78832C5.35515 6.2944 5.88569 6.7056 6.51571 7.0219C7.17888 7.30657 7.87522 7.55961 8.60471 7.78102C8.77051 8.35036 8.78709 8.93552 8.65445 9.5365C8.55497 10.1058 8.33944 10.6436 8.00785 11.1496C7.67627 11.6241 7.27836 12.0353 6.81414 12.3832C6.38307 12.7311 5.93543 12.9367 5.4712 13C4.77487 12.9684 4.09511 12.8418 3.43194 12.6204C2.76876 12.3674 2.18848 12.0195 1.6911 11.5766C1.19372 11.1338 0.779232 10.6119 0.447644 10.0109C0.149215 9.37834 0 8.66667 0 7.87591C0 6.92701 0.198953 6.02555 0.596859 5.17153C0.994765 4.28589 1.54189 3.49513 2.23822 2.79927C2.96771 2.10341 3.82984 1.51825 4.82461 1.0438C5.81937 0.537714 6.91361 0.189782 8.10733 0L8.80367 2.18248Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6663 15.5H6.66634V13.8333H16.6663V15.5ZM4.99967 15.5H3.33301V13.8333H4.99967V15.5ZM16.6663 11.3333H6.66634V9.66667H16.6663V11.3333ZM4.99967 11.3333H3.33301V9.66667H4.99967V11.3333ZM16.6663 7.16667H6.68551V5.5H16.6663V7.16667ZM4.99967 7.16667H3.33301V5.5H4.99967V7.16667Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="bold"
      >
        B
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="italic"
      >
        I
      </button>
      <button
        @click="setLink"
        :class="{ 'is-active': editor.isActive('link') }"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.46492 21.0346C6.44276 21.0346 4.6197 19.8164 3.84572 17.9483C3.07175 16.0801 3.49925 13.9296 4.92892 12.4995L7.05092 10.3775L8.46492 11.7915L6.34392 13.9125C5.58598 14.6705 5.28997 15.7752 5.5674 16.8106C5.84482 17.8459 6.65354 18.6546 7.6889 18.9321C8.72426 19.2095 9.82898 18.9135 10.5869 18.1555L12.7079 16.0345L14.1219 17.4495L12.0009 19.5705C11.065 20.5111 9.79178 21.0382 8.46492 21.0346ZM9.17192 16.7415L7.75792 15.3275L14.8289 8.25653L16.2429 9.67053L9.17292 16.7405L9.17192 16.7415ZM16.9509 14.6205L15.5359 13.2065L17.6569 11.0855C18.4252 10.3299 18.7291 9.2202 18.4532 8.17851C18.1772 7.13683 17.3637 6.32318 16.3221 6.04698C15.2805 5.77077 14.1708 6.07445 13.4149 6.84253L11.2929 8.96353L9.87892 7.54953L12.0009 5.42753C13.956 3.4895 17.1099 3.4964 19.0565 5.44298C21.003 7.38956 21.01 10.5434 19.0719 12.4985L16.9509 14.6195V14.6205Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </floating-menu>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Color } from '@tiptap/extension-color'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
  },
  props: {
    value: {
      type: String,
    },
    idx: {
      type: Number,
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  watch: {
    value(val) {
      // HTML
      const isSame = this.editor.getHTML() === val

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(val)

      if (isSame) {
        return
      }

      this.editor.commands.setContent(val, false)
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        TextStyle,
        Color,
        Link.configure({
          openOnClick: false,
        }),
      ],
      content: this.value,
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML())
        // JSON
        // this.$emit('update:value', this.editor.getJSON())
      },
    })
  },
  methods: {
    setLink() {
      const previousUrl = this.editor.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        this.editor.chain().focus().extendMarkRange('link').unsetLink().run()

        return
      }

      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    },
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style>
.bubble {
  background: #2c2c2c;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15), 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 5px 15px;
  display: flex;
  width: fit-content;
  position: relative;
}
.bubble .is-active {
  background: #fff;
  color: #2c2c2c;
}
.bubble::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 15px;
  height: 15px;
  border-radius: 0 0 0 10px;
  background: #2c2c2c;
  z-index: -1;
}
.bubble.float::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 15px;
  height: 15px;
  border-radius: 10px 0 0 0;
  background: #2c2c2c;
}

.bubble button {
  background: transparent;
  color: #fff;
  font-family: PT Serif;
  font-style: normal;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 7px;
  border-radius: 3px;
  position: relative;
}

.bubble .bold {
  font-weight: bold;
}
.bubble .italic {
  font-style: italic;
}
.editor-color {
  margin-top: 2px;
  width: 40px !important;
  height: 30px !important;
  padding: 0px !important;
}
.editor a {
  color: blue;
  border-bottom: 1px solid blue;
}
</style>
