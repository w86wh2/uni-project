export const CHAT_TYPES = {
    MSG_TEXT: "TIMTextElem",
    MSG_IMAGE: "TIMImageElem",
    MSG_SOUND: "TIMSoundElem",
    MSG_AUDIO: "TIMSoundElem",
    MSG_FILE: "TIMFileElem",
    MSG_FACE: "TIMFaceElem",
    MSG_VIDEO: "TIMVideoFileElem",
    MSG_GEO: "TIMLocationElem",
    MSG_LOCATION: "TIMLocationElem",
    MSG_GRP_TIP: "TIMGroupTipElem",
    MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
    MSG_CUSTOM: "TIMCustomElem",
    MSG_MERGER: "TIMRelayElem",
    MSG_PRIORITY_HIGH: "High",
    MSG_PRIORITY_NORMAL: "Normal",
    MSG_PRIORITY_LOW: "Low",
    MSG_PRIORITY_LOWEST: "Lowest",
    CONV_C2C: "C2C",
    CONV_GROUP: "GROUP",
    CONV_TOPIC: "TOPIC",
    CONV_SYSTEM: "@TIM#SYSTEM",
    CONV_AT_ME: 1,
    CONV_AT_ALL: 2,
    CONV_AT_ALL_AT_ME: 3,
    CONV_MARK_TYPE_STAR: 1,
    CONV_MARK_TYPE_UNREAD: 2,
    CONV_MARK_TYPE_FOLD: 4,
    CONV_MARK_TYPE_HIDE: 8,
    GRP_PRIVATE: "Private",
    GRP_WORK: "Private",
    GRP_PUBLIC: "Public",
    GRP_CHATROOM: "ChatRoom",
    GRP_MEETING: "ChatRoom",
    GRP_AVCHATROOM: "AVChatRoom",
    GRP_COMMUNITY: "Community",
    GRP_MBR_ROLE_OWNER: "Owner",
    GRP_MBR_ROLE_ADMIN: "Admin",
    GRP_MBR_ROLE_MEMBER: "Member",
    GRP_MBR_ROLE_CUSTOM: "Custom",
    GRP_TIP_MBR_JOIN: 1,
    GRP_TIP_MBR_QUIT: 2,
    GRP_TIP_MBR_KICKED_OUT: 3,
    GRP_TIP_MBR_SET_ADMIN: 4,
    GRP_TIP_MBR_CANCELED_ADMIN: 5,
    GRP_TIP_GRP_PROFILE_UPDATED: 6,
    GRP_TIP_MBR_PROFILE_UPDATED: 7,
    GRP_TIP_BAN_AVCHATROOM_MEMBER: 10,
    GRP_TIP_UNBAN_AVCHATROOM_MEMBER: 11,
    MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
    MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
    MSG_REMIND_DISCARD: "Discard",
    GENDER_UNKNOWN: "Gender_Type_Unknown",
    GENDER_FEMALE: "Gender_Type_Female",
    GENDER_MALE: "Gender_Type_Male",
    KICKED_OUT_MULT_ACCOUNT: "multipleAccount",
    KICKED_OUT_MULT_DEVICE: "multipleDevice",
    KICKED_OUT_USERSIG_EXPIRED: "userSigExpired",
    KICKED_OUT_REST_API: "REST_API_Kick",
    ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
    ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
    ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
    FORBID_TYPE_NONE: "AdminForbid_Type_None",
    FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
    JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
    JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
    JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
    JOIN_STATUS_SUCCESS: "JoinedSuccess",
    JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup",
    JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval",
    INVITE_OPTIONS_DISABLE_INVITE: "DisableInvite",
    INVITE_OPTIONS_NEED_PERMISSION: "NeedPermission",
    INVITE_OPTIONS_FREE_ACCESS: "FreeAccess",
    GRP_PROFILE_OWNER_ID: "ownerID",
    GRP_PROFILE_CREATE_TIME: "createTime",
    GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime",
    GRP_PROFILE_MEMBER_NUM: "memberNum",
    GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum",
    GRP_PROFILE_JOIN_OPTION: "joinOption",
    GRP_PROFILE_INVITE_OPTION: "inviteOption",
    GRP_PROFILE_INTRODUCTION: "introduction",
    GRP_PROFILE_NOTIFICATION: "notification",
    GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers",
    SNS_ADD_TYPE_SINGLE: "Add_Type_Single",
    SNS_ADD_TYPE_BOTH: "Add_Type_Both",
    SNS_DELETE_TYPE_SINGLE: "Delete_Type_Single",
    SNS_DELETE_TYPE_BOTH: "Delete_Type_Both",
    SNS_APPLICATION_TYPE_BOTH: "Pendency_Type_Both",
    SNS_APPLICATION_SENT_TO_ME: "Pendency_Type_ComeIn",
    SNS_APPLICATION_SENT_BY_ME: "Pendency_Type_SendOut",
    SNS_APPLICATION_AGREE: "Response_Action_Agree",
    SNS_APPLICATION_AGREE_AND_ADD: "Response_Action_AgreeAndAdd",
    SNS_CHECK_TYPE_BOTH: "CheckResult_Type_Both",
    SNS_CHECK_TYPE_SINGLE: "CheckResult_Type_Single",
    SNS_TYPE_NO_RELATION: "CheckResult_Type_NoRelation",
    SNS_TYPE_A_WITH_B: "CheckResult_Type_AWithB",
    SNS_TYPE_B_WITH_A: "CheckResult_Type_BWithA",
    SNS_TYPE_BOTH_WAY: "CheckResult_Type_BothWay",
    NET_STATE_CONNECTED: "connected",
    NET_STATE_CONNECTING: "connecting",
    NET_STATE_DISCONNECTED: "disconnected",
    MSG_AT_ALL: "__kImSDK_MesssageAtALL__",
    READ_ALL_C2C_MSG: "readAllC2CMessage",
    READ_ALL_GROUP_MSG: "readAllGroupMessage",
    READ_ALL_MSG: "readAllMessage",
    USER_STATUS_UNKNOWN: 0,
    USER_STATUS_ONLINE: 1,
    USER_STATUS_OFFLINE: 2,
    USER_STATUS_UNLOGINED: 3
} 