

// initialize all event listerners
makeCredit();
makeDebit();
listenNewjournalRow();
generateColor(jr2.id);
generateColor(jr3.id);
accountType();
accountName();
amount();

// makeCredit action
function makeCredit() {
  var makeCredit = document.getElementsByClassName("makeCredit");
  for(var i = 0; i < makeCredit.length; i++) {

    // when hovering over a make credit arrow, swing animate the journal entry row
    makeCredit[i].addEventListener("mouseover", function() {
      // select this journal entry row to animate
      var journalRow = this.parentElement;
      // add the swing class
      journalRow.classList.add("swing");
      // after one second, remove the swing class so that it can be added back again later
      setTimeout(function() {
        journalRow.classList.remove("swing");
      }, 1000);
    });

    // when clicking a make credit arrow, move the journal entry row to the right
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

      post();

    });


  }
}

// makeDebit action
function makeDebit() {
  var makeDebit = document.getElementsByClassName("makeDebit");
  for(var i = 0; i < makeDebit.length; i++) {

    // when hovering over a make debit arrow, swing animate the journal entry row
    makeDebit[i].addEventListener("mouseover", function() {
      // select this journal entry row to animate
      var journalRow = this.parentElement;
      // add the swing class
      journalRow.classList.add("swing-left");
      // after one second, remove the swing class so that it can be added back again later
      setTimeout(function() {
        journalRow.classList.remove("swing-left");
      }, 1000);
    });

    // when clicking a make debit arrow, move the journal entry to the left
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

      post();

    });
  }
}

// when a new journal row icon is clicked
function listenNewjournalRow() {
  var newjournalRow = document.getElementsByClassName("newjournalRow");
  for(var i = 0; i < newjournalRow.length; i++) {
    newjournalRow[i].addEventListener("click", function() {
      // clone the first journalRow, set ID, and remove the no-display class
      var debitRow = document.getElementById("jr0");
      var creditRow = document.getElementById("jr1");
      // if the above journal entry row is a debit, clone debit; else, clone credit
      if (this.previousElementSibling.classList.contains("debit")) {
        clone = debitRow.cloneNode(true);
      } else {
        clone = creditRow.cloneNode(true);
      }
      clone.id = "jr" + (document.querySelectorAll(".journalRowClone").length + 4);
      clone.classList.remove("no-display");
      clone.classList.add("journalRowClone");
      clone.classList.add("fadeIn");
      this.previousElementSibling.parentElement.insertBefore(clone, this);
      // remove fadeIn after waiting one second
      setTimeout(function() {
        clone.classList.remove("fadeIn");
      },1000);

      // set background color
      generateColor(clone.id);

      // initialize all event listerners
      makeCredit();
      makeDebit();
      accountType();
      accountName();
      amount();
    });
  }
}



// when a new journal entry icon is clicked
var newJournalEntry = document.getElementsByClassName("newJournalEntry");
for(var i = 0; i < newJournalEntry.length; i++) {
  newJournalEntry[i].addEventListener("click", function() {

    // clone the first journal entry, set ID, and remove the no-display class
    var journalEntry = document.getElementById("je0");
    clone = journalEntry.cloneNode(true);
    clone.id = "je" + (document.querySelectorAll(".jeClone").length + 2);
    clone.classList.remove("no-display");
    clone.classList.add("jeClone");

    // set ID, and remove the no-display class for the 1st journalRow
    clone.firstElementChild.children[1].classList.remove("no-display");
    clone.firstElementChild.children[1].id = "jr" + (document.querySelectorAll(".journalRowClone").length + 4);
    clone.firstElementChild.children[1].classList.add("journalRowClone");

    // set ID, and remove the no-display class for the 2nd journalRow
    clone.firstElementChild.children[2].classList.remove("no-display");
    clone.firstElementChild.children[2].id = "jr" + (document.querySelectorAll(".journalRowClone").length + 5);
    clone.firstElementChild.children[2].classList.add("journalRowClone");
    this.parentElement.insertBefore(clone, this);

    // set background color for each journalRow
    generateColor(clone.firstElementChild.children[1].id);
    generateColor(clone.firstElementChild.children[2].id);

    // initialize all event listerners
    makeCredit();
    makeDebit();
    accountType();
    accountName();
    amount();

  })
}

