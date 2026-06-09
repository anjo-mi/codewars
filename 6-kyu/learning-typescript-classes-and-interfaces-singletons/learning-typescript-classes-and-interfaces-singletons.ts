 
export class SingletonCounter {
  static #instance: SingletonCounter | null = null;
  #count = 0;
​
  private constructor() {}
​
  static getInstance(): SingletonCounter {
    if (!SingletonCounter.#instance) SingletonCounter.#instance = new SingletonCounter();
    return SingletonCounter.#instance;
  }
​
  inc(): number {
    return ++this.#count;
  }
}
​