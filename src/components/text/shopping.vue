<template>
    <div class="shopping">
        <div class="shopping_top">
            <a href="">
                <img src="../../../public/img/back.png" alt="">
            </a>
            <ul>
                <li v-for='(item,index) in arrs' :key='index' @click="clickColor(index)" :class="indexs==index?'active':''">{{item}}</li>
            </ul>
            <i>...</i>
        </div>
        <div class="shopping_cotent">
            <img src="../../../public/img/redpct_icon-1541561310.gif" alt="">
            <div class="shopping_cont">
                <img src="../../../public/img/dd_app.jpg" alt="">
            </div>
            <div class="lunbo">
                <a-carousel autoplay>
                    <div><h3><img src="../../../public/img/23761145-1_e_5.jpg" alt=""></h3></div>
                    <div><h3><img src="../../../public/img/23761145-1_e_5.jpg" alt=""></h3></div>
                </a-carousel>
            </div>
            <div class="item_shop">
                <div class="item_shopt">
                    <p> 人间失格（日本小说家太宰治的自传体小说，李现推荐）</p>
                </div>
                <div class="item_shopz">
                    超燃！“丧文化”流行，《人间失格》成了现象级畅销书，创当当3天销售50000+册的奇迹！收录作者绝笔之作《Good bye》。一个“丧失为人资格”少年的心灵独白，一个对村上春树影响至深的绝望凄美故事。
                </div>
                <div class="item_shopp">
                    <div class="item_price">
                        <div class="item_new">
                            <div class="item_left">￥14.00</div>
                            <span>(5.60折)</span>
                        </div>
                        <div class="item_tongzhi">
                            <a href="">降价通知</a>
                        </div>
                        <div class="item_dianzi">电子书￥4.99</div>
                    </div>
                    <div class="item_dingjia">
                        <h3>定价</h3>
                        <del>￥25.00</del>
                    </div>
                </div>
            </div>
            <div class="shop_xing">
                <div class="left">
                    <div class='left1'>
                        <i>9.6</i>
                        <div class="left_1">
                            <!-- <a-rate v-model='value'/>星星评价 -->
                        </div>
                    </div>
                    <h3>
                        132297人评分
                        <span>精彩评分送积分</span>
                    </h3>
                </div>
                <div class="right">我要评论</div>
            </div>
            <div class="shop_cuxiao">
                <div class="shop_ten">
                    <div class="shop_cu">促销</div>
                    <div class="shop_xiao">
                        <ul>
                            <li>
                                <span>满N件折</span>
                                <i>满3件7折</i>
                            </li>
                            <li>
                                <span>加购价</span>
                                <i>加2.40~19.90元换购热销商品</i>
                            </li>
                            <li>
                                <span>加购价</span>
                                <i>加2.40~19.90元换购热销商品</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="shop_auto">
                <ul>
                    <li>
                        <span>作者</span>
                        <span>(日)太宰治 著，杨伟 译</span>
                        <span>查看作品</span>
                    </li>
                    <li>
                        <span>作者</span>
                        <span>(日)太宰治 著，杨伟 译</span>
                        <span>查看作品</span>
                    </li>
                    <li>
                        <span>作者</span>
                        <span>(日)太宰治 著，杨伟 译</span>
                        <span>查看作品</span>
                    </li>
                    <li>
                        <span>作者</span>
                        <span>(日)太宰治 著，杨伟 译</span>
                        <span>查看作品</span>
                    </li>
                </ul>
            </div>
            <div class="shop_opt">已选人间失格</div>
            <div class="shop_opt1">
                <div class="shop_opt2">
                    <img src="../../../public/img/23761145-1_h_5.jpg" alt="">
                    <div class="shop2">
                        <p>14.00</p>
                        <h4>已选 人间失格</h4>
                    </div>
                </div>
                <ul>
                    <li>金银岛</li>
                    <li>王子与贫儿</li>
                    <li>消失的地平线</li>
                </ul>
            </div>
            <div class="shop_num">

            </div>
        </div>
        <div class="shopping_footer">
            <ul>
                <li>
                    <i class="iconfont icon-shouye"></i>
                    <span>店铺</span>
                </li>
                <li>
                    <i class="iconfont icon-shouye"></i>
                    <span>收藏</span>
                </li>
                <li>
                    <i class="iconfont icon-shouye"></i>
                    <span>购物车</span>
                </li>
            </ul>
            <div class="shop_buy">
                <h4>立即抢购</h4>
                <h4>加入购物车</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Shopping',
    data(){
        return{
            arrs:['商品','详情','评论','推荐'],
            indexs:0,
            value: 2
        }
    },
    methods: {
        clickColor(index){
            this.indexs=index;
        }
    }
}
</script>

