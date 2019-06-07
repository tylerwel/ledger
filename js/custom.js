// generate random background color for the first row
generateColor(row2.id);
// generate random background color for the second row
generateColor(row3.id);
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
  // select a random color from the list
  var color = colorArray[Math.floor(Math.random()*colorArray.length)];
  // this is the opacity for the light color
  var light = 23;
  // this is the opacity for the dark color
  var dark = 40;
  // combine the random color and add the light opacity
  var colorLight = color + light;
  // combine the random color and add the dark opacity
  var colorDark = color + dark;
  // set the random light color
  row.style.setProperty("--colorLight", "#" + colorLight);
  // set the random dark color
  row.style.setProperty("--colorDark", "#" + colorDark);
}

// when makeCredit arrow is clicked
makeCredit();
// makeCredit action
function makeCredit() {
  // select every make-credit arrow
  var makeCredit = document.getElementsByClassName("make-credit");
  // for each arrow,
  for(var i = 0; i < makeCredit.length; i++) {
    // on click,
    makeCredit[i].addEventListener("click", function() {
      // select this journal entry row
      var journalRow = this.parentElement;
      // select the make debit arrow
      var makeDebit = this.previousElementSibling;
        // hide this make credit arrow
        this.classList.add("no-display");
        // remove the debit class from the journal entry row
        journalRow.classList.remove("debit");
        // add the credit class to the journal entry row
        journalRow.classList.add("credit");
        // remove the no-display class from the made debit arrow
        makeDebit.classList.remove("no-display");
    });
  }
}

// when makeDebit arrow is clicked
makeDebit();
// makeDebit action
function makeDebit() {
  // select every make-debit arrow
  var makeDebit = document.getElementsByClassName("make-debit");
  // for each arrow,
  for(var i = 0; i < makeDebit.length; i++) {
    // on click,
    makeDebit[i].addEventListener("click", function() {
      // select this journal entry row
      var journalRow = this.parentElement;
      // select this make credit arrow
      var makeCredit = this.nextElementSibling;
        // hide this make credit arrow
        this.classList.add("no-display");
        // remove the credit class from the journal entry row
        journalRow.classList.remove("credit");
        // add the debit class to the journal entry row
        journalRow.classList.add("debit");
        // remove the no-display class from the make credit arrow
        makeCredit.classList.remove("no-display");
    });
  }
}

// initialize newRow
newRow();
// when newRow icon is clicked
function newRow() {
  // select every new row icon,
  var newRow = document.getElementsByClassName("new-row");
  // for each new row icon,
  for(var i = 0; i < newRow.length; i++) {
    // on click,
    newRow[i].addEventListener("click", function() {
      // if the row above is debit,
      if(this.previousElementSibling.classList.contains("debit")) {
        // select the original debit row
        var debitRow = document.getElementById("row0");
        // duplicate the original debit row
        clone = debitRow.cloneNode("true");
      }
      // else,
      else {
        // select the original credit row
        var creditRow = document.getElementById("row1");
        // duplicate the original credit row
        clone = creditRow.cloneNode("true");
      }
      // remove class "no-display" from clone
      clone.classList.remove("no-display");
      // set new ID for clone
      // generate color for clone
    })

  }

}
