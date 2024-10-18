class Father{

    constructor(){
        console.log("Father constructor");
        
    }



}

class Son extends Father {

    constructor(){
        super()    // Permission
        console.log("Son constructor");
        
    }
}

let son = new Son();