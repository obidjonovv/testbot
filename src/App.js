import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';



function App() {
  const {onToogleButton, tg} = useTelegram()
  

   useEffect(  () => {
      tg.ready();
   })
   
   
  return (
    <div className="App">
      <Header />
    <button onClick={onToogleButton}>Toogle</button>
    </div>
  );
}

export default App;
