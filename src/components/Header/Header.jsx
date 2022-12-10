import React from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
    const {user, onclose} = useTelegram()
    return (
        <div className={'header'}>
           <Button onclik={onClose}>Yopish</Button>
           <span className={'username'}>
               {user?.username}
           </span>
        </div>    
    );
};
export default Header;