<template>
    <div class="wrapper">
        <navBar></navBar>
        <div v-if="loading" class="loader"><div></div></div>
        <carousel src_hd= "ed_car.mp4" src_mobile= "mobile4.mp4"></carousel>
        <section class="heading">
            <!-- Carousel h1-->
            <h1 v-scrollanimation>Contact...</h1>
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
        <div class="form--wrapper">
            <form
                v-scrollanimation
                action=""
                method="POST"
                class="contact anime-box1"
            >
                <div class="skew">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                    />
                </div>
                <div class="skew">
                    <input
                        type="text"
                        name="name"
                        id="secondname"
                        placeholder="Your second name"
                    />
                </div>
                <div class="skew">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                    />
                </div>
                <div class="skew-textarea">
                    <textarea
                        name="text"
                        id=""
                        placeholder="Your message"
                    ></textarea>
                </div>
                <button type="submit" name="submit" class="btn-news">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import carousel from '../components/carousel.vue';
import navBar from '../components/navBar.vue'
import loader from '../mixins/loader';

export default {
    components: { navBar, carousel },
    extends: loader,
};
</script>
