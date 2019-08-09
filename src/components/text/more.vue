<template>
<div>

    <div class="more">
        <router-link class="more_m" v-for='(item,index) in arr' :key='index' to='/list' tag='div'>
            <div class="more_left">
                <h2>{{item.h21}}</h2>
                <div class="d">
                    <img :src="item.img1" alt="">
                </div>
            </div>
            <div class="more_right">
                <h2>{{item.h22}}</h2>
                <h3>{{item.h31}}</h3>
                <ul>
                    <li>
                        <img :src="item.img2" alt="">
                    </li>
                    <li>
                        <img :src="item.img2" alt="">
                    </li>
                    <li>
                        <img :src="item.img2" alt="">
                    </li>
                </ul>
            </div>
        <!-- </div> -->
        </router-link>
    </div>
    <div>
        <Footer/>
    </div>
</div>
</template>

<script>
import Footer from '../footer/index.vue';
export default {
    name:'More',
    components: {
        Footer
    },
    data(){
        return{
            arr:[
                {
                    h21:'满N件折',img1:'./img/go橙@2x.1fbf935.png',h22:'图书满3件折上7折',h31:'活动时间：2019年8月1日-2019年8月5日',img2:'./img/4.jpg'
                },
                {
                    h21:'满额减',img1:'./img/go粉@2x.a67564c.png',h22:'图书满3件折上7折',h31:'活动时间：2019年8月1日-2019年8月5日',img2:'./img/4.jpg'
                },
                {
                    h21:'满额减',img1:'./img/go紫@2x.19428eb.png',h22:'图书满3件折上7折',h31:'活动时间：2019年8月1日-2019年8月5日',img2:'./img/4.jpg'
                },
                {
                    h21:'N元场',img1:'./img/go紫@2x.19428eb.png',h22:'图书满3件折上7折',h31:'活动时间：2019年8月1日-2019年8月5日',img2:'./img/4.jpg'
                }
            ]
        }
    }
}
</script>

<style>
    .more{
        width:100%;
        position:absolute;
        top:0rem;
        bottom:0.45rem;
        overflow-y:auto;
        background-image: url('../../../public/img/背景装饰@2x.5bbe557.png'),linear-gradient(#fd573e,#8d1452);
    }
    .more_m{
        cursor: pointer;
        height:1.64rem;
        width:3.68rem;
        margin:0.18rem auto 0;
        display: flex;
        background-image: url('../../../public/img/卡片-橙@2x.54e6a8b.png');
        background-size:100%;
    }
    .more_m .more_left{
        height:1.64rem;
        width:0.85rem;
        margin-left:0.08rem;
        text-align: center;
    }
    .more_m .more_right{
        width:2.65rem;
        height:1.64rem;
        text-align:center;
    }
    .more_m .more_left>h2{
        font-size:0.18rem;
        color:#fff;
        margin-top:0.24rem;
        width:0.55rem;
        margin-left:auto;
        margin-right:auto;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
    }
    .more_m .more_left .d{
        width:100%;
        display: flex;
    }
    .more_m .more_left>.d>img{
        width:0.62rem;
        height:0.24rem;
        margin-top:0.12rem;
        margin-left:0.1rem;
    }
    .more_right ul li img{
        width:0.65rem;
        height:0.65rem;
        /* display: flex; */
    }
    .more_right h2{
        margin-top:0.22rem;
        color:#ff4d35;
        font-weight:400;
        font-size:0.14rem;
        text-align: center;
    }
    .more_right h3{
        margin-top:0.1rem;
        color:#ff4e35;
        font-size:0.12rem;
    }
    .more_right ul{
        display: flex;
        margin-top:0.14rem;
        justify-content: space-around;
    }
</style>

