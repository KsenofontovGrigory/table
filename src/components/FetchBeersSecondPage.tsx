import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TableSecond from "./TableSecond";
import {fetchBeers} from "../redux/actions";

const FetchBeersSecondPage = () => {
    // const [allBeers, setAllBeers] = useState([])
    const dispatch = useDispatch()
    const beers = useSelector((state: any) => state.beers)
    console.log(beers)
    useEffect(() => {
        dispatch(fetchBeers())
    }, [])

    // useEffect(() => {
    //     if(beers) {
    //         setAllBeers(beers.beers)
    //     }
    // }, [beers])

    return <TableSecond beers={beers.beers} />
};

export default FetchBeersSecondPage;