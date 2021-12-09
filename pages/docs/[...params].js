import { useRouter } from 'next/router';

export default function Docs(){
    const router = useRouter()
    const {params =[]} = router.query 
    console.log(params)
    
    if(params.length == 2){
        return (
            <h1>2 params passed</h1>
        );        
    }
    if(params.length == 1){
        return (
            <h1>1 params passed</h1>
        );        
    }
    return (
        <h1>Docs Home Page</h1>
    );
}