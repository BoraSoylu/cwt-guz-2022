let updateClock = () => {
  var time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  document.getElementById("hours").innerText = h < 12 ? h : "0" + (h - 12);
  document.getElementById("minutes").innerText = m > 9 ? m : "0" + m;
  document.getElementById("seconds").innerText = s > 9 ? s : "0" + s;
  document.getElementById("am-pm").innerText = h < 12 ? "am" : "pm";
  setTimeout(updateClock, 1000);
};

updateClock();
