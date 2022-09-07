const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },

  addLink(value = '') {
    this.links.push(`${value} `);
    return this;
  },

  // А ЕСЛИ АРГУМЕНТ НЕ ПЕРЕДАН У ТЕБЯ БУДЕТ
  // UNDEFINED А ДОЛЖНО БЫТЬ ПУСТОЕ ЗВЕНО!

  removeLink(position) {
/*
    if (typeof(position) !== 'number' || position <= 0 || position > this.links.length) {
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.links.splice(position-1, 1);
      return this;
    }
*/
    if (typeof(position) === 'number'
        && position > 0
        && position <= this.links.length) {
      this.links.splice(position-1, 1);
    } else {
      this.links = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    let result = '';
    for (let link of this.links) {
      result += `( ${link})~~`
    }
    this.links = [];
    return result.slice(0, result.length-2);
  }
};

module.exports = {
  chainMaker
};
