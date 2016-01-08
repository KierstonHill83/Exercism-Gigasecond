function Gigasecond(birthday) {
  this.birthday = birthday;
}

Gigasecond.prototype.date = function() {
  var gs = Math.pow(10, 9);
  var days = Math.ceil(((gs / 60) / 60) / 24);
  var finalDate = this.birthday.setTime(this.birthday.getTime() + days * 86400000);
  var results = new Date(finalDate);
  results.setSeconds(0);
  results.setMinutes(0);
  results.setHours(0);
  return results;
};


module.exports = Gigasecond;