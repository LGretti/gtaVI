const endDate = new Date("dec 05, 2023 11:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = endDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "<div class='finished'>Go on \uD83D\uDE80</div>";
  }

  document.getElementById('dy').innerText = days.toString().padStart(2, '0');
  document.getElementById('hr').innerText = hours.toString().padStart(2, '0');
  document.getElementById('mn').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('sc').innerText = seconds.toString().padStart(2, '0');
}, 1000);