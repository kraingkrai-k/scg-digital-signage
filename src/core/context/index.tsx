import React, {useState, createContext} from 'react';

interface IPersonalData {
  age: number;
  sex: 'M' | 'F';
}
interface IState {
  personalData: IPersonalData;
}

const initState: IState = {
  personalData: {
    age: 51,
    sex: 'F',
  },
};

interface IAppContext {
  state: IState;
  dispatch: {
    setPersonalData: (x: IPersonalData) => void;
  };
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const Context: React.FC = ({children}) => {
  const [state, setState] = useState<IState>(initState);

  const setPersonalData = (x: IPersonalData) => {
    setState((prevState) => ({
      ...prevState,
      personalData: x,
    }));
  };

  const dispatch = {
    setPersonalData,
  };

  return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;
};

export default Context;
