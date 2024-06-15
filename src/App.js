import './App.css';
import Counter from './components/Counter';
import ViewNumber from './components/ViewNumber';
import CounterContextProvider from './context/CounterContext';

function App() {
  return (
    <CounterContextProvider>
      <ViewNumber></ViewNumber>
      <Counter></Counter>
    </CounterContextProvider>
  );
}

export default App;
