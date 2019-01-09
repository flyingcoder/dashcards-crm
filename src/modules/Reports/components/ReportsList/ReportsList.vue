<template>
	<div class="reports-list">
		<v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
		<h3 class="no-data" v-else-if="!loading && !reports.length">No Data</h3>
		<div class="list-content" v-else>
			<div class="report-item" v-for="report of reports" :key="report.id">
				{{ report.title }} - {{ report.url.slice(0, 10) + '...' }}
			</div>
		</div>
	</div>
</template>

<script src="./ReportsList.js">
</script>
<style scoped lang="scss" src="./ReportsList.scss">
</style>
