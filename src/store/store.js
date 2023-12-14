import { createStore } from 'vuex';

export default createStore({
  state: {
    userId: null,
    posts: [],
  },
  mutations: {
    setUserId(state, userId) {  
      state.userId = userId;
      console.log("STORE1 " + state.userId);
      console.log("STORE2 " + userId);
    },
    setPosts(state, posts) {  
      state.posts = posts;
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    },
  },
  actions: {
    
  },
  getters: {
    
  },
});
