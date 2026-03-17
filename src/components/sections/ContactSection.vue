<template>
    <section id="contact" class="contact section">

        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Have a project, idea, or collaboration in mind? Feel free to contact me and let's create something great together.</p>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade" data-aos-delay="100">

            <div class="row gy-4">

                <div class="col-lg-4">
                    <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                        <i class="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                            <h3>Address</h3>
                            <p>Jakarta, ID</p>
                        </div>
                    </div><!-- End Info Item -->

                    <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                        <i class="bi bi-telephone flex-shrink-0"></i>
                        <div>
                            <h3>Call Me</h3>
                            <p>+62 877 2275 1754</p>
                        </div>
                    </div><!-- End Info Item -->

                    <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                        <i class="bi bi-envelope flex-shrink-0"></i>
                        <div>
                            <h3>Email</h3>
                            <p>Rizqisat13@gmail.com</p>
                        </div>
                    </div><!-- End Info Item -->

                </div>

                <div class="col-lg-8">
                    <form @submit.prevent="sendEmail" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                        <div class="row gy-4">

                            <div class="col-md-6">
                                <input type="text" v-model="form.name" class="form-control" placeholder="Your Name"
                                    required>
                            </div>

                            <div class="col-md-6 ">
                                <input type="email" v-model="form.email" class="form-control" placeholder="Your Email"
                                    required>
                            </div>

                            <div class="col-md-12">
                                <input type="text" v-model="form.subject" class="form-control" placeholder="Subject"
                                    required>
                            </div>

                            <div class="col-md-12">
                                <textarea v-model="form.message" class="form-control" rows="6" placeholder="Message"
                                    required></textarea>
                            </div>

                            <div class="col-md-12 text-center">
                                <div v-if="loading">Sending...</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>

                                <button type="submit">Send Message</button>
                            </div>

                        </div>
                    </form>
                </div><!-- End Contact Form -->

            </div>

        </div>

    </section>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
    name: "ContactSection",

    data() {
        return {
            form: {
                name: "",
                email: "",
                subject: "",
                message: "",
            },
        };
    },

    methods: {
        sendEmail() {
            emailjs
                .send(
                    "service_rizqi", 
                    "template_rizqi",
                    {
                        from_name: this.form.name,
                        from_email: this.form.email,
                        subject: this.form.subject,
                        message: this.form.message,
                    },
                    "e4t5pRpSIk_R6-sc5" 
                )
                .then(() => {
                    alert("Message sent successfully!");

                    this.form.name = "";
                    this.form.email = "";
                    this.form.subject = "";
                    this.form.message = "";
                })
                .catch(() => {
                    alert("Failed to send message");
                });
        },
    },
};
</script>
