<template>
    <div class="wrapper">
        <div class="center">
            <form action="" method="POST" class="contact">
                <h1>Contact Form</h1>
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
                        placeholder="Your Second name"
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
                <textarea
                    name="text"
                    id=""
                    placeholder="Your message"
                ></textarea>
                <button type="submit" name="submit" class="btn-news">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>
