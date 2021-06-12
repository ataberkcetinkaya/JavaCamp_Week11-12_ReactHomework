import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navigation from './layouts/Navigation';
import SideMenu from './layouts/SideMenu';
import GuestDashboard from './layouts/GuestDashboard';
import GuestMenu from './layouts/GuestMenu';
import UserMenu from './layouts/UserMenu';
import UserDashboard from './layouts/UserDashboard';
import { Container } from 'semantic-ui-react';



function App() {
  return (
    <div className="App">
      <Container>
        <Navigation></Navigation>
      </Container>
      <Container className="main">
        <SideMenu></SideMenu>
      </Container>
      <Container className="main">
        <GuestDashboard></GuestDashboard>
      </Container>
      <GuestMenu></GuestMenu>
      <UserMenu></UserMenu>
      <UserDashboard></UserDashboard>
    </div>
  );
}

export default App;
