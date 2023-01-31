const res = document.getElementById("result");
console.log(res.innerHTML);
let buttons = document.querySelectorAll("button");
let buttonValue = document.querySelector("button").value;
let num1 = "",
num2 = 0;
let symbol = "";
let ans = 0;
let flag = 0;
dotcount = 0;
let symbolctr = "";
for (const button of buttons) {
  button.addEventListener("click", function () {
    console.log("button pressed");
    console.log(button.value);
    // res.innerHTML = button.value;
    let value = button.value;
    // num1+= value;
    // res.innerHTML=num1;
    if (value == "Switch") {
      res.innerHTML = "";
      num1 = "";
      dotcount = 0;
      symbolctr=0;
    } else if (value == "reset") {
      res.innerHTML = "0";
      num1 = "";
      dotcount = 0;
      symbolctr=0;
    } else if (value == "delete") {
      num1 = num1.slice(0, -1);

      res.innerHTML = num1;
    }
    // else if(value="."){
    //     if(dotcount!=1)
    //     {
    //         res.innerHTML=num1;
    //     }
    //     dotcount=1;
    // }
    else if (value == "+" || value == "-" || value == "*" || value == "/") {
      if (symbolctr == 0) {
        symbolctr = 1;
        symbol = value;
        num1 += value;
        res.innerHTML = num1;
      } else if(symbolctr==1 ){
        


        calculate();
        symbol=value;
        num1=num1+symbol;
        res.innerHTML=num1;
        symbolctr=1;
      }
    //   else{
        // num1=num1.slice(0,-1)+value;
        // res.innerHTML=num1;
        
    //   }
    console.log(num1+ " "+ res.innerHTML);
    }

      if (value == "=") {
           calculate();
      }
    

    if (value >= "0" && value <= "9") {
      num1 += value;
      res.innerHTML = num1;
    }

    function calculate() {
      let numarray = num1.split(symbol);
      console.log(numarray);
       
      
      let a=Number(numarray[0]);
      let b=Number(numarray[1]);
      switch (symbol) {


        case "+":
          ans = a+b;
          break;
        case "-":
          ans = a-b;
          break;
        case "*":
          if(a=="" || b=="")
          ans=a;
          else  
          ans = a*b;
          break;
        case "/":
          if(a=="" || b=="")
          ans=a;
          else  
          ans = a/b;
          break;
      }
      num1 = ans;
      console.log(num1);
      res.innerHTML=num1;
      symbolctr=0;
    }


    console.log(symbolctr);
  });
}

// if (value == "Switch") {

//   res.innerHTML = "";
//   num1 = 0;
//   flag=0
// } else if (value == "reset") {
//   res.innerHTML = "0";
//   num1 = 0;
// } else if (value == "delete") {

//   num1 = Math.floor(Number(num1) / 10);
//   res.innerHTML = num1;
// } else if (value == "+" || value == "-" || value == "/" || value == "*") {
//   res.innerHTML = num1 + value;
//   num2 = num1;
//   // num1=0;
//   console.log(num2);
//   symbol = value;
// } else if (value == "=") {
//   switch (symbol) {
//     case "+":
//       ans = num1 + num2;
//       break;
//     case "-":
//       ans = num1 - num2;
//       break;
//     case "*":
//       ans = num1 * num2;
//       break;
//     case "/":
//       ans = num1 / num2;
//       break;

//       // num1=ans;
//       // res.innerHTML=ans;
//       console.log(ans);
//   }
// }
// else if(value=="." )
// {
//     if(flag==1)
//     {
//         return;
//     }
//     num1=num1+button.value;
//     flag=1;
//     res.innerHTML=num1;
// }
//     else {
//       num1 = num1 + button.value;
//       // num1=num1+button.value;

//       res.innerHTML = num1;
//     }
//   });
// }
// function addvalue(buttonValue){

// }
// button.addEventListener('click',function() {

// })
