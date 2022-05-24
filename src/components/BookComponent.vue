<template>
   <div
      class="card my-5"
      style="width: 22rem"
    >
      <img
        :src="book?.image"
        height="350"
        class="card-img-top"
        :alt="book?.title"
      />
      <button
        type="button"
        class="btn btn-outline-primary card-action col-md-2"
    
          @click.prevent="addToList(book)"
           v-if="!book?.isWished"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-heart-fill text-danger"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </button>
      <div class="card-body ">
        <h5
          class="card-title animate-charcter mb-5 fs-1 text-center"
          :title="book.author"
        >
          {{ book?.name }}
        </h5>
        <ul class="row justify-content-between" style="list-style-type: none; padding-left: 0px; "> 
          <li class="col-md-6 p-1 " :title="book?.author">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-tags-fill text-primary"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
              />
              <path
                d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"
              />
            </svg>
            {{ book?.categeory }}
          </li>
          <li class="col-md-6 p-1" :title="book?.author">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person-fill text-dark"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            {{ book?.author }}
          </li>
          <li
            class="col-md-6 p-1"
            :title="book?.author"
            :class="[
              book.pages >= 50 ? 'more' : '',
              book.pages < 50 ? 'less' : '',
            ]"
          >
            pages: {{ book?.pages }}
          </li>
          <li class="col-md-6 p-1" :title="book?.author">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-wallet2 text-primary"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
              />
            </svg>

            {{ currencyFormatter(book?.price) }}
          </li>
          <li class="col-md-6 p-1" :title="book?.author">
            ISBN: {{ book?.ISBN }}
          </li>
        </ul>
      </div>
    </div>
 
</template>
<script>
export default {
  props: ["book"],
  methods: {
    currencyFormatter(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
    addToList(book) {
      this.$emit("book", book);
    },
  },
};
</script>
<style scoped>
body {
  font-weight: bold;
}

.card {
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.more {
  color: green;
}

.less {
  color: red;
}

.card-action {
  margin-top: -25px;
  margin-left: 250px;
  z-index: 2;
  background: #fff;
  border-radius: 100%;
  padding: 15px;
  font-size: 15px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
}

.card-action:hover {
  color: #fff;
  background: #1f487e;
  -webkit-animation: pulse 1.5s infinite;
}

.card-WishList {
  color: #fff;
  background: #1f487e;
  -webkit-animation: pulse 1.5s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  70% {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
  }

  100% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
}

.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.pay {
  margin-left: 300px;
}
</style>