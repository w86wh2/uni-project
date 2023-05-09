<template>
  <view class="im-message-input-container">
    <view class="im-message-input">
      <!-- #ifdef H5 -->
      <!-- <image class="im-icon" @tap="handleEmoji" src="./../../../../../assets/imgs/imIcon/emoji.svg"></image> -->
      <!-- #endif -->
      <!-- #ifndef H5 -->
      <image class="im-icon" @tap="handleSwitchAudio" src="./../../../../../assets/imgs/imIcon/audio.svg"></image>
      <!-- #endif -->
      <view v-if="!isAudio" class="im-message-input-main">
        <input class="im-message-input-area" :adjust-position="true" cursor-spacing="20" v-model="inputText"
          confirm-type="send" confirm-hold="true" @confirm="handleSendTextMessage" maxlength="140" type="text"
          placeholder-class="input-placeholder" placeholder="说点什么呢~" />
      </view>
      <view v-else class="im-message-input-main">
        <AudioMessage></AudioMessage>
      </view>
      <view class="im-message-input-functions" hover-class="none">
        <!-- <image class="im-icon" @tap="handleEmoji" src="./../../../../../assets/imgs/imIcon/emoji.svg"></image> -->
        <view @tap="handleExtensions">
          <image class="im-icon" src="./../../../../../assets/imgs/imIcon/more.svg"></image>
        </view>
      </view>
    </view>
    <!-- <view v-if="displayFlag === 'emoji'" class="im-Emoji-area">
      <Face :show="displayFlag === 'emoji'" @send="handleSend" @handleSendEmoji="handleSendTextMessage"></Face>
    </view> -->
    <view v-if="displayFlag === 'extension'" class="im-Extensions">
      <!-- TODO: 这里功能还没实现
				<!       <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>-->
      <view class="im-Extension-slot" @tap="handleSendImageMessage('camera')">
        <image class="im-Extension-icon" src="./../../../../../assets/imgs/imIcon/take-photo.svg"></image>
        <view class="im-Extension-slot-name">拍照</view>
      </view>
      <view class="im-Extension-slot" @tap="handleSendImageMessage('album')">
        <image class="im-Extension-icon" src="./../../../../../assets/imgs/imIcon/send-img.svg"></image>
        <view class="im-Extension-slot-name">图片</view>
      </view>
      <view class="im-Extension-slot" @tap="handleSendVideoMessage('album')">
        <image class="im-Extension-icon" src="./../../../../../assets/imgs/imIcon/take-video.svg"></image>
        <view class="im-Extension-slot-name">视频</view>
      </view>
      <view class="im-Extension-slot" @tap="handleSendVideoMessage('camera')">
        <image class="im-Extension-icon" src="./../../../../../assets/imgs/imIcon/take-photo.svg"></image>
        <view class="im-Extension-slot-name">录像</view>
      </view>
      <!-- #ifndef H5 -->
      <!-- <view class="im-Extension-slot" @tap="handleCalling(1)">
        <image class="im-Extension-icon" src="./../../../../../assets/imgs/imIcon/audio-calling.svg"></image>
        <view class="im-Extension-slot-name">语音通话</view>
      </view> -->
      <!-- <view class="im-Extension-slot" @tap="handleCalling(2)">
        <image class="im-Extension-icon" src="./../../../../../assets/imgs/imIcon/take-video.svg"></image>
        <view class="im-Extension-slot-name">视频通话</view>
      </view> -->
      <!-- #endif -->
    </view>
  </view>
</template>

<script>
import {
  defineComponent,
  watchEffect,
  reactive,
  toRefs,
  onMounted,
  computed,
} from "vue";
// import Face from "./message/face.vue";
import AudioMessage from "./message/audio.vue";
// import store from "../../../../../store";

