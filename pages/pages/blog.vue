<template>
	<main class="main">
		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav mb-3"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							<i class="icon-home"></i>
						</nuxt-link>
					</li>
					<li
						class="breadcrumb-item active"
						aria-current="page"
					>Blog</li>
				</ol>
			</div>
		</nav>

		<div class="container">
			<div class="row">
				<div class="col-lg-9">
					<div class="blog-section row">
						<template v-if="!loaded">
							<div
								class="col-md-6 col-lg-4 skeleton-body"
								v-for="(i, index) in [1,2,3,4,5,6]"
								:key="'skel' + index"
							>
								<div class="post"></div>
							</div>
						</template>

						<template v-else>
							<p
								class="blogs-info"
								v-if="posts.length === 0"
							>No posts were found matching your selection.</p>

							<div
								v-for="(post,index) in posts"
								:key="index"
								class="col-md-6 col-lg-4"
							>
								<pv-post-one :post="post"></pv-post-one>
							</div>

							<nav
								class="toolbox toolbox-pagination w-100 mb-2"
								v-if="totalCount > 0"
							>
								<div class="toolbox-item toolbox-show mb-0">
									<label>Show:</label>

									<div class="select-custom">
										<select
											name="count"
											class="form-control"
											@change="getBlog"
											v-model="itemsPerPage"
										>
											<option value="6">6</option>
											<option value="9">9</option>
											<option value="12">12</option>
										</select>
									</div>
								</div>

								<pv-pagination
									:totalCount="totalCount"
									:itemsPerPage="itemsPerPage"
									v-if="totalCount"
								></pv-pagination>
							</nav>
						</template>
					</div>
				</div>

				<div
					class="custom-sidebar-toggle"
					@click="toggleSidebar"
					v-if="isSidebar"
				>
					<i class="fas fa-sliders-h"></i>
				</div>
				<div
					class="sidebar-overlay"
					@click="toggleSidebar"
				></div>

				<pv-blog-sidebar
					:blogCategoryList="blogCategoryList"
					:recentPosts="recentPosts"
					:loaded="loaded"
				></pv-blog-sidebar>
			</div>
		</div>
	</main>
</template>

<script>
import Api, { baseUrl, currentDemo } from '~/api';
import PvBlogSidebar from '~/components/partials/page/PvBlogSidebar';
import PvPostOne from '~/components/features/post/PvPostOne';
import PvPagination from '~/components/features/PvPagination';
import { scrollTopHandler } from '~/utils';

export default {
	components: {
		PvBlogSidebar,
		PvPostOne,
		PvPagination
	},
	watch: {
		$route: function() {
			this.getBlog();
		}
	},
	data: function() {
		return {
			posts: null,
			recentPosts: null,
			blogCategoryList: null,
			totalCount: 0,
			page: 1,
			itemsPerPage: 6,
			isSidebar: false,
			loaded: false
		};
	},
	created: function() {
		this.getBlog();
	},
	mounted: function() {
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler, {
			passive: true
		});
	},
	destroyed: function() {
		window.removeEventListener('resize', this.resizeHandler);
	},
	methods: {
		getBlog: function() {
			this.loaded = false;

			let params = {
				page: this.$route.query.page
					? this.$route.query.page
					: this.page,
				per_page: this.itemsPerPage,
				demo: currentDemo
			};

			Api.get(`${baseUrl}/blog`, {
				params: { ...params, category: this.$route.query.category }
			})
				.then(response => {
					this.posts = response.data.posts;
					this.recentPosts = response.data.recentPosts;
					this.blogCategoryList = response.data.blogCategoryList;
					this.totalCount = response.data.totalCount;

					this.loaded = true;
					scrollTopHandler();
				})
				.catch(error => ({ error: JSON.stringify(error) }));
		},
		toggleSidebar: function() {
			let body = document.querySelector('body');
			if (body.classList.contains('sidebar-opened')) {
				body.classList.remove('sidebar-opened');
			} else {
				body.classList.add('sidebar-opened');
			}
		},
		resizeHandler: function() {
			this.isSidebar = window.innerWidth > 991 ? false : true;
		}
	}
};
</script>