//Crypto wallet alert

function myFunction() {
    alert("Thank you🙏for the ramen🍜:0x6BD06B139f44cac8652D158567C3F13c772a3bdE  ");
  }

  function myD() {
    alert("Thank you your kindness will bring many 🐼bears🐻 a brighter future✨:W0xC1bD9881120aDbdE106CB6d1D75dEe7c87EA1137 ");
  }


  function myGame() {
    alert("Thank you for helping get this community to the next level🎮:0x5B76D4CBF1a3FF4c4Cd201a7a82a4BF6B17c7C9f  ");
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












//Gittalk




const gitalk = new Gitalk({
  clientID: '20856ef13498ffcf01a4',
  clientSecret: '28aaae2322eb8fbd267870494c47f0a0c5febe98',
  repo: 'CosmicBee/block_bears',      // The repository of store comments,
  owner: 'CosmicBee',
  admin: ['CosmicBee'],
  id: location.pathname ,     // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')







