import { PanelMenu } from 'primereact/panelmenu';
import { useContext } from 'react';
import { ProfileContext } from '../../Contexts/ProfileContext';
import { FormattedMessage  as T} from 'react-intl';
import './ProfileNavbar.scss';

const ProfileNavbar = () =>{
    const [profileNavbarActions, setProfileNavbarActions] = useContext(ProfileContext);

    var showFavProductsFlag = false;
    var showOrdersFlag = false;
    var showUserMailSettingsFlag = false;

        const items = [
            {
            label:<T id='profile.navbar.fav'/>,
            icon:'pi pi-fw pi-star-fill',
            items:[
                {
                    label:<T id='profile.navbar.fav'/>,
                    icon:'pi pi-fw pi-list',
                    command: () =>{
                        setProfileNavbarActions({
                            showFavProducts: !showFavProductsFlag,
                            showUserMailSettings: showUserMailSettingsFlag,
                            showOrders: showOrdersFlag,
                        });
                    }
                },
            ]
            },
            {
            label:<T id='profile.navbar.settings'/>,
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'E-mail',
                    icon:'pi pi-fw pi-envelope',
                    command: () =>{
                        setProfileNavbarActions({
                            showFavProducts: showFavProductsFlag,
                            showUserMailSettings: !showUserMailSettingsFlag,
                            showOrders: showOrdersFlag
                        })
                    }
                },
                // {
                //     label:<T id='profile.navbar.password'  />,
                //     icon:'pi pi-fw pi-lock'
                // },
                // {
                //     label: <T id='profile.navbar.wallet'  />,
                //     icon: 'pi pi-fw pi-wallet'
                // }
            ]
            },
            {
            label:<T id='profile.navbar.orders'  />,
            icon:'pi pi-fw pi-shopping-cart',
            items:[
                {
                    label:<T id='profile.navbar.record'  />,
                    icon:'pi pi-fw pi-calendar',
                    command: () =>{
                        setProfileNavbarActions({
                            showFavProducts: showFavProductsFlag,
                            showUserMailSettings: showUserMailSettingsFlag,
                            showOrders: !showOrdersFlag
                        });
                    }
                },
            ]
            }
        ];

    return <PanelMenu model={items} className="panelmenu"/>
}

export default ProfileNavbar;