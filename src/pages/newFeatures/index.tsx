import React, { createContext, useState } from 'react';
import SecondChild from '@/pages/newFeatures/components/SecondChild';

const batteryContext = createContext();
const onlineContext = createContext();
const FirstChild = () => {
  return (
    <>
      <div>
        the first child
        <SecondChild />
      </div>
    </>
  );
};
const newFeatures = () => {
  const [contextValue, SetContextValue] = useState(20);
  const [onlineValue, SetOnlineValue] = useState(false);
  return (
    <>
      <batteryContext.Provider value={contextValue}>
        <onlineContext.Provider value={onlineValue}>
          <FirstChild />
        </onlineContext.Provider>
      </batteryContext.Provider>
      <div>zhh</div>
      <button
        type="button"
        onClick={() => {
          SetContextValue(contextValue + 1);
          SetOnlineValue(!onlineValue);
        }}
      >
        add Value
      </button>
    </>
  );
};

export default newFeatures;
export { batteryContext, onlineContext };
