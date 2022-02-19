<template>
    <div class="wrapper">
        <navBar></navBar>
        <div v-if="loading" class="loader"><div></div></div>
        <carousel src_hd= "ed_car.mp4" src_mobile= "mobile2.mp4"></carousel>
        <section class="heading">
            <!-- Carousel h1-->
            <h1 v-scrollanimation>Our Story...</h1>
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
        <!-- INTRO -->
        <section class="intro">
            <main class="intro--description">
                <!-- Description what we are up to with svg, icons ect. -->
                <div class="box">
                    <div class="box-1">
                        <i
                            v-scrollanimation
                            class="fa-pencil-ruler icon-box anime-box1"
                        ></i>
                        <h2 v-scrollanimation>Web Design and Development</h2>
                        <p v-scrollanimation>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias delectus earum repellendus
                            doloribus, alias quod saepe itaque, accusantium at
                            perferendis et fugit illum illo consectetur ex ipsum
                            consequuntur corrupti accusamus!
                        </p>
                    </div>
                </div>
                <div class="box">
                    <div class="box-2">
                        <i
                            v-scrollanimation
                            class="fa-address-card icon-box-regular anime-box2"
                        ></i>
                        <h2 v-scrollanimation>Corporate Identity</h2>
                        <p v-scrollanimation>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias delectus earum repellendus
                            doloribus, alias quod saepe itaque, accusantium at
                            perferendis et fugit illum illo consectetur ex ipsum
                            consequuntur corrupti accusamus!
                        </p>
                    </div>
                </div>
                <div class="box">
                    <div class="box-3">
                        <i
                            v-scrollanimation
                            class="fa-globe-europe icon-box anime-box3"
                        ></i>
                        <h2 v-scrollanimation>
                            Seo, Marketing, and Social Media
                        </h2>
                        <p v-scrollanimation>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestias delectus earum repellendus
                            doloribus, alias quod saepe itaque, accusantium at
                            perferendis et fugit illum illo consectetur ex ipsum
                            consequuntur corrupti accusamus!
                        </p>
                    </div>
                </div>
            </main>
            <main class="intro--banner">
                <!-- Banner with some extra content and button to 'contact us' section -->
                <div v-scrollanimation class="intro--banner-box1">
                    <h2>Looking for Exclusive<br />Web Design Services?</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                    <router-link to="/contact">
                        <button>
                            Lets talk...
                        </button></router-link
                    >
                </div>
                <div class="intro--banner-box2">
                    <!-- Not so empty box -->
                    <div class="innerbox"></div>
                </div>
            </main>
        </section>
        <!-- PACKAGES -->
        <main class="cards">
            <!-- Packages section containing 3 cards -->
            <div class="cards--h1">
                <h1>Packages</h1>
            </div>
            <div class="cards--box">
                <div v-scrollanimation class="cards--box-card anime-box1">
                    <div class="card-logo logo1-img "></div>
                    <h2>Budget</h2>
                    <h1>&#x20AC;999</h1>
                    <div class="card-box">
                        <p>Maecenas posuere, purus eget eleifend.</p>
                        <p>Integer eu odio viverra, accumsan est.</p>
                        <p>Morbi non sem odio. Curabitur.</p>
                        <p>Fusce varius pellentesque mollis. In.</p>
                        <p>Aliquam erat volutpat. Suspendisse eget.</p>
                        <p>Vestibulum consectetur dignissim luctus. Nam.</p>
                        <p>Phasellus lobortis lorem a augue.</p>
                        <p>Nam non ante nec odio.</p>
                        <p>Sed feugiat semper efficitur. Sed.</p>
                        <p>Mauris hendrerit neque id metus.</p>
                    </div>
                    <button>
                        find out more..
                    </button>
                </div>
                <div v-scrollanimation class="cards--box-card card2 anime-box2">
                    <div class="card-logo logo2-img"></div>
                    <h2>Pro</h2>
                    <h1>&#x20AC;1499</h1>
                    <div class="card-box">
                        <p>Maecenas posuere, purus eget eleifend.</p>
                        <p>Integer eu odio viverra, accumsan est.</p>
                        <p>Morbi non sem odio. Curabitur.</p>
                        <p>Fusce varius pellentesque mollis. In.</p>
                        <p>Aliquam erat volutpat. Suspendisse eget.</p>
                        <p>Vestibulum consectetur dignissim luctus. Nam.</p>
                        <p>Phasellus lobortis lorem a augue.</p>
                        <p>Nam non ante nec odio.</p>
                        <p>Sed feugiat semper efficitur. Sed.</p>
                        <p>Mauris hendrerit neque id metus.</p>
                    </div>
                    <button class="btn btn-anime">find out more..</button>
                </div>
                <div v-scrollanimation class="cards--box-card anime-box3">
                    <div class="card-logo logo3-img"></div>
                    <h2>Exclusive</h2>
                    <h1>&#x20AC;2999</h1>
                    <div class="card-box ">
                        <p>Maecenas posuere, purus eget eleifend.</p>
                        <p>Integer eu odio viverra, accumsan est.</p>
                        <p>Morbi non sem odio. Curabitur.</p>
                        <p>Fusce varius pellentesque mollis. In.</p>
                        <p>Aliquam erat volutpat. Suspendisse eget.</p>
                        <p>Vestibulum consectetur dignissim luctus. Nam.</p>
                        <p>Phasellus lobortis lorem a augue.</p>
                        <p>Nam non ante nec odio.</p>
                        <p>Sed feugiat semper efficitur. Sed.</p>
                        <p>Mauris hendrerit neque id metus.</p>
                    </div>
                    <button>find out more..</button>
                </div>
            </div>
        </main>
        <section class="partners">
            <!-- Services or latest project or our partners -->
            <div class="partners--header">
                <h1>Our partners</h1>
            </div>
            <div v-scrollanimation class="partners--list anime-box1">
                <i class="fa-amazon brands"></i>
                <i class="fa-windows brands"></i>
                <i class="fa-apple brands"></i>
                <i class="fa-sass brands"></i>
                <i class="fa-vuejs brands"></i>
                <i class="fa-chrome brands"></i>
                <i class="fa-paypal brands"></i>
            </div>
            <div v-scrollanimation class="partners--footer anime-box3">
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h3>
            </div>
        </section>
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
