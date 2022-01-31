import { makeAutoObservable } from 'mobx';

class DataStore {
  data={authState:false,use:{}}

  constructor() {
    makeAutoObservable(this)
  }

}

export default DataStore;