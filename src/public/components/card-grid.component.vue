<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'card-grid',
  props: {
    title: String,
    posts: Array,
  }
});
</script>

<template>
  <section class="mx-3">
    <h2>{{ title }}</h2>
    <div class="grid gap-3">
      <pv-card class="col" v-for="post in posts" :key="post.id">
        <template #header>
          <img alt="post photo" class="w-full" :src="post.photoUrl" />
        </template>
        <template #title>{{ post.title }}</template>
        <template #footer>
          <RouterLink :to="`/posts/${post.id}`">
            <pv-button label="See more" />
          </RouterLink>
        </template>
      </pv-card>
    </div>
  </section>
</template>
