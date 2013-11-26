// var date = new Date();

var Clock = function() {
}

var clock = new Clock();

Clock.prototype.setStartTime = function(){
  var starting = new Date();

  this.seconds = starting.getSeconds();
  this.minutes = starting.getMinutes();
  this.hours = starting.getHours();
}

Clock.prototype.showTime = function(){
  this.updateTime();

  // update time
  return this.hours + ":" + this.minutes + ":" + this.seconds;
}

Clock.prototype.updateTime = function(){
  var incrementor = 5;
  this.seconds += incrementor;
  if (this.seconds >= 60) {
    this.seconds = this.seconds % 60;
    this.minutes += 1;
  }

  if (this.minutes >= 60) {
    this.minutes = this.minutes % 60;
    this.hours += 1;
  }

  if (this.hours > 12) {
    this.hours = 1;
  }
}

Clock.prototype.run = function(){
  this.setStartTime();

  global.setInterval(function() {
    console.log(clock.showTime());
  }, 500
  );
};

clock.run();

setInterval(function () {
  console.log("http://en.wikipedia.org/wiki/Out_of_Time_(2003_film)");
}, 500);


