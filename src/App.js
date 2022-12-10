
import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {

   useEffect(  () => {
      tg.ready();
   })

   const onClose = () => {
       tg.close()
   }
   
   
  return (
    <div className="App">
    Day
    <button onClick={onClose}>Yopish</button>
    </div>
  );
}

export default App;
