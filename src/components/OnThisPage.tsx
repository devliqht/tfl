interface SidebarProps {
    sectionIds: string[];
  }
  
const OnThisPage: React.FC<SidebarProps> = ({ sectionIds }) => {
    return (
        <aside className="hidden md:block fixed w-64 p-6 top-8 right-12 bg-gray-200 rounded-lg shadow-md h-fit">
        <h3 className="text-xl font-bold text-gray-700">On This Page</h3>
        <ul className="mt-4 space-y-2 text-gray-400">
        {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block text-sm rounded-lg transition-colors duration-200 text-gray-600 hover:text-red-600"
              >
                {id.replace(/-/g, " ")}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    );
  };


  export default OnThisPage;