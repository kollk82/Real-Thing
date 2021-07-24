<template>
    <div class="wrapper">
        <navBar></navBar>
        <div class="portfolio">
            <div class="portfolio--h1">
                <h1>Portfolio</h1>
            </div>
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
export default {
    data() {
        return {
            show: false,
            collapse: false,
            loading: true,
        };
    },
};
</script>
