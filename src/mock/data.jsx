//Para subir dinamicamente, borren los ids y el producto que subieron a mano
//Exporten el array para usarlo en otro lado

export const productosDB = [
    {
        name: 'The Witcher 3: Wild Hunt',
        stock: 15,
        price: 40,
        description: 'Un RPG de mundo abierto con una trama rica, decisiones que afectan la historia y un vasto mundo lleno de vida.',
        img: 'https://i.postimg.cc/t4qcygzQ/The-Witcher3.jpg',
        category: 'ofertas'
    },
    {
        name: 'Red Dead Redemption 2',
        stock: 25,
        price: 55,
        description: 'Un juego de acción y aventura en un mundo abierto con una historia de vaqueros en el viejo oeste.',
        img: 'https://i.postimg.cc/8P7kWhyj/RedDead2.jpg',
        category: 'mas vendidos'
    },
    {
        name: 'Minecraft',
        stock: 50,
        price: 30,
        description: 'Un juego de sandbox donde los jugadores pueden construir, explorar y sobrevivir en un mundo hecho de bloques.',
        img: 'https://i.postimg.cc/QMXRgDX0/Minecraft.jpg',
        category: 'mas vendidos'
    },
    {
        name: 'God of War (2018)',
        stock: 20,
        price: 45,
        description: 'Juego de acción y aventura con mitología nórdica, centrado en la relación entre Kratos y su hijo Atreus.',
        img: 'https://i.postimg.cc/kM1XBjv0/God-of-War.jpg',
        category: 'nuevos'
    },
    {
        name: 'Horizon Zero Dawn',
        stock: 18,
        price: 40,
        description: 'Un juego de rol y acción en un mundo post-apocalíptico donde luchas contra robots gigantes en un entorno natural.',
        img: 'https://i.postimg.cc/NFMsdTBC/Horizon-Zero.jpg',
        category: 'ofertas'
    },
    {
        name: 'Super Mario Odyssey',
        stock: 30,
        price: 50,
        description: 'Un juego de plataformas en 3D donde Mario viaja por diferentes mundos en busca de su princesa.',
        img: 'https://i.postimg.cc/R0X2XYh9/Super-Mario-Odyssey.jpg',
        category: 'nuevos'
    },
    {
        name: 'Resident Evil 4',
        stock: 40,
        price: 60,
        description: 'Un juego de accion y terror. Leon tendra una mision importante pero no sabe lo que le espera.',
        img: 'https://i.postimg.cc/sgPkZxRM/Resident-Evil4.jpg',
        category: 'mas vendidos'
    }
];

export const getProducts = () =>{
  
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productos)
            
            }
        },3000)
    })
}

export const getOneProduct = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }else{
                reject('No hay data')
            }
        },3000)
    })
}