import { useParams } from "react-router-dom";

export default function PlacePage(){
    const {id} = useParams();
    return(
        <h1>Place page:{id}</h1>
    );
}
