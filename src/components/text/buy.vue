<template>
<div>
    <div class="center">
        <!-- 标题头 -->
        <div class="title">
            <div class="left">
                <a href="">&lt;</a>
            </div>
            <p>值得买</p>
            <div class="right">
                <i @click='clickHandler'>...</i>
            </div>
        </div>
        <div :class="flags===true?'foot1':'flag'">
            <Footer/>
        </div>
        <!-- 导航 -->
        <div class="cloth">
            <ul>
                <li v-for='(item,index) in list1' :key='index'>
                    <a href="">
                        <img :src="item.img1" alt="">
                    </a>
                </li>
            </ul>
            <ul>
                <li v-for='(item,index) in list2' :key='index'>
                    <a href="">
                        <img :src="item.img2" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <!-- 促销专场 -->
        <div class="promotion">
            <div class="more">
                <span>促销专场</span>
                <a href="#/more">
                    更多
                    <i>></i>
                </a>
            </div>
            <div class="details">
                <ul class="lib">
                    <li v-for='(item,index) in list3' :key='index'>
                        <a href="">
                            <p>{{item.hed}}</p>
                            <span>{{item.title}}</span>
                            <img :src="item.img3" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 即刻秒杀 -->
        <div class="sale">
            <div class="more">
                <span>
                  <img src="../../../public/img/2.png" alt="">
                </span>
                <a href="">
                    更多
                    <i>></i>
                </a>
            </div>
            <div class="scor">
                <ul>
                    <li v-for='(item,index) in list4' :key='index'>
                        <a href="">
                            <img :src="item.img4" alt="">
                            <p class="p1">{{item.tex}}</p>
                            <p class="p2">{{item.newmoney}}</p>
                            <del>{{item.oldmoney}}</del>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i>></i>
                            <p>查看更多</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 排行 -->
        <div class="rank">
            <div class="rank1">
                畅销榜第15名
            </div>
            <a href="">
                <i>更多></i>
            </a>
            <div class="rank2">
                <img src="../../../public/img/1.jpg" alt="">
                <ul>
                    <li>
                        <h2>写给儿童的中国地理（全14册）</h2>
                        <h3>满N件打折</h3>
                        <span>￥324.90</span>
                        <del>￥392.00</del>
                        <h4>
                            <em><i class="iconfont icon-Bag">234564</i></em>
                            <em><i class="iconfont icon-youhui">2134</i></em>
                            <i class="iconfont icon-gouwuche gwc"></i>
                        </h4>
                    </li>
                </ul>
            </div>
        </div>
        <div class="rank">
            <div class="rank1">
                畅销榜第15名
            </div>
            <a href="">
                <i>更多></i>
            </a>
            <div class="rank2">
                <img src="../../../public/img/1.jpg" alt="">
                <ul>
                    <li>
                        <h2>写给儿童的中国地理（全14册）</h2>
                        <h3>满N件打折</h3>
                        <span>￥324.90</span>
                        <del>￥392.00</del>
                        <h4>
                            <em><i class="iconfont icon-Bag">234564</i></em>
                            <em><i class="iconfont icon-youhui">2134</i></em>
                            <i class="iconfont icon-gouwuche gwc"></i>
                        </h4>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="">
            <Footer/>
    </div>
</div>
</template>

<script>
import Footer from '../footer/index.vue'
export default {
    name:'Buy',
    components: {
        Footer
    },
    data(){
        return{
            flags:false,
            list1:[
                {img1:'./img/5.png'},
                {img1:'./img/6.png'},
                {img1:'./img/7.png'},
                {img1:'./img/8.png'},
                {img1:'./img/14.png'}
            ],
            list2:[
                {img2:'./img/10.png'},
                {img2:'./img/11.png'},
                {img2:'./img/12.png'},
                {img2:'./img/13.png'},
                {img2:'./img/9.png'}
            ],
            list3:[
                {title:'图书满3件折上7折',img3:'http://img3m5.ddimg.cn/56/4/23761145-1_b_5.jpg'},
                {hed:'教辅',title:'每满79减30',img3:'http://img3m8.ddimg.cn/61/18/25100818-1_b_3.jpg'},
                {hed:'外语考试',title:'每满100减30',img3:'http://img3m8.ddimg.cn/34/12/27890908-1_b_5.jpg'},
                {title:'8月49元5件',img3:'http://img3m5.ddimg.cn/56/4/23761145-1_b_5.jpg'},
                {title:'8.2出清V3.0',img3:'http://img3m0.ddimg.cn/86/16/1433010830-1_b_5.jpg'},
                {title:'周末有一套 下单9.99元',img3:'http://img3m8.ddimg.cn/34/12/27890908-1_b_5.jpg'}
            ],
            list4:[
                {img4:'https://img3x4.ddimg.cn/86/26/1504068674-1_h.jpg',tex:'冷感运动毛巾吸汗男女跑步健身房篮球冰凉巾街舞速干擦汗巾护腕巾',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/31/20/22927144-1_h.jpg',tex:'5年中考满分作文：阅卷老师最喜欢的300篇',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/31/20/1506552034-1_h.jpg',tex:'【超火网红爆款】波点雪纺连衣裙2019新款夏甜美收腰显瘦气质流行裙子仙女超仙森系',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/86/26/1504068674-1_h.jpg',tex:'可爱多湿巾婴儿湿巾小包新生儿手口宝宝随身便携装湿纸巾25抽8包',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/86/26/1504068674-1_h.jpg',tex:'冷感运动毛巾吸汗男女跑步健身房篮球冰凉巾街舞速干擦汗巾护腕巾',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/31/20/22927144-1_h.jpg',tex:'5年中考满分作文：阅卷老师最喜欢的300篇',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/31/20/1506552034-1_h.jpg',tex:'【超火网红爆款】波点雪纺连衣裙2019新款夏甜美收腰显瘦气质流行裙子仙女超仙森系',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/86/26/1504068674-1_h.jpg',tex:'可爱多湿巾婴儿湿巾小包新生儿手口宝宝随身便携装湿纸巾25抽8包',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/86/26/1504068674-1_h.jpg',tex:'可爱多湿巾婴儿湿巾小包新生儿手口宝宝随身便携装湿纸巾25抽8包',newmoney:'￥1.00',oldmoney:'￥69'},
                {img4:'https://img3x4.ddimg.cn/31/20/1506552034-1_h.jpg',tex:'【超火网红爆款】波点雪纺连衣裙2019新款夏甜美收腰显瘦气质流行裙子仙女超仙森系',newmoney:'￥1.00',oldmoney:'￥69'}
            ]
        }
    },
    methods: {
        clickHandler(){
            this.flags=!this.flags;
        }
    }

}
</script>

