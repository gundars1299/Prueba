interface IUser{
    usuario:string;
    password:string; 
    nombre:string;
    apellido:string;
}

export class UserModel implements IUser{
    constructor(
        public usuario = "",
        public nombre="",
        public apellido="",
        public password = ""
    ){}
}