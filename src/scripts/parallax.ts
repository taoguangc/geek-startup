import { scroll, animate } from 'motion'

// 默认配置
const $images = document.querySelectorAll('.parallax')

$images.forEach(($image) => {
  scroll(
    animate($image, {
      y: ['0', '150']
    }),
    { target: $image, offset: ScrollOffset.Enter }
  )
})
