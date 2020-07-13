type Bar = {
  bar: string
}

const addBar = <Foo extends object>(
  foo: Foo, bar: string
): Foo & Bar => {
  return { ...foo, bar }
}

const foobar = addBar({ foo: "Foo" }, "bar")
foobar.foo
foobar.bar
