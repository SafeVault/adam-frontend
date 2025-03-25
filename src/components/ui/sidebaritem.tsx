interface SidebarItemProps {
  icon: string;
  name: string;
  unavailable?: boolean;
}

const SidebarItem = ({ icon, name, unavailable }: SidebarItemProps) => {
  return (
    <div>
      <p className="inline-flex w-full justify-between items-center p-2">
        <span className="inline-flex gap-2 items-center cursor-pointer">
          <img src={icon} />
          {name}
        </span>
        {unavailable && (
          <span className="text-[9px] text-[#979797] bg-[#303030] font-medium rounded-full px-1 italic">
            Coming Soon
          </span>
        )}
      </p>
    </div>
  );
};

export default SidebarItem;
