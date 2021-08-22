import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <section
        class="
          container
          d-flex
          justify-content-center
          align-items-center
          panda-subscribe
          my-5
          rounded-3
        "
      >
        <div>
          <h1>LET'S STAY IN TOUCH</h1>
          <p class="text-center">Get updates on sales, specials and more</p>
          
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control border-0"
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn panda-bg-btn py-2 px-4 border-0"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </section>
        </div>
    );
};

export default NewsLetter;