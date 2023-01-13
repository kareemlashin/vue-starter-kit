<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <p>{{ $t("hello") }}</p>

  <router-view/>
</template>

<style lang="scss">

</style>
