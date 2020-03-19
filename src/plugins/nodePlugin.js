import axios from 'axios'

export const http = axios.create({
	baseURL: 'https://kronome.herokuapp.com/api/v1/'
	// baseURL: 'http://localhost:5000/api/v1/'
})

export default function install (Vue) {
	Object.defineProperty(Vue.prototype, '$node', {
		get () {
			return http
		}
	})
}