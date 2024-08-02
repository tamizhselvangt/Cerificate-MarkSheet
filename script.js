const input = document.querySelectorAll("input");
const total_total = document.querySelector(".total-total");

const theory1 = document.querySelector(".theory1");
const practical1 = document.querySelector(".practical1");
const total1 = document.querySelector(".total1");
theory1.addEventListener("input", (e) => {
   if(e.target.value>75){
    alert("Maximum Theory Mark is 75");
    e.target.value = 75;
   }
    const value = e.target.value;
  total1.innerHTML = Number(value) + Number(practical1.value);
  
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word1');
  total_in_word.innerHTML = `${test(parseInt(total1.innerHTML))}` ;
});
practical1.addEventListener("input", (e) => {

  if(e.target.value>25){
    alert("Maximum Practical Mark is 25");
    e.target.value = 25;
  }
     const value = e.target.value;
    total1.innerHTML = Number(value) + Number(theory1.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);
  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word1');
  total_in_word.innerHTML = `${test(parseInt(total1.innerHTML))}` ;
});

const theory2 = document.querySelector(".theory2");
const practical2 = document.querySelector(".practical2");
const total2 = document.querySelector(".total2");
theory2.addEventListener("input", (e) => {

  if(e.target.value>75){
    alert("Maximum Theory Mark is 75");
    e.target.value = 75;
  }
    const value = e.target.value;
    total2.innerHTML = Number(value) + Number(practical2.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word2');
  total_in_word.innerHTML = `${test(parseInt(total2.innerHTML))}` ;
});
practical2.addEventListener("input", (e) => {
  
  if(e.target.value>25){
    alert("Maximum Practical Mark is 25");
    e.target.value = 25;
  }
    const value = e.target.value;
    total2.innerHTML = Number(value) + Number(theory2.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word2');
  total_in_word.innerHTML = `${test(parseInt(total2.innerHTML))}` ;
});

const theory3 = document.querySelector(".theory3");
const practical3 = document.querySelector(".practical3");
const total3 = document.querySelector(".total3");
theory3.addEventListener("input", (e) => {
  
  if(e.target.value>75){
    alert("Maximum Theory Mark is 75");
    e.target.value = 75;
  }
    const value = e.target.value;
    total3.innerHTML = Number(value) + Number(practical3.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);


  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word3');
  total_in_word.innerHTML = `${test(parseInt(total3.innerHTML))}` ;
});
practical3.addEventListener("input", (e) => {
  
  if(e.target.value>25){
    alert("Maximum Practical Mark is 25");
    e.target.value = 25;
  }
    const value = e.target.value;

    total3.innerHTML = Number(value) + Number(theory3.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word3');
  total_in_word.innerHTML = `${test(parseInt(total3.innerHTML))}` ;
});

const theory4 = document.querySelector(".theory4");
const practical4 = document.querySelector(".practical4");
const total4 = document.querySelector(".total4");
theory4.addEventListener("input", (e) => {
  
  if(e.target.value>75){
    alert("Maximum Theory Mark is 75");
    e.target.value = 75;
  }
    const value = e.target.value;
    total4.innerHTML = Number(value) + Number(practical4.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word4');
  total_in_word.innerHTML = `${test(parseInt(total4.innerHTML))}` ;
});
practical4.addEventListener("input", (e) => {
  
  if(e.target.value>25){
    alert("Maximum Practical Mark is 25");
    e.target.value = 25;
  }
    const value = e.target.value;
    total4.innerHTML = Number(value) + Number(theory4.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word4');
  total_in_word.innerHTML = `${test(parseInt(total4.innerHTML))}` ;
});

const theory5 = document.querySelector(".theory5");
const practical5 = document.querySelector(".practical5");
const total5 = document.querySelector(".total5");
theory5.addEventListener("input", (e) => {
  
  if(e.target.value>75){
    alert("Maximum Theory Mark is 75");
    e.target.value = 75;
  }
    const value = e.target.value;
    total5.innerHTML = Number(value) + Number(practical5.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word5');
  total_in_word.innerHTML = `${test(parseInt(total5.innerHTML))}` ;
});
practical5.addEventListener("input", (e) => {
  
   if(e.target.value>25){
    alert("Maximum Practical Mark is 25");
    e.target.value = 25;
   }
    const value = e.target.value;
   
    total5.innerHTML = Number(value) + Number(theory5.value);
  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
  const total_in_word = document.querySelector('.total-in-word5');
  total_in_word.innerHTML = `${test(parseInt(total5.innerHTML))}` ;
});

function updateResult(total) {
  const result = document.querySelector(".result");
  const percentage = document.querySelector(".percentage");
  const grade = document.querySelector(".grade");

  if (total < 285) {
    result.innerHTML = "Fail";
  } else {
    result.innerHTML = "Pass";
  }

  let per = total / 5;
  percentage.innerHTML = per + "%";
  if (per >= 90) {
    grade.innerHTML = "A+";
  } else if (per >= 80) {
    grade.innerHTML = "A";
  } else if (per >= 70) {
    grade.innerHTML = "B";
  } else if (per >= 60) {
    grade.innerHTML = "C";
  }
}



///Converts Numbers to Words 
function test(n) {
  if (n < 0)
      return false;

  single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  
  if (n === 0) return 'Zero';
  
  function translate(n) {
      let word = "";
      if (n < 10) {
          word = single_digit[n] + ' ';
      } else if (n < 20) {
          word = double_digit[n - 10] + ' ';
      } else if (n < 100) {
          let rem = translate(n % 10);
          word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem;
      } else if (n < 1000) {
          word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100);
      } else if (n < 1000000) {
          word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000);
      } else if (n < 1000000000) {
          word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000);
      } else {
          word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000);
      }
      return word;
  }
  
  let result = translate(n);
  return result.trim() + '';
}



