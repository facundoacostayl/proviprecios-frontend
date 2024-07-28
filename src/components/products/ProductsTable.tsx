import { Product } from "../../types/Product";
import brandService from "../../services/Brands";
import { useQuery } from "react-query";

interface ProductsTableProps {
  productsData: Product[];
  brandId: string;
}

export const ProductsTable = ({
  productsData,
  brandId,
}: ProductsTableProps) => {
  const { data } = useQuery("brand", () =>
    brandService.findBrandById(parseInt(brandId!))
  );

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
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
    </div>
  );
};
