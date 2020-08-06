# Control flow

---

@snap[north span-100]
<br>
### Conditional types
@snapend

@snap[midpoint]
```typescript
Type2 extends Type1 ? ThenType : ElseType
```
<br>
<br>

@snapend

@snap[south span-80 fragment]
```typescript
type Wrap<T> = T extends { length: number } ? [T] : T

type A = Wrap<string[]>
type B = Wrap<number>

let a:A = ['abc']
let b:B = number
```
<br>
@snapend

---
@snap[north span-100]
<br>
### Conditional types distribute
@snapend

@snap[midpoint span-90 fragment]
```typescript
type Wrap<T> = T extends { length: number } ? [T] : T

// inferred-type: boolean | [string] | [number[]]

type Mixed1 = Wrap<boolean | string | number[]>
type Mixed2 = Wrap<boolean> | Wrap<string> | Wrap<number[]>
```
@snapend

@snap[south text-yellow text-08 fragment]
They are equivalently.
@snapend


---

@snap[north span-100]
<br>
### Never
@snapend

```typescript
// inferred-type: "a" | "b"
type Result = 'a' | 'b' | never

type DropNumbers<T> = T extends number ? never : T
// inferred-type: "a" | "b"
type Result1 = DropNumbers<1 | 'a' | 2 | 'b'>

type KeepNumbers<T> = T extends number ? T : never
// inferred-type: 1 | 2
type Result2 = KeepNumbers<1 | 'a' | 2 | 'b'>
```


@snap[south span-100 text-gray text-10]
@[1-2, zoom-14](We can use `never` to ignore components of a union type.)
@[4-6, zoom-14](Use `never` to drop `number` type.)
@[8-10, zoom-14](Use `never` to drop all  `non-number` type.)
@[1-10](Review all codes.)
@snapend


---
@snap[north span-100]
<br>
### Chaining conditional types
@snapend

@snap[midpoint span-80]

```typescript
type LiteralTypeName<T> =
  T extends undefined ? "undefined" :
  T extends null ? "null" :
  T extends boolean ? "boolean" :
  T extends number ? "number" :
  T extends string ? "string" :
  never

type Name1 = LiteralTypeName<123>

type Name2 = LiteralTypeName<true | 1 | 'a'>
```
@snapend

@snap[south text-yellow text-08 fragment span-100]
@fa[question-circle fa-pulse]() What's the inferred type of @color[white](`Name1 & Name2`).
@snapend

@snap[midpoint span-80 fragment]

```typescript
type LiteralTypeName<T> =
  T extends undefined ? "undefined" :
  T extends null ? "null" :
  T extends boolean ? "boolean" :
  T extends number ? "number" :
  T extends string ? "string" :
  never

type Name1 = "number"

type Name2 = "string" | "number" | "boolean"
```
@snapend


---
@snap[north span-100]
<br>
### Built-in utility type
@snapend

@snap[midpoint]
* Exclude
* Extract
* Pick
* Omit
@snapend

---
@snap[north span-100]
<br>
### Exclude<T, U>
@snapend

@snap[midpoint span-80 fragment]

```typescript
type Exclude<T, U> = T extends U ? never : T

// inferred-type: "a" | "b"
type Result1 = Exclude<1 | 'a' | 2 | 'b', number>

// inferred-type: "a" | 2
type Result2 = Exclude<1 | 'a' | 2 | 'b', 1 | 'b' | 'c'>
```
@snapend

---
@snap[north span-100]
<br>
### Extract<T, U>
@snapend

@snap[midpoint span-80 fragment]

```typescript
type Extract<T, U> = T extends U ? T : never

// inferred-type: 1 | 2
type Result1 = Extract<1 | 'a' | 2 | 'b', number>

// inferred-type: 1 | "b"
type Result2 = Extract<1 | 'a' | 2 | 'b', 1 | 'b' | 'c'>
```
@snapend

---

@snap[north span-100]
<br>
### Pick<T, U>
@snapend

@snap[midpoint span-80 fragment]

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Types = {
  a: 1, b: 2, c: 3, d: 4
}

// inferred-type: { a: 1, b: 2 }
type Result = Pick<Types, 'a' | 'b'>
```
@snapend

---

@snap[north span-100]
<br>
### Omit<T, U>
@snapend

@snap[midpoint span-80]
```typescript
type Omit<T,
  K extends keyof any
> = Pick<T, Exclude<keyof T, K>>

type Types = {
  a: 1, b: 2, c: 3, d: 4
}

// inferred-type: { c: 3, d: 4 }
type Result = Omit<Types, 'a' | 'b'>
```
@snapend



@snap[south span-100 text-gray text-08]
@[2, zoom-14](@color[white](`K extends keyof any`) means @color[white](`K`) must be a subtype of the type of all property keys.<br> It's inferred-type is @color[white](`string | number | symbol`))
@[1-10](Review all codes.)
@snapend

---

### Reviews
@ul[list-spaced-bullets text-06]
- Use ternary if-else operator for conditional types
- Conditional types distributive
- Use `never` to ignore some components of a union type
- How to use chaining conditional types
- How to implement some build-in utility types.
@ulend
