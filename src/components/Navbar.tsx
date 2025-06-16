import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { navMenu } from "./navMenu.ts";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const getLinkClass = (path: string) => {
		return location.pathname === path
			? "relative inline-block text-track hover:text-gray-600 pb-1"
			: "relative inline-block text-gray-600 hover:text-track pb-1";
	};

	const getLinkClassSpan = (path: string) => {
		return location.pathname === path
			? "absolute bottom-0 left-0 w-full h-1 bg-track"
			: "absolute bottom-0 left-0 w-0 h-1 bg-track transform transition-all duration-300 ease-in-out group-hover:w-full";
	};

	return (
		<header className="py-4 bg-white sticky top-0 z-50 shadow-sm">
			<div className="container mx-auto max-w-7xl px-4">
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center">
						<Logo />
					</Link>

					<nav className="hidden lg:flex ml-10">
						<ul className="flex space-x-8 text-lg">
							{navMenu.map((item) => (
								<li key={item.id} className="group">
									<Link to={item.path} className={getLinkClass(item.path)}>
										{item.title}
										<span className={getLinkClassSpan(item.path)}></span>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="hidden lg:flex items-center space-x-4">
						<Link
							to="/admin"
							className="text-track hover:text-gray-600 text-lg"
						>
							Login
						</Link>
						<Button className="bg-track hover:bg-track-dark px-4 text-lg">
							Get Demo
						</Button>
					</div>

					<button
						className="lg:hidden text-gray-500 hover:text-gray-700"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="lg:hidden mt-4 pb-4">
						<nav>
							<ul className="flex flex-col space-y-4 text-center text-lg">
								{navMenu.map((item) => (
									<li key={item.id} className="group">
										<Link to={item.path} className={getLinkClass(item.path)} onClick={() => setIsMenuOpen(false)}>
											{item.title}
											<span className={getLinkClassSpan(item.path)}></span>
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className="mt-4 flex flex-col space-y-4 items-center">
							<Link
								to="/admin"
								className="text-track hover:text-gray-600 py-2 text-lg"
								onClick={() => setIsMenuOpen(false)}
							>
								Login
							</Link>
							<Button className="bg-track hover:bg-track-dark w-fit text-lg" onClick={() => setIsMenuOpen(false)}>
								Get Demo
							</Button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
