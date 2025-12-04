import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Award, DollarSign, Users } from "lucide-react";

/**
 * @component About
 * @description The About Us page for ShopHub.
 *              Displays information about the company's mission, vision, and key values.
 *              Includes animated sections and uses `Helmet` for SEO.
 */
const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | ShopHub</title>
        <meta
          name="description"
          content="Learn more about ShopHub - our mission, vision, and values. Providing quality products at unbeatable prices."
        />
      </Helmet>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12 min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-10 text-gradient">About ShopHub</h1>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card p-8 rounded-lg shadow-lg mb-10 glass"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At ShopHub, our mission is to provide a seamless and enjoyable online shopping experience, offering a diverse range of high-quality products at competitive prices. We strive to connect customers with the best goods from around the globe, ensuring satisfaction with every purchase.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card p-6 rounded-lg shadow-md text-center glass"
          >
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-muted-foreground text-sm">
              We meticulously select our products to ensure superior quality and durability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-card p-6 rounded-lg shadow-md text-center glass"
          >
            <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-muted-foreground text-sm">
              Enjoy competitive pricing and frequent discounts on your favorite items.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-card p-6 rounded-lg shadow-md text-center glass"
          >
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-muted-foreground text-sm">
              Our dedicated support team is always here to help you.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center bg-card p-8 rounded-lg shadow-lg glass"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To become the leading e-commerce platform globally, recognized for our exceptional customer service, innovative product selection, and commitment to sustainable practices.
          </p>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
