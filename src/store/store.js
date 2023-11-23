import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [{
        authorName: "John Cena",
        createTime: "Oct 28, 2023",
        id: 10,
        body: "Hello. Its a me - Mario WOHOOOOOOOOOOOOOOOOOOOOO!",
        image: "President_Barack_Obama.jpg",
        likes: 0
      },
      {
        authorName: "Serena Williams",
        createTime: "Oct 15, 2023",
        id: 9,
        body: "How can I win Venus tomorrow coach?",
        likes: 0
      },
      {
        authorName: "Martin Järveoja",
        createTime: "Oct 12, 2023",
        id: 8,
        body: "LEFT 3, JUMP.",
        likes: 0
      },
      {
        authorName: "John Cena",
        createTime: "Oct 10, 2023",
        id: 7,
        body: "You cant see me.",
        likes: 0
      },
      {
        authorName: "John Wick",
        createTime: "Oct 8, 2023",
        id: 6,
        body: "Very good weather today.",
        image: "hmt.gif",
        likes: 0
      },
      {
        authorName: "Mark Clattenburg",
        createTime: "Oct 7, 2023",
        id: 5,
        body: "Hello! Can anyone help with my homework? Please!!!",
        likes: 0
      },
      {
        authorName: "John Cena",
        createTime: "Sep 22, 2023",
        id: 4,
        body: "Just wrote this yesterday, what does everyone think??????\nO that this too too solid flesh would melt,\nThaw, and resolve itself into a dew!\nOr that the Everlasting had not fix'd\nHis canon 'gainst self-slaughter! O God! God!\nHow weary, stale, flat, and unprofitable\nSeem to me all the uses of this world!\nFie on't! ah, fie! 'Tis an unweeded garden\nThat grows to seed; things rank and gross in nature\nPossess it merely. That it should come to this!\nBut two months dead! Nay, not so much, not two.\nSo excellent a king, that was to this\nHyperion to a satyr; so loving to my mother\nThat he might not beteem the winds of heaven\nVisit her face too roughly. Heaven and earth!\nMust I remember? Why, she would hang on him",
        likes: 0
      },
      {
        authorName: "John Wick",
        createTime: "Sep 20, 2023",
        id: 3,
        body: "My dear friend.",
        likes: 0
      },
      {
        authorName: "Mark Clattenburg",
        createTime: "Sep 10, 2023",
        id: 2,
        body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        likes: 0
      },
      {
        authorName: "Ott Tänak",
        createTime: "Aug 27, 2023",
        id: 1,
        body: "Hello! What is this website?",
        likes: 0
      }],
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    
  },
});