import {useRouter} from 'next/router'

export default function property({property}){
    const router = useRouter()
    if(router.isFallback){
        return(
            <h6>Loading...</h6>
        )
    }

    return (
        <div>Property page Internal call only {property.id}</div>
    );
}

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const paths = data.map(property => {
        return {
            params : {
                propertyId : `${property.id}`
            }
        }
    })

    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps(context){
    
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.propertyId}`)
    const data = await response.json()

    if(!data.id){
        return{
            notFound : true
        }
    }
    return{
        props : {
            property : data
        }
    }
}