<style>
body{
    background: #f8f8f8;
}
    .center{
        width:100%;
        position:absolute;
        top:0rem;
        bottom:0.45rem;
        overflow-y:auto;
    }
    .title{
        width:100%;
        height:0.45rem;
        display: flex;
        background-color:#fff;
        border-bottom:1px solid #d8d8d8;
        justify-content: space-between;
        align-items: center;
    }
    .title>p{
        font-size: 0.16rem;
        color: #333;
    }
    .left{
        height:100%;
        width:0.4rem;
        line-height: 0.45rem;
        text-align: center;
    }
    .left>a{
        font-size: 0.3rem;
        color:gray;
    }
    .right{
        height:100%;
        width:0.4rem;
        color: #333;
    }
    .right>i{
        font-size: 0.4rem;
        line-height: 0.2rem;
        color:gray;
    }
    /* 导航 */
    .cloth{
        width:100%;
        height:1.52rem;
        display: flex;
        flex-wrap: wrap;
    }
    .cloth>ul{
        height:0.78rem;
        width:100%;
        background: #fff;
        display: flex;
        border-bottom: 1px solid #eee;
    }
    .cloth>ul>li{
        border-right:1px solid #eee;
    }
    .cloth>ul>li>a>img{
        display: block;
        width:0.74rem;
        height:0.78rem;
    }
    .cloth>ul>li:last-child{
        border-right:none;
    }
    .cloth>ul:last-child{
        width:100%;
        display: flex;
        height:0.74rem;
    }
    .cloth>ul:last-child>li>a>img{
        display: block;
        width:0.74rem;
        height:0.74rem;
    }
    /* 促销专场 */
    .promotion{
        width:100%;
        height:3.4rem;
        background: url('../../../public/img/3.png');
        padding:0 0.13rem 0;
    }
    .more{
        height: 0.385rem;
        line-height: 0.16rem;
        color: #fff;
        align-items: center;
        text-align: center;
        padding:0.14rem 0 0.05rem;
        font-size: 0.18rem;
    }
    .more>span{
        margin-left:0.5rem;
    }
    .more>span>img{
        height:0.16rem;
        width:1.2rem;
    }
    .more>a{
        color: #fff;
        font-size: 0.13rem;
        float: right;
    }
    .more>a>i{
        font-size:0.18rem;
    }
    .details{
        width: 100%;
        height:2.9rem;
        display: flex;
        flex-wrap: wrap;
        color: #565656;
    }
    .details>.lib{
        width:100%;
        height:1.38rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .details>.lib>li{
        background: #fff;
        height:1.38rem;
        width:1.12rem;
        padding: 0.1rem 0.1rem 0.05rem;
        text-align: center;
        box-shadow: 0 0.06rem 0.13rem 0 rgba(239,103,137,.26);
        border-radius:0.08rem;
        margin-top: 0.06rem;
    }
    .details>.lib>li>a>span{
        font-size:0.14rem;
        color:#943dff;
        display:inline-block;
        height:0.4rem;
        line-height: 0.2rem;
    }
    .details>.lib>li:nth-child(2) a span{
        height:0.2rem;
    }
    .details>.lib>li:nth-child(3) a span{
        height:0.2rem;
    }
    .details>.lib>li>a>p{
        font-size: 0.15rem;
        color: #565656;
    }
    .details>.lib>li>a>img{
        display:inline-block;
        width:0.74rem;
        height:0.74rem;
    }

    /* 秒杀 */
    .sale{
        height:2.36rem;
        width:100%;
        background:url("../../../public/img/1.png");
    }
    .sale>.more{
        height:0.5rem;
    }
    .scor{
        height:1.74rem;
        width:100%;
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        font-weight: bold;
    }
    .scor>ul{
        height:100%;
        width:100%;
        display: flex;
        font-size: 0.12rem;
    }
    .scor>ul>li:first-child{
        margin-left:0.1rem;
    }
    .scor>ul>li{
        height:100%;
        flex-shrink:0;
        width:1rem;
        margin-right:0.1rem;
        background: #fff;
        padding-bottom:0.08rem;
        border-radius:0.05rem;
    }
    .scor>ul>li>a>img{
        width:1rem;
        height:1.04rem;
        border-radius:0.05rem;
    }
    .scor>ul>li>a> .p1{
        height:0.16rem;
        width:0.7rem;
        color:rgb(136, 134, 134);
        margin-top: 0.05rem;
        margin-left:0.1rem;
        margin-right:0.12rem;
        text-overflow: ellipsis;
         white-space: nowrap;
        overflow: hidden;
    }
    .scor>ul>li>a> .p2{
        width: 100%;
        height:0.2rem;
        font-weight:2.5rem;
        font-size:0.16rem;
        color: red;
        text-align: center;
    }
    .scor>ul>li>a>del{
        color:rgb(136, 134, 134);
        font-size: 0.12rem;
        text-align: center;
        display: block;
    }
    .scor>ul>li:last-child{
        height:1.1rem;
        width:0.88rem;
        /* border:1px solid paleturquoise; */
        margin-top:0.6rem;
        text-align: center;
        background: transparent;
    }
    .scor>ul>li:last-child a{
        height:100%;
        width:100%;
        display: block;
    }
    .scor>ul>li:last-child>a>i{
        display: block;
        width:0.14rem;
        height:0.14rem;
        background: #fff;
        line-height: 0.14rem;
        color: red;
        border-radius:25%;
        font-size:0.16rem;
        margin-left: 0.34rem;
    }
    .scor>ul>li:last-child>a>p{
        margin-top: 0.05rem;
        color:#fff;
        font-size:0.12rem;
    }
    /* 畅销榜 */
    .rank{
        width:100%;
        height:1.74rem;
        font-size:0.14rem;
        color: #565656;
        background: #fff;
        margin-top:0.08rem;
        padding:0.08rem 0;
        margin:0.1rem 0 0;
    }
    .rank>.rank1{
        float: left;
        height:0.24rem;
        width:1.06rem;
        display: block;
        color: #fff;
        background-image: linear-gradient(133deg,#f296bd,#ee3b31);
        padding: 0.02rem 0.05rem;
        border-radius:0 0 0.1rem 0;
        margin-bottom: 0.08rem;
    }
    .rank a{
        height:0.48rem;
        width: 0.16rem;
    }
    .rank a i{
        float: right;
        margin-right:0.03rem;
        color:#a1a1a1;
        font-size:0.12rem;
    }
    .rank .rank2{
        height:1.28rem;
        width:100%;
        display: flex;
        padding:0.09rem 0.06rem;
        cursor: pointer;
    }
    .rank .rank2 img{
        width:1.1rem;
        height:1.1rem;
    }
    .rank .rank2 ul{
        width:2.43rem;
        height:1.1rem;
        margin-left:0.1rem;
    }
    .rank .rank2 ul li h2{
        color:#383838;
        margin-top: 0.05rem;
        height:0.2rem;
        width: 2.4rem;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 0.14rem;
        margin-bottom: 0.05rem;
        line-height: 1;
    }
    .rank .rank2 ul li h3{
        width:1rem;
        height:0.2rem;
        font-size:0.14rem;
        text-align: center;
        line-height:0.2rem;
        border-radius:0.05rem;
        background:#f2303c;
        color:#fff;
        cursor: pointer;
    }
    .rank .rank2 ul li span{
        float: left;
        margin-top:0.05rem;
        color:#f23440;
        font-weight: 400;
        font-size: inherit;
        line-height: normal;
    }
    .rank .rank2 ul li del{
        float: left;
        margin-top:0.05rem;
        color: #777;
        font-size:0.12rem;
        padding:0 0.1rem 0 0.12rem;
    }
    .rank .rank2 ul li h4{
        height:0.17rem;
        width:100%;
        display: flex;
        justify-content: space-around;
        margin-top:0.3rem;
        font-size:0.12rem;
        align-items: center;
    }
    .rank .rank2 ul li h4 em:first-child{
        margin-left:0.82rem;
    }
    .rank .rank2 ul li h4 em i{
        font-size:0.12rem;
    }
    .rank .rank2 ul li h4 .gwc{
        color:#f22b2b;
        border:1px solid #d5d5d5;
        border-radius:0.05rem;
        padding:0.02rem;
        font-size: 0.18rem;
        margin-left: 0.2rem;
    }

    /* .foot1>.foot{
        position: relative; */
        /* display: none; */
    /* }*/
    .foot1{
        height:0.45rem;
        width:100%;
    }
    .foot1 .foot{
        top:0.45rem;
    }
    .flag{
         display: none;
    }
</style>


