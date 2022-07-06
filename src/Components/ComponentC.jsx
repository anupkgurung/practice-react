export const ComponentC = ({setCounter}) => {
    return (
        <>
            <button onClick={()=>setCounter(counter => counter+2)}>Add Two</button>
        </>
    )
}