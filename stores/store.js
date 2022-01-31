
import DataStore from './dataStore';
import UIStore from './UIStore';
import React from 'react'

let isServer = typeof window === 'undefined';
let store;
export function getStores() {
  const _store = store ?? {uiStore:new UIStore(),dataStore:new DataStore()}


  return _store
}

export const StoreContext = React.createContext();

export function StoreProvider(props) {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}