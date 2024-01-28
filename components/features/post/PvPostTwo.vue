<template>
	<article class="post single">
		<figure
			class="post-media"
			:class="post.type==='video'? 'post-video':''"
		>
			<nuxt-link
				:to="`/pages/single/${post.slug}`"
				v-if="post.type === 'image'"
			>
				<img
					v-lazy="`${baseUrl}${post.small_picture[0].url}`"
					alt="blog"
					:width="post.small_picture[0].width"
					:height="post.small_picture[0].height"
					v-if="post.small_picture.length > 0"
				/>
				<template v-else>
					<img
						v-lazy="`${baseUrl}${post.picture[0].url}`"
						alt="blog"
						:width="post.picture[0].width"
						:height="post.picture[0].height"
					/>
				</template>
			</nuxt-link>

			<template v-else-if="post.type === 'video'">
				<img
					v-lazy="`${baseUrl}${post.picture[0].url}`"
					alt="blog"
					:width="post.picture[0].width"
					:height="post.picture[0].height"
				/>
				<a
					href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
					@click.prevent="openVideoModal"
					class="btn-video btn-iframe"
				>
					<i class="far fa-play-circle"></i>
				</a>
			</template>

			<template v-else>
				<pv-carousel
					class
					:options="baseSlider1"
					v-if="post.small_picture.length > 0"
				>
					<div
						class="swiper-slide"
						v-for="(img, index) in post.small_picture"
						:key="'post-gallery' + index"
					>
						<img
							v-lazy="`${baseUrl}${img.url}`"
							:width="post.small_picture[0].width"
							:height="post.small_picture[0].height"
							alt="post-gallery-image"
						/>
					</div>
				</pv-carousel>
				<template v-else>
					<pv-carousel
						class
						:options="baseSlider1"
					>
						<div
							class="swiper-slide"
							v-for="(img, index) in post.picture"
							:key="'post-gallery' + index"
						>
							<img
								v-lazy="`${baseUrl}${img.url}`"
								:width="post.picture[0].width"
								:height="post.picture[0].height"
								class="swiper-slide"
								alt="post-gallery-image"
							/>
						</div>
					</pv-carousel>
				</template>
			</template>
		</figure>

		<div class="post-body">
			<div class="post-date">
				<span class="day">{{date.getDate() + 1}}</span>
				<span class="month">{{new Intl.DateTimeFormat('en-US', { month: 'short'}).format(date)}}</span>
			</div>

			<h2 class="post-title">{{ post.title }}</h2>

			<div class="post-meta">
				<a
					href="javascript:;"
					class="hash-scroll"
				>{{post.comments}} comments</a>
			</div>

			<div
				class="post-content"
				v-if="isContent"
			>
				<p>{{ post.content }}</p>

				<h3>
					“ Many
					desktop publishing packages and web page editors now use Lorem Ipsum as their
					default model search for evolved over sometimes by accident, sometimes on
					purpose ”
				</h3>

				<p>
					Aenean lorem diam, venenatis nec venenatis id, adipiscing ac massa. Nam vel dui
					eget justo dictum pretium a rhoncus ipsum. Donec venenatis erat tincidunt nunc
					suscipit, sit amet bibendum lacus posuere. Sed scelerisque, dolor a pharetra
					sodales, mi augue consequat sapien, et interdum tellus leo et nunc. Nunc
					imperdiet eu libero ut imperdiet.
				</p>
			</div>

			<div class="post-share">
				<h3 class="d-flex align-items-center">
					<i class="fas fa-share"></i>
					Share this post
				</h3>

				<div class="social-icons">
					<a
						href="javascript:;"
						class="social-icon social-facebook"
						
						title="Facebook"
					>
						<i class="icon-facebook"></i>
					</a>
					<a
						href="javascript:;"
						class="social-icon social-twitter"
						
						title="Twitter"
					>
						<i class="icon-twitter"></i>
					</a>
					<a
						href="javascript:;"
						class="social-icon social-linkedin"
						
						title="Linkedin"
					>
						<i class="fab fa-linkedin-in"></i>
					</a>
					<a
						href="javascript:;"
						class="social-icon social-gplus"
						
						title="Google +"
					>
						<i class="fab fa-google-plus-g"></i>
					</a>
					<a
						href="javascript:;"
						class="social-icon social-mail"
						
						title="Email"
					>
						<i class="icon-mail-alt"></i>
					</a>
				</div>
			</div>

			<div class="post-author">
				<h3>
					<i class="far fa-user"></i>Author
				</h3>

				<figure>
					<a href="javascript:;">
						<img
							v-lazy="'./images/blog/author.jpg'"
							alt="author"
							:width="80"
							:height="80"
						/>
					</a>
				</figure>

				<div class="author-content">
					<h4>
						<a href="javascript:;">John Doe</a>
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod
						odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in
						adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis
						placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.
					</p>
				</div>
			</div>

			<div class="comment-respond">
				<h3>Leave a Reply</h3>

				<form action="#">
					<p>Your email address will not be published. Required fields are marked *</p>

					<div class="form-group">
						<label>Comment</label>
						<textarea
							cols="30"
							rows="1"
							class="form-control"
							required
						></textarea>
					</div>

					<div class="form-group">
						<label>Name</label>
						<input
							type="text"
							class="form-control"
							required
						/>
					</div>

					<div class="form-group">
						<label>Email</label>
						<input
							type="email"
							class="form-control"
							required
						/>
					</div>

					<div class="form-group">
						<label>Website</label>
						<input
							type="url"
							class="form-control"
						/>
					</div>

					<div class="form-group-custom-control mb-2">
						<div class="custom-control custom-checkbox">
							<input
								type="checkbox"
								class="custom-control-input"
								id="save-name"
							/>
							<label
								class="custom-control-label"
								for="save-name"
							>
								Save my name, email,
								and website in this browser for the next time I comment.
							</label>
						</div>
					</div>

					<div class="form-footer my-0">
						<button
							type="submit"
							class="btn btn-sm btn-primary"
						>
							Post
							Comment
						</button>
					</div>
				</form>
			</div>
		</div>
	</article>
</template>
<script>
import { baseUrl } from '~/api/index';
import { baseSlider1 } from '~/utils/data/carousel';
import PvCarousel from '~/components/features/PvCarousel';

export default {
	components: {
		PvCarousel
	},
	props: {
		post: Object,
		isContent: {
			type: Boolean,
			default: true
		},
		isAuthor: {
			type: Boolean,
			default: true
		},
		isMeta: {
			type: Boolean,
			default: true
		}
	},
	data: function() {
		return {
			baseUrl: baseUrl,
			baseSlider1: baseSlider1
		};
	},
	computed: {
		date: function() {
			return new Date(this.post.date);
		}
	},
	methods: {
		openVideoModal: function() {
			this.$modal.show(
				() => import('~/components/features/modal/PvVideoModal'),
				{},
				{
					width: '880',
					height: '495',
					adaptive: true,
					class: 'video-modal-container'
				}
			);
		}
	}
};
</script>