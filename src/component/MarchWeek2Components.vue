<template>
    <div class="container-main">
        <section class="section hero-section" id="home">
            <Header @move-section="scrollToSection"/>
            <div class="planet-groups">
                <div class="planet-wrap">
                    <div class="planet1"></div>
                    <div class="planet2"></div>
                    <div class="planet3"></div>
                </div>
            </div>

            <div class="planet-groups-right">
                <div class="planet-wrap">
                    <div class="planet4"></div>
                    <div class="planet5"></div>
                    <div class="planet6"></div>
                </div>
            </div>


            <div class="hero-content">
                <div class="hero-title">
                    Creative UI Designer <br>
                    Sourasith Phomhome <br>
                    Based in Montreal
                </div>

                <div class="btn-wrap">
                    <button class="hero-btn primary" @click="scrollToSection('contact')">Hire me</button>
                    <button class="hero-btn secondary">Download CV</button>
                </div>
            </div>
        </section>

        <section class="section" id="about">
            <div class="about-me">
                <div class="info-box">
                    <div class="info-text-box">
                        <div class="info-title-box">About me</div>
                        <div class="info-content-box">
                            My name is Sourasith Phomhome. I’m a UI Designer and a instrutor based in Montreal. I’m
                            curently working with Design+Code. I’m passionate about creating digital experiences and
                            teaching design. My goal is to help beginners to grow their skills...<span> read more</span>
                        </div>
                    </div>
                </div>

                <div class="image-box-warp">
                    <div class="image-box"></div>
                </div>

                <div class="object-position">
                    <div class="about-me-object">
                        <div class="ellipse-glow"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section portfolio-section" id="work">
            <div class="back3"></div>
            <div class="work-section">
                <div class="work-title-box">My recent work</div>

                <div class="work-card-wrapper">
                    <div class="work-card designs small">
                        <div class="card-img"></div>
                        <div class="card-text">Designs</div>
                    </div>

                    <div class="work-card ui-designs">
                        <div class="card-img"></div>
                        <div class="card-text">UI Designs</div>
                    </div>

                    <div class="work-card mockups small">
                        <div class="card-img"></div>
                        <div class="card-text">Mockups</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section contact-section" id="contact">
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
                    <input class="input-style mt20" type="text" placeholder="Name"/>
                    <input class="input-style mt20" type="text" placeholder="Email Address"/>
                    <input class="input-style mt20" type="text" placeholder="Subject"/>
                    <textarea class="input-style textarea-style mt20" placeholder="Your message"></textarea>
                    <button class="send-btn mt20">Send message</button>
                </div>
            </div>
        </section>

        <Footer @move-section="scrollToSection"/>

        <div class="side-bar">
            <div class="btn-wrap">
                <div
                    class="side-btn home"
                    :class="{ active: activeSection === 'home' }"
                    @click="scrollToSection('home')"
                ></div>
                <div
                    class="side-btn about"
                    :class="{ active: activeSection === 'about' }"
                    @click="scrollToSection('about')"
                ></div>
                <div
                    class="side-btn work"
                    :class="{ active: activeSection === 'work' }"
                    @click="scrollToSection('work')"
                ></div>
                <div
                    class="side-btn contact"
                    :class="{ active: activeSection === 'contact' }"
                    @click="scrollToSection('contact')"
                ></div>
            </div>
        </div>
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
    data() {
        return {
            activeSection: "home",
            isProgrammaticScrolling: false,
            scrollEndTimer: null,
            headerOffset: 100,
        };
    },
    methods: {
        scrollToSection(sectionId) {
            const target = document.getElementById(sectionId);
            if (!target) return;

            if (this.scrollEndTimer) {
                clearTimeout(this.scrollEndTimer);
                this.scrollEndTimer = null;
            }

            this.isProgrammaticScrolling = true;
            this.activeSection = sectionId;

            const targetTop =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                this.headerOffset;

            window.scrollTo({
                top: targetTop,
                behavior: "smooth",
            });

            this.scrollEndTimer = setTimeout(() => {
                this.isProgrammaticScrolling = false;
                this.handleScroll();
            }, 900);
        },

        handleScroll() {
            if (this.isProgrammaticScrolling) return;

            const sections = ["home", "about", "work", "contact"];
            const checkLine = this.headerOffset + window.innerHeight / 3;

            let currentSection = "home";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (rect.top <= checkLine && rect.bottom >= checkLine) {
                    currentSection = id;
                }
            });

            this.activeSection = currentSection;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, { passive: true });
        this.handleScroll();
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);

        if (this.scrollEndTimer) {
            clearTimeout(this.scrollEndTimer);
        }
    },
};
</script>

