// value variable or array or object ma store krte ha
// object is the backbone of javascript
// var a={
//     name:'wajahat',
//     age:10,
//     institute:'SAIMS',
//     isLearning:true
// }
// console.log(a.name)
// console.log(a.age)
// console.log(a.institute)

// var h=document.getElementById('h1')
// console.log(a.institute)
// h.innerHTML=a.name 

// var std='xyz';
// var a={
//     name:'wajahat',
//     age:10,
//     institute:'SAIMS',
//     isLearning:true,
//     std,
//     // isi name ki property banai or uski value usi ma save krdi
// }
// // a.name='Usman';
// //update value in object

// // a.std='something';//std koi property nai ha lekin usma add krdega 
// //add property in object

// var check = 'std' in a  //true ya false return krskte ha
// console.log(check)

// delete a.isLearning;

// console.log(a);

var arr = [{ name: 'Liam', contactno: '0987654321', age: 23, school: 'westview', result: 0 },
{ name: 'ali', contactno: '0987654331', age: 12, school: 'sm public academy', result: 0 },
{ name: 'wajahat', contactno: '0987354321', age: 1, school: 'kbc academy', result: 0 },
{ name: 'khan', contactno: '0987654221', age: 3, school: 'ali public school', result: 1 },
{ name: 'ahmed', contactno: '0987655321', age: 2, school: 'the educator', result: 1 },
{ name: 'junaid', contactno: '0987634321', age: 45, school: 'falcon house', result: 0 },
{ name: 'zahid', contactno: '0987652321', age: 12, school: 'beaconhouse', result: 1 },
{ name: 'ahmed', contactno: '0987655321', age: 11, school: 'usman public school', result: 0 },
{ name: 'hassan', contactno: '0987254321', age: 21, school: 'my school', result: 0 },
{ name: 'babar', contactno: '0987454321', age: 27, school: 'educonz academy', result: 1 }
]

// console.log(arr)

for (var i = 0; i < arr.length; i++) {
    var b = arr[i]
    b.rollno = i + 1
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i].result == 1) {
        console.log("You are pass" + i)
    }
    else {
        console.log("You are fail" + i)
    }
}
// console.log(arr)
// console.log(arr[1])
function che1() {
    var r = document.getElementById('inp')
    var n=document.getElementById('name')
    console.log(r.value)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].rollno == (r.value)) {
            alert('Found you record at '+arr[i].name+" "+i)
            n.innerHTML = arr[i].result;

        }
    }
}
