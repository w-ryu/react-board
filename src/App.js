import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  return (
    <UserList />
  );
}

// function App() {
//   return (
//     <Counter />
//   );
// }

// function App() {
//   return (
//     <Wrapper>
//       <Hello name={"react"} color={"red"} isSpecial/>
//       <Hello color={"pink"} />
//     </Wrapper>
//   );
// }

export default App;
