export default function Card({
    degree = "none",
    color = "purple",
    font = "0",
    image = "icon/personTwo.png"
}) {

    return (
        <div style ={{fontSize:font}}>
            {
                color=="none" ? <img src={'icon/person.png'} width = '100' /> :
                color=="none" ? <img src={'icon/personThree.png'} width = '100' /> :
                                 <img src={image} width = '100' /> 

            }
        
            {degree}
        </div>
    )
}