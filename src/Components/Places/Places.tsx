import React from "react";
import {Place} from "../../data";
import './Places.scss';
import ReactTooltip from "react-tooltip";

function Places({places, setSelectedPlace, profit}: {places: Place[], setSelectedPlace: Function, profit: number}) : JSX.Element {
    const givePlates: Function = (countPlates: number, activePlates: number = 0): JSX.Element[] => {
        let plates: JSX.Element[] = [];
        let nonactivePlates: number = countPlates - activePlates;
        for (let i = 0; i<activePlates; i++){
            plates.push(<div className='active-plate'><div className='active-plate-in'/> </div>)
        }
        for (let i=0; i<nonactivePlates; i++){
            plates.push(<div className='plate'><div className='plate-in'/> </div>)
        }

        return plates;
    }
    return (
        <div className='w-100 vh-100 position-relative'>
            <div className='bar'>
                <div className='p-2 w-25 m-auto'>
                    <h5 className='text-uppercase'>Panorama bar</h5>
                    <p>Ukupno u kasi: {profit} din.</p>
                </div>
            </div>
            <div className='entrance'>Ulaz</div>
            {
                places.map(place => {
                    if (place.position === 1){
                        return(
                            <>
                                <div data-tip data-for={place.position+'place'} className='restoraunt-table position-1' onClick={() => setSelectedPlace(place)}>
                                    {givePlates(place.slots, place.activeSlots)}
                                </div>
                                <ReactTooltip id={place.position+'place'} place="top" effect="solid">{place.name} ukupna cena: {place.paymentAccountPrice}</ReactTooltip>
                            </>
                        )
                    }
                    if (place.position === 2){
                        return(
                            <>
                                <div data-tip data-for={place.position+'place'} className='restoraunt-table position-2' onClick={() => setSelectedPlace(place)}>
                                    {givePlates(place.slots, place.activeSlots)}
                                </div>
                                <ReactTooltip id={place.position+'place'} place="top" effect="solid">{place.name} ukupna cena: {place.paymentAccountPrice}</ReactTooltip>
                            </>
                        )
                    }
                    if (place.position === 3){
                        return(
                            <>
                                <div data-tip data-for={place.position+'place'} className='restoraunt-table position-3' onClick={() => setSelectedPlace(place)}>
                                    {givePlates(place.slots, place.activeSlots)}
                                </div>
                                <ReactTooltip id={place.position+'place'} place="top" effect="solid">{place.name} ukupna cena: {place.paymentAccountPrice}</ReactTooltip>
                            </>
                        )
                    }
                    if (place.position === 4){
                        return(
                            <>
                                <div data-tip data-for={place.position+'place'} className='restoraunt-table position-4' onClick={() => setSelectedPlace(place)}>
                                    {givePlates(place.slots, place.activeSlots)}
                                </div>
                                <ReactTooltip id={place.position+'place'} place="top" effect="solid">{place.name} ukupna cena: {place.paymentAccountPrice}</ReactTooltip>
                            </>
                        )
                    }

                    if (place.position === 5){
                        return(
                            <>
                                <div data-tip data-for={place.position+'place'} className='restoraunt-table position-5' onClick={() => setSelectedPlace(place)}>
                                    {givePlates(place.slots, place.activeSlots)}
                                </div>
                                <ReactTooltip id={place.position+'place'} place="top" effect="solid">{place.name} ukupna cena: {place.paymentAccountPrice}</ReactTooltip>
                            </>
                        )
                    }
                    if (place.position === 6){
                        return(
                            <>
                                <div data-tip data-for={place.position+'place'} className='restoraunt-table position-6' onClick={() => setSelectedPlace(place)}>
                                    {givePlates(place.slots, place.activeSlots)}
                                </div>
                                <ReactTooltip id={place.position+'place'} place="top" effect="solid">{place.name} ukupna cena: {place.paymentAccountPrice}</ReactTooltip>
                            </>
                        )
                    }
                })
            }
        </div>
    )
}

export default Places;