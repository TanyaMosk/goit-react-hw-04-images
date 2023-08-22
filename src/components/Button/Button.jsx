import { Btn, WrapBtn } from "./Button.styled"

const Button = ({onClick}) => {
    return (
        <WrapBtn>
          <Btn type="button" onClick={onClick}>Load more</Btn>
        </WrapBtn> 
    )
};

export default Button;