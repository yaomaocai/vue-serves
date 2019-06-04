<template>
  <div id="app">
    <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-2">
      <md-tab-bar
          v-model="current"
          :items="items"
          :maxLength="10"
      />
    </div>
    <div>
      <p @click="buttonMe()">点我</p>
    </div>
    <div></div>
  </div>
</template>

<script>
  import {
    TabBar, Icon
  } from 'mand-mobile'

  export default {
    name: 'app',
    components: {
      [ TabBar.name ]: TabBar,
      [ Icon.name ]: Icon
    },

    data () {
      return {
        current: 1,
        items: [
          { name: 1, label: '精选' },
          { name: 2, label: '全部' },
          { name: 3, label: '满减券' },
          { name: 4, label: '立减券' },
          { name: 5, label: '免息券' },
          { name: 6, label: '校园专享' },
          { name: 7, label: '夜间优惠' },
          { name: 8, label: '红包' },
        ],
        iconList: [
          'rectangle',
        ]
      }
    },
    mounted () {

    },
    methods: {
      buttonMe () {
        var me = this
        me.$getHttp('http://test.happymmall.com/product/list.do', {
          categoryId: 1,
          orderBy: 'price_desc'
        },'POST')
        .then((response) => {
          response.result//请求返回数据
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #f0f0f0;
  }

  .detail {
    background: #fff;
    font-size: .24rem;
  }

  .block {
    margin-top: .32rem;
  }

  .agree {
    padding: .32rem;
    font-size: .24rem;
    color: #666;
  }

  .md-example-child-tabs
    .content
      padding 12px 0
      font-size 28px
      background #FFF
      padding 20px
      line-height 1.5
      box-sizing border-box

    .md-tabs-content
      min-height 200px
      background #FFF
</style>
