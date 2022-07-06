export const ComponentB = ({setCounter}) => {
    return (
        <>
            <button onClick={()=>setCounter(counter => counter+1)}>Add One</button>
        </>
    )
}