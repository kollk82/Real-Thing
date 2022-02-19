<template>
    <div class="wrapper">
        <navBar></navBar>
        <div v-if="loading" class="loader"><div></div></div>
        <carousel src_hd= "ed_car.mp4" src_mobile= "mobile3.mp4"></carousel>
        <section class="heading">
            <!-- Carousel h1-->
            <h1 v-scrollanimation>Case study...</h1>
            <div v-scrollanimation class="heading-box anime-box3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem nihil voluptatibus quas ipsam sed rerum nobis optio
                    eveniet placeat non.
                </p>
                <router-link to="/contact">
                    <button>
                        Read more...
                    </button></router-link
                >
            </div>
        </section>
        <div class="portfolio">
            <div class="section">
                <div class="section--box">
                    <div v-scrollanimation class="section--box-one">
                        <h1>1.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque minus aspernatur voluptates adipisci
                            tempora quas quis minima eveniet dolor fugit, odit
                            voluptas nisi, enim recusandae. Eos eum dolorem modi
                            magni?
                        </p>
                        <button class="btn">see more...</button>
                    </div>
                    <div v-scrollanimation class="section--box-two anime-box3">
                        <img src="img/imgs/logo.png" alt="logo" />
                    </div>
                </div>
                <div class="section--box">
                    <div v-scrollanimation class="section--box-one anime-box3">
                        <h1>2.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque minus aspernatur voluptates adipisci
                            tempora quas quis minima eveniet dolor fugit, odit
                            voluptas nisi, enim recusandae. Eos eum dolorem modi
                            magni?
                        </p>
                        <button class="btn">see more...</button>
                    </div>
                    <div v-scrollanimation class="section--box-two">
                        <img src="img/imgs/logo.png" alt="logo" />
                    </div>
                </div>
                <div class="section--box">
                    <div v-scrollanimation class="section--box-one anime-box1">
                        <h1>3.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque minus aspernatur voluptates adipisci
                            tempora quas quis minima eveniet dolor fugit, odit
                            voluptas nisi, enim recusandae. Eos eum dolorem modi
                            magni?
                        </p>
                        <button class="btn">see more...</button>
                    </div>
                    <div v-scrollanimation class="section--box-two anime-box3">
                        <img src="img/imgs/logo.png" alt="logo" />
                    </div>
                </div>
                <div class="section--box">
                    <div v-scrollanimation class="section--box-one anime-box3">
                        <h1>4.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque minus aspernatur voluptates adipisci
                            tempora quas quis minima eveniet dolor fugit, odit
                            voluptas nisi, enim recusandae. Eos eum dolorem modi
                            magni?
                        </p>
                        <button class="btn">see more...</button>
                    </div>
                    <div v-scrollanimation class="section--box-two">
                        <img src="img/imgs/logo.png" alt="logo" />
                    </div>
                </div>
                <div class="section--box">
                    <div v-scrollanimation class="section--box-one">
                        <h1>5.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque minus aspernatur voluptates adipisci
                            tempora quas quis minima eveniet dolor fugit, odit
                            voluptas nisi, enim recusandae. Eos eum dolorem modi
                            magni?
                        </p>
                        <button class="btn">see more...</button>
                    </div>
                    <div v-scrollanimation class="section--box-two anime-box3">
                        <img src="img/imgs/logo.png" alt="logo" />
                    </div>
                </div>
                <div class="section--box">
                    <div v-scrollanimation class="section--box-one anime-box3">
                        <h1>6.</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Neque minus aspernatur voluptates adipisci
                            tempora quas quis minima eveniet dolor fugit, odit
                            voluptas nisi, enim recusandae. Eos eum dolorem modi
                            magni?
                        </p>
                        <button class="btn">see more...</button>
                    </div>
                    <div v-scrollanimation class="section--box-two">
                        <img src="img/imgs/logo.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from '../components/carousel.vue';
import navBar from '../components/navBar.vue';
import loader from '../mixins/loader';

export default {
    components: { navBar, carousel },
    extends: loader,
};
</script>
