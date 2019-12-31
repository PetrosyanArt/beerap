import React from "react";
import {useParams} from 'react-router-dom';

export default function SingleBeer() {
  const {id} = useParams()
return <h1>single beer page id : {id}</h1>;
}
