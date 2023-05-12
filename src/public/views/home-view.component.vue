<script>
import { defineComponent } from "vue";
import CardGrid from '../components/card-grid.component.vue';
import { PostsService } from "../../publishing/services/posts.service";

export default defineComponent({
  name: 'home-view',
  components: { CardGrid },
  data() {
    return {
      postsService: new PostsService(),
      posts: [],
      popularPosts: [],
      ourPosts: [],
    }
  },
  methods: {
    /* async */ getAllPosts() {
      // const response = await this.postsService.getAll()
      // this.posts = response.data;
      this.postsService.getAll().then(response => {
        this.posts = response.data;
        this.getMostPopular();
      });
    },
    getMostPopular() {
      const data = [...this.posts];
      data.sort((a, b) => b.views - a.views);
      this.popularPosts = data.slice(0, 3);
      this.getOurPosts();
    },
    getOurPosts() {
      const popularIds = this.popularPosts.map(element => element.id);
      this.ourPosts = this.posts.filter(current => !popularIds.includes(current.id));
    }
  },
  created() {
    this.getAllPosts();
  }
});
</script>

<template>
  <card-grid title="Popular posts" :posts="popularPosts"></card-grid>
  <card-grid title="Our posts" :posts="ourPosts"></card-grid>
</template>
