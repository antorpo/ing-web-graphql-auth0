import gql from "graphql-tag";

export const getRestaurants = gql`
  query GetRestaurants {
    getRestaurants {
      code
      data {
        phoneNumber
        id
        name
        type
        userId
      }
      message
      status
    }
  }
`;


export const getRestaurantByType = gql`
query GetRestaurantByType($type: RestaurantTypeEnum!) {
  getRestaurantByType(type: $type) {
    code
    data {
      userId
      type
      phoneNumber
      name
      id
    }
    status
    message
  }
}
`;