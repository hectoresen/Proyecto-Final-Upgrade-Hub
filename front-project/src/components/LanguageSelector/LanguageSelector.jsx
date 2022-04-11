import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { InputSwitch } from 'primereact/inputswitch';

const LanguageSelector = () => {
    const {locale, changeLanguage} = useContext(LanguageContext);
    const [ischecked, setChecked] = useState(false);

    const handleLanguage = () =>{
        if(locale === 'es'){
            changeLanguage('en')
            setChecked(true)
        }else{
            changeLanguage('es')
            setChecked(false)
        }
    }

    return (
        <div>
            <InputSwitch value={locale} checked={ischecked} onChange={handleLanguage}/>
        </div>
    )
};

export default LanguageSelector;
