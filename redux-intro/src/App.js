import React from 'react';
import Counter from './component/Counter';
import IncreaseCounter from './component/IncreaseCounter';
import DecreaseCounter from './component/DecreaseCounter';
import IncreaseByTwoCounter from './component/IncreaseByTwoCounter';

function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
