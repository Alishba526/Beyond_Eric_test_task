import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/layout/Footer"; // Changed to named import
import { Header } from "@/components/layout/Header"; // Changed to named import

const OrderConfirmation = () => {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-md w-full text-center glass">
          <CheckCircle2 className="h-24 w-24 text-success mx-auto mb-6 animate-pulse-slow" />
          <h1 className="text-3xl font-bold mb-4 text-primary-glow">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <div className="space-y-4">
            <Link to="/" className="w-full">
              <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors">
                Continue Shopping
              </button>
            </Link>
            <Link to="/favorites" className="w-full">
              <button className="w-full bg-secondary text-secondary-foreground py-3 px-6 rounded-md hover:bg-secondary/80 transition-colors">
                View Favorites
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderConfirmation;
