<template>
	<div class="test pa-5">
		<Editor ref="editor" v-model="content" :content="content" :componentKey="randKey" placeholder="Task Details" ></Editor>
		<v-btn @click="changeVal">change</v-btn>
		{{content}} , {{randKey}}
	</div>
</template>
<script src="./Test.js"></script>	