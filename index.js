const ctx = document.getElementById('main-chart').getContext('2d')

function getRandonArr(lenght) {
  const randomArr = [0]
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
    labels: ['', '', '', '', '', ''],
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

// const avatarBtn = document.querySelector('.user__avatar-btn')
// const avatar = document.querySelector('.user__avatar')
// const resBtn = document.querySelector('.results-item')
// avatarBtn.addEventListener('change', e => {
//   console.log(e.target.files[0])
//   new Cropper(avatar, {
//     aspectRatio: 1 / 1,
//     // crop(event) {
//     //   console.log(event.detail.x)
//     //   console.log(event.detail.y)
//     //   console.log(event.detail.width)
//     //   console.log(event.detail.height)
//     //   console.log(event.detail.rotate)
//     //   console.log(event.detail.scaleX)
//     //   console.log(event.detail.scaleY)
//     // },
//   })
// })
// resBtn.addEventListener('click', () => {
//   console.log(avatarBtn.files[0])
// })
