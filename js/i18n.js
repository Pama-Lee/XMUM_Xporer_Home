"use strict";

(function () {
    var translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.services": "Services",
            "nav.confessions": "Confessions",
            "hero.eyebrow": "Campus life, simplified",
            "hero.byline": "A campus companion by Lumate",
            "hero.description": "Plan your schedule, discover campus services, trade pre-loved items, and share everyday moments—all in one app built for XMUM students.",
            "hero.getItOn": "Get it on",
            "hero.downloadOn": "Download on the",
            "hero.chipSchedule": "Smart schedule",
            "hero.chipCommunity": "Campus community",
            "about.eyebrow": "Designed around student life",
            "about.title": "Everything you need around campus",
            "about.subtitle": "Useful tools and a welcoming community, ready whenever your day takes an unexpected turn.",
            "about.marketTitle": "Second-hand Market",
            "about.marketText": "Buy and sell textbooks, electronics, clothing, and everyday essentials within the student community.",
            "about.timetableTitle": "Timetable",
            "about.timetableText": "Keep classes and daily plans organized with a schedule generated from your registered courses.",
            "about.confessionTitle": "Campus Confessions",
            "about.confessionText": "Share campus moments anonymously, join conversations, and feel closer to the people around you.",
            "metrics.eyebrow": "Growing together",
            "metrics.title": "Our community in numbers",
            "metrics.downloads": "Downloads",
            "metrics.activeUsers": "Active users",
            "metrics.dailyUsers": "Daily active users",
            "metrics.rating": "Average rating",
            "services.eyebrow": "For campus merchants",
            "services.title": "A better way to reach students",
            "services.description": "XMUM Xplorer gives campus merchants a focused place to introduce products and services, manage offers, and understand student demand.",
            "features.eyebrow": "Merchant toolkit",
            "features.title": "Manage your campus presence",
            "features.description": "Tools for merchants inside and outside campus to promote products, manage orders, and learn what works.",
            "features.profile": "Merchant profile",
            "features.products": "Product management",
            "features.vouchers": "Voucher management",
            "features.marketingTitle": "Online marketing",
            "features.marketingText": "Promote products and services to the right campus audience.",
            "features.ordersTitle": "Order tracking",
            "features.ordersText": "Keep products and customer orders organized in one place.",
            "features.analysisTitle": "Market insights",
            "features.analysisText": "Understand sales activity and changing student needs.",
            "features.settingsTitle": "Flexible settings",
            "features.settingsText": "Adjust pricing, discounts, vouchers, and product details.",
            "confessions.eyebrow": "From the community",
            "confessions.title": "Campus moments, shared freely",
            "confessions.subtitle": "A glimpse of the lighthearted conversations happening around XMUM.",
            "confessions.quote1": "Whose boat got lost? Otherwise, I'm taking it!",
            "confessions.quote2": "So cute—seeing the security guards finish their shifts really lifted my mood.",
            "confessions.quote3": "Which CS group built this? It genuinely helps everyone. Love it—wishing them all a 4.0!",
            "common.user": "User",
            "common.anonymous": "Anonymous",
            "common.contactUnavailable": "Contact temporarily unavailable",
            "footer.description": "Lumate creates practical digital experiences that make student life feel simpler and more connected.",
            "footer.product": "Product",
            "footer.contact": "Contact",
            "footer.rights": "All rights reserved."
        },
        zh: {
            "nav.home": "首页",
            "nav.about": "关于产品",
            "nav.services": "商家服务",
            "nav.confessions": "校园表白墙",
            "hero.eyebrow": "让校园生活更简单",
            "hero.byline": "Lumate 打造的校园生活助手",
            "hero.description": "管理课表、发现校园服务、交易闲置物品、分享日常瞬间——专为厦大马校学生打造的一站式校园应用。",
            "hero.getItOn": "下载自",
            "hero.downloadOn": "下载自",
            "hero.chipSchedule": "智能课表",
            "hero.chipCommunity": "校园社区",
            "about.eyebrow": "围绕学生生活而设计",
            "about.title": "校园所需，一站集齐",
            "about.subtitle": "实用工具与友好社区随时待命，从容应对校园生活中的每一个变化。",
            "about.marketTitle": "校园二手市场",
            "about.marketText": "在学生社区内轻松买卖教材、电子产品、服饰与日常用品。",
            "about.timetableTitle": "智能课表",
            "about.timetableText": "根据已注册课程生成课表，清晰管理课程安排与每日计划。",
            "about.confessionTitle": "校园表白墙",
            "about.confessionText": "匿名分享校园瞬间、参与话题讨论，与身边的同学建立更多连接。",
            "metrics.eyebrow": "与校园共同成长",
            "metrics.title": "我们的社区数据",
            "metrics.downloads": "累计下载",
            "metrics.activeUsers": "活跃用户",
            "metrics.dailyUsers": "日活跃用户",
            "metrics.rating": "平均评分",
            "services.eyebrow": "面向校园商家",
            "services.title": "用更好的方式触达学生",
            "services.description": "XMUM Xplorer 为校园商家提供专属展示空间，用于推广产品与服务、管理优惠活动，并了解学生需求。",
            "features.eyebrow": "商家工具箱",
            "features.title": "轻松管理校园业务",
            "features.description": "为校内外商家提供推广、订单管理和经营洞察工具，持续优化校园服务。",
            "features.profile": "商家主页",
            "features.products": "商品管理",
            "features.vouchers": "优惠券管理",
            "features.marketingTitle": "线上推广",
            "features.marketingText": "向合适的校园用户推广产品与服务。",
            "features.ordersTitle": "订单追踪",
            "features.ordersText": "集中管理商品信息与客户订单。",
            "features.analysisTitle": "市场洞察",
            "features.analysisText": "了解销售动态与不断变化的学生需求。",
            "features.settingsTitle": "灵活设置",
            "features.settingsText": "便捷调整价格、折扣、优惠券与商品信息。",
            "confessions.eyebrow": "来自校园社区",
            "confessions.title": "自在分享校园每一刻",
            "confessions.subtitle": "看看厦大马校里正在发生的轻松、有趣的日常对话。",
            "confessions.quote1": "谁的船丢了？不然俺拾走咯。",
            "confessions.quote2": "可爱捏，看保安上下班心情好好。",
            "confessions.quote3": "哇靠，这是哪组 CS 做的啊？真的是造福人群，爱了，祝他们人人 4.0！",
            "common.user": "用户",
            "common.anonymous": "匿名",
            "common.contactUnavailable": "联系方式暂不可用",
            "footer.description": "Lumate 专注打造实用的数字体验，让学生生活更轻松、更有连接感。",
            "footer.product": "产品",
            "footer.contact": "联系我们",
            "footer.rights": "保留所有权利。"
        }
    };

    var pageMetadata = {
        en: {
            title: "XMUM Xplorer | Lumate",
            description: "XMUM Xplorer helps students organize campus life, discover services, and connect with the XMUM community.",
            toggleLabel: "Switch to Chinese"
        },
        zh: {
            title: "XMUM Xplorer | Lumate",
            description: "XMUM Xplorer 帮助厦大马校学生管理校园生活、发现服务并连接校园社区。",
            toggleLabel: "Switch to English"
        }
    };

    function getSavedLanguage() {
        try {
            var saved = window.localStorage.getItem("xmum-xplorer-language");
            if (saved === "en" || saved === "zh") return saved;
        } catch (error) {
            // Language selection can still work when storage is unavailable.
        }
        return navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
    }

    function applyLanguage(language) {
        var dictionary = translations[language];
        document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            var key = element.getAttribute("data-i18n");
            if (dictionary[key]) element.textContent = dictionary[key];
        });

        document.querySelectorAll("[data-language-toggle]").forEach(function (button) {
            button.textContent = language === "zh" ? "EN" : "中文";
            button.setAttribute("aria-label", pageMetadata[language].toggleLabel);
        });

        document.title = pageMetadata[language].title;
        var description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute("content", pageMetadata[language].description);

        try {
            window.localStorage.setItem("xmum-xplorer-language", language);
        } catch (error) {
            // Ignore storage failures; the current page still updates.
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var currentLanguage = getSavedLanguage();
        applyLanguage(currentLanguage);

        document.querySelectorAll("[data-language-toggle]").forEach(function (button) {
            button.addEventListener("click", function () {
                currentLanguage = currentLanguage === "en" ? "zh" : "en";
                applyLanguage(currentLanguage);
            });
        });
    });
})();
