let importComponent = require.context('@/views/', true, /\.vue$/)
let imports = {}


function importAll (file_paths) {
	file_paths.keys().forEach(file_path => {
		const file_name = file_path.split('/')[1]
		const path = file_path.split('.')[0]
		imports[file_name] = importComponent(file_path).default
	})
	return imports
}

export const import_all_views = () => importAll(require.context('@/views/', true, /\.vue$/))