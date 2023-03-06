// //Object String
// let lastName=new String('pranam');
// console.log(lastName);
// typeof lastName;

// //primitive String
// let firstName='namaste';
// console.log(firstName);
// typeof firstName;


// console.log("this is the course of JavaScript")
// console.log("this is the\n course of \nJavaScript")

// //template literal-> with the help of back tick we can print the message as we want without using nextLine character
// console.log(`this is the 
// course of 
// JavaScript`)


// //Date and Time
// let date=new Date();
// console.log(date);

// let date1=new Date('June 20 1998 07:15');
// console.log(date1);

// let date2=new Date(1998, 11, 20, 7);
// console.log(date2);

// date2.setFullYear(1947);
// console.log(date2);

// ARRAY

// Creation of Array in jS
let numbers=[1,4,2,6];
console.log(numbers)

//Insertion of array

//insertion of array in the end

console.log(numbers.push(9));

//insertion of array in the beginning

console.log(numbers.unshift(3));

//insertion of array in the middle

console.log(numbers.splice(2, 0, '8','0','7'));
                        //index, which element you want to delete , insert element in the middle

