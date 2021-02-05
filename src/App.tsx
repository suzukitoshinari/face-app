import React, {useState, useRef} from 'react';
import './App.scss';
import Head from './components/Head/Head';
import Hair from './components/Hair/Hair';
import Brow from './components/Brow/Brow';
import Eye from './components/Eye/Eye';
import Nose from './components/Nose/Nose';
import Mouth from './components/Mouth/Mouth';

function App() {

  // const [head, setHead] = useState(<Head />);
  const [modal, setModal] = useState(false);
  const modalRef = useRef()

  const modalBtn = (e) => {
    e.preventDefault();
    setModal(true);
    // setHead(e.target.value);
  }

  const modal__ref = (e) => {
    if(modalRef.current === e.target) {
      setModal(false);
    }
  }

  const modal__closeBtn = (e) => {
    e.preventDefault();
    setModal(false);
  }

  return (
    <>
      <div className={'form'}>
        <form>
          <div className={'btns'}>
            <button className={'btn1'} onSubmit={modalBtn}>輪郭</button>
            <div className={`'all__modal' ${modal && 'open'}`} onSubmit={modal__ref} ref={modalRef}>
              <div className={'modal__container'}>
                <button className={'modal__close'} onSubmit={modal__closeBtn}>✖️</button>
              </div>
            </div>
            <button className={'btn2'}>髪型</button>
            <button className={'btn3'}>眉毛</button>
            <button className={'btn4'}>目</button>
            <button className={'btn5'}>鼻</button>
            <button className={'btn6'}>口</button>
          </div>
        </form>
      </div>
      <div className={'root'}>
        <Head />
        <Hair />
        <Brow />
        <Eye />
        <Nose />
        <Mouth />
      </div>
    </>
  );
}

export default App;
