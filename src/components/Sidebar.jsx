import { BsPlus, BsFillLightningFill,} from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="h-screen w-16 flex flex-col
                  bg-transparent dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaFire size="50"/>}/>
        <SideBarIcon icon={<BsPlus size="70"  />} />
        <SideBarIcon icon={<BsFillLightningFill size="50"  />} />
        <SideBarIcon icon={<FaPoo size="50"  />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = '' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
