// pages/shop/shop.js
Page({
  data:{
    // swiper状态样式
    indicatorDots: true,  //是否显示指示点
    indicatorColor: "#cccccc",  //指示点颜色
    indicatorActiveColor:"#ffffff", //指示点选中时的颜色
    vertical: false,  //滑动方向是否为纵向
    autoplay: true,  //是否自动切换
    interval: 2000, //自动切换时间间隔
    duration: 500, //滑动动画时长
  },
  // 获取接口数据
  onLoad(){
    let self = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/5ce1bb3f6c91e1698ca45f9be7396ae1/yiju/api/index',
      success(res){
        // console.log(res.data.data.hotList);
        // 1.
        // const {data:{data}} = res; 解构赋值
        // const {swiperList,courses} = data;解构赋值
        // 2.
        // const swiperList = res.data.data.swiperList;
        // const courses = res.data.data.courses;

        const swiperList = res.data.data.swiperList;
        const hotList = res.data.data.hotList;
        self.setData({swiperList,hotList})
      }
    })
  }
})