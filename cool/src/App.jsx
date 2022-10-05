import Header from "./compenents/Header";
import Footer from "./compenents/Footer";
import Content from "./compenents/Content";
import AddItem from "./compenents/AddItem";
import SearchItem from "./compenents/SearchItem";
import apiRequest from "./compenents/apiRequest"
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLeading] = useState(true);


  /* JSON.parse(sessionStorage.getItem("shoppinglist")) ||  */
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw Error("Did not resived expected data")
        const data = await res.json()
        setItems(data);
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLeading(false);
      }
    }
    setTimeout((() => {
      fetchItems()
    }), 2000)


  }, [])



  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id == id ?
      { ...item, checked: !item.checked } : item)
    setItems(listItems);
    const myItem = listItems.filter(item => item.id === id)
    const checkOptions = {
      method: "PATCH",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, checkOptions);
    if (result) setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems);

    const deleteOption = { method: "DELETE" }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOption)
    if (result) setFetchError(result)
  }


  const addItem = async (item) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result)


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} />
      <main>
        {loading && <h3>Leading items...</h3>}
        {fetchError && <h2 style={{ color: "red" }}>{`Error : ${fetchError}`}</h2>}
        {!fetchError && !loading && <Content
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase())
          )}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
};

export default App;
