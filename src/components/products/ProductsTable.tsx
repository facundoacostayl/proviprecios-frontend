import { Product } from "../../types/Product";

interface ProductsTableProps {
  data: Product[];
}

export const ProductsTable = ({ data }: ProductsTableProps) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <div className="m-2 w-32 h-20">
          <img
            className="max-w-full h-20 object-cover"
            src="https://static.wixstatic.com/media/3aa6d8_e3d2bb87c77b45f480c25b58f5c3ae21~mv2.png"
            alt="yucateco-logo"
          />
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
            <tr key={1}>
              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-gray-600 font-semibold whitespace-no-wrap">
                      Picante Kutbill
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-red-700 font-bold whitespace-no-wrap">
                  $15400
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <input
                  className="w-16 px-2 border"
                  title="costPrice"
                  placeholder="22000"
                />
              </td>
            </tr>
            <tr key={1}>
              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-gray-600 font-semibold whitespace-no-wrap">
                      Salsa Caribbean
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-red-700 font-bold whitespace-no-wrap">
                  $15400
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <input
                  className="w-16 px-2 border"
                  title="costPrice"
                  placeholder="22000"
                />
              </td>
            </tr>
            <tr key={1}>
              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-gray-600 font-semibold whitespace-no-wrap">
                      Salsa Jalapeños
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-red-700 font-bold whitespace-no-wrap">
                  $15400
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <input
                  className="w-16 px-2 border"
                  title="costPrice"
                  placeholder="22000"
                />
              </td>
            </tr>
            <tr key={1}>
              <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-gray-600 font-semibold whitespace-no-wrap">
                      Picante Habanero
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-red-700 font-bold whitespace-no-wrap">
                  $15400
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <input
                  className="w-16 px-2 border"
                  title="costPrice"
                  placeholder="22000"
                />
              </td>
            </tr>
            {data?.map(({ id, name, price, costPrice }) => (
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
