import * as React from 'react'

export function UserInfo(propsArray)
{
    const [dataToShow, setData] = React.useState({  name:"",username:"",email:""  })
    const [id] = propsArray.props

    React.useEffect(()=>
    {
        async function fetchData() {
            try {
                const res = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                const data = await (await res).json()
                setData(data)
            } catch (error) {
                console.warn("uh oh")
            }
        }

        fetchData()
    },
    [id]
    )

    return (
        <>
            <hr />
            <br />
            <div className='profile'>
                <h2>User uhh data</h2>
                <div className='profileTop'>
                    <div>
                        <p><strong>Username:</strong></p>
                        <p>{dataToShow.username}</p>
                    </div>
                    
                    <hr />

                    <div>
                        <p><strong>Name:</strong></p>
                        <p>{dataToShow.name}</p>
                    </div>
                </div>
                <hr />
                <p><strong>email:</strong></p>
                <p>{dataToShow.email}</p>
            </div>
            <hr />
        </>
    )
}