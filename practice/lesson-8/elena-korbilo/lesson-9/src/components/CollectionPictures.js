import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const pictures = [
    {id: 1, img: "./davinci_01.jpg"},
    {id: 2, img: "./davinci_02.jpg"},
    {id: 3, img: "./davinci_03.jpg"},
    {id: 4, img: "./davinci_04.jpg"},
]

function PicturesList() {
    return (
        <div>
            {pictures.map(item => {
                return  (
                    <Link to={`/collection/${item.id}`} ><img src={item.img} width="200px" alt=""/></Link>
                )
            })}
        </div>
    )
}

function Picture(props) {
    let pictureId;
    let picture;

    pictureId = parseInt(props.match.params.id, 10);
    console.log(pictureId)

    picture = pictures.find(picture => picture.id === pictureId)

    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        {picture 
        ? <img src={`.${picture.img}`} width="200" height="200" alt=""/>
        : <h3>Picture not found!</h3>}
    </div>

}

export default function CollectionPictures() {
    return (
        <Switch>
            <Route exact path="/collection" component={PicturesList}/>
            <Route path="/collection/:id" component={Picture}/>
        </Switch>
    )
}
