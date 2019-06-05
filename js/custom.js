

// for each row, generate new random background color for that row
function generateColor(rowID) {
  // get the journalRow
  var row = document.getElementById(rowID);
  // retro color array
  var colorArray = [
    "DDC470",
    "FCB7A8",
    "F7A992",
    "82A0C2",
    "4C364D",
    "EE592E",
    "5D9B84",
    "DE7E44",
    "82363A",
    "519D90",
    "E69675",
    "C8782F",
    "75ACC0",
    "66202A",
    "C97F04",
    "617F7F",
    "E97E2E",
    "8FB0A9",
    "D76735",
    "FECB20",
    "84D0C4",
    "F63B34",
    "492B2D",
    "643754",
    "FED240",
    "DE4B43",
    "2F375B",
    "EEAF00",
    "A54314",
    "01A7B7",
    "73A1B0",
    "FF7E57",
    "3C3642",
    "F9D46C",
    "85496F",
    "48283D",
    "C6612B",
    "FD9301",
    "53929B",
    "2E2A39",
    "522641",
    "ED6A40",
    "2B4448",
    "50B6AB",
    "6C9575",
    "F4B30F",
    "F78E1E",
    "B4D3AA",
    "EA8F3C",
    "B24629",
    "FAA45B",
    "E1714C",
    "568DAC",
    "1B3242"
  ];
  var color = colorArray[Math.floor(Math.random()*colorArray.length)];
  var light = 23;
  var dark = 40;
  var colorLight = color + light;
  var colorDark = color + dark;
  row.style.setProperty("--colorLight", "#" + colorLight);
  row.style.setProperty("--colorDark", "#" + colorDark);
}