// for each journalRow, generate new random color for that journalRow
function generateColor(journalRowID) {
  // get the journalRow
  var journalRow = document.getElementById(journalRowID);
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
  // var color = Math.floor(Math.random()*16777215).toString(16);
  var light = 23;
  var dark = 40;
  var colorLight = color + light;
  var colorDark = color + dark;
  journalRow.style.setProperty("--colorLight", "#" + colorLight);
  journalRow.style.setProperty("--colorDark", "#" + colorDark);
}

// listen for change in acccount type
function accountType() {
  var accountType = document.getElementsByClassName("accountType");
  for(var i = 0; i < accountType.length; i++) {
    accountType[i].addEventListener("change", function() {
      post();
    });
  }
}

// listen for change in acccount name
function accountName() {
  var accountName = document.getElementsByClassName("accountName");
  for(var i = 0; i < accountName.length; i++) {
    accountName[i].addEventListener("input", function() {
      post();
    });
  }
}

// listen for change in amount
function amount() {
  var amount = document.getElementsByClassName("amount");
  for(var i = 0; i < amount.length; i++) {
    amount[i].addEventListener("input", function() {
      post();
    });
  }
}

// post all values to t-accounts
function post() {

  // delete all t account clones
  var tClones = document.getElementsByClassName("tClone");
  var parent = tClones.parentElement;
  for(var i = 0; i < tClones.length; i ++) {
    tClones[i].remove();
  }



  // get all journal entries
  var journalEntries = document.getElementsByClassName("journalEntry");
  // for each journal entry
  for(var j = 0; j < journalEntries.length; j++) {
    // declare journal entry
    var journalEntry = document.getElementById("je" + j);
    // if journal entry is visible
    if (journalEntry.classList.contains("no-display") != true) {
      // every child of a journal entry
      var journalEntryChildren = journalEntry.firstElementChild.children;
      // for each child of a journal entry
      for(var k = 0; k < journalEntryChildren.length; k++) {
        // get only the children with an ID
        if (journalEntryChildren[k].id != "") {
          // for each journal row
          var journalRow = journalEntryChildren[k];
          // journal row values
          var accountType = journalRow.children[0].value;
          var accountName = journalRow.children[1].value;
          var amount = journalRow.children[3].value;
          var isDebit = journalRow.classList.contains("debit");


          // try to select the t account
          try {

            // var tClones = document.getElementsByClassName("tClone");
            var existingAccount = document.getElementById("account-" + accountName)
            console.log(existingAccount.id);

          }
          catch {

            console.log("I couldn't get the t-account ID");

            try {

              // clone t account based on account account type
              var taccount = document.getElementById(accountType);

              clone = taccount.cloneNode(true);
              clone.id = "account-" + accountName;
              clone.classList.remove("no-display");
              clone.classList.add("tClone");
              clone.children[0].innerHTML = accountName + "&nbsp;";
              taccount.parentElement.insertBefore(clone, taccount);


            }
            catch {
              console.log("nothing here to clone");
            }

          }

        }
      }
    }
  }




}

    // when doing a soft post
      // delete all soft cell IDs and soft cell values at the same time
      // for each journal row
        // try { get t-account based on ID, add row and set cell ID equal to "cell" + journalRowID, set innerhtml equal to amount, set background color to journal row background color
        // finally { clone t-account based on type, set t-account ID equal to "account" + account name, add row and set cell ID equal to "cell" + journalRowID, set innerhtml equal to amount, set background color to journal row background color

    // when doing a hard post
      // do debits equal credits?
        // shake journal entry and flash red background color if unequal
      // do assets = liabilities + equity?
        // alert at top of window
        // update dollar amounts next to the equation H1s
