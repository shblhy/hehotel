//Interface output

var web_url="http://www.gbvh.com/",
    saas_root = "/saas",
    client_account = "zh_haiwan",
    language = "zh-cn",
    hotel_name = "珠海海湾",
    defaultHotelListIndex = 0, // room reservations hotel list default index
    selectRoomNum = 5, // room reservations default rooms number
    roomsAndServiceNumber = 5, // rooms and service set choose number
    user_id = 0,
    user_info = null,
    isChinese = ( language === 'zh-cn' || language === 'zh-tw' ),
    standardCheckInTime = "14:00", // Standard check in time
    standardCheckOutTime = "12:00"; // Standard check out time
var room_info_num_arr = ["客房一","客房二","客房三","客房四","客房五"];

/**
 * site defaults data
 * set select option value
 */

var tmpl_select_content = "请选择",
    clear = "清除",
    not_required = "不作要求",
    not_completed = "未填写",
    appellation_options = [
        {
            val: "先生"
        },
        {
            val: "小姐"
        },
        {
            val: "夫人"
        },
        {
            val: "爵士"
        },
        {
            val: "博士"
        },
        {
            val: "女士"
        },
        {
            val: "教授"
        }
    ],
    phone_type_options = [
        {
            val: "移动电话"
        },
        {
            val: "家庭电话"
        },
        {
            val: "公司电话"
        }
    ],
    aircraft_options = [
        {
            val: "广州国际机场"
        },
        {
            val: "白云机场"
        },
        {
            val: "黄花机场"
        }
    ],

    special_needs_data = [
        {
            index: 0,
            title: "是否吸烟",
            check: -1,
            options: [
                {
                    index: 0,
                    value: "吸烟",
                    ident: "smok",
                    group_name: "smok"
                },
                {
                    index: 1,
                    value: "不吸烟",
                    ident: "no-smok",
                    group_name: "smok"
                }
            ]
        },
        {
            index: 1,
            title: "是否远离电梯",
            check: -1,
            options: [
                {
                    index: 0,
                    value: "靠近电梯",
                    ident: "lift",
                    group_name: "lift"
                },
                {
                    index: 1,
                    value: "远离电梯",
                    ident: "no-lift",
                    group_name: "lift"
                }
            ]
        },
        {
            index: 2,
            title: "楼层要求",
            check: -1,
            options: [
                {
                    index: 0,
                    value: "低楼层",
                    ident: "low-floor",
                    group_name: "floor"
                },
                {
                    index: 1,
                    value: "高楼层",
                    ident: "high-floor",
                    group_name: "floor"
                }
            ]
        }
    ];
    
 
var product_catalog = {
	1: "客房",
	2: "餐饮",
	3: "会议&宴会",
	4: "康乐"
}


var LP_orders = {

	current: "当前订单",
	history: "客房历史订单",
	pay: "担保及支付",
        other_history: "其他历史订单",
        my_request: "我的预约"   
}


var LP_status = {
	0 : "未确认",
	1 : "已兑换"	
}


var LP_order_status = {
	0: "未提交",
	1: "未担保",
	2: "未确认",
	3: "已确认",
	4: "客户修改资料",
	5: "客户取消订单",
	6: "客户拒绝订单",
	7: "正常入住",
	8: "No Show",
	9: "已离店",
	10: "延迟离店",
	11: "提前离店"
}


var LP_request_status = {
	1: "未确认",
	2: "已确认",
	3: "已修改",
	4: "已取消",
	5: "客户拒绝订单",
	6: "No Show",
	7: "已消费"
}

    

// langauge pack code

