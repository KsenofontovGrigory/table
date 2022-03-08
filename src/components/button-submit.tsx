import React, { useState } from 'react';
import { changeBeers } from '../redux/actions';

const ButtonSubmit = ({row, inputBeers, setInputBeers, dispatch}: any) => {

  const [changeButton, setChangeButton]: any = useState('...')

  const onHandleSetChangedBeer = (row: any) => {
    if (changeButton === '...') {
      setChangeButton('ADD');
      setInputBeers(row);
      dispatch(changeBeers(row));
    } else {
      setChangeButton('...');
      dispatch(changeBeers(inputBeers))
      setInputBeers({})
    }
  };

  return (
    <button onClick={() => onHandleSetChangedBeer(row)}>{changeButton}</button>
  );
};

export default ButtonSubmit;