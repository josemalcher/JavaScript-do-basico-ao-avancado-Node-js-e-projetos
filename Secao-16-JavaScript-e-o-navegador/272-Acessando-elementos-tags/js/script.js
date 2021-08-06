console.log(document.body);
//
console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);
// {
//     "0": {},
//     "1": {},
//     "2": {},
//     "3": {},
//     "4": {},
//     "5": {},
//     "6": {}
// }
console.log(document.body.childNodes[1].childNodes[1]);
// <h1>Algum título</h1>
console.log(document.body.childNodes[1].childNodes[1].innerText);
// Algum título
