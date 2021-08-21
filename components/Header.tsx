export interface Props {
    color : string
    name : string
}

const Header = (props : Props) => {
    return (
        <div>
            <h1 style={{color : props.color}}>
                {props.name}
            </h1>
        </div>
    )
}

export default Header;