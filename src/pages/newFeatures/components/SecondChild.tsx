import React from 'react';
import { batteryContext, onlineContext } from '@/pages/newFeatures';

const SecondChild = () => {
  return (
    <batteryContext.Consumer>
      {(value) => (
        <>
          <onlineContext.Consumer>
            {(value) => (
              <div>
                this is online child <h1>online:{String(value)}</h1>
              </div>
            )}
          </onlineContext.Consumer>
          <div>
            this is the second child <h1>value:{value}</h1>
          </div>
        </>
      )}
    </batteryContext.Consumer>
  );
};

export default SecondChild;
