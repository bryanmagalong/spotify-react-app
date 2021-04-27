import { useEffect, useRef } from 'react';

/**
 * Stores current value in ref and returns previous value.
 * https://usehooks.com/usePrevious/
 * @param {*} value 
 * @returns value
 */
export const usePrevious = (value) => {
  const ref = useRef();

  // store current value in ref
  useEffect(
    () => {
      ref.current = value;
    },
    [ value ], // update on value changes
  );

  // returns previous value (happens before update in useEffect)
  return ref.current;
};
