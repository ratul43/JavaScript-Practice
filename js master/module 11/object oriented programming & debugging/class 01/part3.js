/*
class MyClass{

    addTwo=(a,b)=>{

        let sum=a+b;
        console.log(sum);
    }
}

let myClass = new MyClass();
myClass.addTwo(2,6)
*/ 

class MyClass{

    static addTwo=(a,b)=>{

        let sum=a+b;
        console.log(sum);
    }
}

MyClass.addTwo(4,6);