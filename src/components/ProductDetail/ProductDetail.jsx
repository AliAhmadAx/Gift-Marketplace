import React from "react";

const ProductDetail = () => {
  return (
    <div>
      <section class="py-20">
        <div class="container px-4 mx-auto">
          <div class="max-w-xl lg:max-w-6xl mx-auto">
            <div class="flex flex-wrap -mx-4 mb-12">
              <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <img
                  class="h-auto max-w-full"
                  src="https://images.unsplash.com/photo-1495522097160-b7d527cc67f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
                  alt="image description"
                />
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div class="max-w-lg">
                  <h2 class="text-3xl font-semibold  mb-1">Product title</h2>
                  <span class="block text-sm font-bold mb-5">Brand Name</span>
                  <div className="flex items-center mt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div>
                  <span class="block text-2xl font-black  mb-4">
                    $ 199.00
                  </span>
                  <p class="font-normal font-sans mb-2">
                    Pariatur ex aliqua elit ut enim consequat amet non do ut. Ad
                    aute deserunt fugiat qui Lorem in quis velit labore
                    voluptate.
                  </p>
                  <ul class="list-disc list-inside font-normal mb-6">
                    <li>
                      Pariatur ex aliqua elit ut enim consequat amet non do ut.
                    </li>
                    <li>
                      Ad aute deserunt fugiat qui Lorem in quis velit labore
                      voluptate.
                    </li>
                    <li>Lorem in quis velit labore</li>
                  </ul>
                  <div class="flex flex-wrap mb-4">
                    <div class="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                      <span class="block text-sm font-black mb-2">Quantity</span>
                      <div class="flex h-12 w-24 px-2 items-center justify-between border-2 border-black rounded-md">
                        <button class="flex w-3.5 h-3.5 px-px items-center justify-center bg-black  rounded transition duration-100">
                          <div class="h-px mx-px w-full bg-white"></div>
                        </button>
                        <input
                          class="w-10 text-center text-sm font-bold placeholder-black text-black outline-none"
                          type="number"
                          placeholder="2"
                        />
                        <button class="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black  rounded transition duration-100">
                          <div class="relative h-full w-full py-px">
                            <div class="absolute top-1/2 left-0 h-px w-full bg-white"></div>
                            <div class="inline-block max-w-max mx-auto h-full bg-white">
                              <div class="inline-block px-px"></div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div class="w-full sm:w-auto">
                      <span class="block text-sm font-black mb-2">Size</span>
                      <div class="group relative h-12 w-32 border-2 border-black rounded-md overflow-hidden">
                        <select
                          class="w-full h-full px-4 text-sm font-bold appearance-none outline-none"
                          name=""
                          id=""
                        >
                          <option value="1">Small</option>
                          <option value="1">Medium</option>
                          <option value="1">Large</option>
                        </select>
                        <span class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black ">
                          <svg
                            width="10"
                            height="6"
                            viewbox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap sm:flex-nowrap items-center -mx-2 mb-6">
                    <div class="flex-grow-1 w-full px-2 mb-4">
                      <a
                        class="group relative inline-block h-12 w-full -mb-2 bg-blueGray-900 rounded-md"
                        href="#"
                      >
                        <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <div class="flex h-full w-full items-center justify-center  border-2 border-black rounded-md">
                            <span class="text-base font-black text-black">
                              Add to Cart
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                 
                  </div>
                 
                  
                </div>
              </div>
            </div>
            <div class="mb-8 ">
              <div class="flex flex-col md:flex-row -mb-px ">
                <a
                  class="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-bold font-sans border-b-2 border-black"
                  href="#"
                >
                  Description
                </a>
               
              </div>
            </div>
            <div>
              <h4 class="text-xl mb-3">
                Lorem ipsum dolor sit amet
              </h4>
              <p class="text-lg font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
