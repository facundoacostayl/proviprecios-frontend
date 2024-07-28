import { Link } from "react-router-dom";
import { Brand } from "../../types/Brand";

interface GridProps {
  data: Brand[];
}

export const Grid = ({ data }: GridProps) => {
  return (
    <div className="grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4">
      {data?.map(({ id, name, imageUrl }) => (
        <Link key={id} to={`/products/brand/${id}`}>
          <div className="bg-white hover:bg-gray-100 h-20 flex shadow-lg items-center justify-center ease-in duration-100">
            {imageUrl ? (
              <img
                className="object-contain w-full h-20 mx-auto"
                src={imageUrl}
                alt={name}
              />
            ) : (
              <p className="font-semibold text-xl text-gray-600">{name}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
