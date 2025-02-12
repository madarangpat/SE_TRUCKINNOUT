import { Link, useLocation } from "react-router-dom";  // ✅ Replaced next/link
import React from "react";

const menuItems = [
  {
    items: [
      {
        icon: "/images/homee.png",  // ✅ Ensure the image path is correct
        label: "Dashboard",
        href: "/dashboard/admin/home",
      },
      {
        icon: "/images/deliveries.png",
        label: "View Deliveries",
        href: "/dashboard/admin/viewdeliveries",
      },
      {
        icon: "/images/payroll.png",
        label: "Manage Payroll",
        href: "/dashboard/admin/managepayroll",
      },
    ],
  },
  {
    items: [
      {
        icon: "/images/accounts.png",
        label: "Accounts",
        href: "/dashboard/admin/accounts",
      },
      {
        icon: "/images/settings.png",
        label: "Settings",
        href: "/dashboard/admin/settings",
      },
      {
        icon: "/images/logoutt.png",
        label: "Logout",
        href: "/login",
      },
    ],
  },
];

const Menu = () => {
  const location = useLocation();  // ✅ Replaced usePathname()

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((group, index) => (
        <div className="flex flex-col gap-3" key={index}>
          {group.items.map((item) => (
            <Link
              to={item.href}  // ✅ Replaced href with to
              key={item.label}
              className={`flex items-center justify-center lg:justify-start gap-5 text-white py-2 rounded-lg transition duration-200 hover:bg-black/25 ${
                location.pathname === item.href ? "bg-black/25" : ""
              }`}
            >
              <img src={item.icon} alt={item.label} width={30} height={30} />  
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
