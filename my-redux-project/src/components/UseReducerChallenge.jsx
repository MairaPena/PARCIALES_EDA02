import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/challengeSlice';

const UseReducerChallenge = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.challenge.count);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
};

export default UseReducerChallenge;