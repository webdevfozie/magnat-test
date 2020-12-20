document.addEventListener('DOMContentLoaded', () => {
  const avatarBtn = document.querySelector('.user__avatar-btn')
  const avatar = document.querySelector('.user__avatar')
  const resBtn = document.querySelector('.results-item')

  avatarBtn.addEventListener('change', e => {
    console.log(e.target.files[0])
    // new Cropper(avatar, {
    //   aspectRatio: 1 / 1,
    //   crop(event) {
    //     console.log(event.detail.x)
    //     console.log(event.detail.y)
    //     console.log(event.detail.width)
    //     console.log(event.detail.height)
    //     console.log(event.detail.rotate)
    //     console.log(event.detail.scaleX)
    //     console.log(event.detail.scaleY)
    //   },
    // })
  })

  resBtn.addEventListener('click', () => {
    console.log(avatarBtn.files[0])
  })
})
