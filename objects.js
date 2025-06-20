function add(a, b) {
    console.log(a + b);
}


let newObject = {
    name: "John",
    age: 35,
    func: (a, b) => {

        console.log(a + b);
    },
};
console.log(newObject.name);
console.log(newObject.age);
newObject.func(2, 3);


function getDetails() {
    let person = {
        age: 25,
    }
    return person;
}
let returnValue = getDetails();
let name = returnValue.name;
let age = returnValue.age;

let { newName, newAge } = getDetails();


function getDetails() {
    let person = {
        name: "John Doe",
        age: 25,

    };
    return person;
}
let person = {
    name: "John Doe",
    age: 25,
};
let newDetails = {
    ...person,
    role: "developer",
    company: "ABC Pvt Ltd",
    isMarried: false,
    salary: 2.5,
};

//let{newName,newAge,,...newDetails}=getDetails();
console.log(newDetails);
