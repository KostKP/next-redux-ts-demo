import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import {
  decrement,
  increment,
  isOdd,
  selectCount,
} from '../features/counter/counterSlice';

const IndexPage:React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const odd = useAppSelector(isOdd);

  return (
    <>
      <h2 style={{color: (odd ? 'red' : 'green')}}>
        The current number is {count}

      </h2>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement (-1)</button>
        <button onClick={() => dispatch(increment())}>Increment (+1)</button>
      </div>
    </>
  );
};

export default IndexPage;