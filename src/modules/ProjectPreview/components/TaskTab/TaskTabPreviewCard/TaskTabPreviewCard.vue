<template>
	<v-flex md6 xs12 class="task__tab_preview_card" v-if="task">
		<div class="task__preview_content">
			<div class="card__content" slot="content">
				<v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
				<template v-else>
					<v-layout row class="task__header text-xs-left">
						<v-flex xs5 class="assignee">
							<v-flex xs4><v-img :src="require('@/assets/temp/user.png')" height="45" width="45" /></v-flex>
							<v-flex xs8 class="assignee__name">{{ full_name }}</v-flex>
						</v-flex>
						<v-flex xs5 class="date text-xs-left">
							<v-flex xs3><v-icon class="date__icon">date_range</v-icon></v-flex>
							<v-flex xs9 class="date__text">{{ date_created(content.created_at) }}</v-flex>
						</v-flex>
						<v-flex xs2 class="more__button text-xs-right">
							<v-btn fab flat small class="action">
								<v-icon>more_horiz</v-icon>
							</v-btn>
						</v-flex>
					</v-layout>
					<div class="task__sub_header">
						<div class="boxes job__title"> <span class="box__content">{{ job_title() }}</span></div>
						<div class="boxes status"> <span class="box__content">{{ content.status }}</span></div>
						<hours-box :content="content" />
					</div>
					<div class="task__content">

						<div class="task__title">{{ content.title }}</div>
						<div class="task__description">{{ content.description }}</div>

						<div class="task__comment_section">
							<v-divider></v-divider><br>
							<div class="comment" v-for="comment of all_comments" :key="comment.id">
								<p v-html="comment.body"></p>
							</div>
						</div>

					</div>
					<div class="task__comments">
						<v-flex xs2><v-img :src="require('@/assets/temp/user.png')" height="45" width="45" /></v-flex>
						<v-flex xs10 class="rich__editor">
							<rich-editor
								placeholder="Add Comment"
								ref="editor"
								v-model="comment"
							/>
							<div class="comments-actions">
								<v-btn :disabled="!comment" @click="add_new_comment">Send</v-btn>
								<div class="wrapper">
									<emoji-picker @emoji="append" :search="search" v-model="comment">
										<div
												class="emoji-invoker"
												slot="emoji-invoker"
												slot-scope="{ events }"
												v-on="events"
										>
											<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
												<path d="M0 0h24v24H0z" fill="none"/>
												<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
											</svg>
										</div>

										<div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
											<div class="emoji-picker">

												<div class="emoji-picker__search">
													<input type="text" v-model="search" v-focus>
												</div>

												<div>
													<div v-for="(emojiGroup, category) in emojis" :key="category">

														<h5>{{ category }}</h5>

														<div class="emojis">
							                <span
									                v-for="(emoji, emojiName) in emojiGroup"
									                :key="emojiName"
									                @click="insert(emoji)"
									                :title="emojiName"
							                >
								                {{ emoji }}
							                </span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</emoji-picker>
								</div>
							</div>
						</v-flex>

					</div>
				</template>
			</div>
			
			<v-flex xs12 class="card__footer text-xs-center">
				<v-btn flat class="view__more_btn">VIEW MORE</v-btn>
			</v-flex>
		</div>
	</v-flex>
</template>

<script src="./TaskTabPreviewCard.js"></script>
<style lang="scss" scoped src="./TaskTabPreviewCard.scss"></style>