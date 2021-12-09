import Link from 'next/link'

export default function property({properties}){
    return (
        <div>
            <h1>Property Page</h1>
            <ul>
                {
                    properties.map(property => (
                        <Link href={`property/${property.id}`}><a><li>{property.title}</li></a></Link>
                    ))
                }
            </ul>
        </div>
    );
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props : {
            properties : data
        }
    }
}