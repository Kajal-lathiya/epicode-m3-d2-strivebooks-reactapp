import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import WelcomeComponent from './components/WelcomeComponent';
import MyFooter from './components/MyFooter';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <div>
      <MyNav />
      <WelcomeComponent />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
