<template>
	<ul
		class="pagination toolbox-item mb-0"
		v-if="pageNumbers.length > 1"
	>
		<li
			class="page-item"
			v-if="currentPage > 1"
		>
			<nuxt-link
				class="page-link page-link-btn"
				:to="prevPage"
			>
				<i class="icon-angle-left"></i>
			</nuxt-link>
		</li>
		<li
			class="page-item"
			v-for="number in pageNumbers"
			:key="'page'+number"
			@click="changePage(number)"
		>
			<nuxt-link
				class="page-link"
				:class="{active: number === currentPage}"
				:to="getPageLinkUrl(number)"
			>
				{{ number }}
				<span class="sr-only">(current)</span>
			</nuxt-link>
		</li>
		<li
			class="page-item"
			v-if="currentPage < totalPage"
		>
			<nuxt-link
				class="page-link page-link-btn"
				:to="nextPage"
			>
				<i class="icon-angle-right"></i>
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		totalCount: Number,
		itemsPerPage: Number
	},
	data: function() {
		return {
			pageNumbers: [],
			totalPage: 0,
			currentPage: 1
		};
	},
	computed: {
		prevPage: function() {
			let pageIndex =
				this.$route.params.page && this.$route.params.page > 1
					? this.$route.params.page - 1
					: 1;
			return {
				...this.$route,
				query: { ...this.$route.query, page: pageIndex }
			};
		},
		nextPage: function() {
			let pageIndex =
				this.$route.params.page &&
				this.$route.params.page < this.totalPage
					? this.$route.params.page + 1
					: this.totalPage;
			return {
				...this.$route,
				query: { ...this.$route.query, page: pageIndex }
			};
		}
	},
	watch: {
		$route: function() {
			this.getPageNumbers();
			this.currentPage = this.$route.query.page;
		},
		itemsPerPage: function() {
			this.getPageNumbers();
		}
	},
	created: function() {
		this.getPageNumbers();
		this.currentPage = this.$route.query.page ? this.$route.query.page : 1;
	},
	methods: {
		getPageNumbers: function() {
			this.totalPage =
				parseInt(this.totalCount / this.itemsPerPage) +
				(0 < this.totalCount % this.itemsPerPage ? 1 : 0);
			this.pageNumbers = [];

			for (let i = -1; i < 2 && this.totalPage >= 3; i++) {
				if (1 < this.currentPage && this.currentPage < this.totalPage)
					this.pageNumbers.push(this.currentPage + i);
				if (1 === this.currentPage)
					this.pageNumbers.push(this.currentPage + i + 1);
				if (this.currentPage === this.totalPage) {
					this.pageNumbers.push(this.currentPage + i - 1);
				}
			}

			for (let i = 0; i < this.totalPage && this.totalPage < 3; i++) {
				this.pageNumbers.push(i + 1);
			}
		},
		getPageLinkUrl: function(index) {
			return {
				...this.$route.path,
				query: { ...this.$route.query, page: index }
			};
		},
		changePage: function(number) {
			this.currentPage = number;
		}
	}
};
</script>