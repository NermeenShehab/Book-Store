<template>
    <section class="books mt-4">
        <div class="container">
            <div class="row justify-content-evenly">
                <Book
                    v-for="book in books"
                    :key="book.id"
                    :book="book"
                    @book="addToWishlist"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Book from "./BookComponent.vue";

export default {
    components: {
        Book,
    },
    props: ["books"],
    methods: {
        addToWishlist(book) {
            this.$emit("addToWishlsit", book);
        },
    },
};
</script>
