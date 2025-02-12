const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-md">
        <img src="/images/search.png" alt="Search" width={14} height={14} />  
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent outline-none text-sm"
        />
      </div>
      {/* ICONS AND USER */}
      <div className=""></div>
    </div>
  );
};

export default NavBar;
