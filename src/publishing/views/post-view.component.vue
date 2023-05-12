<script>
import { defineComponent } from "vue";
import { PrimeIcons } from 'primevue/api';
import { PostsService } from "../services/posts.service";

export default defineComponent({
  props: {
    id: String,
  },
  data() {
    return {
      postsService: new PostsService(),
      post: {},
      PrimeIcons,
    }
  },
  methods: {
    getPostContent() {
      this.postsService.getById(this.id).then(response => {
        this.post = response.data;
      });
    },
    likePost() {
      this.postsService.likePost(this.id, this.post.likes + 1).then(response => {
        this.post = response.data;
      });
    }
  },
  created() {
    this.getPostContent();
  }
});
</script>

<template>
  <article class="mx-3 my-3">
    <div class="flex justify-content-center">
      <img alt="post photo" class="w-6" :src="post.photoUrl" />
    </div>
    <h2 class="text-center">{{ post.title }}</h2>
    <p class="text-center">{{ post.summary }}</p>
    <hr>
    <p>{{ post.content }}</p>
    <hr>
    <p>Likes: {{ post.likes }}</p>
    <pv-button :icon="PrimeIcons.HEART" label="Like" @click="likePost" />
  </article>
</template>
