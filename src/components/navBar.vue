<template>
    <section class="navbar">
        <!-- Navigation bar -->
        <div class="navbar-icon icon" @click="show = !show"></div>
        <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__slideInLeft"
            leave-active-class="animate__animated animate__slideOutRight">
            <nav class="navbar-box" v-if="show">
                <div class="navbar-box_box">
                    <router-link class="nav-header" to="/">Home</router-link>
                </div>
                <div class="navbar-box_box">
                    <router-link class="nav-header" to="/about"
                        >Our Team</router-link
                    >
                </div>
                <div class="navbar-box_box">
                    <router-link class="nav-header" to="/portfolio"
                        >Case Study</router-link
                    >
                </div>
                <div class="navbar-box_box">
                    <router-link class="nav-header" to="/contact"
                        >Contact</router-link
                    >
                </div>
            </nav>
        </transition>
    </section>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};
</script>
