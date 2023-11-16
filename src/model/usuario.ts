import { Livro } from "./livro"

export class Usuario{
    private _nome:string 
    private _email:string
    private _livrosEmprestados: Array<Livro> = new Array<Livro>
    private readonly _id:number
    static countId:number = 0 

    constructor(nome:string, email:string, livrosEmprestados: Array<Livro> ){
        this._nome = nome
        this._email = email 
        this._livrosEmprestados = livrosEmprestados
        this._id = Usuario.countId++
    }

    set nome(novoNome:string){
        this._nome=novoNome
    }
    get nome():string{
        return this._nome
    }
    set email(novoEmail:string){
        this._email=novoEmail
    }
    get email():string{
        return this._email
    }
    set livrosEmprestados(livros:Array<Livro>){
        this._livrosEmprestados = livros
    }
    get livrosEmprestados():Livro[]{
        return this._livrosEmprestados
    }
    get id():number{
        return this._id
    }
    
    emprestaLivro(livro:Livro):void{
        this._livrosEmprestados.push(livro)
    }
    devolveLivros(livro:Livro):void{
        const index:number = this._livrosEmprestados.indexOf(livro)
        if(index!=-1) { this._livrosEmprestados.splice(index)}
        else throw new Error("Livro não encontrado!");  
    }
}