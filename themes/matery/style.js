/* eslint-disable react/no-unknown-property */
import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      body {
        background-color: #f5f5f5;
      }
      .dark body {
        background-color: black;
      }

      /* 设置了从上到下的渐变黑色 */
      #theme-matery .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      // 自定义滚动条
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #CAE36E;
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: #88E0DA transparent;
      }

      /* 导航栏签颜色 */
#sticky-nav.bg-indigo-700 {
    background-color: #CEE87C;
}


/* 强制网站标题变白 */
#sticky-nav .text-lg {
    color: #ffffff !important;
}


/* 搜索图标变白 */
.fa-magnifying-glass {
    color: #ffffff;
}


/* 隐藏 id 为 typed 的元素 */
#typed {
    display: none;
}

/* 隐藏打字光标 */
.typed-cursor {
    display: none !important;
}

/* 隐藏站点统计（PV 和 UV） */
.busuanzi_container_site_pv,
.busuanzi_container_site_uv {
    display: none !important;
}




/* 统一修改导航菜单所有文字颜色为白色 */
.menu-link {
color: #ffffff;
}
/* 统一修改页脚所有文字颜色为白色 */
footer.bg-indigo-700 {
color: #ffffff;
}

/* 夜间模式导航栏签颜色 */
.dark div#sticky-nav {
 background-color: #CEE87C;
}


/* 首页开始阅读按钮 */
.glassmorphism.w-40.z-40 {
    background-color: #CEE87C;
    border: none;
}

/* 标签颜色 */
a.cursor-pointer.bg-indigo-700 {
    background-color: #88E0DA;
}

/* 移动端侧边栏 */
#side-bar>.bg-indigo-700 {
    background-color: #CEE87C;
}

/* 移动端侧边栏菜单 */
nav div:hover,li:hover {
    background-color: #88E0DA!important;
}

/* 悬浮菜单 */
.right-2 .bg-indigo-700 {
    background-color: #88E0DA;
}

/* 目录进度条 */
.h-4.bg-indigo-400 {
    background-color: #88E0DA;
}

/* 目录文字高亮 */
nav .text-green-500{
    color: #88E0DA;
}

/* 网站页脚 */ 
footer.bg-indigo-700{
    background-color: #CEE87C;
}

/* 翻页按钮 */
button.bg-indigo-700{
    background-color: #88E0DA;
}

/* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}


/* 文章页隐藏更新时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > span.whitespace-nowrap {
  display: none;
}


/* 文章页隐藏阅读次数 */
#article-wrapper .busuanzi_container_page_pv {
  display: none ！important;
}

/* 文章页隐藏字数 */
#wordCountWrapper > span:nth-child(1){
 display: none !important;
}

/* 文章页隐藏阅读时长 */
#wordCountWrapper > span:nth-child(2){
 display: none;
}


      ${themeConsoleStyle('matery', CONFIG)}
  `}</style>
  )
}

export { Style }
