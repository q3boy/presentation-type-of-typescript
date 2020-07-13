type TypeA = { propA: number, sharedProp: string }
type TypeB = { propB: boolean, sharedProp: string }

type Union = TypeA | TypeB

const isTypeB = (arg: Union): arg is TypeB =>
  (<TypeB>arg).propB !== undefined

const funcUnion = (arg: Union) => {
  arg.sharedProp;
  arg.propB; // error

  (arg as TypeB).propB; // use as
  if ('propB' in arg || isTypeB(arg)) { // use type guard
    arg;
    arg.propB;
  }
}

type Both = TypeA & TypeB

const funcUnion = (arg: Union) => {
  //...
}
const funcBoth = (arg: Both) => {
  arg.propA;
  arg.propB;
  arg.sharedProp;
}
funcUnion({ propA: 1, sharedProp: "abc" })
funcBoth ({ propA: 1, sharedProp: "abc" })
funcUnion({ propA: 1, sharedProp: "abc", propB: false })
funcBoth ({ propA: 1, sharedProp: "abc", propB: false })
