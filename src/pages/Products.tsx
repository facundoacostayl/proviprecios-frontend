import { useParams } from "react-router-dom";
import { ProductsTable } from "../components/products/ProductsTable";
import productService from "../services/Products";
import { useQuery } from "react-query";

export const Products = () => {
  const { brandId } = useParams();

  const { data } = useQuery("products", () =>
    brandId
      ? productService.findProductsByBrandId(brandId!)
      : productService.findProducts()
  );

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Productos</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="bg-gray-50 outline-none ml-1 block "
              type="text"
              name=""
              id=""
              placeholder="search..."
            />
          </div>
        </div>
      </div>
      <div>
        <ProductsTable productsData={data!} brandId={brandId!}></ProductsTable>
      </div>
      <div className="flex items-center mb-5">
        <button className="mx-auto text-sm text-indigo-50 transition duration-150 hover:bg-gray-700 bg-gray-600 font-semibold py-2 px-4 rounded">
          Actualizar
        </button>
      </div>
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
        <span className="text-xs xs:text-sm text-gray-900">
          Showing 1 to 4 of 50 Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="text-sm text-indigo-50 transition duration-150 hover:bg-gray-700 bg-gray-600 font-semibold py-2 px-4 rounded-l">
            Prev
          </button>
          &nbsp; &nbsp;
          <button className="text-sm text-indigo-50 transition duration-150 hover:bg-gray-700 bg-gray-600 font-semibold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
