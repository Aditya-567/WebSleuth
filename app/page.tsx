import About from "@/components/About";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import { getAllProducts } from "@/lib/actions";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-20">
        <div className="flex max-xl:flex-col gap-5">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              <span className="text-indigo-500">
                Elevate Your Shopping Experience, Saving and Shopping Start
                Here:
              </span>
            </p>

            <h1 className="head-text">
              Harness the Power of
              <span className="text-indigo-500"> WebSleuth</span>
            </h1>

            <p className="mt-6">
              Unlock the Potential of Comprehensive, Self-Serve Product and
              Growth Analytics to Maximize Conversion, Engagement, and
              Retention.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Product</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-18">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
      <About />
    </>
  );
};

export default Home;
