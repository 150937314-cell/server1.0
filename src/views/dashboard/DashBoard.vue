<template>
    <div id="dashboard">
        <van-tabbar v-model="active" active-color="#75A342" >
            <van-tabbar-item replace to="/dashboard/home">
                <span>首页</span>
                <img slot="icon"
                slot-scope="props"
                :src="props.active ? home_icon.active : home_icon.normal"
                >
            </van-tabbar-item>
             <van-tabbar-item replace to="/dashboard/category">
                <span>分类</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? category_icon.active : category_icon.normal"
                >
            </van-tabbar-item>
             <van-tabbar-item replace to="/dashboard/cart" :info="goodsNum>0?goodsNum:''">
                <span>购物车</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? cart_icon.active : cart_icon.normal"
                >
            </van-tabbar-item>
             <van-tabbar-item replace to="/dashboard/mine">
                <span>我的</span>
                <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? mine_icon.active : mine_icon.normal"
                >
            </van-tabbar-item>
        </van-tabbar>
             <keep-alive>
               <router-view v-if="$route.meta.keepAlive"></router-view> 
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view> 
       
    </div> 
</template>
<script>
    import {mapState,mapMutations} from "vuex"
    export default{       
        name:"DashBoard",
        data(){
            return {
            active: Number(sessionStorage.getItem("tabIndex")),
            home_icon: {
                normal: require("@/images/tabber/home_default.png"),
                active: require("@/images/tabber/home_selected.png"),
            },
             category_icon: {
                normal: require("@/images/tabber/category_default.png"),
                active: require("@/images/tabber/category_selected.png"),
            },
             cart_icon: {
                normal: require("@/images/tabber/shoppingcart_default.png"),
                active: require("@/images/tabber/shoppingcart_selected.png"),
            },
             mine_icon: {
                normal: require("@/images/tabber/mine_default.png"),
                active: require("@/images/tabber/mine_selected.png"),
            },
            }
        },
        watch:{
            active(value){
                 //console.log(value);
                 let tabIndex=value;
                 //缓存到本地
                 sessionStorage.setItem("tabIndex",value);   
            }
        },
        computed:{
            ...mapState(["shopCart"]),
            goodsNum(){
                if(this.shopCart){
                    //总购物车数量
                    let num=0;
                     //console.log(  this.shopCart)
                    // console.log(Object.values(this.shopCart))
                    Object.values(this.shopCart).forEach((goog,index)=>{
                        //console.log(goog)
                        num+=goog.num    
                    })
                    return num;
                }else{
                    return 0
                }
            }
        },
        mounted() {
            //获取购物车的数据
            this.INIT_SHOP_CART()
        },
        methods: {
            ...mapMutations(["INIT_SHOP_CART"])
        },
    }  
</script>      
<style lang="less" scoped>
    #dashboard{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>