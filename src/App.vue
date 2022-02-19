<template>
    <!-- GOODIES CONTAINER -->
    <div class="container">
        <div v-if="loading" class="loader"><div></div></div>
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
        </header>
        <router-view v-slot="{ Component }">
            <transition
                name="custom-classes-transition"
                mode="out-in"
                appear
                enter-active-class="animate__animated  animate__fadeIn"
                leave-active-class="animate__animated  animate__fadeOut"
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
            <div class="footer--bottom">
                <h4>&copy;2021 Eagle Design. All Rights Reserved.</h4>
            </div>
        </footer>
    </div>
</template>
<script>
// Toggle component
import loader from './mixins/loader'
export default {
    extends:loader,
};
</script>
