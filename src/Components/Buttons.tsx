import { ReactNode } from "react";

type Props={
    children?:ReactNode;
    indexButtonProps:boolean;
    onclickButton:()=>void;
}
function Buttons({children, indexButtonProps,onclickButton}:Props){
    return(
<button type="button" onClick={onclickButton} disabled={indexButtonProps}
className="btn btn-primary">{children}</button>

    )
}
export default Buttons