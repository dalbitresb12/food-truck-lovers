import { http } from '../../shared/utils/http-common';

export class PostsService {
  getAll() {
    return http.get("/api/v1/posts");
  }

  getById(id) {
    return http.get(`/api/v1/posts/${id}`);
  }

  likePost(id, likes) {
    return http.patch(
      `/api/v1/posts/${id}`,
      { likes },
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
  }
}
