import { Link, useLocation } from "react-router-dom";

// Import icon library

import {
	Home,
	FileText,
	Clock5,
	CircleCheckBig,
    Briefcase,
    VideoIcon,
    Calendar,
    MessageSquareIcon,
    ChevronDown,
} from "lucide-react";

interface MenuLinksProps {
    toggleOffcanvas?: () => void;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ toggleOffcanvas }) => {
	const location = useLocation();

	return (
		<nav className="px-3">
			<ul className="p-2 pt-0 flex flex-col gap-3 text-gray-600">
				<li>
					<Link to="/admin/dashboard" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/dashboard" ? "bg-track text-white" : ""}`}>
							<Home />
							<span className="text-lg font-medium">Dashboard</span>
						</div>
					</Link>
				</li>
				<li>
					<Link to="/admin/attendance" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/attendance" ? "bg-track text-white" : ""}`}>
							<Clock5 />
							<span className="text-lg font-medium">Attendance</span>
						</div>
					</Link>
				</li>
                <li>
					<Link to="/admin/logs" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/logs" ? "bg-track text-white" : ""}`}>
							<FileText />
							<span className="text-lg font-medium">Logs</span>
						</div>
					</Link>
				</li>
                <li>
					<Link to="/admin/tasks" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/tasks" ? "bg-track text-white" : ""}`}>
							<CircleCheckBig />
							<span className="text-lg font-medium">Tasks</span>
						</div>
					</Link>
				</li>
                <li>
					<Link to="/admin/projects" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/projects" ? "bg-track text-white" : ""}`}>
							<Briefcase />
							<span className="text-lg font-medium">Projects</span>
						</div>
					</Link>
				</li>
                <li>
					<Link to="/admin/meetings" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/meetings" ? "bg-track text-white" : ""}`}>
							<VideoIcon />
							<span className="text-lg font-medium">Meetings</span>
						</div>
					</Link>
				</li>
                <li>
					<Link to="/admin/reminders" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/reminders" ? "bg-track text-white" : ""}`}>
							<Calendar />
							<span className="text-lg font-medium">Reminders</span>
						</div>
					</Link>
				</li>
                <li>
					<Link to="/admin/chats" onClick={toggleOffcanvas}>
						<div className={`flex items-center gap-3 p-4 rounded-md hover:bg-track hover:text-white
                        ${location.pathname === "/admin/chats" ? "bg-track text-white" : ""}`}>
							<MessageSquareIcon />
							<span className="text-lg font-medium grow">Chats</span>
                            <ChevronDown /> 
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MenuLinks;
