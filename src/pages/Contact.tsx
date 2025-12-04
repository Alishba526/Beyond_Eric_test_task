import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/**
 * @component Contact
 * @description The Contact Us page for ShopHub.
 *              Provides contact information and a form for users to send messages.
 *              Includes animated sections and uses `Helmet` for SEO.
 */
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | ShopHub</title>
        <meta
          name="description"
          content="Get in touch with ShopHub customer support. We are here to help you with any questions or concerns."
        />
      </Helmet>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-10 text-gradient">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 bg-card p-8 rounded-lg shadow-lg glass"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed">
              Have questions or need assistance? Reach out to us through any of the methods below, or fill out the contact form. Our team is ready to help!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground">support@shophub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-lg text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <span className="text-lg text-foreground">
                  123 E-commerce Ave, Suite 456
                  <br />
                  Shopping City, SC 90210
                  <br />
                  USA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 bg-card p-8 rounded-lg shadow-lg glass"
          >
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" className="glass" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="glass" />
              </div>
              <div>
                <Input type="text" placeholder="Subject" className="glass" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} className="glass" />
              </div>
              <Button type="submit" className="w-full glass-button">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;
