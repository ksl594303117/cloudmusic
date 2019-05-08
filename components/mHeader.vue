<template>
  <div class="m-header">
    <h1 class="text">Cloud Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin'
@import '../assets/stylus/variable'

.m-header
  position relative
  height 44px
  text-align center
  color $color-theme
  font-size 0
  
  .text
    display inline-block
    vertical-align top
    line-height 44px
    font-size $font-size-large
  
  .mine
    position absolute
    top 0
    right 0
    .icon-mine
      display block
      padding 12px
      font-size 20px
      color $color-theme
</style>
