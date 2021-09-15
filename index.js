//Crypto wallet alert

function myFunction() {
    alert("Add the new crypto wallet for coffee ");
  }

  function myD() {
    alert("Wallet for the donations ");
  }


  function myGame() {
    alert("Wallet for the Game Donations ");
  }

//teddy lovebear


  function myRear() {
    alert("You are amazingly talented and will achieve everything you put your mind to. I love you 💖");
  }
  function myLear() {
    alert(" Look at how far you have come already. You’re stronger than any adversity. You’ve got this.");
  }

  function myRleg() {
    alert("I’m so proud of you and know that you will excel. ");
  }

  function myLleg() {
    alert("You deserve this opportunity. You’re ready for this and you will succeed. ");
  }

  function myH() {
    alert("You've got this. I believe in you.");
  }

  function myN() {
    alert("You are amazing! I love you 💖");
  }

  function myRarm() {
    alert("I love you no matter what. ");
  }


  function myLarm() {
    alert(" You are an incredible person.");
  }

  function myBod() {
    alert(" Don't worry. You’ve got this. I love you and have your back.");
  }

  

//comment box




  let add = () => {
    let name = document.querySelector('.container #name'); 
    let comment = document.querySelector('.container #comment'); 
     
    if (name.value !== "" && comment.value != "") { 
     
    let list = document.querySelector('.list'); 
    let time = new Date();
    let h = time.getHours(); 
    let m = time.getMinutes(); 
    let s = time.getSeconds(); 
    let now = h + " : " + m + " : " + s;
    let list_item = document.createElement ("l1"); 
     
    list_item.innerHTML = `
    <span>
    <p>${name.value} ${now}</p> 
    </span>
    <p>${comment.value}</p>
    `;
    list.append(list_item); 
    }
     
    if (name.value == "" || comment.value == "") {
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item); 
     }
    name.value=comment.value = "";
    }



