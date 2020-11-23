import React, {useEffect, useState} from 'react';
import './App.scss';
import {Place, Article, Category, PlacesData, ArticlesData, CategoriesData} from './data';
import Places from "./Components/Places/Places";
import Checkout from "./Components/Checkout/Checkout";
import {ToastProvider} from "react-toast-notifications";


function App() : JSX.Element {
  const [places, setPlaces] = useState<Place[]>(PlacesData)
  const [articles] = useState<Article[]>(ArticlesData)
  const [profit, setProfit] = useState<number>(0)
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
    const [categories, setCategories] = useState<Category[]>(CategoriesData)

    useEffect(() : void => {
        if (selectedPlace){
            let newPlaces: Place[];
            newPlaces = places.map(place => {
                if (place.position === selectedPlace.position){
                    return selectedPlace;
                }else {
                    return place;
                }
            })
            setPlaces(newPlaces)
        }
    }, [selectedPlace])

  return (
    <ToastProvider autoDismiss autoDismissTimeout={5000}>
        <div className='container-fluid d-flex p-0'>
            <div className='float-left w-75'>
                <Places places={places} setSelectedPlace={setSelectedPlace} profit={profit}/>
            </div>
            <div className='float-right w-25 border-left position-relative'>
                {
                    selectedPlace && <Checkout categories={categories} articles={articles} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} setProfit={setProfit}/>
                }
            </div>
        </div>
    </ToastProvider>
  );
}

export default App;
