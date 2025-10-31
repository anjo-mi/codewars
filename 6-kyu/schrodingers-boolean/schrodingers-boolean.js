 
const omnibool = {
  valueOf: () => {
    this.toggle = !this.toggle;
    return this.toggle ? 1 : 0;
  },
  toggle: false
}