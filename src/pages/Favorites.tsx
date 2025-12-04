import { ProductGrid } from "@/components/products/ProductGrid";
import { useFavoriteStore } from "@/store/favoriteStore";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const FavoritesPage = () => {
  const { favorites } = useFavoriteStore();

  return (
    <>
      <Helmet>
        <title>Your Favorites | ShopHub</title>
        <meta
          name="description"
          content="View your saved favorite products on ShopHub."
        />
      </Helmet>
      <Header />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Your Favorites</h1>
        {favorites.length > 0 ? (
          <ProductGrid products={favorites} />
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">You haven't added any favorites yet.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FavoritesPage;
