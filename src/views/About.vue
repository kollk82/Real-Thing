<template>
    <div class="wrapper">
        <navBar></navBar>
        <div v-if="loading" class="loader"><div></div></div>
        <carousel src_hd= "ed_car.mp4" src_mobile= "mobile.mp4"></carousel>
        <section class="heading">
            <!-- Carousel h1-->
            <h1 v-scrollanimation>Our Team...</h1>
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
        <div class="about">
            <div class="about--team">
                <div class="about--team-box box-img1">
                    <div v-scrollanimation class="box--img">
                        <img src="img/imgs/designer.png" alt="Designer" />
                    </div>
                </div>
                <div class="about--team-box box-list1">
                    <h2 v-scrollanimation>Design</h2>
                    <ul v-scrollanimation>
                        <li>
                            <p><span>&#10094;</span>Project manager</p>
                        </li>
                        <li>
                            <p><span>&#10094;</span>SEO</p>
                        </li>
                        <li>
                            <p><span>&#10094;</span>lorem ipsum impum lorem</p>
                        </li>
                        <li>
                            <p><span>&#10094;</span>lorem ipsum impum lorem</p>
                        </li>
                    </ul>
                </div>
                <div class="about--team-box box-list2">
                    <h2 v-scrollanimation>Development</h2>
                    <ul v-scrollanimation>
                        <li>
                            <p>
                                Front-End web development<span>&#10095;</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Back-End web development&nbsp;&nbsp;<span
                                    >&#10095;</span
                                >
                            </p>
                        </li>
                        <li>
                            <p>
                                WordPress, Shopify, AWS&nbsp;&nbsp;&nbsp;<span
                                    >&#10095;</span
                                >
                            </p>
                        </li>
                        <li>
                            <p>Custom websites<span>&#10095;</span></p>
                        </li>
                    </ul>
                </div>
                <div class="about--team-box box-img2">
                    <div v-scrollanimation class="box--img">
                        <img
                            src="img/imgs/web-developer.png"
                            alt="Web-Develpoer"
                        />
                    </div>
                </div>
            </div>
            <div class="about--wedo">
                <h1>What do we do?</h1>
                <div class="about--wedo-box">
                    <div class="wedo-txt">
                        <h2 v-scrollanimation>lorem inpummm</h2>
                        <i v-scrollanimation
                            >"Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit."</i
                        >
                        <p v-scrollanimation>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Reiciendis nulla natus quos, alias odio vero
                            necessitatibus quisquam quod autem non minima, enim
                            debitis aliquam dignissimos distinctio tenetur
                            blanditiis officiis architecto.
                        </p>
                    </div>
                    <div v-scrollanimation class="wedo-img">
                        <img src="img/imgs/designer.png" alt="" />
                        <h4>
                            &#8220;Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.&#8221;
                        </h4>
                    </div>
                </div>
                <div class="about--wedo-box">
                    <div class="wedo-txt">
                        <h2 v-scrollanimation>lorem inpummm</h2>
                        <i v-scrollanimation
                            >"Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit."</i
                        >
                        <p v-scrollanimation>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Reiciendis nulla natus quos, alias odio vero
                            necessitatibus quisquam quod autem non minima, enim
                            debitis aliquam dignissimos distinctio tenetur
                            blanditiis officiis architecto.
                        </p>
                    </div>
                    <div v-scrollanimation class="wedo-img">
                        <img src="img/imgs/designer.png" alt="" />
                        <h4>
                            &#8220;Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.&#8221;
                        </h4>
                    </div>
                </div>
                <div class="about--wedo-box">
                    <div class="wedo-txt">
                        <h2 v-scrollanimation>lorem inpummm</h2>
                        <i v-scrollanimation
                            >"Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit."</i
                        >
                        <p v-scrollanimation>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Reiciendis nulla natus quos, alias odio vero
                            necessitatibus quisquam quod autem non minima, enim
                            debitis aliquam dignissimos distinctio tenetur
                            blanditiis officiis architecto.
                        </p>
                    </div>
                    <div v-scrollanimation class="wedo-img">
                        <img src="img/imgs/designer.png" alt="" />
                        <h4>
                            &#8220;Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.&#8221;
                        </h4>
                    </div>
                </div>
                <div class="about--wedo-box">
                    <div class="wedo-txt">
                        <h2 v-scrollanimation>lorem inpummm</h2>
                        <i v-scrollanimation
                            >"Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit."</i
                        >
                        <p v-scrollanimation>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Reiciendis nulla natus quos, alias odio vero
                            necessitatibus quisquam quod autem non minima, enim
                            debitis aliquam dignissimos distinctio tenetur
                            blanditiis officiis architecto.
                        </p>
                    </div>
                    <div v-scrollanimation class="wedo-img">
                        <img src="img/imgs/designer.png" alt="" />
                        <h4>
                            &#8220;Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.&#8221;
                        </h4>
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