<style>
    .shopping_cotent>img{
        position:fixed;
        height:0.5rem;
        width:0.5rem;
        right:0.1rem;
        top:5rem;
    }
    html,body,.shopping{height:100%;width:100%;}
    *{box-sizing: border-box;}
    .active{
        color:rgb(255,129,97);
        border-bottom: 3px solid rgb(255,129,97);
    }
    .shopping_top{
        top:0;
        height:0.44rem;
        width:100%;
        display: flex;
        position: absolute;
        background: pink;
    }
    .shopping_cotent{
        width:100%;
        position:absolute;
        top:0.44rem;
        bottom:0.51rem;
        overflow-y:auto;
    }
    .shopping_footer{
        width: 100%;
        position: absolute;
        bottom:0;
        height: 0.51rem;
    }
    /* 顶部导航 */
    .shopping_top a{
        width:0.4rem;
        height: 0.44rem;
        display: flex;
        align-items: center;
    }
    .shopping_top a img{
        height:0.18rem;
        width: 0.18rem;
        margin-left:0.1rem;
    }
    .shopping_top ul{
        color: rgb(60,60,60);
        height:0.44rem;
        width:2.31rem;
        display: flex;
        margin:0 0.4rem;
        justify-content:space-around;
        align-items: center;
    }
    .shopping_top ul li{
        height:0.42rem;
        width:0.44rem;
        line-height: 0.44rem;
        font-size:0.16rem;
        text-align: center;
    }
    .shopping_top i{
        font-size: 0.4rem;
        line-height: 0.2rem;
        color:gray;
    }

    /*  中间详情*/
    .shopping_cotent .shopping_cont{
        height:0.5rem;
        width:100%;
    }
    .shopping_cotent .shopping_cont img{
        width:100%;
        height:100%;
    }
    .shopping_cotent .lunbo{
        height:3.75rem;
        width:100%;
    }
    .shopping_cotent .lunbo .ant-carousel{
        height:100%;
        width:100%;
    }
    .shopping_cotent .lunbo .ant-carousel .slick-slide {
        text-align: center;
        display: block;
        height:3.75rem;
        width:100%;
        line-height:3.75rem;
        background: #364d79;
        overflow: hidden;
    }
    .shopping_cotent .lunbo .ant-carousel .slick-slide h3 {
        color: #fff;
    }
    .shopping_cotent .lunbo .ant-carousel .slick-slide h3 img{
        height:3.75rem;
        width:100%;
        display: block;
    }
    .shopping_cotent .item_shop{
        height:1.85rem;
        width:100%;
        /* border:1px solid rebeccapurple; */
        border-top: 1px solid #ddd;
        margin-bottom:0.04rem;
        padding-bottom: 0.12rem;
        background-color:white;
        padding-top:0.06rem;
        position: relative;
    }
    .shopping_cotent .item_shop .item_shopt{
        height:0.38rem;
        width:3.55rem;
        /* border:1px solid red; */
        display: flex;
        margin:0.05rem 0.1rem 0.05rem;
        background:url('../../../public/img/icon_zy.png') no-repeat;
        background-size:0.6rem 0.2rem;
        padding-left:0.6rem;
        background-position:0.01rem 0.01rem;
    }
    .shopping_cotent .item_shop .item_shopt p{
        margin-left:0.1rem;
        font-size:0.14rem;
        color: #4d525d;
    }
    .shopping_cotent .item_shop .item_shopz{
        height:0.57rem;
        width:3.55rem;
        /* border:1px solid palevioletred; */
        margin:0.05rem 0.1rem 0.05rem;
        color: rgb(150,150,150);
        display: flex;
        -webkit-box-orient: vertical;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size:0.12rem;
    }
    .shopping_cotent .item_shop .item_shopp{
        height:0.57rem;
        width:3.55rem;
        /* border:1px solid palevioletred; */
        margin:0 0.1rem;
    }
    .shopping_cotent .item_shop .item_shopp .item_price{
        height:0.24rem;
        width:100%;
        /* background:palegreen; */
    }
    .shopping_cotent .item_shop .item_shopp .item_price .item_new{
        height:100%;
        width:1.1rem;
        display: flex;
        float: left;
    }
    .shopping_cotent .item_shop .item_shopp .item_price .item_new .item_left{
        width:0.65rem;
        height:100%;
        color: #ff463c;
        font-size: 0.18rem;
    }
    .shopping_cotent .item_shop .item_shopp .item_price .item_new span{
        height:0.16rem;
        width:0.46rem;
        font-size:0.12rem;
        margin: auto;
    }
    .shopping_cotent .item_shop .item_shopp .item_price .item_tongzhi a{
        height:0.24rem;
        width:0.8rem;
        float:left;
        border:1px solid red;
        display: flex;
        border-radius:0.1rem;
        justify-content: center;
        margin-left:0.1rem;
    }
    .shopping_cotent .item_shop .item_shopp .item_price .item_dianzi{
        width:0.86rem;
        height:0.22rem;
        float: right;
        text-align: center;
        line-height: 0.22rem;
        color: #ff8161;
        font-size:0.14rem;
    }
    .shopping_cotent .item_shop .item_shopp .item_dingjia{
        width:100%;
        height:0.24rem;
        display: flex;
        color: #969696;
        padding-top:0.1rem;
        font-size: 0.12rem;
    }
    .shopping_cotent .item_shop .item_shopp .item_dingjia h3{
         color: #969696;
         font-size:0.14rem;
    }

    .shopping_cotent .shop_xing{
        height:0.625rem;
        align-items: center;
        width:100%;
        display: flex;
        justify-content: space-between;
        /* border:1px solid royalblue; */
        background-color: rgb(248,248,248);
        padding:0.04rem 0.1rem 0  0.1rem;
    }
    .shopping_cotent .shop_xing .left{
        height:0.36rem;
        width:1.7rem;
        /* border:1px solid black; */
    }
    .shopping_cotent .shop_xing .left .left1{
        height:0.16rem;
        width:100%;
        display: flex;
    }
    .shopping_cotent .shop_xing .left .left1 i{
        height:0.14rem;
        width:0.2rem;
        color: #ff8161;
        font-weight: bold;
        font-size:0.14rem;
    }
    .shopping_cotent .shop_xing .left .left1 .left_1{
        height:0.14rem;
        width:1.02rem;
        padding-left: 0.2rem;
    }
    .shopping_cotent .shop_xing .left h3{
        height:0.2rem;
        width:100%;
        color:#ff463c;
        font-size: 0.12rem;
    }
    .shopping_cotent .shop_xing .right{
        width:0.82rem;
        height:0.32rem;
        border:1px solid #ff8161;
        background:#fff2ef;
        color:#ff8161;
        border-radius: 0.25rem;
        text-align: center;
        line-height:0.32rem;
    }
    /* 促销 */
    .shopping_cotent .shop_cuxiao{
        height:1.04rem;
        width: 100%;
        margin-bottom:0.02rem;
        background:white;
        /* border:1px solid palegreen; */
    }
    .shopping_cotent .shop_cuxiao .shop_ten{
        height:100%;
        width:3.65rem;
        /* border:1px solid red; */
        margin-left:0.1rem;
        display: flex;
    }
    .shopping_cotent .shop_cuxiao .shop_ten .shop_cu{
        height:0.36rem;
        width:0.36rem;
        text-align: center;
        line-height:0.36rem;
        color: #ea002a;
        font-size:0.16rem;
        margin-right:0.1rem;
    }
    .shopping_cotent .shop_cuxiao .shop_ten .shop_xiao{
        width:3.28rem;
        height:100%;
        /* background:palegoldenrod; */
    }
    .shopping_cotent .shop_cuxiao .shop_ten .shop_xiao ul{
        height:100%;
        width:2.95rem;
        padding-top:0.1rem;
    }
    .shopping_cotent .shop_cuxiao .shop_ten .shop_xiao ul li{
        height:0.2rem;
        width:100%;
        margin-bottom: 0.1rem;
        font-size:0.12rem;
    }
    .shopping_cotent .shop_cuxiao .shop_ten .shop_xiao ul li span{
        border:1px solid red;
        border-radius:15%;
        color: #ea002a;
        margin-right:0.1rem;

    }
    .shopping_cotent .shop_auto{
        width:100%;
        height:1.81rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        background-color: white;
        margin-bottom:0.02rem;
    }
    .shopping_cotent .shop_auto ul{
        height:100%;
        width:100%;
    }
    .shopping_cotent .shop_auto ul li{
        height:0.45rem;
        width:3.55rem;
        margin-right:0.1rem;
        margin-left:0.1rem;
        padding-top:0.1rem;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid rgb(223,223,223);
    }
    .shopping_cotent .shop_auto ul li:last-child{
        border:none;
    }
     .shopping_cotent .shop_auto ul li span:first-child{
        color: #969696;
        display: block;
        float: left;
        width: 15%;
        padding-left: 2%;
    }
    .shopping_cotent .shop_auto ul li span:nth-child(2){
        display: block;
        float: left;
        width: 55%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .shopping_cotent .shop_auto ul li span:last-child{
        color: #969696;
        display: block;
        float: left;
        text-align: right;
        width: 20%;
        font-size:0.14rem;
        }
    .shopping_cotent .shop_opt{
        height:0.44rem;
        width:100%;
        padding:0.1rem;
        color: #4d525d;
        background:url('../../../public/img/menu.png') no-repeat;
        background-position:3.4rem 0.16rem;
        background-size:0.2rem;
    }
    /* .shopping_cotent .shop_opt i{

    } */
    .shopping_cotent .shop_opt1{
        width:100%;
        height:5.3rem;
        border:1px solid red;
        padding-bottom:0.1rem;
    }
    .shopping_cotent .shop_opt1 .shop_opt2{
        height:0.5rem;
        width:3.55rem;
        display: flex;
        margin:0.1rem 0.1rem 0 0.1rem;
    }
    .shopping_cotent .shop_opt1 .shop_opt2 img{
        height:0.5rem;
        width:0.5rem;
        margin-right:0.2rem;
    }
    .shopping_cotent .shop_opt1 .shop_opt2 p{
        color:rgb(255,129,97);
        height:0.24rem;
        width:0.82rem;
    }
    .shopping_cotent .shop_opt1 .shop_opt2 h4{
        font-size:0.14rem;
    }
    .shopping_cotent .shop_opt1 ul{
        height:4.5rem;
        width:100%;
        /* border:1px solid red; */
        padding-right:0.1rem;
        padding-left: 0.1rem;
        display: flex;
        flex-wrap: wrap;
    }
    .shopping_cotent .shop_opt1 ul li{
        margin-right: 0.1rem;
    }
    .shopping_cotent .shop_opt1 ul li:nth-child(1){
        height:0.3rem;
        width:0.67rem;
        border:1px solid red;
        text-align: center;
        background:#f8f8f8;
        border-radius:0.1rem;
    }
    .shopping_cotent .shop_opt1 ul li:nth-child(2){
         height:0.3rem;
         width:0.92rem;
         border:1px solid red;
         border-radius:0.1rem;
    }
    .shopping_cotent .shop_opt1 ul li:nth-child(3){
        height:0.3rem;
         width:0.92rem;
         border:1px solid red;
         border-radius:0.1rem;
    }
    .shopping_cotent .shop_num{
        height:0.52rem;
        width:100%;
        border-top: 1px solid red;
        border-bottom: 1px solid #ddd;
        background-color: white;
        padding:0.1rem;
    }
    .shopping_footer ul{
        height:100%;
        width:1.58rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        float: left;
    }

    .shopping_footer ul li{
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .shopping_footer .shop_buy{
        height:100%;
        width:2.17rem;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* border:1px solid yellowgreen */
    }
    .shopping_footer .shop_buy h4:nth-child(1){
        height:100%;
        width:50%;
        line-height: 0.51rem;
        background:yellowgreen;
    }
    .shopping_footer .shop_buy h4:nth-child(2){
        height:100%;
        width:50%;
        line-height: 0.51rem;
        background:yellow;
    }
</style>