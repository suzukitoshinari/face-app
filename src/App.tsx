import './App.scss';
import Head from './components/Head/Head';
import Hair from './components/Hair/Hair';
import Eye from './components/Eye/Eye';

function App() {
  return (
    <div className={'root'}>
      <Head />
      <Hair />
      <Eye />
    </div>
  );
}

export default App;
