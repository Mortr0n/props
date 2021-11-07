import './App.css';
import Header from './components/Header';
import Child from './components/Child';

function App() {
  const coolObject = [
    {
      name:"James Hatfield",
      email:"metallica@aol.com",
      city:"San Francisco",
      state:"CA",
      netWorth: 30000000,
      likes: 0,
    },
    {
      name:"Kirk Hammett",
      email:"theripper@aol.com",
      city:"San Francisco",
      state:"CA",
      netWorth: 10000000,
      likes: 0,
    },
    {
      name:"Lars Ulrech",
      email:"cantdrum@aol.com",
      city:"Los Angeles",
      state:"CA",
      netWorth: 40000000,
      likes: 0,
    }
  ];

  const [james, kirk, lars] = coolObject;

  return (
    <div className="App">
      <Header />
      {/* can do each child item individually as below */}
      {/* <Child 
      name={coolObject[0].name} 
      email={coolObject[0].email} 
      city={coolObject[0].city} 
      state={coolObject[0].state} 
      />
     */}

    {/* after deconstructing above you could
    pass the object this way*/}
    {/* <Child 
    name={james.name}
    email={james.email}
    city={james.city}
    state={james.state}
    /> */}

    {
    coolObject.map((object, index) => (
      <Child key={index}
      name={object.name}
      email={object.email}
      city={object.city}
      state={object.state}
      netWorth={object.netWorth}
      likes={object.likes}
      />
    ))
    }
    </div>
  );
  
}

export default App;
