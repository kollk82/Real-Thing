<template>
    <section class="carousel">
        <div class="carousel--box">
            <!-- Carousel -->
            <video autoplay muted loop class="carousel--box-videohd ">
                <source
                    :src="require(`../../public/img/videos/${src_hd}`)"
                    preload="metadata"
                    type="video/mp4"
                />
                ,
            </video>
            <video autoplay muted loop class="carousel--box-videomobile">
                <source
                    :src="require(`../../public/img/videos/${src_mobile}`)"
                    preload="metadata"
                    type="video/mp4"
                />
                ,
            </video>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        src_hd: String,
        src_mobile: String,
    }
};
</script>
