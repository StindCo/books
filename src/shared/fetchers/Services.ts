import { gql } from "graphql-request";
import { hygraphClient } from "./Axios";

export const getCategories = async () => {
  const QUERY = gql`
    {
      menuCategories {
        id
        description
        title
        image {
          url
        }
      }
    }
  `;
  let data = await hygraphClient.request(QUERY);
  return data;
};
