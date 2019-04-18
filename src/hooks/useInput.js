import React, { useCallback, useState } from 'react';

const useInput = (initialValue) => {
  let [value, setValue] = useState(initialValue);
  let onChange = useCallback(function(event) {
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange,
  };
}

export default useInput;
