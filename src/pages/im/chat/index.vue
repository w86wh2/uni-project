<template>
    <div>
        <view class="imChat">
            <!-- <view class="more-btn" v-if="conversation?.type === 'GROUP'" @click="handleGetProfile">
                更多</view> -->
            <view class="imChat-container">
                <scroll-view class="imChat-main" scroll-y="true" :scroll-with-animation="true"
                    :refresher-triggered="triggered" :refresher-enabled="true" @refresherrefresh="handleRefresher"
                    :scroll-top="scrollTop">
                    <view class="im-message-list" @touchstart="handleTouchStart" @click="dialogID = ''">
                        <view class="loading-text" v-if="isCompleted">没有更多</view>
                        <!-- <view
               v-for="(item, index) in messages"
               :key="item.ID"
               :id="'view' + item.ID"
             >
               <view class="time-container" v-if="item.showTime">{{
                   caculateTimeago(item.time * 1000)
               }}</view>
               <MessageTip
                 v-if="!item.isRevoked && item.type === types.MSG_GRP_TIP"
                 :data="handleTipMessageShowContext(item)"
               />
               <MessageBubble
                 v-if="!item.isRevoked && item.type !== types.MSG_GRP_TIP"
                 :data="item"
               >
                 <Message-Operate
                   v-if="dialogID === item.ID"
                   :data="item"
                   class="dialog dialog-item"
                   :style="{
                       top: dialogPosition.top + 'px',
                       right: dialogPosition.right + 'px',
                       left: dialogPosition.left + 'px',
                   }"
                 >
                 </Message-Operate>
                 <MessageText
                   :id="item.flow + '-' + item.ID"
                   v-if="item.type === types.MSG_TEXT"
                   :data="handleTextMessageShowContext(item)"
                   :messageData="item"
                   @longpress="handleItem($event, item)"
                 ></MessageText>
                 <MessageImage
                   :id="item.flow + '-' + item.ID"
                   v-if="item.type === types.MSG_IMAGE"
                   :data="handleImageMessageShowContext(item)"
                   :messageData="item"
                   @longpress="handleItem($event, item)"
                 ></MessageImage>
                 <MessageVideo
                   :id="item.flow + '-' + item.ID"
                   v-if="item.type === types.MSG_VIDEO"
                   :data="handleVideoMessageShowContext(item)"
                   :messageData="item"
                   @longpress="handleItem($event, item)"
                 />
                 <MessageAudio
                   :id="item.flow + '-' + item.ID"
                   v-if="item.type === types.MSG_AUDIO"
                   :data="handleAudioMessageShowContext(item)"
                   :messageData="item"
                   @longpress="handleItem($event, item)"
                 />
                 <MessageFace
                   :id="item.flow + '-' + item.ID"
                   v-if="item.type === types.MSG_FACE"
                   :data="handleFaceMessageShowContext(item)"
                   :messageData="item"
                   @longpress="handleItem($event, item)"
                 />
                 <MessageCustom
                   :id="item.flow + '-' + item.ID"
                   v-if="item.type === types.MSG_CUSTOM"
                   :data="handleCustomMessageShowContext(item)"
                   :messageData="item"
                   @longpress="handleItem($event, item)"
                 />
               </MessageBubble>
               <MessageRevoked
                 v-if="item.isRevoked"
                 :data="item"
                 @edit="handleEdit(item)"
               />
             </view> -->
                    </view>
                </scroll-view>
            </view>
            <imChatInput :text="text" :conversationData="conversation"></imChatInput>
        </view>
    </div>
</template>
<script>
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex';
import imChatInput from './components/message-input/index.vue'
export default defineComponent({
    name: 'ImChat',
    components: { imChatInput },
    setup(props) {
        const store = useStore()
        const data = reactive({
            messageList: computed(() => store.state.imStore.messageList),
            conversationType: 'chat',
            conversation: computed(() => store.state.imStore.conversation),
            triggered: false,
            scrollTop: 999,
            // text: "",
            // types: uni.$TIM.TYPES,
            // currentMessage: {},
            dialogID: "",
            // forwardStatus: false,
            // imageFlag: false,
            isCompleted: false,
            // oldMessageTime: 0,
            // dialogPosition: defaultDialogPosition,
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

        const handleRefresher = () => {
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


        return {
            ...toRefs(data),
            handleRefresher,
            handleScrollBottom
        }

    }
})

</script>

<style lang="scss" scoped>
@import "../../../assets/styles/chat/imChat.scss";
</style>