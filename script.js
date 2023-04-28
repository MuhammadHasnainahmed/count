let isstop = true;

var s = 0;
var m = 0;
var h = 0;

function start() {
  if (isstop == true) {
    isstop = false;
    timer();
    
  }
}

function timer() {
  if (isstop == false) {
    s = parseInt(s);
    m = parseInt(m);
    h = parseInt(h);

    s++;
    if (s == 60) {
      s = 0;
      m++;
    }

    if (m == 60) {
      m = 0;
      h++;
    }

    if (s < 10) {
      s = "0" + s;
    }

    if (m < 10) {
      m = "0" + m;
    }
    if (h < 10) {
      h = "0" + h;
    }

    stopwatch.innerHTML = h + " : " + m + " : " + s;
    setTimeout("timer()", 1000);
  }
  console.log(s);
}

function stop() {
  isstop = true;
}

function reset() {
  isstop = true;

  s = 0;
  m = 0;
  h = 0;

  stopwatch.innerHTML = "00 : 00 : 00";
}
