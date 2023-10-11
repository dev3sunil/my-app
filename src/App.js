// import logo from './logo.svg';
import React from "react";
import Use from "./useState/useState";
import Form from "./useState/useState-form";
// import './App.css';

const App = () =>{
  return (
    <div>
      <Use/>
      <Form/>
    </div>
  )
}
//  const App = () =>{
//   return (
//     <section className="container">
//     <Movie/>
//     <Movie/>
//     <Movie/>
//     <Movie/>
//     <Movie/>
//     </section>
//   )
// };
//  const Movie = () =>{
//   return (
//     <article>
//       <ImageComponent/>
//       <Title/>
//     </article>
//   )
//  }

// const ImageComponent = () =>{
//   return (
//     <div className="img">
//     <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='sorry' width={200} />
//     <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" width={200} alt="sorry"/>
//     </div>
//   )
// }

// const Title = () =>{
//   const style = {
//     heading: {
//       color: "red"
//     },
//     subheading: {
//       color: "black",
//       fontSize: "1rem"
//     },
//   }

//   return( 
//     <div className="card">
//       <h3 style={style.heading}>photograghy</h3>
//       <p style={style.subheading} >Images</p>
//       <span style={{color:"black",fontWeight:"900"}} >Natural</span>

//     </div>
  
//   );
// };








export default App;

/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */



// /* Nested components*/
// const InnerComponent =()=>{
//   return <p>Lord krishna</p>
//   }
//   const OuterComponent =()=>{
//   return <p>React World</p>
//   }
//   const PrimeName = ()=>{
//   return <InnerComponent/>
//   }
// /*Nestedcomponents*/

// const App = () => {
//   const user = {
//     firstName:"krishna",
//     secondName:"radha",
//   };
//   return (
//     <React.Fragment>
//       <section className="container">
//       <h1>Time: {new Date().toLocaleTimeString()}</h1>
//       <h1>Date: {new Date().toLocaleDateString()} </h1>
//       <div>
//         <p>My name is {user.firstName} + {user.secondName}</p>
//         <div className="js.env">
//           <h1>{10+10}</h1>
//         </div>
//         <div>
//           <PrimeName/>
//           <PrimeName/>
//           <OuterComponent/>
//         </div>
//       </div>
//       </section>
//     </React.Fragment>
    
//     );
// }
