class Father{

    x=10
    y=20
    addTwo(){
        let sum = this.x + this.y;
        console.log(sum);
        
    }
}


class Son extends Father{

    // বাবার কাছে আছে মানে ছেলের কাছেও আছে 

}

/*
let son = new Son()
console.log(son.x)
console.log(son.y)
son.addTwo()
*/ 

let father = new Father()
console.log(father.x)
console.log(father.y)
father.addTwo()