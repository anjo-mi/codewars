 
class SiegeState {
  constructor() {
    this._moveable = false;
    this._damage = 20;
  }
}
​
class TankState {
  constructor() {
    this._moveable = true;
    this._damage = 5;
  }
}
​
class Tank {
  constructor() {
    this.state = new TankState()
  }
​
  get canMove() {
    return this.state._moveable;
  }
  get damage() {
    return this.state._damage;
  }
}