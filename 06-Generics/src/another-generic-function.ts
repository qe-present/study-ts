// interface lengthY{
//     length: number;
// }
// function countAndDescribe<T extends lengthY>(element: T): [T, string] {
//   let descriptionText = 'Got no value.';
//   if (element.length === 1) {
//     descriptionText = 'Got 1 element.';
//   } else if (element.length > 1) {
//     descriptionText = 'Got ' + element.length + ' elements.';
//   }
//   return [element, descriptionText];
// }
// console.log(countAndDescribe('Hi there!'));