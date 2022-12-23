import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0)
  let increment = () => { setCount(count+1); }

  return (
    <button className="outline" onClick={increment}>  
      {count === 0 ? "Click to support" : `Supoort ${count} times!`}
    </button>
  )
}

// {(() => {
//           if (count === 0) {
//             return "Click to support!";
//           } else {
//             return `Supported ${count} times!`;
//           }
//         })()}

