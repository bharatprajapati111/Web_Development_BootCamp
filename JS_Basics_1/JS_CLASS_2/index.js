console.log("Chaliye shuru krte hai");

// object creation

// let rectangle ={
//     length: 1,
//     breadth: 2,
// };

// // factory function
// function createRectangle(len, bre)
// {
//     return rectangle={
//         length:len,
//         breadth:bre,

//         draw() {
//             console.log("drawing rectangle");
//         }
//     }
// }


// let rectangleObj1 =createRectangle(5,4);


//camel case --> numberOfStudents
//constructor function-->pascal notation --> first letter of every word Should be capital --> NumberOfStudents
//constructor function -> prop/methods -> initialise/Define
function Rectangle(len,bre) {
    this.length=len;
    this.breadth=bre;
    this.draw=function() {
        console.log('drawing');
    }
}

//object creation using constructor function
// let rectangleObject=new Rectangle(4,6);
 
// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

let Rectangle1 =new Function(
    'length','breadth',
`this.length=length;
this.breadth=breadth;
this.draw=function() {
    console.log('drawing');
}`);

//object creation using Rectangle1
let rect=new Rectangle1(2,3);

rect.length

console.log(rect);

//  rectangle.length;
//  rectangle.breadth;

//  rectangle.draw();

//  let rectangle1={
//     length:1, 
//     breadth:2,

//     draw: function()
//     {
//         console.log('drawing rectangle');
//     }
//  }


let rectangle={
    length:5,
    breadth:9
};

//for-in loop
for(let key in rectangle)
{
    //key are reflected through 'key' variable
    console.log(key);
    //values are reflected thorugh 'rectangle[key]'
    console.log(key,rectangle[key]);
}