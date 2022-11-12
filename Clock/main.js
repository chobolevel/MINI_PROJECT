const today = document.querySelector(".today");
const clock = document.querySelector(".clock");
const detail = document.querySelector(".weather");
const API_KEY = "2cfec1e7f84a61a59378e73f3b80c283";
let state = "";
let date;

//function
const formatDay = (day) => {
  switch (day) {
    case "1":
      day = "Mon";
      break;
    case "2":
      day = "Tue";
      break;
    case "3":
      day = "Wen";
      break;
    case "4":
      day = "Thur";
      break;
    case "5":
      day = "Fri";
      break;
    case "6":
      day = "Set";
      break;
    case "7":
      day = "Sun";
      break;
  }
  return day;
};
const formatTime = () => {
  date = new Date();
  let hour = date.getHours().toString().padStart(2, "0");
  if (hour < 12) {
    state = "AM";
  } else {
    state = "PM";
  }
  let min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = state + " " + hour + ":" + min + ":" + sec;
};
const formatDate = () => {
  date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let daily = date.getDate();
  let day = formatDay(date.getDay().toString());
  today.innerText = year + " " + month + " " + daily + " " + day;
};
const onGeoOk = async (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  const json = await (await fetch(url)).json();
  const posi = json.name;
  const temp = Math.floor(json.main.temp);
  const weather = json.weather[0].main;
  detail.innerText = posi + " " + temp + "°C " + weather;
};
const onGeoError = () => {
  alert("날씨 정보 불러오기를 실패하였습니다!");
};

//config
formatTime();
formatDate();
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//Interval
setInterval(formatTime, 1000);
