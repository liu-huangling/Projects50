const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('text')
const smallImage = document.getElementById('smallImage')
const name = document.getElementById('name')
const type = document.getElementById('type')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_texts = document.querySelectorAll('.animated-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://welcon.kocca.kr/cmm/getImage.do?atchFileId=FILE_046d5e61-7fce-4dcb-86c4-f71f90e1a662&amp;fileSn=1&amp;thumb=" id="headerImage" alt="圖片">'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  smallImage.innerHTML =
    '<img src="https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/968f5879eb1d4b18bb33799d9f87aae2~tplv-xv4ileqgde-resize-w:750.image" alt="頭貼2">'
  name.innerHTML = 'Loopy'
  type.innerHTML = '海狸'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}