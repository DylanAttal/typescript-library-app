<template>
  <div class="hello">
    <h2>TypeScript Library!</h2>
    <form>
      <label for="title">Book title:</label>
      <input type="text" id="title" v-model="title" />
      <label for="author">Book author:</label>
      <input type="text" id="author" v-model="author" />
      <label for="number-of-pages">Number of pages:</label>
      <input type="number" id="number-of-pages" v-model="numberOfPages" />
      <label for="in-stock">In stock:</label>
      <input type="radio" id="in-stock" value="true" name="is-book-in-stock" v-model="inStock" />
      <label for="not-in-stock">Not in stock:</label>
      <input type="radio" id="not-in-stock" value="false" name="is-book-in-stock" v-model="inStock" />
      <label for="genre">Genre:</label>
      <select v-model="genre">
        <option :value="typesOfGenre[0]">Biography</option>
        <option :value="typesOfGenre[1]">Fiction</option>
        <option :value="typesOfGenre[2]">Prose</option>
        <option :value="typesOfGenre[3]">History</option>
        <option :value="typesOfGenre[4]">Poetry</option>
      </select>
    </form>
    <button @click="addABook({ title, author, numberOfPages, inStock, genre })">Add book to library</button>
    <button @click="logFirstAvailableBook(listOfBooks)">Log first available book</button>
    <table class="paleBlueRows">
      <tr v-for="book in listOfBooks" :key="book.title">
        <td>{{book.title}}</td>
        <td>{{book.author}}</td>
        <td>{{book.numberOfPages}}</td>
        <td>{{book.inStock}}</td>
        <td>{{book.genre}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Book from "../interfaces/Book";
import { Genre } from "../components/enums";

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      title: "" as string,
      author: "" as string,
      numberOfPages: 0 as number,
      inStock: false as boolean,
      genre: Genre.Fiction as Genre,
      typesOfGenre: [
        Genre.Biography,
        Genre.Fiction,
        Genre.Prose,
        Genre.History,
        Genre.Poetry
      ],
      listOfBooks: [
        {
          title: "A Portrait of an Artist as a Young Man",
          author: "James Joyce",
          numberOfPages: 450,
          inStock: false,
          genre: Genre.Biography
        },
        {
          title: "The Old Man and the Sea",
          author: "Ernest Hemingway",
          numberOfPages: 180,
          inStock: true,
          genre: Genre.Fiction
        },
        {
          title: "I Know Why the Caged Bird Sings",
          author: "Maya Angelou",
          numberOfPages: 156,
          inStock: true,
          genre: Genre.Prose
        },
        {
          title: "Harry Potter and the Goblet of Fire",
          author: "JK Rowling",
          numberOfPages: 670,
          inStock: true,
          genre: Genre.Fiction
        }
      ] as Book[]
    };
  },
  methods: {
    addABook(book: Book): void {
      this.listOfBooks.push(book);
    },
    logFirstAvailableBook(listOfBooks: Book[]): void {
      let numberOfBooks: number = listOfBooks.length;
      let firstAvailableBook: string = "";
      let availableBooks: Book[] = listOfBooks.filter(book => book.inStock);
      availableBooks.map(book => book.title);
      firstAvailableBook = availableBooks[0].title;

      console.log("The number of total books is " + numberOfBooks);
      console.log("The first available books is " + firstAvailableBook);
    }
  }
});
</script>

<style scoped>
table.paleBlueRows {
  font-family: "Times New Roman", Times, serif;
  border: 1px solid #ffffff;
  width: 75%;
  text-align: center;
  border-collapse: collapse;
}
table.paleBlueRows td,
table.paleBlueRows th {
  border: 1px solid #ffffff;
  padding: 3px 2px;
}
table.paleBlueRows tbody td {
  font-size: 13px;
}
table.paleBlueRows tr:nth-child(even) {
  background: #d0e4f5;
}
table.paleBlueRows thead {
  background: #0b6fa4;
  border-bottom: 5px solid #ffffff;
}
table.paleBlueRows thead th {
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  border-left: 2px solid #ffffff;
}
table.paleBlueRows thead th:first-child {
  border-left: none;
}

table.paleBlueRows tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  background: #d0e4f5;
  border-top: 3px solid #444444;
}
table.paleBlueRows tfoot td {
  font-size: 14px;
}

.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  margin-right: 5px;
}

input {
  margin-right: 10px;
}
</style>
