let copyBtn = document.getElementById('copy');
let createBtn = document.getElementById('createPsd');
let psdLength = document.getElementById('length');
let uppercaseBtn = document.getElementById('uppercase');
let lowercaseBtn = document.getElementById('lowercase');
let numbersBtn = document.getElementById('numbers');
let symbolsBtn = document.getElementById('symbols');
let PsdDom = document.getElementById('psd');
copyBtn.onclick =()=> { 
  if(PsdDom.length==0){
    return ; 
  }
  // 建立 Range 物件
  const range = document.createRange();
  range.selectNode(PsdDom);
  const selection = window.getSelection();
  // 先清空當前選取範圍
  selection.removeAllRanges();
  // 加入 Range 
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
  alert('已複製');
};

createBtn.onclick =()=> {  
  PsdDom.innerText = createPassword(+psdLength.value,uppercaseBtn.checked,lowercaseBtn.checked,numbersBtn.checked,symbolsBtn.checked); 
};

function createPassword(length,upper,lower,number,symbol){
  // console.log(length,upper,lower,number,symbol);
  
  let PsdTxt = '',PassWord = '';
  let checkBoxLength = upper+lower+number+symbol;
  if(checkBoxLength === 0){
    return PassWord;
  }
  
  while(PsdTxt.length<= length){
    const roadomTxt = [
      uppercaseBtn.checked?getRandomUpper():'',
      lowercaseBtn.checked?getRandomLower():'',
      numbersBtn.checked?getRandomNumber():'',
      symbolsBtn.checked?getRandomSymbol():'',
    ];
    PsdTxt= PsdTxt.concat(roadomTxt.filter(el => el).join(''));
    
 }
  PsdTxt = PsdTxt.slice(0, length);
  const randomNumbers = generateRandomNumbers(length, 0, +length-1);
  randomNumbers.forEach((ins,item)=>{
    PassWord = PassWord.concat(PsdTxt[ins]);
  });
  return PassWord;
}

function generateRandomNumbers(count, min, max) {
 const numbers = [];
 while (numbers.length < count) {
   const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
   if (!numbers.includes(randomNum)) {
     numbers.push(randomNum);
   }
 }
 return numbers;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}