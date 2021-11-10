// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

// function AddPersonForm(props){
//   const [person, setPerson]=useState("");
  
//   function handleChange(e){
//   setPerson(e.target.value);
//   }
//   function handleSubmit(e){
//     if(person !==''){
//       props.handleSubmit(person);
//       setPerson('');
//     }
//     e.preventDefault();
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Add new contact" onChange={handleChange} value={person} />
//       <button type="submit" >Add</button>
//     </form>
//   );
// }

// function PeopleList(props){
//   const arr= props.data;
//   const listItem=arr.map((val,index)=>
//   <li key={index}>{val}</li>
//   );
//   return <ul>{listItem}</ul>;
// }

// function ContactManager(props){
//   const[contacts, setContacts]=useState(props.data);
  
//   function addPerson(name){
//     setContacts([...contacts,name]);
//   }
  
//   return(
//     <div>
//       <AddPersonForm handleSubmit={addPerson} />
//       <PeopleList data={contacts}/>
//     </div>
//   );
// }
// const contacts = ["James Smith", "Thomas Anderson","Bruce Wayne"];
// const [a, setA] = useState([
//   ["1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
//   ["1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
//   ["1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
//   ["1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
// ]);
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
  var N = 15, M = 15;
  var steps = 0;
  var finish = 0;
  
  function setColor(color) {
    switch (color) {
      case 0: return "grey"
      case 1: return 'red'
      case 2: return '#000000'
      case 3: return 'blue'
    }
  }
   

  function moveToLeft() {
    var i, j;
    i = 0;
    while (i < N) {
      j = 1;
      while (j < M) {
        if (a[i][j] === 3) {
          if (a[i][j - 1] === 0) {
            const temp = [...a];
            temp[i][j - 1] = 3;
            temp[i][j] = 0;
            setA(temp);
            steps++;
          }
          else if (a[i][j - 1] === 4) {
            const temp = [...a];
            temp[i][j - 1] = 3;
            temp[i][j] = 0;
            setA(temp);
            steps++;
          }
          else if (a[i][j - 1] === 1) {
            const temp = [...a];
            temp[i][j - 1] = 3;
            temp[i][j] = 0;
            setA(temp);
            finish++;
          }
        }
        j++;
      }
      i++;
    }
  }
    
  function moveToRight() {
    // console.log ('event');
     var i, j;
     i = 0;
     while (i < N) {
       j = M - 2;
       while (j >= 0) {
         if (a[i][j] == 3) {
           if (a[i][j + 1] == 0) {
             const temp = [...a];
             temp[i][j + 1] = 3;
             temp[i][j] = 0;
             setA(temp);
             steps++;
           }
           else if (a[i][j + 1] == 4) {
             const temp = [...a];
             temp[i][j + 1] = 3;
             temp[i][j] = 0;
             setA(temp);
             steps++;
           }
           else if (a[i][j + 1] == 1) {
             const temp = [...a];
             temp[i][j + 1] = 3;
             temp[i][j] = 0;
             setA(temp);
             finish++;
             
           }
         }
         j--;
       }
       i++;
     }
   }

   function moveToUp() {
    var i, j;
    i = 0;
    while (i < N) {
      j = 0;
      while (j < M) {
        if (a[i][j] == 3) {
          if (a[i - 1][j] == 0) {
            const temp = [...a];
            temp[i - 1][j] = 3;
            temp[i][j] = 0;
            setA(temp);
            steps++;
          }
          else if (a[i - 1][j] == 4) {
            const temp = [...a];
            temp[i - 1][j] = 3;
            temp[i][j] = 0;
            setA(temp);
            steps++;
          }
          else if (a[i - 1][j] == 1) {
            const temp = [...a];
            temp[i - 1][j] = 3;
            temp[i][j] = 0;
            setA(temp);
            finish++;
            
          }
        }
        j++;
      }
      i++;
    }
  }
  function moveToDown() {
    var i, j;
    i = N - 2;
    while (i >= 0) {
      j = 0;
      while (j < M) {
        if (a[i][j] == 3) {
          if (a[i + 1][j] == 0) {
            const temp = [...a];
            temp[i + 1][j] = 3;
            temp[i][j] = 0;
            setA(temp);
            steps++;
          }
          else if (a[i + 1][j] == 4) {
            const temp = [...a];
            temp[i + 1][j] = 3;
            temp[i][j] = 0;
            setA(temp);
            steps++;
          }
          else if (a[i + 1][j] == 1) {
            const temp = [...a];
            temp[i + 1][j] = 3;
            temp[i][j] = 0;
            setA(temp);
            finish++;
            
          }
        }
        j++;
      }
      i--;
      //Hello world
    //Third commit
    }
  }

  
  
  React.useMemo(() => {
    document.addEventListener(`keydown`, event => {
      console.log(event);
      event.preventDefault();
      if (event.keyCode == `37`) {
        moveToLeft();
      }
      if (event.keyCode == `38`) {
        moveToUp();
      }
      if (event.keyCode == `39`) {
        moveToRight();
      }
      if (event.keyCode == `40`) {
        moveToDown();
      }
    }, false);
  }, []);


  const listItem=a.map((val)=> <div style={{height:40}}>{val.map((item)=><canvas style={{ backgroundColor: setColor(item), border: 0,width:40,height:40 }}>{item}</canvas>)}</div>
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
