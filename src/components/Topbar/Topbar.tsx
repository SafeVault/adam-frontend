import { useLocation} from "react-router-dom";
import WalletButton from "../ui/walletbutton";
import WalletAddress from "../ui/walletaddress";

function Topbar() {
const path = useLocation()
const pathName = path.pathname

    return (
      <header className={`p-5 ${ pathName === '/payroll' ? "bg-black" : "bg-transparent"} flex justify-end`}>
        {pathName === "/payroll" ? <WalletAddress/> :  <WalletButton />}
      </header>
    );
}
  
export default Topbar;  