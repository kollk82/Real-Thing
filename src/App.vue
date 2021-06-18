<template>
    <!-- GOODIES CONTAINER -->
    <div class="container">
        <!-- HEADER -->
        <header class="header">
            <section class="header--top">
                <!-- Bar for social -> phone , email, ect -->
                <a href="https://www.linkedin.com" target="_blank">
                    <i class="fa-linkedin brands"></i
                ></a>
                <a href="http://www.facebook.com" target="_blank"
                    ><i class="fa-facebook-square brands"></i
                ></a>
                <i class="fa-envelope solid"></i>
                <h4>ceo@eagledesign.com</h4>
                <i class="fa-phone-square-alt solid"></i>
                <h4>085 124 1929</h4>
            </section>
            <section class="header--logo"></section>
            <section class="header--nav">
                <!-- Navigation bar -->
                <div class="header--nav-icon icon" @click="show = !show"></div>
                <transition
                    name="custom-classes-transition"
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                >
                    <nav class="header--nav-box" v-if="show">
                        <div class="header--nav-box_box">
                            <router-link class="nav-header" to="/"
                                >Home</router-link
                            >
                        </div>
                        <div class="header--nav-box_box">
                            <router-link class="nav-header" to="/about"
                                >About</router-link
                            >
                        </div>
                        <div class="header--nav-box_box">
                            <a class="nav-header" @click="collapse = !collapse"
                                >Our Service<span>^</span></a
                            >
                            <transition
                                name="custom-classes-transition"
                                enter-active-class="animate__animated animate__fadeIn"
                                leave-active-class="animate__animated animate__fadeOut"
                            >
                                <ul v-if="collapse">
                                    <li>
                                        <router-link to="/services/webdesign"
                                            >Web Design</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link
                                            to="/services/web-development"
                                            >Web Development</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/services/UX-UI"
                                            >UX/UI</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/services/photography"
                                            >Photography</router-link
                                        >
                                    </li>
                                    <li>
                                        <router-link to="/services/videography"
                                            >Videography</router-link
                                        >
                                    </li>
                                </ul>
                            </transition>
                        </div>
                        <div class="header--nav-box_box">
                            <router-link class="nav-header" to="/portfolio"
                                >Portfolio</router-link
                            >
                        </div>
                        <div class="header--nav-box_box">
                            <router-link class="nav-header" to="/contact"
                                >Contact</router-link
                            >
                        </div>
                        <div class="header--nav-box_box">
                            <router-link class="nav-quote" to="/quote"
                                >Free Quote</router-link
                            >
                        </div>
                    </nav>
                </transition>
            </section>
        </header>
        <router-view v-slot="{ Component }">
            <transition
                name="custom-classes-transition"
                mode="out-in"
                appear
                enter-active-class="animate__animated  animate__fadeIn"
            >
                <component :is="Component"></component>
            </transition>
        </router-view>
        <footer class="footer">
            <!-- Newsletter form with re-captcha-->
            <div class="footer--form">
                <h4>Sign Up for a Newsletter</h4>
                <form action="" method="POST" class="sub">
                    <input type="hidden" name="name" id="name" />
                    <div class="skew">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                        />
                    </div>
                    <button type="submit" name="submit" class="btn-news">
                        Subscribe
                    </button>
                </form>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam culpa placeat itaque ut sed.
                </p>
            </div>
            <div class="footer--media">
                <h4>Follow Us</h4>
                <ul>
                    <li>
                        <a href="http://www.facebook.com" target="_blank"
                            ><i class="fa-facebook-square brands"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="http://www.instagram.com/clashofcars182"
                            target="_blank"
                            ><i class="fa-camera solid"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/channel/UCRz3qSzQEpXApP8uAkYVGRw"
                            target="_blank"
                            ><i class="fa-video solid"></i
                        ></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank">
                            <i class="fa-linkedin brands"></i
                        ></a>
                    </li>
                    <li>
                        <a href="https://github.com/kollk82"
                            ><i class="fa-github-square brands"></i
                        ></a>
                    </li>
                </ul>
            </div>
            <div class="footer--side">
                <!-- Side bar with quick nav bar -->
                <h4>Site Links</h4>
                <div class="footer--side-nav">
                    <ul>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Promotions</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Global Sitemap</a></li>
                        <li><a href="#">Local Sitemap</a></li>
                        <li><a href="#">Legal</a></li>
                    </ul>
                </div>
            </div>
            <!-- <div class="footer--map">
                    <h4>Map</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.25333594356!2d-6.385785609817885!3d53.32444313796401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1620656157847!5m2!1sen!2sie" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div> -->
            <div class="footer--bottom">
                <h4>&copy;2021 Eagle Design. All Rights Reserved.</h4>
            </div>
        </footer>
    </div>
</template>
<script>
// Toggle component
export default {
    data() {
        return {
            show: false,
            collapse: false,
        };
    },
};
</script>
