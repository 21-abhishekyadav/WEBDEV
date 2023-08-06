var temp = document.querySelectorAll(".boxes");
    for (var i = 0; i < temp.length; i++) {
      temp[i].style.display = "none";
    }

    var star= document.querySelectorAll(".im");
      for(var m=0; m<star.length; m++){
        star[m].style.display = "none";
      }

    var box = document.getElementById("container1");
    box.style.display = "block";

    function eval() {
      var temp = document.querySelectorAll(".newClass");
      var tr = 0,
        fal = 0;
      for (var i = 0; i < temp.length; i++) {
        temp[i].style.display = "none";
        const checkBox = temp[i].checked;
        if (checkBox === true) {
          tr++;
        } else {
          fal++;
        }
      }

      var per=((tr/(tr+fal))*100);

      if(per>=0 && per<20){
        var star= document.querySelectorAll(".im");
      for(var m=0; m<1; m++){
        star[m].style.display = "block";
      }
      }
      
      if(per>=20 && per<40){
        var star= document.querySelectorAll(".im");
      for(var m=0; m<2; m++){
        star[m].style.display = "block";
      }
      }
      if(per>=40 && per<60){
        var star= document.querySelectorAll(".im");
      for(var m=0; m<3; m++){
        star[m].style.display = "block";
      }
      }
      if(per>=60 && per<80){
        var star= document.querySelectorAll(".im");
      for(var m=0; m<4; m++){
        star[m].style.display = "block";
      }
      }
      if(per>=80 && per<=100){
        var star= document.querySelectorAll(".im");
      for(var m=0; m<5; m++){
        star[m].style.display = "block";
      }
      }

      
    }

    function getVal(x, y) {
      const val = document.getElementById(x).value;
      if (val == "") {
        alert("Please enter a task");
        return;
      }
      document.getElementById(x).value = "";
      console.log(val);

      const para = document.createElement("p");
      const node = document.createTextNode(val);
      const check = document.createElement("input");
      check.type = "checkbox";
      check.className = " newClass";
      para.appendChild(node);
      para.appendChild(check);

      const element = document.getElementById(y);
      element.appendChild(para);
      var k = 0;
    }

    function myFunction(but) {
      if (but == 1) {
        var temp = document.querySelectorAll(".boxes");
        for (var i = 0; i < temp.length; i++) {
          temp[i].style.display = "none";
        }
        var box = document.getElementById("container1");
        box.style.display = "block";
      }

      if (but == 2) {
        var temp = document.querySelectorAll(".boxes");
        for (var i = 0; i < temp.length; i++) {
          temp[i].style.display = "none";
        }
        let box = document.getElementById("container2");
        box.style.display = "block";
      }

      if (but == 3) {
        var temp = document.querySelectorAll(".boxes");
        for (var i = 0; i < temp.length; i++) {
          temp[i].style.display = "none";
        }
        let box = document.getElementById("container3");
        box.style.display = "block";
      }

      if (but == 4) {
        var temp = document.querySelectorAll(".boxes");
        for (var i = 0; i < temp.length; i++) {
          temp[i].style.display = "none";
        }
        let box = document.getElementById("container4");
        box.style.display = "block";
      }

      if (but == 5) {
        var temp = document.querySelectorAll(".boxes");
        for (var i = 0; i < temp.length; i++) {
          temp[i].style.display = "none";
        }
        let box = document.getElementById("container5");
        box.style.display = "block";
      }

      if (but == 6) {
        var temp = document.querySelectorAll(".boxes");
        for (var i = 0; i < temp.length; i++) {
          temp[i].style.display = "none";
        }
        let box = document.getElementById("container6");
        box.style.display = "block";
      }

      if (but == 7) {
        var temp = document.querySelectorAll(".boxes");
        for (var i = 0; i < temp.length; i++) {
          temp[i].style.display = "none";
        }
        let box = document.getElementById("container7");
        box.style.display = "block";
      }
    }