(() => {
  const getTimeLeft = () => {
    const currentTime = new Date();
    const eventTime = new Date(2019, 6, 27, 0, 0, 0, 0);

    return eventTime - currentTime;
  };

  const getStringFromTime = (time) => {
    if (time > 0) {
      const seconds = time / 1000;
      const minutes = seconds / 60;
      const hours = minutes / 60;

      const secondsString = String(Math.floor(seconds % 60)).padStart(2, 0);
      const minutesString = String(Math.floor(minutes % 60)).padStart(2, 0);
      const hoursString = String(Math.floor(hours)).padStart(2, 0);

      return `${hoursString}h:${minutesString}m:${secondsString}s`;
    }

    return `Sprawdźmy go!`;
  };

  const appendStringToElement = (element) => {
    element.textContent = getStringFromTime(getTimeLeft());
  };

  $timeElement = document.querySelector('.timer');

  setInterval(() => {
    appendStringToElement($timeElement);
  }, 1000);
})();
