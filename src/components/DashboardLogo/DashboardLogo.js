export default {
		props: {
			methods: {
				type: Object,
				default() {
					return {
						collapse() {
							const is_collapsed = document.querySelector("#buzzooka").classList.toggle("collapse")
							let sidebar__collapse = document.querySelector('.sidebar__collapse')
							let logo__img = document.querySelectorAll('.logo__img')

							if (is_collapsed) {
								sidebar__collapse.classList.remove('opened')
								sidebar__collapse.classList.add('closed')

								logo__img[1].classList.remove('hidden')
								logo__img[0].classList.add('hidden')
							}else {
								sidebar__collapse.classList.remove('closed')
								sidebar__collapse.classList.add('opened')

								logo__img[1].classList.add('hidden')
								logo__img[0].classList.remove('hidden')
							}
						}
					}
				}
			},

		},
}