const imChatInput = defineComponent({
  components: {
    // Face,
    AudioMessage,
  },
  props: {
    text: {
      type: String,
      default: () => {
        return "";
      },
    },
    conversationData: {
      type: Object,
      default: () => {
        return "";
      },
    },
  },
  setup(props) {
    // const imServer: any = uni.$imKit.imChatServer;
    const data = reactive({
      firstSendMessage: true,
      inputText: "",
      extensionArea: false,
      sendMessageBtn: false,
      displayFlag: "",
      isAudio: false,
      displayServiceEvaluation: false,
      displayCommonWords: false,
      displayOrderList: false,
    });

    watchEffect(() => {
      data.inputText = props.text;
    });

    const handleSwitchAudio = () => {
      data.isAudio = !data.isAudio;
    };

    const handleEmoji = () => {
      data.displayFlag = data.displayFlag === "emoji" ? "" : "emoji";
    };
    const handleExtensions = (e) => {
      data.displayFlag = data.displayFlag === "extension" ? "" : "extension";
    };

    // 发送消息
    const handleSendTextMessage = (e) => {
      if (data.inputText.trimEnd()) {
        // uni.$imKit.imChatServer.sendTextMessage(
        //   JSON.parse(JSON.stringify(data.inputText))
        // );
      }
      data.inputText = " ";
    };

    // 处理需要合并的数据
    const handleSend = (emo) => {
      data.inputText += emo.name;
      // inputEle.value.focus();
    };

    const handleSendImageMessage = (type) => {
      uni.chooseImage({
        sourceType: [type],
        count: 1,
        success: (res) => {
          uni.getImageInfo({
            src: res.tempFilePaths[0],
            success(image) {
              console.error(image);
              imServer.sendImageMessage(res, image);
            },
          });
        },
      });
    };

    const handleSendVideoMessage = (type) => {
      uni.chooseVideo({
        sourceType: [type],
        // 来源相册或者拍摄
        maxDuration: 60,
        // 设置最长时间60s
        camera: "back",
        // 后置摄像头
        success: (res) => {
          if (res) {
            // imServer.sendVideoMessage(res);
          }
        },
      });
    };

    // const handleCalling = (value: any) => {
    //   // todo 目前支持单聊
    //   if (data.conversation.type === "GROUP") {
    //     uni.showToast({
    //       title: "群聊暂不支持",
    //       icon: "none",
    //     });
    //     return;
    //   }
    //   const { userID } = data.conversation.userProfile;

    //   // #ifdef APP-PLUS
    //   if (typeof uni.$imCallKit === "undefined") {
    //     console.error(
    //       "请集成 imCallKit 插件，使用真机运行并且自定义基座调试，请参考官网文档：https://cloud.tencent.com/document/product/269/83857"
    //     );
    //     uni.showToast({
    //       title: "请集成 imCallKit 插件哦 ～ ",
    //       icon: "none",
    //       duration: 3000,
    //     });
    //   } else {
    //     uni.$imCallKit.call(
    //       {
    //         userID: userID,
    //         callMediaType: value,
    //       },
    //       (res) => {
    //         console.log(JSON.stringify(res));
    //       }
    //     );
    //   }
    //   // #endif

    //   // #ifdef MP-WEIXIN
    //   if (typeof uni.$imCallKit !== "undefined" && uni.$imCallKit.value !== null) {
    //     uni.$imCallKit.value.call({
    //       userID: userID,
    //       type: value
    //     })
    //   } else {
    //     console.error(
    //       "请集成 imCallKit 插件哦～，请参考官网文档：https://cloud.tencent.com/document/product/269/83858"
    //     );
    //     uni.showToast({
    //       title: "请集成 imCallKit 插件哦 ～ ",
    //       icon: "none",
    //       duration: 3000,
    //     });
    //   }
    //   // #endif

    //   // #ifdef H5
    //   uni.showToast({
    //     title: "暂不支持",
    //     icon: "none",
    //   });
    //   // #endif
    // };
    return {
      ...toRefs(data),
      handleExtensions,
      handleSendImageMessage,
      handleSendTextMessage,
      handleSendVideoMessage,
      handleEmoji,
      handleSend,
      handleSwitchAudio,
      // handleCalling,
    };
  },
});
export default imChatInput;
</script>
<style  scoped>
.im-message-input-container {
  background-color: #f1f1f1;
  padding-bottom: 20rpx;
}

.im-message-input {
  display: flex;
  padding: 16rpx;
  background-color: #f1f1f1;
  width: 100vw;
}

.im-commom-function {
  display: flex;
  flex-wrap: nowrap;
  width: 750rpx;
  height: 106rpx;
  background-color: #f1f1f1;
  align-items: center;
}

.im-commom-function-item {
  display: flex;
  width: 136rpx;
  justify-content: center;
  align-items: center;
  font-size: 24rpx;
  color: #ffffff;
  height: 48rpx;
  margin-left: 16rpx;
  border-radius: 24rpx;
  background-color: #00c8dc;
}

.im-commom-function-item:first-child {
  margin-left: 48rpx;
}

.im-message-input-functions {
  display: flex;
}

.im-message-input-main {
  background-color: #fff;
  flex: 1;
  height: 66rpx;
  margin: 0 10rpx;
  padding: 0 5rpx;
  border-radius: 5rpx;
  display: flex;
  align-items: center;
}

.im-message-input-area {
  width: 100%;
  height: 100%;
}

.im-icon {
  width: 56rpx;
  height: 56rpx;
  margin: 0 16rpx;
}

.im-Extensions {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 450rpx;
  margin-left: 14rpx;
  margin-right: 14rpx;
}

.im-Extension-slot {
  width: 128rpx;
  height: 170rpx;
  margin-left: 26rpx;
  margin-right: 26rpx;
  margin-top: 24rpx;
}

.im-Extension-icon {
  width: 128rpx;
  height: 128rpx;
}

.im-sendMessage-btn {
  display: flex;
  align-items: center;
  margin: 0 10rpx;
}

.im-Emoji-area {
  width: 100vw;
  height: 450rpx;
}

.im-Extension-slot-name {
  line-height: 34rpx;
  font-size: 24rpx;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
}

.record-modal {
  height: 300rpx;
  width: 60vw;
  background-color: #000;
  opacity: 0.8;
  position: fixed;
  top: 670rpx;
  z-index: 9999;
  left: 20vw;
  border-radius: 24rpx;
  display: flex;
  flex-direction: column;
}

.record-modal .wrapper {
  display: flex;
  height: 200rpx;
  box-sizing: border-box;
  padding: 10vw;
}

.record-modal .wrapper .modal-loading {
  opacity: 1;
  width: 40rpx;
  height: 16rpx;
  border-radius: 4rpx;
  background-color: #006fff;
  animation: loading 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
}

.modal-title {
  text-align: center;
  color: #fff;
}

@keyframes loading {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(30vw, 0);
    background-color: #f5634a;
    width: 40px;
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
