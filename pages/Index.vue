<template>
  <div class="home">
    <m-header></m-header>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <current-music :data="current_music"></current-music> -->

    <!-- <div class="list-box" @mouseover="toggeleList('show')" @mouseout="toggeleList('hide')">
      <div class="music-list" v-show="show_music">
        <MusicItem
          v-for="(item, i) in musicList"
          :key="i"
          :data="item"
          :active="item.id === current_music.id ? true : false"
          @changeMusic='changeMusic'></MusicItem>
      </div>
      <p class="cur-music">
        {{current_music.title}} {{current_music.author}}
      </p>
    </div> -->
  </div>
</template>

<script>
import CurrentMusic from '../components/CurrentMusic'
import MusicItem from '../components/MusicItem'
import MHeader from '../components/mHeader'
import Tab from '../components/Tab'
// function setState(store) {}
// export default {
    
//     async asyncData({store, route}) {
//         setState(store);
//     }
// };
export default {
  name: 'index',
  data () {
    return {
      show_music: false,
      // 当前播放歌曲信息
      current_music: {},
      // 歌单列表
      musicList: [{
        id: '1001',
        title: '随便他们怎么说吧11',
        author: '宗儒',
        content: '一只白色的百灵鸟，翅膀上有风铃在摇晃',
        url: '11111'
      }, {
        id: '1002',
        title: '我一定会爱上你',
        author: '谢春花',
        content: '一只白色的百灵鸟，翅膀上有风铃在摇晃',
        url: '22222'
      }, {
        id: '1003',
        title: '才华有限公司',
        author: '金玟岐',
        content: '一只白色的百灵鸟，翅膀上有风铃在摇晃',
        url: '33333'
      }, {
        id: '1004',
        title: '追梦的蚂蚁',
        author: 'JAEFOREAL/蜡笔大Boom',
        content: '一只白色的百灵鸟，翅膀上有风铃在摇晃',
        url: '44444'
      }]
    }
  },
  metaInfo: {
    title: 'CloudMusic',
    titleTemplate: '%s - Lavas',
    meta: [
      {name: 'keywords', content: 'lavas PWA'},
      {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
    ]
  },
  mounted () {
    this.current_music = this.musicList[0]
  },
  methods: {
    toggeleList (type) {
      this.show_music = type === 'show' ? true : false
    },
    changeMusic (id) {
      this.current_music = this.musicList.filter(item => {
        return item.id === id
      })[0]
      console.log(this.current_music)
    }
  },
  components: {
    CurrentMusic,
    MusicItem,
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" scoped>

.home
  width 100%
  box-sizing border-box 
  // position relative

  // .list-box
  //   position absolute
  //   bottom 0
  //   right 10px
  //   width 200px
  //   box-sizing border-box

  //   .cur-music
  //     height 30px
  //     line-height 30px
  //     margin 0
  //     cursor pointer

  //   .music-list
  //     height 65px
  //     background-color aliceblue
  //     padding 10px 20px
  //     border 1px solid pink
  //     box-sizing border-box
  //     padding 5px 8px
  //     overflow-y scroll
  //     bottom 30px

</style>
