
function Card({name,about,font}){
    return(
        <div>
            
        <img src={font} alt={name} />
        <p> Name: {name}</p>
        <p>About: {about} </p>
        </div>
        )
}

export default Card