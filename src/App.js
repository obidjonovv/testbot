import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
const {user, onclose} = useTelegram()


function App() {
  const {onToogleButton, tg} = useTelegram()

   useEffect(  () => {
      tg.ready();
   })
   
   
  return (
    <div className="App">
    <button onClick={onToogleButton}>Toogle</button>
    <button onClick={onClose}>Yopish</button>
    </div>
  );
}

export default App;
