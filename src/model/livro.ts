import { Autor } from "./autor"

export class Livro {
    private _titulo:string 
    private _autores: Array<Autor> = new Array<Autor>
    private _anoPublicacao:number
    private _genero:string
    private readonly _id:number
    static countId:number = 0 

    constructor(titulo:string, autores: Array<Autor>, anoPublicacao:number, genero:string){
        this._titulo = titulo
        this._autores = autores 
        this._anoPublicacao = anoPublicacao
        this._genero = genero
        this._id = Livro.countId++
    }
    
    set titulo(novoTitulo:string){
        this._titulo=novoTitulo
    }
    get titulo():string{
        return this._titulo
    }
    set autores(listAutores:Array<Autor>){
        this._autores = listAutores
    }
    get autores():Autor[]{
        return this._autores
    }
    set anoPublicacao(ano:number){
        this._anoPublicacao = ano
    }
    get anoPublicacao():number{
        return this._anoPublicacao
    }
    set genero(novoGenero:string){
        this._genero=novoGenero
    }
    get genero():string{
        return this._genero
    }
    get id():number{
        return this._id
    }
}