import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import "./index.css";

function Autobiography() {
  return <h3>Pablo Ruiz Picasso[a][b] (25 October 1881 – 8 April 1973) 
    was a Spanish painter, sculptor, printmaker,<br/>
    ceramicist and theatre designer who spent most of his adult life in France. <br/>
    Regarded as one of the most influential artists of the 20th century, <br/>
    he is known for co-founding the Cubist movement, the invention of constructed sculpture,[6][7] the co-invention of collage, <br/>
    and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist <br/>
    Les Demoiselles d'Avignon (1907), and Guernica (1937), a dramatic portrayal of the bombing of Guernica <br/>
    by German and Italian air forces during the Spanish Civil War. </h3>;
}
/*
Все обращения к Archive будут переведены на News
*/
function FamousPicture(props: any) {
  return <div>
      <h2>La Vie (1903),<br/>Cleveland Museum of Art</h2>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Picasso_la_vie.jpg/800px-Picasso_la_vie.jpg"
      width="320" height="500"/>
    </div>
  
}
/*
Перенаправляем на News и передаём полученный параметр
*/
function Archive(props: any) {
  return <div>
    <h2>All pictures</h2>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Picasso_la_vie.jpg/800px-Picasso_la_vie.jpg"
        width="320" height="500"/>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Old_guitarist_chicago.jpg/800px-Old_guitarist_chicago.jpg"
        width="320" height="500"/>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg/800px-Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg"
        width="400" height="500"/>
  </div>
}
  
export default function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <Link to="/">Autobiography</Link>
            <Link to="/famouspic/56">Famous picture</Link>
            <Link to="/allpic/44">All pictures</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Autobiography} />
          <Route path="/famouspic/:id" component={FamousPicture} />
          <Route path="/allpic/:id" component={Archive} />
          <Route children={() => <h1>404 page</h1>} />
        </Switch>
      </Router>
    </div>
  );
}
