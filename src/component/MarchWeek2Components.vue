<template>
    <div class="container-main">
        <section class="section hero-section">
            <Header />
            <div class="back1"></div>
            <div class="back2"></div>

            <div class="hero-content">
                <div class="hero-title">
                    Creative UI Designer <br>
                    Sourasith Phomhome <br>
                    Based in Montreal
                </div>

                <div class="btn-wrap">
                    <button class="hero-btn primary">Hire me</button>
                    <button class="hero-btn secondary">Download CV</button>
                </div>
            </div>
        </section>

        <section class="section"></section>

        <section class="section portfolio-section">
            <div class="back3"></div>
        </section>

        <section class="section contact-section">
            <div class="back4"></div>
            <div class="back5"></div>

            <div class="section-content">
                <div class="contact-intro">
                    <div class="section-title">Get in touch</div>

                    <div class="contact-description">
                        I’m very approachable and <br>
                        would love to speak to you. <br>
                        Feel free to call, send me an <br>
                        email. Follow me on social <br>
                        media or simply complete <br>
                        the enquiry form.
                    </div>

                    <div class="info">
                        <div class="info-box phone">+1 234 567 890</div>
                        <div class="info-box email">hello@example.com</div>
                    </div>
                </div>

                <div class="message-box">
                    <div class="section-title">Send me a message</div>
                    <input class="input-style mt20" type="text" placeholder="Name" />
                    <input class="input-style mt20" type="text" placeholder="Email Address" />
                    <input class="input-style mt20" type="text" placeholder="Subject" />
                    <textarea class="input-style textarea-style mt20" placeholder="Your message"></textarea>
                    <button class="send-btn mt20">Send message</button>
                </div>
            </div>
        </section>

        <Footer />
        <div class="side-bar"></div>
    </div>
</template>

<script>
import Header from "@/component/header/0314/header.vue";
import Footer from "@/component/footer/0314/footer.vue";

export default {
    name: "MarchWeek2Components",
    components: {
        Header,
        Footer,
    },
};
</script>

<style scoped lang="scss">
</style>