import React from "react";
import Topo from "./componentes/Topo.js";
import Produtores from "./componentes/Produtores.js";

export default function Home() {
    return <Produtores topo={Topo}/>

}