// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function GameField(){
  const [a, setA] = useState([
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2],
    [2, 3, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2],
    [2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
    [2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 1, 0, 2],

    [2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 2],
    [2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 1, 0, 2],
    [2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2],
    [2, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 0, 2, 2],

    [2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 2],
    [2, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2],
    [2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 0, 2],
    [2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ]);

  let N = 15, M = 15;
  let steps = 0;
  let finish = 0;

  console.log("Я вызываюсь");
  function setColor(color) {
    switch (color) {
      case 0: return "grey"
      case 1: return 'red'
      case 2: return '#000000'
      case 3: return 'blue'
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function moveMonsterDirection(){
    let direction=getRandomInt(4);
    switch (direction) {
      case 0: return "UP"
      case 1: return 'DOWN'
      case 2: return 'LEFT'
      case 3: return 'RIGHT'
    }
  }

  function moveMonster(){
    let temp=a.slice();
    for (let i=0;i<N;i++){
      for(let j=0;j<M;j++){
        if (a[i][j]===1){
          let direction=moveMonsterDirection();
          if (direction ==='UP'){

            if(temp[i-1][j]===0 || temp[i-1][j]===3 ){
              temp[i-1][j] = 1;
              temp[i][j] = 0;
            }
          }
          if (direction ==='DOWN'){
            if(temp[i+1][j]===0 || temp[i+1][j]===3 ){
              temp[i+1][j] = 1;
              temp[i][j] = 0;
            }
          }
          if (direction ==='LEFT'){
            if(temp[i][j-1]===0 || temp[i][j-1]===3 ){
              temp[i][j-1] = 1;
              temp[i][j] = 0;
            }
          }
          if (direction ==='RIGHT'){
            if(temp[i][j+1]===0 || temp[i][j+1]===3 ){
              temp[i][j+1] = 1;
              temp[i][j] = 0;
            }
          }
          
        }
       
      }
    }
    return temp;
  }
  

  function moveToLeft() {
    let i, j;
    let temp=a.slice();
    i = 0;
    while (i < N) {
      j = 1;
      while (j < M) {
        if (a[i][j] === 3) {
          if (a[i][j - 1] === 0) {
            // const temp = [...a];
            temp[i][j - 1] = 3;
            temp[i][j] = 0;
            // setA(temp);
            steps++;
          }
          else if (a[i][j - 1] === 4) {
            // const temp = [...a];
            temp[i][j - 1] = 3;
            temp[i][j] = 0;
            // setA(temp);
            steps++;
          }
          else if (a[i][j - 1] === 1) {
            // const temp = [...a];
            temp[i][j - 1] = 3;
            temp[i][j] = 0;
            // setA(temp);
            finish++;
          }
        }
        j++;
      }
      i++;
    }
    return temp;
  }
    
  function moveToRight() {
     let i, j;
     let temp=a.slice();
     i = 0;
     while (i < N) {
       j = M - 2;
       while (j >= 0) {
         if (a[i][j] == 3) {
           if (a[i][j + 1] == 0) {
            //  const temp = [...a];
             temp[i][j + 1] = 3;
             temp[i][j] = 0;
            //  setA(temp);
             steps++;
           }
           else if (a[i][j + 1] == 4) {
            //  const temp = [...a];
             temp[i][j + 1] = 3;
             temp[i][j] = 0;
            //  setA(temp);
             steps++;
           }
           else if (a[i][j + 1] == 1) {
            //  const temp = [...a];
             temp[i][j + 1] = 3;
             temp[i][j] = 0;
            //  setA(temp);
             finish++;
             
           }
         }
         j--;
       }
       i++;
     }
     return temp;
   }

   function moveToUp() {
    let i, j;
    let temp=a.slice();
    i = 0;
    while (i < N) {
      j = 0;
      while (j < M) {
        if (a[i][j] == 3) {
          if (a[i - 1][j] == 0) {
            // const temp = [...a];
            temp[i - 1][j] = 3;
            temp[i][j] = 0;
            // setA(temp);
            steps++;
          }
          else if (a[i - 1][j] == 4) {
            // const temp = [...a];
            temp[i - 1][j] = 3;
            temp[i][j] = 0;
            // setA(temp);
            steps++;
          }
          else if (a[i - 1][j] == 1) {
            // const temp = [...a];
            temp[i - 1][j] = 3;
            temp[i][j] = 0;
            // setA(temp);
            finish++;
            
          }
        }
        j++;
      }
      i++;
    }
    return temp;
  }

  function moveToDown() {
    let i, j;
    let temp=a.slice();
    i = N - 2;
    while (i >= 0) {
      j = 0;
      while (j < M) {
        if (a[i][j] == 3) {
          if (a[i + 1][j] == 0) {
            // const temp = [...a];
            temp[i + 1][j] = 3;
            temp[i][j] = 0;
            // setA(temp);
            steps++;
          }
          else if (a[i + 1][j] == 4) {
            // const temp = [...a];
            temp[i + 1][j] = 3;
            temp[i][j] = 0;
            // setA(temp);
            steps++;
          }
          else if (a[i + 1][j] == 1) {
            // const temp = [...a];
            temp[i + 1][j] = 3;
            temp[i][j] = 0;
            // setA(temp);
            finish++;
            
          }
        }
        j++;
      }
      i--;
    }
    return temp;
    
  }

let temp = moveMonster();

useEffect(()=>{
  setTimeout(function run(){
    console.log('Вызов');
    if(temp!==a){
      setA(temp);
    }
  },1000);
},[temp]);

  React.useMemo(() => {
    document.addEventListener(`keydown`, event => {
      console.log(event);
      event.preventDefault();
      if (event.keyCode == `37`) {
        temp= moveToLeft();
        setA(temp);
      }
      if (event.keyCode == `38`) {
        temp= moveToUp();
       setA(temp);
      }
      if (event.keyCode == `39`) {
        temp= moveToRight();
       setA(temp);
      }
      if (event.keyCode == `40`) {
        temp = moveToDown();
        setA(temp);
      }
    }, false);
  }, []);

  

  const listItem=a.map((val,index)=> <div style={{height:40}}>{val.map((item,inde)=><canvas style={{ backgroundColor: setColor(item), border: 0,width:40,height:40 }}>{item}</canvas>)}</div>
      );    

          
  return (
  <div style={{height:40}}>{listItem}</div>);

  
}



function App() {
  
  const el=(
    <div>
     <GameField />
    </div>
  )
  return (
    <div className="App">
     {el}
    </div>
  );
}

export default App;
