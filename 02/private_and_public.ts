class User {

    private _courseCount = 1
    constructor(
        public email: string,
        private name: string
    ) {

    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }
    /*Whenever you are using Setter you cannot make it Void nor any other datatype*/

    set courseCount(courseNum) {
        if(courseNum<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount=courseNum
    }
}

class SubUser extends User{
    isFamily:boolean=true

}

//Abstract Class  

abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
}


// const hc=-new TakePhoto("test","test") ---> Cannot create instance of an Abstract class

class Instagram extends TakePhoto
{
    constructor(
        public cameraMode: string,
        public filter:string,
        public burst:number    
    ){
        super(cameraMode,filter)
    }
}