var LP_public = {
    register: "注册成功！",
    save: "保存成功！",
    submit: "提交成功！",
    email: "修改成功，我们已经发送新密码到您的邮箱！",
    remove: "移除",
    add: "添加",
    close: "关闭",
    request_error: "处理请求失败！",
    interface_error: "接口调用失败！",
    pwd_error: "原密码错误！",
    system_busy: "系统繁忙，请稍后重试！",
    examine: ["未通过审核", "通过审核"],
    first_page: "第一页",
    last_page: "最后一页",
    prev_page: "上一页",
    next_page: "下一页",
    page: ["页", "条记录"],
    status: ["未知状态", "未担保", "未确定", "已确定", "已修改", "已取消"],
    have: "有",
    no: "无",
	no_empty: "请输入新密码",
	sure_pas: "请确认新密码",
    pwd_error: "原密码错误",
    pass_diff: "两次密码输入不相同",
    pass: "修改成功",
    exchange: "提交成功，我们将尽快确认商品兑换并与您联系，谢谢！",
    comment: "提交成功，感谢您的点评",
    noencough: "对不起，您的积分不足以兑换此商品",
    order_cancel_ok: "订单取消成功！",
    sure_cancel: "确定要取消订单!",
    load_content: "正在处理，请稍候"
},

LP_global = {
    overrideAlert: ["秒后自动关闭","我知道了！"],
    fancyConfirm: ["确定","取消"],
    fancyConfirm_text: ["确定了吗?"],
    ie6Tips: ["您正在使用", "较旧的浏览器", "浏览网页，建议您", "升级到",
        "，本站将能为您提供更好的体验。", "我知道了"],
    telescopic: ["(点击收缩)", "(点击展开)"]
},
LP_data = {
    weekFormat1: ["星期日", "星期一", "星期二",
        "星期三", "星期四", "星期五", "星期六"],
    weekFormat2: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    year: "年",
    month: "月",
    day: "日",
	alert_1 : '超出最大日期范围！'
},
LP_cld = {
    msgCal: ["客房在线预订", "入住日期：", "入住晚数：", "退房日期：",
        "日历", "查询房态与房价", "修改/取消预订",
        "退房日期必须大于入住日期！", "", "查询/修改及取消预订",
        "预订号码：", "姓氏：", "请输入订单号！", "请输入姓氏！"],
    msgCal_child: ["入住晚数应在 1-", "之间！"],
    msgAlert: ["控制对象不存在！", "参考控件不存在！",
        "参考控件类型错误！","日历未成功装载！ 请刷新页面！"],
    currentMonth: "当前月份",
    roomDate: ['请选择入住日期！' , '请选择退房日期！']
},
LP_compare = {
    create: ["客房设施", "基础设施", "多媒体和娱乐设施",
        "点心饮料", "办公和安全"],
    room_info: "客房信息",
    bed_type: "床型",
    area: "房间尺寸",
    area_m: "平方米",
    view: "景观",
    extra_bed: "加床情况",
    smoking_room: "无吸烟房",
    brother_room: "连通房",
    disable_people_room: "残疾人房",
    selRoomType: "请选择房型！",
    have: null,
    no: null,
    book: "马上预订",
    confirm: "确定要移除",
    error: ["", "需选择两种或两种以上房型进行比较"]
};
LP_compare['error'][0] = "无数据，请确认链接是否正确（"
    + LP_compare['error'][1] +"）！";
LP_compare['have'] = LP_public['have'];
LP_compare['no'] = LP_public['no'];

