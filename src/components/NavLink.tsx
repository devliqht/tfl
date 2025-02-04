import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export interface NavLinkProps {
      to: string;
      label: string;
      onClick?: () => void;
      mobile?: boolean;
  }
    
export const NavLink: React.FC<NavLinkProps> = ({ to, label, onClick, mobile = false}) => {
  const location = useLocation(); // Get current path
  const active = location.pathname === to; // Check if link is active

      return (
        <Link
          to={to}
          className=
          {`${mobile ? 
                    'text-gray-700 hover:text-red-600 ibm-plex-mono-regular text-md py-4 transition ease-in-out duration-200 relative group border-b-2 hover:border-b-red-600' 
            : `${active ? 
                      'ibm-plex-mono-regular text-red-400 hover:text-red-600 py-3 text-md transition ease-in-out duration-200 relative group' 
                      : 'ibm-plex-mono-regular text-gray-600 hover:text-red-600 py-3 text-md transition ease-in-out duration-200 relative group'}`}`
          }
          onClick={onClick}           
        >
          {label}
          {mobile ? null : <span className={`${active ? 'absolute bottom-0 left-0 h-[2px] w-full bg-red-400 transition-all duration-300 group-hover:w-full' : 'absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'}`}></span> }
        </Link>
      );
  };