# Basics

---
@snap[north span-100]
<br>

### Meta-values vs Type
@snapend

@snap[west span-50]
@code[typescript zoom-08](chapter/basic/asserts/basic.ts?lines=1)
<br>
<br>
@snapend
@snap[east span-50]
@code[typescript zoom-08](chapter/basic/asserts/basic.ts?lines=2)
<br>
<br>
@snapend

@snap[midpoint span-100]
<br>
<br>
<br>
<br>
@table[table-header table-fragment text-05](chapter/basic/asserts/type-vs-value.csv)
@snapend

---

#### Show some codes

<br>

@code[typescript zoom-12 code-reveal-slow](chapter/basic/asserts/keyof.ts)

@snap[south span-100 text-gray text-10]
@[1-4, zoom-14](Let's Declare an object.)
@[6-7, zoom-14](Use @color[white](`typeof someObject`), we got a type.)
@[6-7, zoom-14](Use @color[white](`keyof someType`), we got a meta-value.)
@[9, zoom-18](This line works fine.)
@[11, zoom-18](We got a @color[red](Type Error), @color[white](`"prop3"`)  is not in type @color[white](`Keys`). )
@[1-14](Review all codes.)
@snapend

---

### Generic type
<br>

@code[typescript zoom-14](chapter/basic/asserts/generic.ts)

---

@snap[north span-100]
<br>
<br>

### Union type vs Intersection type

@snapend

@snap[west]
```typescript
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

// "a" | "b" | "c" | "d"
type Union = A | B;
```
@snapend

@snap[east ]
```typescript
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';

// "b" | "c"
type Both = A & B;
```
@snapend

---

#### Go deeper
<br>

@code[typescript zoom-06 code-reveal-slow](chapter/basic/asserts/union-type.ts?lines=1-18)

@snap[south span-100 text-gray text-10]
@[1-4, zoom-14](Declare some types, then set an union type)
@[9, zoom-16](Use type @color[white](`Union`) in function.)
@[11, zoom-16](Got a @color[red](type error), args.propB only in TypeB.)
@[13, zoom-16](We can use @color[white](type conversion) to fix it (@color[red](this is not safely)).)
@[6-7,14, zoom-16](Or use @color[white](type guards).)
@[6-7,14-17, zoom-16](Now, type of @color[white](`arg`) is @color[white](`TypeB`), we can access it safely.)
@[1-18](Review all codes)
@snapend


---

#### Go more deeper
<br>

@code[typescript zoom-07 code-reveal-slow](chapter/basic/asserts/union-type.ts?lines=1-4,20-34)

@snap[south span-100 text-gray text-10]
@[1-5, zoom-14](Let's Declare an intersection type @color[white](`Both`).)
@[7-14, zoom-16](Then declare a new function to use it.)
@[15-19, zoom-16](@css[text-08](In the end we call these functions with some arguments, which have @color[white](different types).))
@[1-19](Review all codes)
@[15-19, zoom-16](@color[yellow](@fa[question-circle fa-pulse] Which line can't pass the type-check?))
@[16, zoom-20]
@snapend

---

@snap[north span-100]
<br>

#### @fa[question-circle fa-pulse] What makes them different?
@snapend

@snap[south span-100 text-10]
<br>
<br>
@snapend


@snap[west span-50]

```typescript
type A = 'a' | 'b'
type B = 'b' | 'c'

// "b" | "c"
type Both = A & B
// got a type error
let c: 'a' | 'b' | 'c'
let b:Both = 'a' as c
```
@snapend

@snap[east span-50]

```typescript
type Both = {p1:number, s:string}
  & {p2:number, s:string}

// works fine
let both:Both = {
  p1:1, p2:2, s:string
}
```
@snapend

@snap[south span-100 fragment]

@table[table-header text-05](chapter/basic/asserts/type-vs-value.csv)
<br>

@snapend


---
### Reviews
@ul[list-spaced-bullets text-06]
- Meta-values & Type
- Generic type
- Union type & Intersection type
- Type guards when using Union type
- Difference between Meta-values & Type when type computing
- Use Intersection type with Mixin
@ulend
