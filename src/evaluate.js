const { throttle } = require('lodash');
const { environment } = require('./standard-library');
const last = collection => collection[collection.length - 1];


const apply = node => {
  const fn = environment[node.name]
  const args = node.arguments.map(evaluate)
  if(typeof fn !== 'function'){
    throw new TypeError(`${node.name} is not a functions`)
  }

  return fn(...args);
};

const define = node => {
  environment[node.identifier.name] = node.assignment.value
}

const getIndentifier = node => {
  if(environment[node.name]) return environment[node.name]

  throw new ReferenceError(`${node.name} is not defined`)
}

const evaluate = (node) => {
  if (node.type === "VariableDeclarations"){
    return define(node)
  }

  if (node.type === "CallExpression"){
    return apply(node);
  }

  if(node.type === "Identifier"){
    return getIndentifier(node)
  }

  if (node.value){
    return node.value;
  }
 
};

module.exports = { evaluate };
