<template>
  <header class="px-6">
    <div class="navbar w-full rounded-box shadow-xl bg-base-100">
      <div class="flex-none lg:hidden">
        <label
          for="my-drawer"
          aria-label="open sidebar"
          class="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="flex-1">
        <router-link to="/" class="btn btn-ghost text-xl">{{
          SITE_NAME
        }}</router-link>
      </div>
      <div class="hidden flex-none lg:flex">
        <ul class="menu menu-horizontal gap-2">
          <li><router-link to="/milestones">My Milestones</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
        <div class="flex-none gap-2">
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow top-58 -left-152"
            >
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { SITE_NAME } from '@/constants';
</script>
