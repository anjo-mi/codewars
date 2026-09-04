String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
​
​
interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}
​