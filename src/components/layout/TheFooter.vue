<template>
  <footer
    class="footer footer-center bg-base-200 text-base-content rounded p-10"
  >
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover">Home</a>
      <a class="link link-hover">Login</a>
      <a class="link link-hover">New Milestone</a>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a
          rel="noopener"
          target="_blank"
          href="https://github.com/mauroef/memo-zap"
        >
          <v-icon scale="2" hover="true" animation="wrench" name="bi-github" />
        </a>
      </div>
    </nav>
    <aside>
      <p>MemoZap – Keeping memories alive since 2024</p>
      <p>
        Developed by
        <a
          rel="noopener"
          target="_blank"
          href="https://mauroef.dev"
          class="link"
          >mauroef</a
        >.
      </p>
    </aside>
  </footer>
</template>
