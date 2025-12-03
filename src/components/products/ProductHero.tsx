import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay
import { motion } from "framer-motion"; // Import motion

export const ProductHero = () => {
  // Array of image URLs for the hero carousel
  const heroImages = [
    { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Sport shoes collection" },
    { src: "/Hero image 4.jpeg", alt: "Hero image of people shopping" }, // Local image
    { src: "/hero2.jpg", alt: "E-commerce fastlane promotion" },
        { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Modern fashion clothing" },

  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 py-12 md:py-24 lg:py-32">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.8, 1, 0.8], // Animate opacity for a breathing effect
        }}
        transition={{
          duration: 10, // Adjusted duration for the new opacity animation
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut", // Smooth ease for the breathing effect
        }}
      />
      
      {/* Animated Decorative Elements - Floating Bubbles */}
      {/* Existing bubbles - adjusted */}
      <motion.div 
        className="absolute top-[10%] left-[5%] w-32 h-32 bg-blue-300/40 rounded-full blur-2xl z-0"
        animate={{
          x: ["0%", "50%", "0%"],
          y: ["0%", "80%", "0%"],
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 0.9, 0.6],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-blue-400/40 rounded-full blur-2xl z-0"
        animate={{
          x: ["0%", "-60%", "0%"],
          y: ["0%", "-70%", "0%"],
          scale: [0.9, 1.3, 0.9],
          opacity: [0.7, 1, 0.7],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-[30%] right-[20%] w-24 h-24 bg-blue-500/30 rounded-full blur-xl z-0"
        animate={{
          x: ["0%", "70%", "0%"],
          y: ["0%", "-50%", "0%"],
          scale: [0.7, 1.1, 0.7],
          opacity: [0.5, 0.8, 0.5],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-[10%] left-[25%] w-40 h-40 bg-blue-600/30 rounded-full blur-xl z-0"
        animate={{
          x: ["0%", "-40%", "0%"],
          y: ["0%", "60%", "0%"],
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 0.9, 0.6],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 26 New Bubbles (4 existing + 26 new = 30 total) */}
      <motion.div 
        className="absolute top-[5%] left-[80%] w-20 h-20 bg-blue-200/30 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "30%", "0%"], y: ["0%", "50%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[5%] right-[25%] w-36 h-36 bg-blue-500/35 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "-40%", "0%"], y: ["0%", "-60%", "0%"], scale: [0.8, 1.3, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, -270, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[40%] left-[15%] w-28 h-28 bg-blue-400/25 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "60%", "0%"], y: ["0%", "40%", "0%"], scale: [0.6, 1.0, 0.6], opacity: [0.5, 0.8, 0.5], rotate: [0, 360, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[30%] left-[5%] w-20 h-20 bg-blue-300/30 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "20%", "0%"], y: ["0%", "-30%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, -180, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[60%] right-[5%] w-30 h-30 bg-blue-600/30 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "-50%", "0%"], y: ["0%", "70%", "0%"], scale: [0.9, 1.2, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, 270, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[20%] left-[40%] w-22 h-22 bg-blue-400/35 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "30%", "0%"], y: ["0%", "60%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.5, 0.8, 0.5], rotate: [0, -360, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[40%] right-[40%] w-26 h-26 bg-blue-300/25 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "-50%", "0%"], scale: [0.6, 1.0, 0.6], opacity: [0.4, 0.7, 0.4], rotate: [0, 180, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[70%] left-[70%] w-32 h-32 bg-blue-500/40 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "40%", "0%"], y: ["0%", "60%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, -270, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[15%] right-[70%] w-20 h-20 bg-blue-200/30 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "-30%", "0%"], y: ["0%", "-40%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, 360, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[15%] right-[55%] w-28 h-28 bg-blue-400/30 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "50%", "0%"], y: ["0%", "30%", "0%"], scale: [0.6, 1.0, 0.6], opacity: [0.5, 0.8, 0.5], rotate: [0, -180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[60%] left-[80%] w-30 h-30 bg-blue-600/35 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "-60%", "0%"], y: ["0%", "80%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, 270, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[45%] left-[60%] w-24 h-24 bg-blue-300/25 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "20%", "0%"], y: ["0%", "-30%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, -360, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[50%] right-[15%] w-20 h-20 bg-blue-500/30 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "-40%", "0%"], y: ["0%", "50%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, 180, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[25%] left-[5%] w-36 h-36 bg-blue-600/40 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "70%", "0%"], y: ["0%", "40%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, -270, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[5%] left-[50%] w-22 h-22 bg-blue-400/30 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "30%", "0%"], y: ["0%", "-20%", "0%"], scale: [0.6, 1.0, 0.6], opacity: [0.5, 0.8, 0.5], rotate: [0, 360, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[80%] right-[30%] w-28 h-28 bg-blue-300/35 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "-50%", "0%"], y: ["0%", "60%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, -180, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[50%] left-[80%] w-20 h-20 bg-blue-500/25 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "40%", "0%"], y: ["0%", "-30%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, 270, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[70%] right-[80%] w-30 h-30 bg-blue-600/30 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "-30%", "0%"], y: ["0%", "50%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, -360, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[10%] left-[60%] w-26 h-26 bg-blue-200/35 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "50%", "0%"], y: ["0%", "40%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, 180, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[30%] left-[60%] w-20 h-20 bg-blue-400/20 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "-40%", "0%"], y: ["0%", "-60%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, -270, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[85%] left-[10%] w-32 h-32 bg-blue-500/40 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "60%", "0%"], y: ["0%", "50%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, 360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[80%] right-[50%] w-24 h-24 bg-blue-600/30 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "30%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, -180, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[60%] left-[30%] w-20 h-20 bg-blue-300/30 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "40%", "0%"], y: ["0%", "-50%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, 270, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[25%] right-[55%] w-36 h-36 bg-blue-400/35 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "-30%", "0%"], y: ["0%", "70%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, -360, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[35%] right-[70%] w-22 h-22 bg-blue-500/20 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "20%", "0%"], y: ["0%", "-40%", "0%"], scale: [0.6, 1.0, 0.6], opacity: [0.5, 0.8, 0.5], rotate: [0, 180, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[10%] right-[3%] w-28 h-28 bg-blue-600/25 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "-50%", "0%"], y: ["0%", "30%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, -270, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Additional 10 bubbles */}
      <motion.div 
        className="absolute top-[5%] left-[45%] w-20 h-20 bg-blue-300/30 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "40%", "0%"], y: ["0%", "60%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, 180, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[5%] right-[45%] w-24 h-24 bg-blue-400/35 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "-30%", "0%"], y: ["0%", "-50%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, -270, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[25%] left-[70%] w-28 h-28 bg-blue-500/40 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "60%", "0%"], y: ["0%", "40%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, 360, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[40%] left-[30%] w-20 h-20 bg-blue-600/25 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "30%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, -180, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[70%] right-[10%] w-32 h-32 bg-blue-200/20 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "-50%", "0%"], y: ["0%", "70%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, 270, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[60%] left-[15%] w-26 h-26 bg-blue-300/35 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "30%", "0%"], y: ["0%", "-40%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, -360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[55%] right-[40%] w-22 h-22 bg-blue-400/30 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "50%", "0%"], y: ["0%", "20%", "0%"], scale: [0.6, 1.0, 0.6], opacity: [0.5, 0.8, 0.5], rotate: [0, 180, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[15%] left-[70%] w-30 h-30 bg-blue-500/25 rounded-full blur-xl z-0"
        animate={{ x: ["0%", "-40%", "0%"], y: ["0%", "60%", "0%"], scale: [0.8, 1.2, 0.8], opacity: [0.6, 0.9, 0.6], rotate: [0, -270, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[20%] right-[5%] w-24 h-24 bg-blue-600/30 rounded-full blur-2xl z-0"
        animate={{ x: ["0%", "70%", "0%"], y: ["0%", "50%", "0%"], scale: [0.9, 1.3, 0.9], opacity: [0.7, 1.0, 0.7], rotate: [0, 360, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[5%] left-[5%] w-28 h-28 bg-blue-200/40 rounded-full blur-lg z-0"
        animate={{ x: ["0%", "30%", "0%"], y: ["0%", "-40%", "0%"], scale: [0.7, 1.1, 0.7], opacity: [0.4, 0.7, 0.4], rotate: [0, -180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 glass p-4 md:p-8 rounded-3xl shadow-2xl">
        {/* Left Column: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
            <Typewriter
              options={{
                strings: [
                  "Unleash Your Style, Redefine Your Wardrobe.",
                  "Curated Collections. Elevated Style.",
                  "Experience Premium Shopping, Effortlessly.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 md:text-xl"
          >
            Discover a world of exceptional products and unparalleled quality. Your journey to the perfect style begins here.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="flex justify-center md:justify-start"
          >
            <Link to="/products">
              <Button size="lg" className="mt-6 text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-accent to-primary">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Image Carousel */}
        <div className="relative h-[500px] w-full md:h-[600px]"> {/* Increased height */}
          <Carousel
            className="w-full h-full" // Removed max-w-xs and mx-auto
            plugins={[
              Autoplay({
                delay: 3000, // 3 seconds delay
                stopOnInteraction: false, // Continue autoplay even if user interacts
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-full w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
