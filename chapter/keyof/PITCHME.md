
## Let's talk more about **keyof**

---
@snap[north]
<br>

### Case 1
@snapend

@snap[midpoint span-50]
```typescript
type Obj = {
  0: "a",
  1: "b",
  prop0: "c",
  prop1: "d"
}
type Keys = keyof Obj
```
@snapend

@snap[south text-yellow text-08 fragment]
@fa[question-circle fa-pulse]() What's the inferred type of @color[white](`Keys`).
@snapend


@snap[south text-center fragment]
```typescript
0 | 1 | "prop0" | "prop1"
```
<br>
<br>
@snapend

---
@snap[north]
<br>

### Case 2
@snapend

@snap[midpoint span-50]
```typescript
type Tuple = ['a', 'b', 'c']
type Keys = keyof Tuple
```
<br>
<br>
<br>
@snapend

@snap[south text-yellow text-07 fragment]
@fa[question-circle fa-pulse]() What's the inferred type of @color[white](`Keys`).
@snapend


@snap[midpoint text-center fragment]
```typescript
number | "0" | "1" | "2" | "length" | "pop" | "push" | ···
```
@snapend

@snap[south span-100]

@table[table-fragment text-05](chapter/keyof/asserts/keyof-from.csv)
<br>
<br>
<br>
@snapend

---

@snap[north]
<br>

### Case 3
@snapend

@snap[midpoint span-50]
```typescript
type Obj = {}
type Keys = keyof Obj
```
@snapend

@snap[south text-yellow text-08 fragment]
@fa[question-circle fa-pulse]() What's the inferred type of @color[white](`Keys`).
@snapend

@snap[midpoint span-50 fragment]
```typescript
type Obj = {}
type Keys = never
```
@snapend


@snap[south text-center span-100 zoom-08]
@css[fragment](Object's **`own properties`** return as keys.)
@css[fragment text-06](We will talking about **`never`** later.)
<br>
<br>
<br>
@snapend

---

@snap[north]
<br>

### Case 4
@snapend

@snap[midpoint span-50]
```typescript
type Obj = {
  [key:string]: string
}

type Keys = keyof Obj
```
@snapend



@snap[south text-yellow text-08 fragment]
@fa[question-circle fa-pulse]() What's the inferred type of @color[white](`Keys`).
@snapend

@snap[midpoint span-50 fragment]
```typescript
type Obj = {
  [key:string]: string
}

type Keys = string | number
```
@snapend


---


@snap[north]
<br>

### Case 5
@snapend

@snap[midpoint span-70]
```typescript
type A = { a: number, shared: string }
type B = { b: number, shared: string }

type KeysBoth = keyof (A & B)
type KeysUnion = keyof (A | B)

```
@snapend

@snap[south text-yellow text-08 fragment span-100]
@fa[question-circle fa-pulse]() What's the inferred type of @color[white](`KeysBoth`) & @color[white](`KeysUnion`).
@snapend

@snap[midpoint span-50 fragment]
```typescript
type A = { a: number, shared: string }
type B = { b: number, shared: string }

type KeysBoth = "a" | "b" | "shared"
type KeysUnion = "shared"
```
@snapend


@snap[south text-center fragment span-100 zoom-08]

<br>
<br>
@snapend

---
@snap[north]
<br>

### Index Operator
@snapend



@snap[midpoint span-80]
```typescript
type Obj = {
  0: 'a', 1: 'b',
  prop0: 'c', prop1: 'd',
}


type Result1 = Obj[0 | 1]


type Result2 = Obj['prop0' | 'prop1']


type Result3 = Obj[keyof Obj]
```
@snapend

@snap[midpoint span-80 fragment]
```typescript
type Obj = {
  0: 'a', 1: 'b',
  prop0: 'c', prop1: 'd',
}

// type Result1 = Obj[0 | 1]
type Result1 = "a" | "b"

// type Result2 = Obj['prop0' | 'prop1']
type Result2 = "c" | "d"

// type Result3 = Obj[keyof Obj]
type Result3 = "a" | "b" | "c" | "d"
```
@snapend


---

@snap[north]
<br>

### Index Operator
@snapend

@snap[midpoint span-80]
```typescript
type Obj = {
  [key: string]: RegExp
}

type Keys = keyof Obj

type Values = Obj[string]
```
@snapend


@snap[south text-yellow text-08 fragment span-100]
@fa[question-circle fa-pulse]() What's the inferred type of @color[white](`Keys` & `Values`).
@snapend

@snap[midpoint span-80 fragment]
```typescript
type Obj = {
  [key: string]: RegExp
}

type Keys = string | number

type Values = RegExp
```
@snapend

---

@snap[north]
<br>

### Index of Tuple
@snapend

```typescript

type Tuple = ['a', 'b', 'c', 'd']

type Elements = Tuple[0 | 1]
```

---

@snap[north]
<br>

### Index distribute
@snapend


@snap[midpoint span-80 ]

```typescript
type MyType = { prop: 1 }
  | { prop: 2 }
  | { prop: 3 }

type Result = MyType['prop']
```
@snapend

@snap[midpoint span-80 fragment]

```typescript
type MyType = { prop: 1 }
  | { prop: 2 }
  | { prop: 3 }

type Result = 1 | 2 | 3
```
@snapend



---
### Reviews
@ul[list-spaced-bullets text-06]
- Basic usage of `keyof`
- Object's **`own properties`** return as keys
- Type index & it's operator
- Index of tuple
- Index distributive
@ulend
