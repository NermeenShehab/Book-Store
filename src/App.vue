<template>
    <EmptyWishListComponent :wishlistTotal="wishlist.items.length" />
    <router-view
        @addToWishlsit="addToWishlist"
        @removeFromWishlist="removeFromWishlist"
        :books="books"
        :wishlist="wishlist"
    />
</template>

<script>
import EmptyWishListComponent from "./components/EmptyWishListComponent.vue";

export default {
    name: "App",
    data() {
        return {
            books: [],
            wishlist: {
                items: [],
                totalPrice: 0,
            },
        };
    },
    methods: {
        addToWishlist(book) {
            book.isWished = true;
            this.wishlist.items.push(book);
            let bookIndex = this.books.indexOf(book);
            this.books[bookIndex] = {
                ...this.books[bookIndex],
                isWished: true,
            };

            this.calcTotalPrice(book, "add");

            this.$emit("wishlist", this.wishlist);
        },
        removeFromWishlist(book) {
            this.wishlist.items.splice(this.wishlist.items.indexOf(book), 1);

            let bookIndex = this.books.findIndex((b) => b.ISBN == book.ISBN);
            this.books[bookIndex] = {
                ...this.books[bookIndex],
                isWished: false,
            };

            this.calcTotalPrice(book, "subtract");
        },
         
        calcTotalPrice(book, operation) {
            if (operation == "add") this.wishlist.totalPrice += book.price;
            else this.wishlist.totalPrice -= book.price;
        },
    },
    async created() {
        const data = await fetch("http://localhost:3000/books");
        const books = await data.json();
        this.books = books;
    },
    components: {
        EmptyWishListComponent,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
