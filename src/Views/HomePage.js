import React, {useEffect} from 'react'
import Api, { getCategories } from '../Api/Api'

export default function HomePage() {
  
  //Function to get categories from API on component mount.
  useEffect( () => {

    const categoriesList = async () => {
      const data = await getCategories();
    }

    //Make API GET request.
    categoriesList().catch( console.error );
  }, [] )

  return (
    <div>HomePage</div>
  )
}
