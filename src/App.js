
import { useState , useEffect} from 'react';
import './App.css';
import Filter from './copmponents/Filter';
import Form from './copmponents/Form';
import Header from './copmponents/Header';
import List from './copmponents/List';



function App() {



const [data, setData] = useState([
  { fullname:"Osman Osmanova", phone_number:"5455454545"},
  { fullname:"Ali KARA", phone_number:"33333333"},
  { fullname:"Erdem KAYA", phone_number:"123456789"},
])

const deleteContact = (e)=>{

  setData(data.filter((x)=>x.phone_number!==e.target.parentElement.previousSibling.innerText))

}

useEffect(() => {
console.log(data);
}, [data])


const [filterText, setFilterText] = useState("")

const onFilter = (e)=>{
  setFilterText(e.target.value)
}

const filtered = data.filter((x)=>{
  return Object.keys(x).some((key) =>
 x[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
  );
});

  return (
    <div className="App">
      <Header/>
      <div className="container">

      <Filter onFilter={onFilter} filterText={filterText}  / >

      <List deleteContact={deleteContact} filtered={filtered}/>
      <Form setData={setData} data={data}/>
      </div>
      

    </div>
  );
}

export default App;
