// import React from 'react';
import styles from './app.module.css'
import FirstComponent from './components/first-component/first-component';
import SecondComponent from './components/second-component/second-component';
import ThirdComponent from './components/third-component/third-component';
import FourthComponent from './components/fourth-component/fourth-component';

function App() {
  return (
    <div className={styles.main__page} >
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
  );
}

export default App;
