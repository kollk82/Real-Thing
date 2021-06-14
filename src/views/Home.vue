<template>
    <div class="wrapper">
        <section class="carousel">
            <div class="carousel--box">
                <!-- Carousel -->
                <video autoplay muted loop>
                    <source
                        src="img/videos/ed_car.mp4"
                        preload="metadata"
                        type="video/mp4"
                    />
                </video>
            </div>
        </section>
        <section class="heading">
            <!-- Carousel h1-->
            <h1>Our Story...</h1>
            <p class="heading-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Quam
                iste ex fuga. Natus magni est, illum dicta distinctio<br />ipsam
                impedit sequi, amet architecto unde quod, eveniet<br />officiis
                minima eaque quibusdam.<br /><button>Read more...</button>
            </p>
        </section>
        <!-- INTRO -->
        <section class="intro">
            <main class="intro--description">
                <!-- Description what we are up to with svg, icons ect. -->
                <div class="box">
                    <div class="box-1">
                        <i class="fa-pencil-ruler icon-box"></i>
                        <h2>Web Design and Development</h2>
                        <p>
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
                        <i class="fa-address-card icon-box-regular"></i>
                        <h2>Corporate Identity</h2>
                        <p>
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
                        <i class="fa-globe-europe icon-box"></i>
                        <h2>Seo, Marketing, and Social Media</h2>
                        <p>
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
                <div class="intro--banner-box1">
                    <h2>Looking for Exclusive<br />Web Design Services?</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit.
                    </p>
                    <button>Lets talk...</button>
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
                <h1>Eagle Packages</h1>
            </div>
            <div class="cards--box">
                <div class="cards--box-card">
                    <div class="card-logo logo1-img"></div>
                    <h2>Budget</h2>
                    <h1>999 &#x20AC;</h1>
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
                    <button>find out more..</button>
                </div>
                <div class="cards--box-card card2">
                    <div class="card-logo logo2-img"></div>
                    <h2>Pro</h2>
                    <h1>1499 &#x20AC;</h1>
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
                    <button class="btn">find out more..</button>
                </div>
                <div class="cards--box-card">
                    <div class="card-logo logo3-img"></div>
                    <h2>Exclusive</h2>
                    <h1>2999 &#x20AC;</h1>
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
                    <button>find out more..</button>
                </div>
            </div>
        </main>
        <section class="partners">
            <!-- Services or latest project or our partners -->
            <div class="partners--header">
                <h1>Our partners</h1>
            </div>
            <div class="partners--list">
                <i class="fa-amazon brands"></i>
                <i class="fa-windows brands"></i>
                <i class="fa-apple brands"></i>
                <i class="fa-sass brands"></i>
                <i class="fa-vuejs brands"></i>
                <i class="fa-chrome brands"></i>
                <i class="fa-paypal brands"></i>
            </div>
            <div class="partners--footer">
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h3>
            </div>
        </section>
    </div>
</template>
