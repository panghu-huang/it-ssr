import * as React from 'react';
import { StoreContext } from 'src/components';
import { addAction } from 'src/store';

interface IStore {
  [propName: string]: any;
};

interface IStoreProviderProps {
  store?: IStore;
};

interface IStoreProviderState {
  store: IStore;
};

class StoreProvider extends React.Component<IStoreProviderProps, IStoreProviderState> {

  constructor(props: IStoreProviderProps) {
    super(props);
    const store = props.store || {};
    this.state = {
      store,
    };
    addAction('store', { setState: this.setState });
  }

  public render() {
    const { children } = this.props;
    const { store } = this.state;
    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    )
  }
}

export default StoreProvider;