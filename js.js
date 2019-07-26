document.addEventListener('DOMContentLoaded', function(){

  start();
  slide();
    
  function start() {
    // Массив с объектами, с данными о погоде
    let obj = [
      {
        date: 1559335800000,
        temperature: {
          night: 16,
          day: 26,
        },
        cloudiness: 'ясно',
        snow: false,
        rain: false,
      },
      {
        date: 1559419200000,
        temperature: {
          night: 16,
          day: 26,
        },
        cloudiness: 'ясно',
        snow: false,
        rain: false,
      },
      {
        date: 1559505600000,
        temperature: {
          night: 19,
          day: 29,
        },
        cloudiness: 'облачно',
        snow: false,
        rain: true,
      },
      {
        date: 1559592000000, 
        temperature: {
          night: 12,
          day: 21,
        },
        cloudiness: 'облачно',
        snow: false,
        rain: false,
      },
      {
        date: 1559678400000,
        temperature: {
          night: 16,
          day: 26,
        },
        cloudiness: 'ясно',
        snow: false,
        rain: false,
      },
      {
        date: 1559764800000,
        temperature: {
          night: 19,
          day: 23,
        },
        cloudiness: 'облачно',
        snow: false,
        rain: true,
      }
    ];

    render(obj);
    
  }

  function render(obj) { 
    for(let i = 0; i < obj.length; i++){

      let day = document.createElement('div'),
          dayWeek = document.createElement('span'),
          dayNumber = document.createElement('p'),
          dayImg = document.createElement('div'),
          dayTime = document.createElement('p'),
          dayNight = document.createElement('p'),
          cloud = document.createElement('span'),
          rain = document.createElement('span');
        
      day.classList.add('day');
      dayWeek.classList.add('dayWeek');
      dayImg.classList.add('dayImg');
      dayNumber.classList.add('dayNumber');
      dayTime.classList.add('dayTime');
      dayNight.classList.add('dayNight');
      cloud.classList.add('cloud');
      rain.classList.add('rain');
      
      if(getWeekDay(new Date(obj[i].date)) == 'Сегодня'){
        dayWeek.style.color = 'black';
        dayWeek.style.fontWeight = 'bold';
      }

      dayWeek.innerHTML = getWeekDay(new Date(obj[i].date)); 
      dayNumber.innerHTML = `${new Date(obj[i].date).getDate()} июня`;
      dayTime.innerHTML = `днем +${obj[i].temperature.day}&#176;`;
      dayNight.innerHTML = `ночью  +${obj[i].temperature.night}&#176;`;
      cloud.innerHTML = `${obj[i].cloudiness}, <br>`;
      rain.innerHTML = (obj[i].rain) ? 'дождь' : 'без осадков';
      
      day.appendChild(dayWeek);
      day.appendChild(dayNumber);
      day.appendChild(dayImg);
      day.appendChild(dayTime);
      day.appendChild(dayNight);
      day.appendChild(cloud);
      day.appendChild(rain);

      
      if(obj[i].cloudiness == 'ясно') {
        dayImg.style.backgroundImage = 'url(icons/yasno.png)';
      } else if(obj[i].cloudiness == 'облачно' && obj[i].rain === true) {
        dayImg.style.backgroundImage = 'url(icons/rain.png)';
      } else if(obj[i].cloudiness == 'облачно' && obj[i].rain === false) {
        dayImg.style.backgroundImage = 'url(icons/cloud.png)';
      }
    
      let weather = document.querySelector('.weather');

      // Выбираем только сегодняшний день и + 4 и добавляем в HTML
      if(obj[i].date >= 1559419200000 && obj[i].date <= 1559764800000){
        weather.appendChild(day);
      }  

    }
  }

      
// Функция для возврата дня недели, но основании нумерации (0-6)
  function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    if(days[date.getDay()] == 'Воскресенье') return 'Сегодня';

    return days[date.getDay()];
  }

  function slide(){
    let btnLeft = document.querySelector('.btn-left'),
        btnRight = document.querySelector('.btn-right'),
        weather = document.querySelector('.weather');

    let pos = 200;  

    btnLeft.addEventListener('click', function(){
      weather.style.transform += `translateX(+${pos}px)`;
      btnRight.removeAttribute('disabled');
      btnLeft.setAttribute('disabled', 'disabled');
    });   

    btnRight.addEventListener('click', function(){
      weather.style.transform += `translateX(-${pos}px)`; 
      btnRight.setAttribute('disabled', 'disabled');
      btnLeft.removeAttribute('disabled');
    }); 

  } 

});