var LP_product = {
    message: [
        "暂无添加任何产品，你可以添加最多五款产品进行对比。",
        "对不起，您最多只可以添加5款产品，请先删除对比栏的一些产品后再添加。",
        "暂无浏览过的产品","该产品已加入对比栏中",
        "你还没有添加产品，无法进行对比，请先添加产品。",
        "对不起，您选择的是不同类别的产品无法加入对比，"
        +"请选择同类产品或清空当前对比栏再选择。",
        "请选择两款产品以上进行比较",
        "该产品已在对比栏中，请选择其他产品",
        "该产品已从比栏中移除"
    ],
    create: ["产品对比栏", "清空对比栏", "收起", "对比", "工具栏"],
    catalog: "客房"
},
LP_member_order = {
    status: ["未知状态", "未担保", "未确定", "已确定", "已修改", "已取消"],
    orderNoModify: "订单不允许修改！",
    modify: ["订单修改", "订单取消", "需要扣罚：",
        "是否确认", "修改订单将产生扣罚："],
    noOrder: "您还没有订单"
},
LP_pay = {
    way_of_security: "担保方式：",
    pay_online: "在线支付",
    pay_price: "支付金额：",
    pay_channels: "支付途径",
    fax_guarantee: "传真提交担保文件",
    orderNo: "您的订单编号：",
    download: ["点击下载", "担保文件"],
    orderMsg: ["已成功提交，工作人员将尽快予以确认！", "已确认，谢谢！"],
    info: ["提交", "提交信用卡资料", "信用卡类型",
        "持有人姓名", "信用卡号码", "有效期"],
    error: "支付系统错误，请稍后再尝试支付！"
},
LP_luhmCheck = {
    select: "请选择", 
    card_type: "请选择信用卡类型！",    
    card_holder: "请输入持有人姓名！",
    card_number: "请输入信用卡号码！",
    luhmCheck: "信用卡号不正确！",
    valid_year: "请输入有效期(年)！",
    vaild_month: "请输入有效期-月！"
},
LP_reservat = {
    select_promot: "选择促销",
    effective_date: "有效日期",
    view_detail: "查看详细",
    error: "暂无数据！"
},
LP_login = {
    welcome: "欢迎您!",
    login: "登录",
    register: "注册",
    mobile_reservat: "手机预订",
    exit: "退出登录",
    member: "会员登录",
    in_member: " , 点击进入我的会员中心。",
    is_exit: "确定退出？"    
},
LP_share = {
    sina: "分享到新浪微博",
    tencent: "分享到腾讯微博",
    kaixin: "分享到开心网",
    renren: "分享到人人网"
},
LP_rbook = {
    booking: ["预订房间", "", "继续预订", "取消预订", "预订担保"],
    book_reservat: "预订促销",
    current_member: "当前会员：",
    current_price: "当前价格",
    not_login: ["当前客人：", "个人散客", "如果您已经注册会员，请首先登录"],
    price_detail: ["价格详情", "预订政策", "取消政策"],
    success: ["入住日期：", "离店日期：", "房间数量：",
        "会员身份：", "推广渠道："],
    pSelPrice: ["请选择价格", "点击价格名称查看详细信息"],
    price: ["价格从", "晚起", "选择此价格", "更多促销价格选择"],
    sroom: ["选择房型", "房间类型", "平均每晚价格", "剩余数量","房型介紹"],
    surplus: ["平均", "晚", "仅剩", "间", "选择此房间"],
    tip: ["当前价格下没有合适的房型可供选择，请",
        "重新查询", "预订房间数量错误！"],
    order_detail: ["订单详情", "入住天夜"],
    total: ["合计", "房间数量", "总计：", "预订数量"],
    cost: ["房费：", "折扣优惠：", "税费：", "总费用："],
    service_items: ["选择服务项目", "服务名称", "单价", "预订次数"],
    page_title: ["查询房型及价格", "选择价格", "", "选择服务", "填写信息"],
    person: ["姓氏：", "名字：", "称谓：", "性别："],
    call: ["先生", "小姐", "夫人", "爵士", "博士", "女士", "教授"],
    sex: ["男", "女"],
    pmail: ["电邮地址：", "再次输入电子邮箱："],
    phone: ["电话号码：", "电话类别：", "家庭电话", "公司电话", "移动电话"],
    address: ["地址：", "城市：", "城镇：",
        "省份：", "国家：", "地区：", "邮编："],
    operation_info: ["添加住客信息", "删除此住客信息"],
    error: "操作等待超时，请重新开始查询！"
},
LP_order = {
    modify: "确认修改",
    cancel: "取消修改"
};
LP_rbook['booking'][1] = LP_compare['book'];
LP_rbook['page_title'][2] = LP_rbook['sroom'][0];

var arr_status = {
    kind: {
        '0': "未提交",
        '1': "未担保",
        '2': "未确认",
        '3': "已确认",
        '7': "正常入住",
        '8': "No Show",
        '9': "已离店",
        '10': "延迟离店",
        '11': "提前离店"
    },
    type: {
        '0': "新订单",
        '4': "客户修改订单",
        '5': "客户取消订单",
        '6': "酒店拒绝订单"
    }
};

var LP_comment_type = {
	"impression":"总体印象",
	"point_cleanness":"卫生程度",
	"point_comfort":"舒适程度",
	"point_environment":"地理位置",
	"point_service":"服务水平",
	"point_staff":"员工素质",
	"point_worth":"物有所值"	
}