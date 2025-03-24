import { useState, useRef } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";

interface DropdownMenuProps {
  buttonLabel: string;
  icon: string;
  items: DropdownItem[];
}

interface DropdownItem {
  title: string;
  url: string; // Since we are using links only, url is mandatory now
}

function DropDownMenu({ buttonLabel, icon, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setOpen(false),
  });

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`${open ? 'bg-[#242424]' : ''} p-2 rounded-xs`} ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex w-full justify-between items-center font-medium"
        onClick={handleToggle}
      >
        <span className="inline-flex gap-2 items-center"><img src={icon} />{buttonLabel}</span>
        <span className="cursor-pointer">
          {open ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
        </span>
      </button>
      
      {/* Dropdown menu items */}
      {open && (
        <div className="">
          <ul>
            {items.map((item, index) => (
              <li key={index} className="pl-2 flex items-center gap-2 text-inherit cursor-pointer hover:bg-linear-to-r from-[#661B66] from-20% via-[#2A262A] via-70% to-[#242424] to-100%">
                <Link to={item.url} className="w-full text-left px-4 py-2">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
