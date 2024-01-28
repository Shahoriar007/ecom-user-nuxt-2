<template>
	<aside
		class="sidebar blog-sidebar mobile-sidebar col-lg-3"
		sticky-container
	>
		<div
			class="sidebar-content skeleton-body"
			v-if="!loaded"
		>
			<aside class="widget"></aside>
			<aside class="widget"></aside>
		</div>
		<div
			class="sidebar-content"
			v-else
			v-sticky="isSticky"
			sticky-offset="{top: 75}"
		>
			<div class="sidebar-wrapper">
				<div class="sidebar-content">
					<div class="widget widget-categories">
						<h4 class="widget-title">Blog Categories</h4>
						<ul class="list">
							<li
								v-for="(cat,index) in blogCategoryList"
								:key="index"
							>
								<nuxt-link :to="{path: '/pages/blog', query: {category: cat.slug}}">{{cat.Name}}</nuxt-link>
							</li>
						</ul>
					</div>

					<div
						class="widget widget-post"
						v-if="recentPosts.length > 0"
					>
						<h4 class="widget-title">Recent Posts</h4>

						<ul class="simple-post-list">
							<li
								v-for="(post,index) in recentPosts"
								:key="'recentBlog'+index"
							>
								<div class="post-media">
									<nuxt-link :to="'/pages/single/' + post.slug">
										<img
											v-lazy="`${baseUrl}${post.picture[0].url}`"
											alt="post"
											:width="post.picture[0].width"
											:height="post.picture[0].height"
										/>
									</nuxt-link>
								</div>

								<div class="post-info">
									<nuxt-link :to="'/pages/single/' + post.slug">{{post.title}}</nuxt-link>
									<div class="post-meta">{{new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit', year: 'numeric'}).format(new Date(post.date))}}</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="widget">
						<h4 class="widget-title">Tags</h4>

						<div class="tagcloud">
							<nuxt-link to="#">ARTICLES</nuxt-link>
							<nuxt-link to="#">CHAT</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
import { baseUrl } from '~/api/index';
import Sticky from 'vue-sticky-directive';

export default {
	directives: {
		Sticky
	},
	data: function() {
		return {
			isSticky: false,
			baseUrl: baseUrl,
			category: this.$route.query.category
		};
	},
	props: {
		loaded: {
			type: Boolean,
			default: false
		},
		blogCategoryList: {
			type: Array,
			default: []
		},
		recentPosts: {
			type: Array,
			default: []
		}
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
		resizeHandler: function() {
			this.isSticky = window.innerWidth > 991 ? true : false;
		}
	}
};
</script>