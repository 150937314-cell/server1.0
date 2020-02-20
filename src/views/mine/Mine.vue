<template>
    <div id="mine" v-if="userInfo.token">
        <van-nav-bar
            title="我的"
            :fixed=true
            :border=false
            >
        </van-nav-bar>
        
        <van-cell-group style="margin-top:2.6rem">
            <van-cell 
            style="background:#2eba5a;color:#fff;"
            is-link>  
                <template slot="title">
                    <div class="personMsg">
                        <img src="./image/person.jpg.png" alt="">
                        <div class="personInfo">
                            <p>成都日炙科技:张瑞峰</p>
                            <p>微信:18011590296</p>
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>

         <van-cell-group>
            <van-cell icon="label" title="我的订单" value="查看所有订单" />
        </van-cell-group>
       
       <!-- 宫格 -->
        <van-grid>
            <van-grid-item 
                v-for="(order,index) in orderData"
                :key="index"
                :icon="order.icon" 
                :text="order.title">
            </van-grid-item>
        </van-grid>

          <van-cell-group style="margin-top:0.6rem">
            <van-cell icon="bill" title="我的优惠券" value="1张" is-link/>
            <van-cell icon="map-marked" title="我的收货地址" is-link/>
        </van-cell-group>
           <van-cell-group style="margin-top:0.6rem">
            <van-cell icon="phone-circle" title="联系客户" value="客户时间07:00-22:00" is-link/>
            <van-cell icon="smile-comment" title="意见反馈" is-link/>
        </van-cell-group>
           <van-cell-group style="margin-top:0.6rem">
            <van-cell icon="gift-card" title="小峰买菜" value="下载APP体验更佳" is-link/>
        </van-cell-group>
    </div>
     <selectlogin v-else/>
</template>
<script>
    import SelectLogin from "./../../views/login/SelectLogin"
    import  {mapState}  from "vuex"
    export default{
        name:"Mine",
        components:{
            "selectlogin":SelectLogin
        },
        computed: {
            ...mapState(["shopCart","userInfo"])
        },
        data(){
            return {
                orderData:[
                    {icon:'cart-circle-o',title:"待支付"},
                    {icon:'gift-o',title:"待收货"},
                    {icon:'smile-comment-o',title:"待评价"},
                    {icon:'cash-back-record',title:"售后/退款"}
                ]
              }
        }
    }
</script>      
<style lang="less" scoped>
    #mine{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5
    }
    .van-nav-bar{
        background-color: #3bba63;
    }
    .van-nav-bar__title{
        color:#f5f5f5;
        font-size: 1rem;
    }
    .personMsg{
        display: flex;
    }
    .personMsg img{
        width: 4rem;
        height: 4rem;
        border-radius:2rem;
        border:0.12rem solid #ffffff
    }
    .personInfo{
        margin:0.8rem 0 0 0.7rem;
    }
    .van-cell__left-icon{
        color:orange;
        font-size: 1.3rem
    }
</style>