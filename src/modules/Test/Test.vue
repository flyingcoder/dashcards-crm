<template>
	<div class="test pa-5">
		<Editor @onchange="content = $event" :content="content" placeholder="Task Details" ></Editor>
		{{content}}
	</div>
</template>
<script src="./Test.js"></script>	