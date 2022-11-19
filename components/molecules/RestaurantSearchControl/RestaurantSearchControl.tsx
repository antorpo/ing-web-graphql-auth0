import { useSession } from "next-auth/react";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import {
  getRestaurants,
  getRestaurantByType,
} from "../../../graphql/client/queries/restaurants";

const RestaurantSearchControl = ({ className, handleData }) => {
  const [selection, setSelection] = useState("");
  const { data: session } = useSession();

  const [getFiltered] = useLazyQuery(getRestaurantByType);
  const [getAll] = useLazyQuery(getRestaurants);

  const handleSearch = () => {
    getFiltered({
      variables: { type: selection },
    }).then((res) => {
      handleData(res.data.getRestaurantByType.data);
    });
  };

  const cleanSearch = () => {
    const select = document.getElementById("type") as HTMLSelectElement;
    if (select) {
      select.value = "";
    }
    getAll().then((res) => {
      handleData(res.data.getRestaurants.data);
    });
  };

  return (
    <div className="flex">
      <div className={`${className} flex w-80 gap-1`}>
        <select
          id="type"
          defaultValue={""}
          onChange={(event) => setSelection(event.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
        >
          <option disabled value="">
            Tipo
          </option>
          <option value="JUNKFOOD">JUNKFOOD</option>
          <option value="VEGETARIANFOOD">VEGETARIANFOOD</option>
          <option value="MEATFOOD">MEATFOOD</option>
          <option value="DESSERTFOOD">DESSERTFOOD</option>
          <option value="JAPANESEFOOD">JAPANESEFOOD</option>
          <option value="PERUVIANFOOD">PERUVIANFOOD</option>
          <option value="COLOMBIANFOOD">COLOMBIANFOOD</option>
          <option value="MEXICANFOOD">MEXICANFOOD</option>
          <option value="ITALIANFOOD">ITALIANFOOD</option>
          <option value="CHINAFOOD">CHINAFOOD</option>
        </select>
        {!selection}
        <button
          disabled={!selection}
          onClick={() => handleSearch()}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Filtrar
        </button>
        <button
          onClick={() => cleanSearch()}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Limpiar
        </button>
      </div>
      <div className="flex items-center ml-auto">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Crear restaurante
        </button>
      </div>
    </div>
  );
};

export default RestaurantSearchControl;
