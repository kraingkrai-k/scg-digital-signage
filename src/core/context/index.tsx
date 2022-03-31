import React, {useState, createContext} from 'react';

interface IState {
  foo: string;
  personalActive: boolean;
  interActive: boolean;
}

const initState: IState = {
  foo: 'bar',
  personalActive: true,
  interActive: false,
};

interface IAppContext {
  state: IState;
  dispatch: {
    onPersonalRouteActive: () => void;
    onInteractiveRouteActive: () => void;
  };
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const Context: React.FC = ({children}) => {
  const [state, setState] = useState<IState>(initState);

  const onPersonalRouteActive = () => {
    console.log('personal still active');
    setState(prevState => ({
      ...prevState,
      personalActive: true,
      interActive: false,
    }))
  };

  const onInteractiveRouteActive = () => {
    console.log('interactive still active');
    setState(prevState => ({
      ...prevState,
      personalActive: false,
      interActive: true,
    }))
  };

  const dispatch = {
    onPersonalRouteActive,
    onInteractiveRouteActive,
  };

  return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;
};

export default Context;
