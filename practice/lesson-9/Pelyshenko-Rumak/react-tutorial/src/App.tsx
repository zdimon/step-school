import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

function BranchList() {
  return <h3>Our branches</h3>;
}

function Branch(props: any) {
  return <h3>{props.match.params.name}</h3>;
}

function Branches() {
  return (
    <Switch>
      <Route exact path="/branches" component={BranchList} />
      <Route path="/branches/:name" component={Branch} />
    </Switch>
  );
}

function Author() {
  return <div>
    <p id="leo">Па́бло Руи́с-и-Пика́ссо<br/>
    Па́бло Дие́го Хосе́ Франси́ско де Па́ула Хуа́н Непомусе́но Мари́я де лос Реме́диос Сиприа́но де ла Санти́сима Тринида́д Ма́ртир Патри́сио Руи́с и Пика́ссо<br/>
     - испанский и французский художник, скульптор, график, театральный художник, керамист и дизайнер<br/> 
    Один из самых известных представителей сюрреализма.<br/>
    Основоположник кубизма (совместно с Жоржем Браком и Хуаном Грисом),<br/>
    в котором трёхмерное тело в оригинальной манере изображалось как ряд совмещённых воедино плоскостей. <br/>
  </p>
  </div>
}

function Picture() {
  return <li>
    <ul>Старий гітарист</ul>
    <ul><img src="п1.jpg" alt="alt" /></ul>
  </li>
}

function List(props: any) {
  const branch = props.match.params.branch;
  const id = props.match.params.id;
  
  return <div>
  <p id="leo">
    <li>
      <ul>Старий гітарист</ul>
    <ul><img src="п1.jpg" alt="alt" /></ul>
  </li>

  <li>
    <ul>Дівчина перед дзеркалом</ul>
    <ul><img src="п2.jpg" alt="alt" /></ul>
  </li>

  <li>
  <ul>Герніка</ul>
    <ul><img src="п3.jpg" alt="alt" /></ul>
  </li>

  <li>
  <ul>Три музиканта</ul>
    <ul><img src="п4.jpg" alt="alt" /></ul>
  </li>

  <li>
    <ul>Сидяча жінка.Марія Тереза ​​Вальтер </ul>
    <ul><img src="п5.jpg" alt="alt" /></ul>
  </li>
  </p>;
  <h3>Branch:{branch}</h3>
  <h3>Id: {id}</h3>
  </div>
}

function NotFound() {
  return <h2>Not found</h2>;
}

function Links() {
  return (
    <>
      <Link to="/author" className="links">
        Author
      </Link>
      <Link to="/picture" className="links">
        Picture
      </Link>
      <Link to="/list" className="links">
        List
      </Link>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Links />
          <Switch>
            <Route exact path="/author"     component={Author} />
            <Route path="/picture"          component={Picture} />
            <Route path="/branches"         component={Branches} />
            <Route path="/list/:branch/:id" component={List} />   
            <Route path="/list"             component={List} />
            <Route                          component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}