import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss';


const Search = () => {
  const dispatch = useDispatch();
  const [value, setValueT] = useState('');
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValueT('');
    inputRef.current.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
    dispatch(setSearchValue(str));
    }, 250),
    []
  )

  const onChangeInput = (event) => {
    setValueT(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className={styles.root}>
      <svg className={styles.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref = {inputRef}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы ..."
        value={value}
      />
      {value &&(
        <svg 
          onClick={()=>onClickClear()}
          className={styles.clearIcon}
          height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
      )}
    </div>
  );
};

export default Search;
