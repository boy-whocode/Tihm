import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUsMain from './AboutUs';
import ApplyOnline from './ApplyOnline';
import Aviation from './Aviation';
import Courses from './Courses';
import Home from "./Home"

function App() {
  return (
   <>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/AboutUsMain" component={AboutUsMain}/>
     <Route exact path="/Hospitality_Management" component={Courses}/>
     <Route exact path="/Aviation" component={Aviation}/>
     <Route exact path="/ApplyOnline" component={ApplyOnline}/>
   </Switch>
   {/* <Home />
   <AboutUsMain />
   <Courses />
   <Aviation />
   <ApplyOnline /> */}
   </>
  );
}

export default App;
