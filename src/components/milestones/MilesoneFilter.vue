<template>
  <article class="bg-base-200 p-4 rounded-lg flex gap-4 flex-col md:flex-row">
    <div class="flex-grow">
      <label class="input input-bordered flex items-center gap-2"
        ><input type="text" class="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </label>
    </div>
    <div class="flex gap-2">
      <div class="form-control justify-center">
        <label class="label cursor-pointer flex gap-2">
          <span class="label-text">Annual</span>
          <input type="radio" name="radio-10" class="radio radio-primary" />
        </label>
      </div>
      <div class="form-control justify-center">
        <label class="label cursor-pointer flex gap-2">
          <span class="label-text">Monthly</span>
          <input type="radio" name="radio-10" class="radio radio-primary" />
        </label>
      </div>
      <div class="form-control justify-center">
        <label class="label cursor-pointer flex gap-2">
          <span class="label-text">Daily</span>
          <input type="radio" name="radio-10" class="radio radio-primary" />
        </label>
      </div>
    </div>
    <div class="divider divider-horizontal m-0 hidden md:flex"></div>
    <div>
      <button class="btn bg-secondary text-white w-full md:w-auto">
        <v-icon scale="1.4" name="bi-calendar-heart-fill" />
        New
      </button>
    </div>
  </article>
</template>
