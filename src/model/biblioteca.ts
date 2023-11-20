import { Autor } from "./autor";
import { Livro } from "./livro";
import { Usuario } from "./usuario";

export class Biblioteca {
    private listaAutores: Array<Autor> = new Array<Autor>
    private listaLivros: Array<Livro> = new Array<Livro>
    private listaUsuarios: Array<Usuario> = new Array<Usuario>
    // CRUD de Autores
    addAutor(autor:Autor):void{
        this.listaAutores.push(autor)
    }
    buscarAutorPorNome(nome:string):Autor{
        const autor: Autor|undefined = this.listaAutores.find(autor=>autor.nome==nome)
        if (autor!=undefined){
            return autor
        } else throw new Error("Autor não encontrado")  
    }
    buscarAutorPorId(id:number):Autor{
        const autor: Autor|undefined = this.listaAutores.find(autor=>autor.id==id)
        if (autor!=undefined){
            return autor
        } else throw new Error("Autor não encontrado")    
    }
    buscarTodosAutores():Autor[]{
        return this.listaAutores
    }
    editarAutor(autor:Autor):void{
        const index:number = this.listaAutores.indexOf(this.buscarAutorPorId(autor.id))
        if (index!=-1)
            this.listaAutores.splice(index,1,autor)
    }
    removerAutor(id:number):void{
        const index:number = this.listaAutores.indexOf(this.buscarAutorPorId(id))
        if (index!=-1)
            this.listaAutores.splice(index)
    }
    // CRUD de Livros
    addLivros(livro:Livro):void{
        this.listaLivros.push(livro)
    }
    buscarLivroPorId(id:number):Livro{
        const livro: Livro|undefined = this.listaLivros.find(livro=>livro.id==id)
        if (livro!=undefined){
            return livro
        } else throw new Error("Livro não encontrado")  
    }
    buscarLivroPorTitulo(titulo:string):Livro{
        const livro: Livro|undefined = this.listaLivros.find(livro=>livro.titulo==titulo)
        if (livro!=undefined){
            return livro
        } else throw new Error("Livro não encontrado")  
    }
    buscarTodosLivros():Livro[]{
        return this.listaLivros
    }
    buscarTodosLivrosDisponiveis():Livro[]{
        return this.listaLivros.filter(livro=> livro.estaEmprestado==false)
    }
    buscarTodosLivrosEmprestados():Livro[]{
        return this.listaLivros.filter(livro=> livro.estaEmprestado==true)
    }
    emprestarLivros(id:number,usuario:Usuario):void{
        let livroNaoEncontrado:boolean = true
        const index:number = this.listaUsuarios.indexOf(usuario)
        if(index!=-1){
            this.listaLivros.map(livro=>{
                if (livro.id==id){
                    if (!livro.estaEmprestado){
                        livro.estaEmprestado = true
                        livroNaoEncontrado = false
                        this.listaUsuarios[index].emprestaLivro(livro)
                    }else throw new Error("Livro não está disponivel para emprestimo!")
                }
            })
        }else throw new Error("Usuario não encontrado")
        
        if (livroNaoEncontrado) throw new Error("Livro não encontrado")
    }
    
}