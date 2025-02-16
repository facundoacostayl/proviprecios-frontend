/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "../../types/Product";
import brandService from "../../services/Brands";
import productService from "../../services/Products";
import { useQuery } from "react-query";
//import UpdateProductRequest from "../../models/products/UpdateProductRequest";
import { ChangeEvent, useEffect, useState } from "react";
import UpdateProductRequest from "../../models/products/UpdateProductRequest";
import { showToast } from "../../utils/toast";

interface ProductsTableProps {
  productsData: Product[];
  brandId: string;
  refetchProducts: () => void;
}

export const ProductsTable = ({
  productsData,
  brandId,
  refetchProducts,
}: ProductsTableProps) => {
  const [productsToUpdate, setProductsToUpdate] = useState<any>({});
  const { data } = useQuery("brand", () =>
    brandService.findBrandById(parseInt(brandId!))
  );

  useEffect(() => {
    console.log(productsToUpdate);
  }, [productsToUpdate]);

  const handleProductsToUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const currentProductId = e.currentTarget.id;
    const currentProductNewCostPrice = e.currentTarget.value;
    setProductsToUpdate((prevState: any) => ({
      ...prevState,
      [currentProductId]: currentProductNewCostPrice,
    }));
  };

  const clearInputs = () => {
    setProductsToUpdate({});

    const inputs = document.querySelectorAll('input[title="costPrice"]');
    inputs.forEach((input) => {
      (input as HTMLInputElement).value = ""; // Reset the input value
    });
  };

  const submitProductsToUpdate = async () => {
    const productsArr: UpdateProductRequest[] = [];
    Object.values(productsToUpdate).map((product, i) => {
      productsArr.push({
        id: Object.keys(productsToUpdate)[i] as string,
        newCostPrice: parseInt(product as string),
      });
    });

    const updateResponse = await productService.updateProducts(productsArr);
    if (updateResponse) {
      showToast.success("Precios actualizados correctamente", {
        onOpen: () => {
          refetchProducts();
        },
      });
    } else {
      showToast.error("No hubo aumentos en los precios");
    }
    clearInputs();
  };

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="w-full inline-block shadow rounded-lg overflow-hidden">
        <div className="py-2 px-2 bg-gray-800">
          <p className="text-semibold text-xl text-white">{data?.name}</p>
        </div>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-1 pt-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Producto
              </th>
              <th className="px-5 py-1 pt-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Precio
              </th>
              <th className="px-5 py-1 pt-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Costo
              </th>
            </tr>
          </thead>
          <tbody>
            {productsData?.map(({ id, name, price, costPrice }) => (
              <tr key={id}>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-600 font-semibold whitespace-no-wrap">
                        {name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-red-700 font-bold whitespace-no-wrap">
                    ${price}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <input
                    onChange={(e) => handleProductsToUpdate(e)}
                    id={id}
                    value={productsToUpdate[id] || ""}
                    className="w-16 px-2 border"
                    title="costPrice"
                    placeholder={costPrice.toString()}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center my-4">
        <button
          onClick={() => submitProductsToUpdate()}
          className="mx-auto text-sm text-indigo-50 transition duration-150 hover:bg-gray-700 bg-gray-600 font-semibold py-2 px-4 rounded"
        >
          Actualizar
        </button>
      </div>
    </div>
  );
};
