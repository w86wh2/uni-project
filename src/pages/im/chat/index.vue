<template>
  <div>
    <view class="imChat">
      <!-- <view class="more-btn" v-if="conversation?.type === 'GROUP'" @click="handleGetProfile">
                更多</view> -->
      <view class="imChat-container">
        <scroll-view class="imChat-main" scroll-y="true" :scroll-with-animation="true" :refresher-triggered="triggered"
          :refresher-enabled="true" @refresherrefresh="handleRefresher" :scroll-top="scrollTop">
          <view class="im-message-list" @touchstart="handleTouchStart" @click="dialogID = ''">
            <view class="loading-text" v-if="isCompleted">没有更多</view>
            <view v-for="(item, index) in messages" :key="item.ID" :id="'view' + item.ID">
              <view class="time-container" v-if="item.showTime">{{
                caculateTimeago(item.time * 1000)
              }}</view>
              <!-- <MessageTip
                 v-if="!item.isRevoked && item.type === types.MSG_GRP_TIP"
                 :data="handleTipMessageShowContext(item)"
               /> -->
              <MessageBubble v-if="!item.isRevoked && item.type !== types.MSG_GRP_TIP" :data="item">
                <!-- <Message-Operate
                   v-if="dialogID === item.ID"
                   :data="item"
                   class="dialog dialog-item"
                   :style="{
                       top: dialogPosition.top + 'px',
                       right: dialogPosition.right + 'px',
                       left: dialogPosition.left + 'px',
                   }"
                 >
                 </Message-Operate> -->
                <MessageText :id="item.flow + '-' + item.ID" v-if="item.type === types.MSG_TEXT"
                  :data="handleTextMessageShowContext(item)" :messageData="item" @longpress="handleItem($event, item)">
                </MessageText>
                <MessageImage :id="item.flow + '-' + item.ID" v-if="item.type === types.MSG_IMAGE"
                  :data="handleImageMessageShowContext(item)" :messageData="item" @longpress="handleItem($event, item)">
                </MessageImage>
                <MessageVideo :id="item.flow + '-' + item.ID" v-if="item.type === types.MSG_VIDEO"
                  :data="handleVideoMessageShowContext(item)" :messageData="item" @longpress="handleItem($event, item)" />
                <MessageAudio :id="item.flow + '-' + item.ID" v-if="item.type === types.MSG_AUDIO"
                  :data="handleAudioMessageShowContext(item)" :messageData="item" @longpress="handleItem($event, item)" />
                <MessageFace :id="item.flow + '-' + item.ID" v-if="item.type === types.MSG_FACE"
                  :data="handleFaceMessageShowContext(item)" :messageData="item" @longpress="handleItem($event, item)" />
                <!-- <MessageCustom
                   :id="item.flow + '-' + item.ID"
                   v-if="item.type === types.MSG_CUSTOM"
                   :data="handleCustomMessageShowContext(item)"
                   :messageData="item"
                   @longpress="handleItem($event, item)"
                 /> -->
              </MessageBubble>
              <!-- <MessageRevoked
                 v-if="item.isRevoked"
                 :data="item"
                 @edit="handleEdit(item)"
               /> -->
            </view>
          </view>
        </scroll-view>
      </view>
      <imChatInput :text="text" :conversationData="conversation"></imChatInput>
    </view>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, computed, watch, nextTick } from 'vue'
import { useStore } from 'vuex';
import imChatInput from './components/message-input/index.vue'
import MessageBubble from "./components/message-elements/message-bubble.vue";
import MessageText from "./components/message-elements/message-text.vue";
import MessageImage from "./components/message-elements/message-image.vue";
// import MessageOperate from "./components/message-elements/message-operate.vue";
import MessageVideo from "./components/message-elements/message-video.vue";
import MessageAudio from "./components/message-elements/message-audio.vue";
import MessageFace from "./components/message-elements/message-face.vue";
// import MessageCustom from "./components/message-elements/message-custom.vue";
// import MessageTip from "./components/message-elements/message-tip.vue";
// import MessageRevoked from "./components/message-elements/message-revoked.vue";
// import MessageSystem from "./components/message-elements/message-system.vue";

import { CHAT_TYPES } from '@/constant'
import { caculateTimeago } from '@/utils/date'
import { handleTextMessageShowContext, handleImageMessageShowContext, handleVideoMessageShowContext, handleAudioMessageShowContext, handleCustomMessageShowContext, handleFaceMessageShowContext } from '@/utils/chat/chat.js'
export default defineComponent({
  name: 'ImChat',
  components: { imChatInput, MessageBubble, MessageText, MessageImage, MessageVideo, MessageAudio, MessageFace },
  setup(props) {
    const store = useStore()
    const data = reactive({
      messageList: computed(() => store.state.imStore.messageList),
      conversationType: 'chat',
      conversation: computed(() => store.state.imStore.conversation),
      triggered: false,
      scrollTop: 999,
      text: "",
      types: CHAT_TYPES,
      // currentMessage: {},
      dialogID: "",
      // forwardStatus: false,
      // imageFlag: false,
      isCompleted: false,
      // oldMessageTime: 0,
      // dialogPosition: defaultDialogPosition,
    });

    // 不展示已删除消息
    const messages = computed(() => {
      if (data.messageList.length > 0) {
        data.oldMessageTime = data.messageList[0].time;
        return data.messageList.filter((item) => {
          return !item.isDeleted;
        });
      }
    });



    // 需要自实现下拉加载
    const handleScroll = (e) => {
      data.triggered = "restore"; // 需要重置
    };
    const handleScrollBottom = () => {
      uni
        .createSelectorQuery()
        .select(".im-message-list")
        .boundingClientRect((res) => {
          const scrollH = res.height?.height;
          data.scrollTop = scrollH;
        })
        .exec();
    };


    // 下拉刷新获取数据
    const handleRefresher = () => {
      console.log(data.messageList)
      data.triggered = true;
      if (!data.isCompleted) {
        data.isCompleted = true
        // TUIServer.getHistoryMessageList().then((res) => {
        // data.triggered = false;
        // data.isCompleted = res.isCompleted;
        // });
      }
      setTimeout(() => {
        data.triggered = false;
      }, 500);
    };
    const handleItem = (item) => {

    }

    // 是否展示时间计算
    const handleShowTime = () => {
      if (messages.value) {
        Array.from(messages.value).forEach((item) => {
          if (item.time - data.oldMessageTime > 5 * 60) {
            data.oldMessageTime = item.time;
            item.showTime = true;
          } else {
            item.showTime = false;
          }
        });
      }
    };

    // 监听消息是否展示时间
    watch(messages, (newVal, oldVal) => {
      nextTick(() => {
        const newLastMessage = newVal[newVal.length - 1];
        const oldLastMessage = oldVal ? oldVal[oldVal.length - 1] : {};
        data.oldMessageTime = messages.value[0].time;
        handleShowTime();
        if (oldVal && newLastMessage.ID !== oldLastMessage.ID) {
          handleScrollBottom(); // 非从conversationList 首次进入
        }
      });
    });




    return {
      ...toRefs(data),
      messages,
      handleRefresher,
      handleScrollBottom,
      caculateTimeago,
      handleTextMessageShowContext,
      handleImageMessageShowContext,
      handleVideoMessageShowContext,
      handleAudioMessageShowContext,
      handleCustomMessageShowContext,
      handleFaceMessageShowContext,
      handleItem
    }

  }
})

</script>

<style lang="scss" scoped>
@import "../../../assets/styles/chat/imChat.scss";
</style>