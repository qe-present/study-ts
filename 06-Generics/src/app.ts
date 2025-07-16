/*
Omit 省略/剔除 可以剔除 已定义对象中 自己不需要的一部分形成新的定义类型
Partial 可以将一个已定义对象的属性变为可选属性
Readonly 可以将一个已定义对象的属性变为只读属性
Record 可以将一个已定义对象的属性变为必填属性
Pick 已定义对象中 自己需要的一部分形成新的定义类型
Exclude 从一个类型中剔除掉另一个类型中的属性
Extract 从一个类型中提取出另一个类型中的属性

 */
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
function createCourseGoal(title:string, description:string, date:Date): CourseGoal {
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
console.log(names);