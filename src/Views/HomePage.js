import React, { useEffect } from "react";
import Api, { getCategories } from "../Api/Api";
import CategoryList from "../Components/CategoryList";

function mapCategories(data){

}
  
export default function HomePage() {
  //Function to get categories from API on component mount.
  useEffect(() => {
    const categoriesList = async () => {
      const data = await getCategories();
    };

    //Make API GET request.
    categoriesList().catch(console.error);

    //Map categories to UI elements for rendering.

  }, []);

  return <div>HomePage</div>;
}
