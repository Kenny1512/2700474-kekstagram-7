const separator = function (string) {
  let sepString = string.split(':');
  let hours = Number(sepString[0]);
  let minutes = Number(sepString[1]) + hours * 60;
  return minutes;
};

const isOk = function (dayStart, dayEnd, meetStart, duration) {
  dayStart = separator(dayStart);
  dayEnd = separator(dayEnd);
  meetStart = separator(meetStart);

  if (meetStart < dayStart || meetStart > dayEnd || (meetStart + duration) > dayEnd) {
    return false;
  }

  return true;
};
