<template>
    <span class="count-to">
        <template v-if="!finished">{{ Math.ceil(current) }}</template>
        <slot v-if="finished"></slot>
    </span>
</template>
<script>
export default {
	props: {
		from: {
			type: Number,
			default: 0
		},
		to: {
			type: Number,
			default: 0
		},
		speed: {
			type: Number,
			default: 2000
		},
		interval: {
			type: Number,
			default: 50
		}
	},
	data() {
		return {
			started: false,
			current: 0,
			intervalID: 0,
			finished: false
		};
	},
	computed: {
		step: function() {
			return ((this.to - this.from) * this.interval) / this.speed;
		}
	},
	mounted: function() {
		this.current = this.from;
		window.addEventListener('scroll', this.scrollHandler, {
			passive: true
		});
	},
	beforeDestroy: function() {
		window.removeEventListener('scroll', this.scrollHandler);
	},
	methods: {
		scrollHandler: function() {
			const offset = 100;
			let offsetTop = this.$el.getBoundingClientRect().top;
			if (offsetTop < window.innerHeight - offset && !this.started) {
				this.started = true;
				this.intervalID = window.setInterval(
					this.startCount,
					this.interval
				);
			}
		},
		startCount: function() {
			if (this.current + this.step <= this.to) {
				this.current += this.step;
			} else {
				window.clearInterval(this.intervalID);
				this.finished = true;
			}
		}
	}
};
</script>