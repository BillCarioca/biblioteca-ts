export class Autor {
    private _nome:string 
    private _dataNascimento:Date
    private _nacionalidade:string
    private readonly _id:number
    static countId:number = 0


    constructor(nome:string,dataNascimento:string,nacionalidade:string){
        this._nome = nome
        this._dataNascimento= new Date(dataNascimento)
        this._nacionalidade = nacionalidade
        this._id = Autor.countId++
    }
    
    set nome (novoNome:string){
        this._nome=novoNome
    }
    get nome():string{
        return this._nome
    }
    set dataNascimento(data:string){
        this._dataNascimento= new Date(data)
    }
    get dataNascimento():Date{
        return this._dataNascimento
    }
    set nacionalidade(novaNacionalidade:string){
        this._nacionalidade=novaNacionalidade
    }
    get nacionalidade():string{
        return this._nacionalidade
    }
    get id():number{
        return this._id
    }
}