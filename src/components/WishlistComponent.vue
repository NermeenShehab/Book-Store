<template>
  <section class="watch_list mt-4">
    <div class="container">
      <p
        class="alert alert-danger text-center h2"
        v-if="wishlist.items?.length == 0"
      >
        There're not any books😥😥
      </p>
      <div class="watch_list_books" v-if="wishlist.items.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ISBN</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Author</th>
              <th scope="col">Pages</th>
              <th scope="col">Price</th>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="book in wishlist.items"
              :key="book.ISBN"
              class="text-center"
            >
              <td>{{ book.ISBN }}</td>
              <td>{{ book.title }}</td>
              <td>{{ book.categeory }}</td>
              <td>
                <img width="80" :src="book.image" alt="book.name" />
              </td>
              <td>{{ book.author }}</td>
              <td>{{ book.pages }}</td>
              <td style="color: #b12704">
                {{ currencyFormatter(book.price) }}
              </td>
              <td>
                <button
                  @click="removeBookFromWishlist(book)"
                  class="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div class="more_options">
          <div class="total_price d-flex justify-content-between">
            <span class="fw-bold">Total Price: </span>
            <span style="color: #b12704">{{
              currencyFormatter(wishlist.totalPrice)
            }}</span>
          </div>
          <div class="checkout row justify-content-around text-center mt-3">
              
               
            <button class="btn btn-primary col-6 "  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Checkout</button>
          </div>


 <!-- Modal -->
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Payment
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <table class="table">
                        <tbody>
                          <tr>
                            <th colspan="4" scope="row">Total price</th>
                            <td colspan="2">
                              {{ currencyFormatter(wishlist.totalPrice) }}
                            </td>
                          </tr>
                          <tr>
                            <th colspan="4" scope="row">Taxis</th>
                            <td colspan="2">
                              {{ currencyFormatter((wishlist.totalPrice) * 0.1) }}
                            </td>
                          </tr>
                          <tr>
                            <th colspan="4" scope="row">Grant price</th>
                            <td colspan="2">
                              {{ currencyFormatter((wishlist.totalPrice) + (wishlist.totalPrice) * 0.1)
                               
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        @click="pay()"
                      >
                        confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          <!--  end modal -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["wishlist"],
  methods: {
    currencyFormatter(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
    removeBookFromWishlist(book) {
     this.$swal({
        title: "Are you sure to remove this book from your wishList?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, remove it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit("removeFromWishlist", book);
          return this.$swal(
            "Deleted!",
            "Your Book has been removed.",
            "success"
          );
        }
      });
    },

     pay() {
          
          this.$emit("pay", this.wishlist.items  );
      return this.$swal(
        "Payment is Confirmed",
        "Thanks for your Confirmation",
        "success"
      );
    },
  },
};
</script>
