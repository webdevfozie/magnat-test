// Charts
const ctx = document.getElementById('main-chart').getContext('2d')

function getRandonArr(lenght) {
  const randomArr = []
  for (let i = 0; i < lenght; i++) {
    let randomNum = Math.floor(Math.random() * 10) + 1 + ''
    randomArr.push(+randomNum)
  }
  return randomArr
}

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Участвует в мероприятиях',
        fill: false,
        borderWidth: '2',
        borderColor: '#ED5338',
        backgroundColor: '#fff',
        pointRadius: 0,
        data: getRandonArr(5),
      },
      {
        label: 'Участвует в проектах',
        fill: false,
        borderWidth: '2',
        borderColor: '#2EB349',
        backgroundColor: '#fff',
        pointRadius: 0,
        data: getRandonArr(5),
      },
      {
        label: 'Инвестирует в проектах',
        fill: false,
        borderWidth: '2',
        borderColor: '#2A99FF',
        backgroundColor: '#fff',
        pointRadius: 0,
        data: getRandonArr(5),
      },
    ],
    labels: ['', '', '', '', ''],
  },

  options: {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      fullWidth: true,
      labels: {
        fontFamily: '"Proxima Nova", sans-serif',
        fontSize: 14,
        boxWidth: 4,
        fontColor: '#111B42',
        usePointStyle: true,
      },
    },
  },
})

// Cropper
const avatarInput = document.querySelector('.user__avatar-btn')
const preview = document.querySelector('.preview')
const done = document.querySelector('.avatar-done')
const avatar = document.querySelector('.user__avatar')

function previewFile(img) {
  let file = avatarInput.files[0]
  let reader = new FileReader()

  reader.onloadend = function () {
    img.src = reader.result
  }

  if (file) {
    reader.readAsDataURL(file)
  } else {
    img.src = ''
  }
}

avatarInput.addEventListener('change', () => {
  done.classList.remove('hide')
  preview.classList.remove('hide')

  previewFile(avatar)

  setTimeout(() => {
    new Cropper(avatar, {
      aspectRatio: 1 / 1,
      preview: preview,
      minContainerWidth: 180,
      minContainerHeight: 180,
      ready() {
        done.addEventListener('click', () => {
          avatar.style = preview.childNodes[0].getAttribute('style')
          //Долго мучился, но так как не пока не доводилось работать с canvas,
          //удалось сделать только так)
          this.cropper.destroy()
          done.classList.add('hide')
          preview.classList.add('hide')
        })
      },
    })
  }, 10)
})
