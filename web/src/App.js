import React, { useEffect } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => {
        console.log(err);
      },
      {
       timeout: 30000, 
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastro</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31068254?s=460&v=4" alt="Gustavo Tatarem" />
              <div className="user-info">
                <strong>Gustavo Tatarem</strong>
                <span>React, React Native, NodeJS</span>
              </div>
            </header>
            <p>Full-stack developer.</p>
            <a href="https://github.com/gustatarem">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31068254?s=460&v=4" alt="Gustavo Tatarem" />
              <div className="user-info">
                <strong>Gustavo Tatarem</strong>
                <span>React, React Native, NodeJS</span>
              </div>
            </header>
            <p>Full-stack developer.</p>
            <a href="https://github.com/gustatarem">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31068254?s=460&v=4" alt="Gustavo Tatarem" />
              <div className="user-info">
                <strong>Gustavo Tatarem</strong>
                <span>React, React Native, NodeJS</span>
              </div>
            </header>
            <p>Full-stack developer.</p>
            <a href="https://github.com/gustatarem">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31068254?s=460&v=4" alt="Gustavo Tatarem" />
              <div className="user-info">
                <strong>Gustavo Tatarem</strong>
                <span>React, React Native, NodeJS</span>
              </div>
            </header>
            <p>Full-stack developer.</p>
            <a href="https://github.com/gustatarem">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
