import { Link } from "react-router-dom";
import brandService from "../services/Brands";
import { useQuery } from "react-query";
import { Grid } from "../components/home/Grid";

export const Home = () => {
  const { data } = useQuery("brands", () => brandService.findBrands());

  return (
    <section className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-36">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center  ">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-2 text-2xl font-light text-black sm:text-4xl sm:leading-tight">
            Update your product's prices in one place.{" "}
          </h2>
          <p className="font-light">Powered by Facundo Acosta :)</p>
        </div>

        <Grid data={data!}></Grid>

        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>

        <Link to="/products">
          <p className="mt-10 text-base text-center hover:bg-gray-200 md:mt-20 p-6 py-3 border w-72 rounded-full mx-auto">
            ver todos los productos
          </p>
        </Link>
      </div>
    </section>
  );
};
