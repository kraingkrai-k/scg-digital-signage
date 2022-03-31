import React, {useState, createContext} from 'react';

interface IPersonalData {
  age: number;
  gender: 'M' | 'F';
}
interface IState {
  foo: string;
  personalActive: boolean;
  interActive: boolean;
  personalData: IPersonalData;
}

const initState: IState = {
  foo: 'bar',
  personalActive: true,
  interActive: false,
  personalData: {
    age: 18,
    gender: 'M',
  },
};

interface IAppContext {
  state: IState;
  dispatch: {
    onPersonalRouteActive: () => void;
    onInteractiveRouteActive: () => void;
    setPersonalData: (x: IPersonalData) => void;
  };
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const Context: React.FC = ({children}) => {
  const [state, setState] = useState<IState>(initState);

  const onPersonalRouteActive = () => {
    console.log('personal still active');
    setState((prevState) => ({
      ...prevState,
      personalActive: true,
      interActive: false,
    }));
  };

  const onInteractiveRouteActive = () => {
    console.log('interactive still active');
    setState((prevState) => ({
      ...prevState,
      personalActive: false,
      interActive: true,
    }));
  };

  const setPersonalData = (x: IPersonalData) => {
    setState((prevState) => ({
      ...prevState,
      personalData: x,
    }));
  };

  const dispatch = {
    onPersonalRouteActive,
    onInteractiveRouteActive,
    setPersonalData,
  };

  return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;
};

export default Context;
