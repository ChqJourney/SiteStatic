import { action, makeAutoObservable, observable } from 'mobx';

class UIStore {
  site={}

  constructor() {
    makeAutoObservable(this,{
      site:observable
    })
  }
  
  
}

export default UIStore;