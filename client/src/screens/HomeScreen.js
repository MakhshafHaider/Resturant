import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllFood} from '../actions/fastFoodActions';
import Pizza from '../components/Pizza';

export default function HomeScreen() {

 const dispatch= useDispatch();
 const foodState = useSelector(state => state.getAllFoodReducer);
 const {food, error, loading} = foodState;

 useEffect(() => {
    dispatch(getAllFood());
  }, []);

  return (
    <div>
        <div className='row justify-content-center'>

       {loading ? (<h1>Loading</h1>) : error ? (<h1>Something went wrong</h1>) : (


        food.map(pizza => {
            return <div className='col-md-3 m-3' key={pizza._id}>
                <div>
                    <Pizza pizza={pizza}/>
                </div>

            </div>
        })

       )}
        </div>

    </div>
  )
}
