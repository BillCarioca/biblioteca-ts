import { Autor } from "./src/model/autor";
import { Livro } from "./src/model/livro";

const autores:Array<Autor> = new Array<Autor>
const livros:Array<Livro> = new Array<Livro>

autores.push(new Autor("Bill","06/21/1983","brasileiro"))
autores.push(new Autor("Elias","12/14/2000","brasileiro"))
autores.push(new Autor("Sofhia","01/26/2014","brasileira"))

console.log(autores)

livros.push(new Livro("Poemas perdidos",[autores[0]],2023,"Literatura Portuguesa"))
livros.push(new Livro("Poemas Para Amada",[autores[0]],2022,"Literatura Portuguesa"))
livros.push(new Livro("Gatinho Rajado",[autores[1]],2022,"Literatura Infantil"))
livros.push(new Livro("Patinho Amarelo que queria ser Azul",[autores[1]],2022,"Literatura Infantil"))
livros.push(new Livro("Pinturas em um Dia de Chuva",[autores[2]],2022,"Literatura Infantil"))
livros.push(new Livro("Poemas de um Pai Apaixonado",[autores[0]],2022,"Literatura Portuguesa"))

console.log(livros);



