import { animate, scroll, inView } from 'motion'

// 初始化视差滚动指令
export function initParallax() {
  // 查找所有带有 data-parallax 属性的元素
  const parallaxElements = document.querySelectorAll('[data-parallax]')

  parallaxElements.forEach((element) => {
    const speed = element.getAttribute('data-parallax') || '-0.5'
    const offset = element.getAttribute('data-offset') || '0'

    scroll(
      element,
      {
        y: [Number(offset), Number(offset) + Number(speed) * 100]
      },
      {
        offset: ['start end', 'end start']
      }
    )
  })
}
