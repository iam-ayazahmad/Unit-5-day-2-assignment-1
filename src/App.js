
import './App.css';

function App() {

const os=["Android","Blackberry","iphone","Windows phone"]
const mm=["Samsung","HTC","Micromax","Apple"]

  return (
    <div >
      <h2>Mobile Operating System</h2>
      <div>
        {os.map((e)=>{
          return <Li os1={e} />
        })}

        
      </div>
      <div>
        <h2>Mobile Manufacturers</h2>
        {mm.map((e)=>{
          return <Li os1={e} />
        })}

        
      </div>
     

      
      
    </div>
  );
}

//components

function Li(props){
  return <ul><h1>{props.type}</h1><li>{props.os1}</li></ul>
}


export default App;
