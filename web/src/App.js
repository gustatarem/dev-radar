import React, { useEffect, useState } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from './services/api';
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadUsers();
  }, []);

  async function onSubmitPressed(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <header>
          <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub Logo" />
          <strong>Cadastro</strong>
        </header>

        <DevForm onSubmit={onSubmitPressed} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
