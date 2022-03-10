// import { useEffect, useState } from "react"
import GifGridItem from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
// 
const GifGrid = ({ category }) => {    
    const { data: images, loading } = useFetchGifs( category )
    return (
        <>
            <h4 className="uppercase">{ category }</h4>
            { loading && <h5 className="animate__animated animate__flash animate__infinite">Loading...</h5> }
            <div className="card-grid">
                {
                    images.map( image =>
                        <GifGridItem 
                            key={ image.id }
                            { ...image } 
                        />
                    )
                }
            </div>
        </>
    )
}
// 
export default GifGrid