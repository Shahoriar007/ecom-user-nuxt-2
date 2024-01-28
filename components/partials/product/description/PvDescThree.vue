<template>
	<pv-tabs class="product-single-tabs product-tabs-list pt-3 mb-0 mt-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-2">
					<ul
						class="nav nav-tabs"
						role="tablist"
					>
						<li class="nav-item">
							<a
								class="nav-link active"
								id="product-tab-desc"
								data-toggle="tab"
								href="#product-desc-content"
								role="tab"
								aria-controls="product-desc-content"
								aria-selected="true"
							>Description</a>
						</li>

						<li class="nav-item">
							<a
								class="nav-link"
								id="product-tab-size"
								data-toggle="tab"
								href="#product-size-content"
								role="tab"
								aria-controls="product-size-content"
								aria-selected="true"
							>Size Guide</a>
						</li>

						<li class="nav-item">
							<a
								class="nav-link"
								id="product-tab-reviews"
								data-toggle="tab"
								href="#product-reviews-content"
								role="tab"
								aria-controls="product-reviews-content"
								aria-selected="false"
							>Reviews ({{ product.reviews }})</a>
						</li>
					</ul>
				</div>

				<div class="col-lg-10">
					<div class="tab-content">
						<div
							class="tab-pane fade show active"
							id="product-desc-content"
							role="tabpanel"
							aria-labelledby="product-tab-desc"
						>
							<div class="product-desc-content">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum
									consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
								</p>
								<ul>
									<li>
										Any Product types that You want - Simple,
										Configurable
									</li>
									<li>
										Downloadable/Digital Products, Virtual
										Products
									</li>
									<li>Inventory Management with Backordered items</li>
								</ul>
								<p>
									Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat.
								</p>
							</div>
						</div>

						<div
							class="tab-pane fade"
							id="product-size-content"
							role="tabpanel"
							aria-labelledby="product-tab-size"
						>
							<div class="product-size-content">
								<div class="row">
									<div class="col-md-4">
										<img
											:src="'./images/products/body-shape.png'"
											width="217"
											height="398"
											alt="body shape"
											class="w-auto bg-transparent"
										/>
									</div>

									<div class="col-md-8">
										<table class="table table-size">
											<thead>
												<tr>
													<th>SIZE</th>
													<th>CHEST(in.)</th>
													<th>WAIST(in.)</th>
													<th>HIPS(in.)</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>XS</td>
													<td>34-36</td>
													<td>27-29</td>
													<td>34.5-36.5</td>
												</tr>
												<tr>
													<td>S</td>
													<td>36-38</td>
													<td>29-31</td>
													<td>36.5-38.5</td>
												</tr>
												<tr>
													<td>M</td>
													<td>38-40</td>
													<td>31-33</td>
													<td>38.5-40.5</td>
												</tr>
												<tr>
													<td>L</td>
													<td>40-42</td>
													<td>33-36</td>
													<td>40.5-43.5</td>
												</tr>
												<tr>
													<td>XL</td>
													<td>42-45</td>
													<td>36-40</td>
													<td>43.5-47.5</td>
												</tr>
												<tr>
													<td>XXL</td>
													<td>45-48</td>
													<td>40-44</td>
													<td>47.5-51.5</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>

						<div
							class="tab-pane fade"
							id="product-reviews-content"
							role="tabpanel"
							aria-labelledby="product-tab-reviews"
						>
							<div
								class="product-reviews-content"
								v-if="product.reviews > 0"
								key="noReviews"
							>
								<h3
									class="reviews-title"
									v-if="product.reviews === 1"
									key="singleReview"
								>{{ product.reviews }} review for {{ product.name }}</h3>
								<h3
									class="reviews-title"
									v-else
								>{{ product.reviews }} reviews for {{ product.name }}</h3>

								<div class="comment-list">
									<div
										class="comments"
										v-for="(item,index) in [0,1,2,3,4,5].slice(0, product.reviews)"
										:key="'reviews-' + index"
										:class="{'ml-5': index % 2 ===1}"
									>
										<figure class="img-thumbnail">
											<img
												v-lazy="'./images/blog/author.jpg'"
												alt="author"
												width="80"
												height="80"
											/>
										</figure>

										<div class="comment-block mt-2">
											<div class="comment-header">
												<div class="comment-arrow"></div>

												<div class="ratings-container float-sm-right">
													<div class="product-ratings">
														<span
															class="ratings"
															:style="{width: product.ratings * 20 + '%'}"
														></span>

														<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
													</div>
												</div>

												<span class="comment-by">
													<strong>Joe Doe</strong> – April 12, 2018
												</span>
											</div>

											<div class="comment-content">
												<p>Excellent.</p>
											</div>
										</div>
									</div>
								</div>

								<div class="divider"></div>

								<div class="add-product-review">
									<h3 class="review-title">Add a review</h3>

									<form
										action="#"
										class="comment-form m-0"
									>
										<div class="rating-form">
											<label for="rating">
												Your rating
												<span class="required">*</span>
											</label>
											<span class="rating-stars">
												<a
													v-for="number in [1,2,3,4,5]"
													:key="'rating' + number"
													href="javascript:;"
													:class="'star-'+number"
													@click="setRating($event)"
												>
													{{ number }}
												</a>
											</span>

											<select
												name="rating"
												id="rating"
												required
												style="display: none;"
											>
												<option value>Rate…</option>
												<option value="5">Perfect</option>
												<option value="4">Good</option>
												<option value="3">Average</option>
												<option value="2">Not that bad</option>
												<option value="1">Very poor</option>
											</select>
										</div>

										<div class="form-group">
											<label>
												Your review
												<span class="required">*</span>
											</label>
											<textarea
												cols="5"
												rows="6"
												class="form-control form-control-sm"
											></textarea>
										</div>

										<div class="row">
											<div class="col-md-6 col-xl-12">
												<div class="form-group">
													<label>
														Name
														<span class="required">*</span>
													</label>
													<input
														type="text"
														class="form-control form-control-sm"
														required
													/>
												</div>
											</div>

											<div class="col-md-6 col-xl-12">
												<div class="form-group">
													<label>
														Email
														<span class="required">*</span>
													</label>
													<input
														type="text"
														class="form-control form-control-sm"
														required
													/>
												</div>
											</div>

											<div class="col-md-12">
												<div class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
														id="save-name"
													/>
													<label
														class="custom-control-label mb-0"
														for="save-name"
													>
														Save my
														name, email, and website in this browser for the next time I
														comment.
													</label>
												</div>
											</div>
										</div>

										<input
											type="submit"
											class="btn btn-primary"
											value="Submit"
										/>
									</form>
								</div>
							</div>

							<div
								class="product-reviews-content"
								v-else
							>
								<h3 class="reviews-title">Reviews</h3>

								<p>There are no reviews yet.</p>

								<div class="divider"></div>

								<div class="add-product-review">
									<h3 class="review-title">Be the first to review “{{ product.name }}”</h3>

									<form
										action="#"
										class="comment-form m-0"
									>
										<div class="rating-form">
											<label for="rating">
												Your rating
												<span class="required">*</span>
											</label>
											<span class="rating-stars">
												<a
													v-for="number in [1,2,3,4,5]"
													:key="'rating' + number"
													href="javascript:;"
													:class="'star-'+number"
													@click="setRating($event)"
												>
													{{ number }}
												</a>
											</span>

											<select
												name="rating"
												id="rating"
												required
												style="display: none;"
											>
												<option value>Rate…</option>
												<option value="5">Perfect</option>
												<option value="4">Good</option>
												<option value="3">Average</option>
												<option value="2">Not that bad</option>
												<option value="1">Very poor</option>
											</select>
										</div>

										<div class="form-group">
											<label>
												Your review
												<span class="required">*</span>
											</label>
											<textarea
												cols="5"
												rows="6"
												class="form-control form-control-sm"
											></textarea>
										</div>

										<div class="row">
											<div class="col-md-6 col-xl-12">
												<div class="form-group">
													<label>
														Name
														<span class="required">*</span>
													</label>
													<input
														type="text"
														class="form-control form-control-sm"
														required
													/>
												</div>
											</div>

											<div class="col-md-6 col-xl-12">
												<div class="form-group">
													<label>
														Email
														<span class="required">*</span>
													</label>
													<input
														type="text"
														class="form-control form-control-sm"
														required
													/>
												</div>
											</div>

											<div class="col-md-12">
												<div class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
														id="save-name"
													/>
													<label
														class="custom-control-label mb-0"
														for="save-name"
													>
														Save my
														name, email, and website in this browser for the next time I
														comment.
													</label>
												</div>
											</div>
										</div>

										<input
											type="submit"
											class="btn btn-primary"
											value="Submit"
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</pv-tabs>
</template>

<script>
import PvTabs from '~/components/features/PvTabs';

export default {
	components: {
		PvTabs
	},
	props: {
		product: Object
	},
	methods: {
		setRating: function(e) {
			if (e.currentTarget.parentNode.querySelector('.active'))
				e.currentTarget.parentNode
					.querySelector('.active')
					.classList.remove('active');
			e.currentTarget.classList.add('active');
		}
	}
};
</script>