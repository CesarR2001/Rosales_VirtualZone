import React, {useState,useEffect} from "react"
import { getProducts,productosDB } from "../mock/data"
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer = ({greeting}) => {
    const[products, setProducts]=useState([])
    const[loading, setLoading]= useState(false)
    const {category} = useParams()
    //FIREBASE
    useEffect(()=>{
        setLoading(true)
        //Conectamos con nuestra coleccion
        const productsCollection = category 
        ? query(collection( db,"productos"),where("category", "==",category))
        : collection( db,"productos")
        //pedir documentos
        getDocs(productsCollection)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])

    //MOCKLOCAL
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((res)=>{
    //         if(category){
    //             //filtrar
    //             setProducts(res.filter((prod)=> prod.category === category ))
    //         }else{
    //             setProducts(res)
    //         }
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[category])

     // funcion para agregar los items dinamicamente, una sola vez
    // const addData = () =>{
    //     const collectionToAdd = collection(db, "productos")
    //     productosDB.map((item)=> addDoc(collectionToAdd, item))
    // }
    
    return (
        <div className="ListContainer">
               {/* Para agregar los items dinamicamente, se hace UNA VEZ */}
            {/* <button onClick={addData}>Agregar a Firebase</button> */}
            <h1>
                {greeting}
            </h1>
            {loading ? <Loader/>: <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer