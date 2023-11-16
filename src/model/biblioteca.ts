import { Autor } from "./autor";
import { Livro } from "./livro";
import { Usuario } from "./usuario";

export class Biblioteca {
    private listaAutores: Array<Autor> = new Array<Autor>
    private listaLivros: Array<Livro> = new Array<Livro>
    private livrosEmprestados: Array<Livro> = new Array<Livro>
    private listaUsuarios: Array<Usuario> = new Array<Usuario>
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
    removerAutor(autor:Autor):void{
        this.listaAutores.push(autor)
    }

}