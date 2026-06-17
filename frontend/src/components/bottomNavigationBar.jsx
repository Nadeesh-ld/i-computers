import { Link, useLocation } from "react-router-dom";
import { BiHomeAlt, BiShoppingBag, BiCart, BiUser } from "react-icons/bi";

const navItems = [
	{ to: "/", label: "Home", icon: BiHomeAlt },
	{ to: "/products", label: "Products", icon: BiShoppingBag },
	{ to: "/cart", label: "Cart", icon: BiCart },
	{ to: "/settings", label: "Settings", icon: BiUser },
];

export default function BottomNavigationBar() {
	const location = useLocation();

	return (
		<nav className="md:hidden fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white/95 backdrop-blur shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
			<div className="grid grid-cols-4">
				{navItems.map(({ to, label, icon: Icon }) => {
					const isActive = location.pathname === to;

					return (
						<Link
							key={to}
							to={to}
							className={`flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium transition-colors duration-200 ${
								isActive ? "text-accent" : "text-gray-500"
							}`}
						>
							<Icon className={`text-2xl ${isActive ? "scale-110" : ""}`} />
							<span>{label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
