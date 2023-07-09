import './App.css';
import QouteGenerator from './components/QouteGenerator';
import ReactFCCtest from 'react-fcctest';
function App() {
  return (
    <>
    <div id='dark-overlay'></div>
      {/* <img className='bg-image' src='https://images.pexels.com/photos/9304311/pexels-photo-9304311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /> */}
      {/* <ReactFCCtest /> */}
      <main id='main'>
        <section>
          <QouteGenerator />
        </section>
      </main>
    </>
  );
}

export default App;
