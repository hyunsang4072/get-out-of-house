// import logo from './logo.svg';
import { useState } from 'react';
import '../App.css';
import PackingList from './PackingList';
import Logo from './Logo';
import Form from './Form';
import Stats from './Stats';
import Cursor from './Cursor';

export function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // React NOT allowing mutation
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Cursor />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

export default App;
