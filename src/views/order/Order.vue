<template>
    <div id="order">
        <!-- 导航栏 -->
        <van-nav-bar
            title="填写订单" 
            :fixed=true
            :border=true
            left-arrow
            @click-left="onClickLeft"
            />
             <!--收货地址-->
        <van-contact-card
                type="add"
                add-text="选择收货地址"
                @click="chooseAddress"
                style="margin-top: 3rem"
        ></van-contact-card>

        <van-cell-group style="margin-top:0.6rem">
            <van-cell title="送达时间" value="请选择送达时间" is-link/>
            <van-cell value="内容"  is-link :center=true>
                <template slot="title">
                   <img src="./image/detail1.jpg" alt="" style="width:3.5rem">
                </template>
            </van-cell>
        </van-cell-group>
        
         <van-cell-group style="margin-top:0.6rem">
            <van-cell title="支付方式" value="微信" />
        </van-cell-group>

        <van-cell-group style="margin-top:0.6rem">
            <van-cell title="备注">
                <input type="text" placeholder="请备注你的特殊需求">
            </van-cell>   
        </van-cell-group>

         <van-cell-group style="margin-top:0.6rem">
            <van-cell title="商品金额" value="￥50.30" />
            <van-cell title="配送费" value="￥0.00" />
        </van-cell-group>
        <!-- 提交订单 -->
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            label="实付"
            bind:submit="onSubmit"
        >
        </van-submit-bar>

        <transition name="router-slider" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>   
<script>
export default {
    name:"Order",
    methods:{
        onClickLeft(){
            this.$router.back()
        },
        chooseAddress(){
            this.$router.push("/confirmOrder/myaddress")
        }
    }
}
</script> 
<style scoped>
    #order{
        width:100%;
        height:100%;
        background-color: #f5f5f5;
    }
    /*转场动画*/
    .router-slider-enter-active, .router-slider-leave-active {
        transition: all 0.3s;
    }

    .router-slider-enter, .router-slider-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    } 
</style>