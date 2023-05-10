

const state = {
  isLogin: false, // 是否登录IM
  conversationList: [], // 会话列表
  messageList: [
    {
      ID: "144115242516150588-1683511416-48607833",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511416,
      nick: "",
      avatar: "",
      isPeerRead: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 0,
        data: "ys00"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516150588-1683511417-47738597",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511417,
      nick: "",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 0,
        data: "ys00"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516150588-1683511417-35887960",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511418,
      nick: "",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 1,
        data: "ys01"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516150588-1683511418-26097776",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511419,
      nick: "",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 2,
        data: "ys02"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516150588-1683511419-62072791",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511420,
      nick: "",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 6,
        data: "ys06"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516150588-1683511426-6340992",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511427,
      nick: "",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 4,
        data: "yz04"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516150588-1683511427-31690247",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511427,
      nick: "",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 4,
        data: "yz04"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516150588-1683511427-49054603",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683511428,
      nick: "",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "administrator",
      to: "wangfeng",
      flow: "in",
      status: "success",
      isDeleted: false,
      payload: {
        index: 4,
        data: "yz04"
      },
      type: "TIMFaceElem",
      showTime: false
    },
    {
      ID: "144115242516151568-1683512648-90179372",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683512649,
      nick: "小番茄",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "wangfeng",
      to: "administrator",
      flow: "out",
      status: "success",
      isDeleted: false,
      payload: {
        text: "111"
      },
      type: "TIMTextElem",
      showTime: true
    },
    {
      ID: "144115242516151568-1683534185-4960520",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683534186,
      nick: "小番茄",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "wangfeng",
      to: "administrator",
      flow: "out",
      status: "success",
      isDeleted: false,
      payload: {
        text: " 1111"
      },
      type: "TIMTextElem",
      showTime: true
    },
    {
      ID: "144115242516151568-1683595681-14592540",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683595683,
      nick: "小番茄",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "wangfeng",
      to: "administrator",
      flow: "out",
      status: "success",
      isDeleted: false,
      payload: {
        imageFormat: 3,
        uuid: "1400808448-wangfeng-Gryk60R7k3c3FiBeUC7jnfqKxWHhwpNR.png",
        imageInfoArray: [
          {
            instanceID: 8985632,
            sizeType: 1,
            type: 0,
            size: 4023,
            width: 72,
            height: 72,
            imageUrl: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/97d8da6c010f53dc47dc657fa330381e-6ly81hl9GAKI457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/",
            url: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/97d8da6c010f53dc47dc657fa330381e-6ly81hl9GAKI457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/"
          },
          {
            instanceID: 1984499,
            sizeType: 3,
            type: 1,
            size: 0,
            width: 72,
            height: 72,
            imageUrl: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/97d8da6c010f53dc47dc657fa330381e-6ly81hl9GAKI457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/198/h/198",
            url: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/97d8da6c010f53dc47dc657fa330381e-6ly81hl9GAKI457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/198/h/198"
          },
          {
            instanceID: 811634,
            sizeType: 2,
            type: 2,
            size: 0,
            width: 72,
            height: 72,
            imageUrl: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/97d8da6c010f53dc47dc657fa330381e-6ly81hl9GAKI457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/720/h/720",
            url: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/97d8da6c010f53dc47dc657fa330381e-6ly81hl9GAKI457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/720/h/720"
          }
        ]
      },
      type: "TIMImageElem",
      showTime: true
    },
    {
      ID: "144115242516151568-1683597351-48320306",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683597352,
      nick: "小番茄",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "wangfeng",
      to: "administrator",
      flow: "out",
      status: "success",
      isDeleted: false,
      payload: {
        imageFormat: 3,
        uuid: "1400808448-wangfeng-TeB5nr2cgaUxbckk5MwFYqXNk43XHYlm.png",
        imageInfoArray: [
          {
            instanceID: 5286727,
            sizeType: 1,
            type: 0,
            size: 4023,
            width: 72,
            height: 72,
            imageUrl: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/0d518efb49874d8a12ea7e435ff57323-0KkLK2eBlBMO457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/",
            url: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/0d518efb49874d8a12ea7e435ff57323-0KkLK2eBlBMO457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/"
          },
          {
            instanceID: 6119917,
            sizeType: 3,
            type: 1,
            size: 0,
            width: 72,
            height: 72,
            imageUrl: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/0d518efb49874d8a12ea7e435ff57323-0KkLK2eBlBMO457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/198/h/198",
            url: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/0d518efb49874d8a12ea7e435ff57323-0KkLK2eBlBMO457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/198/h/198"
          },
          {
            instanceID: 1571767,
            sizeType: 2,
            type: 2,
            size: 0,
            width: 72,
            height: 72,
            imageUrl: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/0d518efb49874d8a12ea7e435ff57323-0KkLK2eBlBMO457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/720/h/720",
            url: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/0d518efb49874d8a12ea7e435ff57323-0KkLK2eBlBMO457f704c8de0a8fa0064134423b9ed9c.png?imageMogr2/&amp;imageView2/3/w/720/h/720"
          }
        ]
      },
      type: "TIMImageElem",
      showTime: true
    },
    {
      ID: "144115242516151568-1683609440-21205624",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683609440,
      nick: "小番茄",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "wangfeng",
      to: "administrator",
      flow: "out",
      status: "success",
      isDeleted: false,
      payload: {
        text: "1111"
      },
      type: "TIMTextElem",
      showTime: true
    },
    {
      ID: "144115242516151568-1683620525-65988121",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683620526,
      nick: "小番茄",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "wangfeng",
      to: "administrator",
      flow: "out",
      status: "success",
      isDeleted: false,
      payload: {
        downloadFlag: 2,
        second: 3,
        size: 32468,
        url: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/d3fcf2d545e30d4ed600c29500ecbd55-gy61DIiEZW276537b582fc1a4acbcaef2ab48552329c.durationTime%3D3694.aac",
        remoteAudioUrl: "https://cos.ap-shanghai.myqcloud.com/50a8-shanghai-007-sharedv4-01-1303031839/d8a4-1400808448/db09-wangfeng/d3fcf2d545e30d4ed600c29500ecbd55-gy61DIiEZW276537b582fc1a4acbcaef2ab48552329c.durationTime%3D3694.aac",
        uuid: "1400808448-wangfeng-g5SdCiW5dzH4UFAkitL0Tvp5DVm8mIxr.aac"
      },
      type: "TIMSoundElem",
      showTime: true
    },
    {
      ID: "144115242516151568-1683620534-18614148",
      conversationID: "C2Cadministrator",
      conversationType: "C2C",
      time: 1683620534,
      nick: "小番茄",
      avatar: "",
      isPeerRead: false,
      isRevoked: false,
      from: "wangfeng",
      to: "administrator",
      flow: "out",
      status: "success",
      isDeleted: false,
      payload: {
        text: "1212121"
      },
      type: "TIMTextElem",
      showTime: false
    }
  ], // 消息列表
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