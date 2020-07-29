import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// BrowserRouter: atualiza a UI de acordo com a URL passada ('/, '/cadastro', '/login')
// Switch: aciona o primeiro Route que corresponde ao location passado
/* Route: renderiza a UI passada neste Route
    - a ordem importa, sendo que o que está no topo é mais específico do que o que está em baixo
    - por isso é bom usar o 'exact', pois assim o Router só vai atender pelo caminho exato
    - havendo dois caminhos - '/' e '/cadastro/video', com o '/' no topo
      - se o usuário tentar acessar '/cadastro/video', ele será redirecionado para o '/', pois o Router,
      por padrão, não vai pelo caminho exato. Funciona igual o '^' de uma expressão regular (começa com)
    - quando não é passado o path, é como se fosse uma válvula de escape caso nenhuma das rotas anteriores ejam
    correspondidas
*/


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={()=> (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

