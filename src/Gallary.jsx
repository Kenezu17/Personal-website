import getimageUrl from './utils'

export default function Profile() {
    const person =[
      {id:1, name: 'kenezu', age:23, imageId: 'v/t39.30808-1/504251104_1237464761113359_3395762159897098979_n'},
    ]

    return(
        <>
    {person.map(p =><div key={p.id}>
        <img src={getimageUrl(p)} alt={p.name}/>
        <h1>{p.name}</h1>
        <p>{p.age}</p>
    </div>)}
    
    </>
    )
}