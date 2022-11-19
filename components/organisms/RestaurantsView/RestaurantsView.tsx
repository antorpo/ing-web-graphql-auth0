import BasicTable from "components/molecules/BasicTable/BasicTable";
import SearchControl from "components/molecules/RestaurantSearchControl/RestaurantSearchControl";
import DashboardView from "../DashboardView/DashboardView";
import {
  getRestaurants,
} from "../../../graphql/client/queries/restaurants";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const RestaurantsView = () => {
  const [data, setData] = useState([]);

  const { data: restaurants, loading: loadingRestaurants } =
    useQuery(getRestaurants);

  useEffect(() => {
    if (restaurants) {
      setData(restaurants.getRestaurants.data);
    }
  }, [restaurants]);

  return (
    <DashboardView>
      <div>
        <SearchControl className="py-4" handleData={setData} />
        {loadingRestaurants ? (
          <h1>Cargando...</h1>
        ) : (
          data && <BasicTable data={data} />
        )}
      </div>
    </DashboardView>
  );
};

export default RestaurantsView;
