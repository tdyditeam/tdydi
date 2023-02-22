<template>
	<div class="some">
		<div class="editor" style="width: 500px; height: 100vh">
    <span class="editor__label">Makala</span>
    <editor v-model="text" class="editor" />
  </div>
  <div  style="height: 25px; width: 500px; padding:50px; border:1px solid #eee; margin-left:50px">
	{{ text }}
  </div>
	</div>

</template>

<script>
const Editor = () => import('@/components/admin/Editor.vue')

export default {
	layout:'empty',
  components: {
    Editor,
  },
  data() {
    return {
      text: null,
	  newText:null
    }
  },
  methods:{
	textto(){

	}
  }
}
</script>

<style scoped>

.editor{
	border:1px solid #000;
	height: 100vh;
}
.some{
	display: flex;
}
</style></style>
