<template>
    <article class="post">
        <figure class="post-media" :class="post.type==='video' ? `post-video` : ''">
            <nuxt-link
                :to="`/pages/single/${post.slug}`"
                v-if="post.type === 'image' || post.type === 'gallery'"
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
                <nuxt-link :to="`/pages/single/${post.slug}`">
                    <img
                        v-lazy="`${baseUrl}${post.picture[0].url}`"
                        alt="blog"
                        :width="post.picture[0].width"
                        :height="post.picture[0].height"
                    />
                </nuxt-link>
                <a
                    href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                    @click.prevent="openVideoModal"
                    class="btn-video btn-iframe d-none"
                >
                    <i class="far fa-play-circle"></i>
                </a>
            </template>

            <div class="post-date">
                <span class="day">{{date.getDate() + 1}}</span>
                <span
                    class="month"
                >{{new Intl.DateTimeFormat('en-US', { month: 'short'}).format(date)}}</span>
            </div>

            <span class="prod-full-screen" @click="openLightBox" v-if="isMagnify">
                <i class="fas fa-search"></i>
            </span>
        </figure>

        <div class="post-body">
            <h2 class="post-title">
                <nuxt-link :to="'/pages/single/' + post.slug">{{ post.title }}</nuxt-link>
            </h2>

            <div class="post-content" v-if="isContent">
                <p>{{ post.content }}</p>
            </div>

            <nuxt-link :to="'/blog/single/default/' + post.slug" class="read-more">
                read more
                <i class="icon-right-open"></i>
            </nuxt-link>
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
		},
		isMagnify: {
			type: Boolean,
			default: false
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
		},
		openLightBox: function() {
			this.$parent.$parent.$parent.$refs.lightBox.showImage(0);
		}
	}
};
</script>