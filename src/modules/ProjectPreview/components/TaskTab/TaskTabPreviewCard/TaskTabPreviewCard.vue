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
								<div class="emoji-wrapper">
									<emoji-picker @emoji-added="emoji_added" />
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