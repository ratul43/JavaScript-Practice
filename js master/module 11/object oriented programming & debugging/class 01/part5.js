class Father{

   
    addTwo(){
        let num1=10;
        let num2=20;
        let sum= num1+num2;
        console.log(sum);
        
        
    }
}


class Son extends Father{

    addTwo(){
        let num1=10;
        let num2=20;
        let sum= num1-num2;
        console.log(sum);
    }

}

let son = new Son();
son.addTwo();


let father = new Father();
father.addTwo();