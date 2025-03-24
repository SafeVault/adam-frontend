<<<<<<< HEAD
import SidebarItem from "../ui/sidebaritem";
import DropDownMenu from "../ui/dropdownmenu";

import equityIcon from "../../assets/icons/equity.svg";
import escrowIcon from "../../assets/icons/escrow.svg";
import homeIcon from "../../assets/icons/home.svg";
import payrollIcon from "../../assets/icons/payroll.svg";
import settingsIcon from "../../assets/icons/settings.svg"
import receiptIcon from "../../assets/icons/receipt.svg"
import timeIcon from "../../assets/icons/time.svg"

function Sidebar() {
  const navItems = [
    {
      name: "Payroll",
      icon: payrollIcon,
      unavailable: false,
      subItems: [
        { title: "Expenses", url: "/" },
        { title: "Employees", url: "/" },
      ]
    },
    {
      name: "Settings",
      icon: settingsIcon,
      unavailable: false,
      subItems: [
        { title: "Password", url: "/" },
        { title: "Users", url: "/" },
      ]
    },
    {
      name: "Invoice",
      icon: receiptIcon,
      unavailable: true,
    },
    {
      name: "Escrow",
      icon: escrowIcon,
      unavailable: true,
    },
    {
      name: "Equity",
      icon: equityIcon,
      unavailable: true,
    },
    {
      name: "Transaction History",
      icon: timeIcon,
      unavailable: false,
    },
  ];

  return (
    <aside className="h-full bg-adam-black-50 text-white px-2 pt-16 space-y-6">
      <h3 className="font-medium text-xs hover:bg-gradient-to-r from-[#661B66] via-[#2A262A] to-[#191919] px-3 py-2 rounded-xs flex items-center gap-1">
        <img src={homeIcon}/>
        <span>Dashboard</span>
      </h3>

      <menu className="grid gap-4 px-2 text-xs">
        {navItems.map((item, idx) => {
          return item.subItems ? (
            <div key={idx}>
              <DropDownMenu
                buttonLabel={item.name}
                icon={item.icon}
                items={item.subItems}
              />
            </div>
          ) : (
            <div key={idx}>
              <SidebarItem
                icon={item.icon}
                name={item.name}
                unavailable={item.unavailable}
              />
            </div>
          );
        })}
      </menu>
    </aside>
  );
}

export default Sidebar;
=======
function Sidebar() {
    return (
      <aside className="bg-adam-blue-100 p-4 h-full">
        Sidebar
      </aside>
    );
}
  
export default Sidebar;
  
>>>>>>> 155cb634d05f741882e343d29d06c0c264bdc3f3
