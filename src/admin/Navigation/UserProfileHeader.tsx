import React from "react";
import { User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const UserProfileHeader: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const buttonRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const user = {
		name: "Manish Shrestha",
		role: "Employee",
	};

	return (
		<div className="relative">
			<div
				ref={buttonRef}
				className="flex items-center rounded-md text-sm font-bold"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<div className="flex items-center gap-2">
					<div className="flex items-center relative cursor-pointer">
						<User className="h-8 w-8 bg-amber-200 rounded-full p-1" />
						<div className="absolute bottom-0 p-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
					</div>
					<div className="flex-col hidden md:flex cursor-default">
						<p className="text-sm font-semibold">{user.name}</p>
						<p className="text-xs text-gray-500">{user.role}</p>
					</div>
					<div className="hidden md:flex items-center cursor-pointer border rounded-full p-1">
						<ChevronDown />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1.5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="flex md:hidden items-center justify-center gap-2 p-2">
						<div className="flex items-center relative">
							<User className="h-8 w-8 bg-amber-200 rounded-full p-1" />
							<div className="absolute bottom-0 p-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
						</div>
						<div className="flex-col flex">
							<p className="text-sm font-semibold">{user.name}</p>
							<p className="text-xs text-gray-500">{user.role}</p>
						</div>
					</div>

					<Link
						to="/admin/profile"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-accent-foreground"
					>
						Profile
					</Link>
					<Link
						to="/admin/settings"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-accent-foreground"
					>
						Settings
					</Link>
					<Link
						to="/admin/logout"
						className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-accent-foreground"
					>
						Logout
					</Link>
				</div>
			)}
		</div>
	);
};

export default UserProfileHeader;
