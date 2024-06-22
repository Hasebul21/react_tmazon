import './App.css';
import AvailiablePlaces from './components/AvailiablePlaces.jsx';
import SelectedPlaces from './components/SelectedPlaces.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

function App() {
  return (
    <main>
        <SelectedPlaces></SelectedPlaces>
        <AvailiablePlaces></AvailiablePlaces>
    </main>
  )
}

export default App;
