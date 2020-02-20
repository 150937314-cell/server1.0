<template>
    <div id="home">
        <div v-if="!showLoading">
            <Header></Header>
            <!-- 轮播图 -->
            <Sowing :sowing_list="sowing_list"></Sowing>  
            <!-- 首页的中部列表 -->
            <Nav :nav_list="nav_list"></Nav>  
            <!-- 秒杀 -->
            <FlashSale :flash_sale_product_list1="flash_sale_product_list"></FlashSale>
            <!-- 猜你喜欢 -->
            <YouLike :YouLike_product_list="YouLike_product_list"></YouLike>
            <!-- 返回顶部小图标 -->
            <MarkPage v-if="btnFlag" :scrollToTop="backTop"></MarkPage>
        </div>   
        <van-loading 
         v-else type="spinner"
          color="#1989fa"
          style="position:absolute;left:50%;top:40%;transform:translate(-50%)">
          正在拼命为您加载中...</van-loading>
    </div> 
</template>
<script>
    //1.引入
    import {getHomeData} from "../../service/api/index"
    //2.引入组件
    import Header    from "./components/header/Header.vue"
    import Sowing    from "./components/sowing/Sowing.vue"
    import Nav       from "./components/nav/Nav.vue"
    import FlashSale from "./components/flashSale/FlashSale.vue"
    import YouLike   from "./components/youLike/YouLike.vue"
    import MarkPage  from "./components/markPage/MarkPage.vue"
    //3.引入通知插件
    import PubSub from "pubsub-js";
    import {Toast} from "vant"; 
    //4.引入vueX
    import {mapMutations} from "vuex" 
   
export default{
    name:"Home",
   data(){
       return{
           //1.首页轮播图数据
           sowing_list:[],
           //2.首页导航的数据
           nav_list:[],
           //3.秒杀的数据
           flash_sale_product_list:[],
           //4.猜你喜欢的数据
           YouLike_product_list:[],
           //是否显示加载图片
           showLoading:true,
           //定义是否返回顶部小图标按钮
           btnFlag:false,
        
       }
   },
    created(){
        //2.请求网络数据
        getHomeData().then((response)=>{
            console.log(response)
            if(response.success){
                this.sowing_list=response.data.list[0].icon_list;
                this.nav_list=response.data.list[2].icon_list;
                this.flash_sale_product_list=response.data.list[3].product_list
                this.YouLike_product_list=response.data.list[12].product_list
                //2.1隐藏加载动画
                this.showLoading=false;
            }
        }).catch(error=>{
            console.log(error)
        })
        
        },
    mounted () {
              window.addEventListener('scroll', this.scrollToTop),
            //订阅消息(添加到购物车)
            PubSub.subscribe("homeAddToCart",(msg,goods)=>{
                if(msg==="homeAddToCart"){
                    this.ADD_GOODS({
                       goodsId:goods.id,
                       goodsName:goods.name,
                       smallImage:goods.small_image,
                       goodsPrice: goods.price 
                    });
                    //提示用户
                    Toast({
                        message:"添加到购物车成功!",
                        duration:800
                    });
                }
            }) 
            },
    destroyed () {
              window.removeEventListener('scroll', this.scrollToTop)
            },
    components:{
        "Header":Header,
        "Sowing":Sowing,
        "Nav":Nav,
        "FlashSale":FlashSale,
        "YouLike":YouLike,
        "MarkPage":MarkPage
        },
    methods:{
        ...mapMutations(["ADD_GOODS"]),
// ***********************************点击按钮返回顶部功能*******************************************
       
       // 点击图片回到顶部方法，加计时器是为了过渡顺滑
             backTop(){    
              const that = this
              let timer = setInterval(() => {
              let ispeed = Math.floor(-that.scrollTop / 5)
                 document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                 if(that.scrollTop === 0){
                   clearInterval(timer)
                    }     
                }, 16)
            },  
         // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
             scrollToTop(){
                const that = this
        //    console.log(that.scrollTop)
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop
                if (that.scrollTop >500) {
                  that.btnFlag = true
                } else {
                  that.btnFlag = false
                }
              }
            },
// *********************************************************************************************
        
}  
</script>      
<style lang="less" scoped>
    #home{
        width: 100%;
        height: 300rem;
        background-color:#f5f5f5;
    }
</style>