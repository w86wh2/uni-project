

const state = {
  isLogin: false, // 是否登录IM
  conversationList: [], // 会话列表
  messageList: [], // 消息列表
  conversation: {},// 当前会话
  conversationID: '',//当前会话Id
  scrollTop: 0,
};

export default {
  namespaced: true,
  state,
  getters: {
    userInfo: (state) => {
      return state.userInfo;
    }
  },
  mutations: {
    setscrollTop(state, payload) {
      state.scrollTop = payload;
    },
    setConversationList(state, payload) {
      state.conversationList = payload;
    },
    setConversation(state, payload) {
      state.conversation = payload;
    },
    setConversationID(state, payload) {
      state.conversationID = payload;
    },
    resetConversationID(state,) {
      state.conversationID = '';
    },
    setMessageList(state, payload) {
      state.messageList = payload;
    },
    resetChat(state) {
      state.messageList = [];
    },
  },
  actions: {
    // 

  },
};