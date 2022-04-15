Number.prototype.zeroPad = function (length) {
  length = length || 2;
  return (new Array(length).join("0") + this).slice(length * -1);
};

var hour_element = document.getElementById("hour");
var minute_element = document.getElementById("minute");
var second_element = document.getElementById("second");

setInterval(function () {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  hour_element.innerHTML = h.zeroPad();
  minute_element.innerHTML = m.zeroPad();
  second_element.innerHTML = s.zeroPad();
}, 1000);
