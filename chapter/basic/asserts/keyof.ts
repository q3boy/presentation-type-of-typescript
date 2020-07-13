const someObj = {
  prop1: 1,
  prop2: 'string',
};

// "prop1" | "prop2
type Keys = keyof typeof someObj

let someKey:Keys = 'prop1'

let someOtherKey:Keys = 'prop3'
