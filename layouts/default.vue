<template data-theme="light">
  <div class="container mx-auto">
    <header>
      <nav>
        <ul class="navbar bg-base-100">
          <li>
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="btn btn-ghost normal-case text-xl"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/posts/1" class="btn btn-ghost normal-case text-xl"
              >Post 1</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/posts/2" class="btn btn-ghost normal-case text-xl"
              >Post 2</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>
