<template>
        <swiper id="swiper1" :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide v-for="sowing in sowing_list" :key="sowing.public_id">
                <img :src="sowing.icon_url" :alt="sowing.public_name">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div> 
        </swiper>
</template>

<script>
    //需要样式
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
    name:"Sowing",
    props:{
        sowing_list:Array
    },
    data(){
        return{
            swiperOption:{
                notNextTick:true,   //
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                    // bulletActiveClass: 'my-bullet-active',//分页点颜色  
                },                  
                    loop:true,
                    speed:800, //切换时的速度
                autoplay: {
                    delay: 1500,//1秒切换一次(切换的频率)
                    disableOnInteraction: false,//手动切换后不会打断自动切换效果
                    //滑动后监听
                    },
                  on: {
                     slideChangeTransitionEnd(){
                    // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                     },
                 },
            
            }//
        }
    },
    computed:{
        swiper(){
            return this.$refs.mySwiper.swiper;
        }
    },
    mounted(){
        this.swiper.slideTo(5,1000,false)
    },
    compotents:{
        swiper,
        swiperSlide
    }
}
</script>
<style scoped>
    #swiper1{
        width: 100%;
        height: 14rem;
    }
    #swiper1 img{
        width: 100%;
        height: 100%;
    }
    #swiper1 >>>.swiper-pagination-bullet-active{
        background-color:#75A342;
    }
</style>