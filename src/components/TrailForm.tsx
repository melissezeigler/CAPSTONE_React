import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseTrail_name, chooseNearby_city, chooseTrail_length, chooseTrail_condition } from "../redux/slices/RootSlice";

// interfaces

interface TrailFormProps {
  id?: string[]
}

const TrailForm = (props:TrailFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)

    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Update: ${ data } ${ props.id }`)  
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseTrail_name(data.trail_name));
      dispatch(chooseNearby_city(data.nearby_city));
      dispatch(chooseTrail_length(data.trail_length));
      dispatch(chooseTrail_condition(data.trail_condition));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }  

  return (

    //TODO - add Handle function
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="trail_name">Trail Name</label>
            <Input {...register('trail_name')} name='trail_name' placeholder="Trail Name"/>
        </div>
        <div>
            <label htmlFor="nearby_city">Nearby City</label>
            <Input {...register('nearby_city')}  name='nearby_city' placeholder="Nearby City"/>
        </div>
        <div>
            <label htmlFor="trail_length">Trail Length</label>
            <Input {...register('trail_length')}  name='trail_length' placeholder="Trail Length"/>
        </div>
        <div>
            <label htmlFor="trail_condition">Trail Condition</label>
            <Input {...register('trail_condition')}  name='trail_condition' placeholder="Trail Condition"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TrailForm