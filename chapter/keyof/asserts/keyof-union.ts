type A = { a: number; shared: string }
type B = { b: number; shared: string }

type Keys1 = keyof (A & B)
type Keys2 = keyof (A | B)
