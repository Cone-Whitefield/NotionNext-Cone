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

/* 导航栏标题文字颜色改为白色-deepseek */
.text-lg.p-1\.5.rounded.dark\:border-white.hover\:scale-110.transform.duration-200 {
color: #ffffff;
}

/* 统一修改导航菜单所有文字颜色为白色 */
.menu-link {
color: #ffffff;
}
/* 统一修改页脚所有文字颜色为白色 */
footer.bg-indigo-700 {
color: #ffffff;
}

      ${themeConsoleStyle('matery', CONFIG)}
  `}</style>
  )
}

export { Style }
