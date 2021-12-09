export default function UserList({users}){
    return (
        <>
            <h1>User List: </h1>
            {
                users.map((user)=>{
                    return (
                        <div id={user.id}>
                            <p>{user.name}-{user.email}</p>
                        </div>
                    )
                })
            }
        </>
    );
}


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
      props: {
          users : data
      }, // will be passed to the page component as props
    }
  }