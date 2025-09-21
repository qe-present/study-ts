type和interface的区别
简述差异与选择建议：

1. 共同点：都可描述对象/函数结构，类可 `implements` 它们。
2. interface：支持声明合并（同名多次声明自动合并），可 `extends` 接口或对象类型，更适合对外公共 API、允许第三方扩展。
3. type：是类型别名，可表示原始类型、联合、交叉、元组、条件、映射类型等；不可“重新打开”或合并；用交叉类型组合对象形状。
4. 表达力差异：联合/条件/映射类型只能用 type；重载签名合并更适合 interface（依靠声明合并）。
5. 选型：需要可扩展/可合并用 interface；需要联合/条件/映射等高阶类型用 type；不确定时偏向 interface。

示例（对比常见用法）：
```ts
// 1) interface 声明合并
interface A { x: number }
interface A { y: string }
const a: A = { x: 1, y: 'ok' }

// 2) type 别名（联合/交叉）
type ID = string | number
type WithXY = { x: number } & { y: string }

// 3) 映射类型（只能用 type）
type ReadonlyAll<T> = { readonly [K in keyof T]: T[K] }

// 4) interface 继承对象类型别名
type Point = { x: number }
interface Point2D extends Point { y: number }
```