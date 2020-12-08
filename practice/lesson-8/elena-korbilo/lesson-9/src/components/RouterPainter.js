import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Biography from './Biography'
import FamousPicture from './FamousPicture'
import Main from './Main'
import NavMenu from './NavMenu'
import CollectionPictures from './CollectionPictures'

export default function RouterPainter() {
    return (
        <div>
            <Router>
                <div>
                    <NavMenu />
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/about" component={Biography} />
                        <Route path="/famous" component={FamousPicture} />
                        <Route path="/collection" component={CollectionPictures} />
                        <Route children={() => {<h2>Page not found!</h2>}}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
