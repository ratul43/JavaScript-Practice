class Myclass{

    num1=10
    num2=20


     addTwo(){
        let sum = this.num1+this.num2
        console.log(sum);
    }
}

 let obj1= new Myclass();
 obj1.addTwo()
 console.log(obj1.num1)
 console.log(obj1.num2)