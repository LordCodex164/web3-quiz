import { ButtonStyles } from "../../styles/main";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    width?:string;
    background?:string;
    border?:string | undefined;
    textColor?:string | undefined;
}

const Button = ({title,onClick, width,background,border, textColor}: ButtonProps) => {
  return (
    <ButtonStyles $color={textColor as string} $background={background as string} border={border} $width={width as string} onClick={onClick}>
        {title}
    </ButtonStyles>

  )
}

export default Button