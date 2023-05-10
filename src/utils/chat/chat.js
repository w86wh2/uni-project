
import { decodeText } from "./decodeText";
import { bigEmojiList } from "./emojiMap";
// 处理头像
export function handleAvatar(item) {
    let avatar = "";
    avatar =
        item?.userProfile?.avatar ||
        "https://web.sdk.qcloud.com/component/TUIKit/assets/avatar_21.png";

    return avatar;
}

// 处理昵称
export function handleName(item) {
    let name = item?.userProfile.nick || item?.userProfile?.userID || "";
    return name;
}

// 解析处理文本消息展示
export function handleTextMessageShowContext(item) {
    const options = {
        text: decodeText(item.payload),
    };
    return options;
}

// 解析处理表情消息展示
export function handleFaceMessageShowContext(item) {
    const face = {
        message: item,
        name: "",
        url: "",
    };
    const currentEmojiList = bigEmojiList.filter(
        (emoItem) => emoItem.icon === item.payload.data
    );
    if (currentEmojiList.length > 0) {
        face.name = currentEmojiList[0].list[item.payload.index];
    }
    // 与native 互通兼容
    if (item.payload.data.indexOf("@2x") > 0) {
        face.name = item.payload.data;
    } else {
        face.name = `${item.payload.data}@2x`;
    }
    face.url = `https://web.sdk.qcloud.com/im/assets/face-elem/${face.name}.png`;
    return face;
}

// 解析处理位置消息展示
export function handleLocationMessageShowContext(item) {
    const location = {
        lon: "",
        lat: "",
        href: "",
        url: "",
        description: "",
        message: item,
    };
    location.lon = item.payload.longitude.toFixed(6);
    location.lat = item.payload.latitude.toFixed(6);
    location.href =
        "https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&" +
        `pointx=${location.lon}&pointy=${location.lat}&name=${item.payload.description}`;
    location.url =
        "https://apis.map.qq.com/ws/staticmap/v2/?" +
        `center=${location.lat},${location.lon}&zoom=10&size=300*150&maptype=roadmap&` +
        `markers=size:large|color:0xFFCCFF|label:k|${location.lat},${location.lon}&` +
        "key=UBNBZ-PTP3P-TE7DB-LHRTI-Y4YLE-VWBBD";
    location.description = item.payload.description;
    return location;
}

// 解析处理图片消息展示
export function handleImageMessageShowContext(item) {
    return {
        progress: item?.status === "unSend" && item.progress,
        info: item.payload.imageInfoArray,
        message: item,
    };
}

// 解析处理视频消息展示
export function handleVideoMessageShowContext(item) {
    return {
        progress: item?.status === "unSend" && item?.progress,
        url: item?.payload?.videoUrl,
        snapshotUrl: item?.payload?.snapshotUrl,
        message: item,
    };
}

// 解析处理语音消息展示
export function handleAudioMessageShowContext(item) {
    return {
        progress: item?.status === "unSend" && item.progress,
        url: item.payload.url,
        message: item,
        second: item.payload.second,
    };
}

// 解析处理文件消息展示
export function handleFileMessageShowContext(item) {
    let size = "";
    if (item.payload.fileSize >= 1024 * 1024) {
        size = `${(item.payload.fileSize / (1024 * 1024)).toFixed(2)} Mb`;
    } else if (item.payload.fileSize >= 1024) {
        size = `${(item.payload.fileSize / 1024).toFixed(2)} Kb`;
    } else {
        size = `${item.payload.fileSize.toFixed(2)}B`;
    }
    return {
        progress: item?.status === "unSend" && item.progress,
        url: item.payload.fileUrl,
        message: item,
        name: item.payload.fileName,
        size,
    };
}

// 解析处理合并消息展示
export function handleMergerMessageShowContext(item) {
    return { message: item, ...item.payload };
}

// 解析处理自定义消息展示
export function handleCustomMessageShowContext(item) {
    return {
        message: item,
        custom:
            extractCallingInfoFromMessage(item) ||
            item?.payload?.extension ||
            `[自定义消息]`,
    };
}

