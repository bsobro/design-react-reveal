import React, { useState, useEffect } from "react";
import {
	Users,
	Activity,
	DollarSign,
	ShoppingCart,
	Clock5,
	LogIn,
	SquareMousePointer,
	ChartLine,
	ArrowUp,
	ClipboardList,
	CircleCheckBig,
	Briefcase,
	History,
	TrendingUp,
	TrendingDown,
	Plus,
	ArrowRight,
	ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
	const [currentTime, setCurrentTime] = useState<string>(
		new Date().toLocaleTimeString()
	);
	const [today, setToday] = useState<string>(new Date().toLocaleDateString());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">Dashboard</h1>

			{/* Attandance Tracker */}
			<div className="flex items-stretch gap-4 flex-wrap xl:flex-nowrap">
				<div className="flex flex-col items-center gap-2 text-center bg-white p-4 rounded-xl w-full xl:w-1/3">
					<span className="flex items-start gap-2 text-lg font-semibold text-left w-full grow">
						<Clock5 /> Attendance Tracker
					</span>
					<p className="text-4xl font-medium p-4 tracking-wider">
						{currentTime}
					</p>
					<p className="text-lg">
						{new Intl.DateTimeFormat("en-US", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
						}).format(new Date())}
					</p>
					<button className="bg-track text-white px-6 py-2 m-4 rounded-md flex items-center gap-2 xl:mb-16">
						<LogIn /> Check In
					</button>
				</div>
				<div className="flex flex-col gap-2 bg-white p-4 rounded-xl w-full xl:w-2/3">
					<div className="flex items-start justify-between w-full">
						<span className="flex items-start gap-2 text-lg font-semibold text-left grow">
							<SquareMousePointer /> Your Productivity Monitor
						</span>
						<p className="text-sm text-track bg-track-light p-2 rounded-md border border-track text-center">
							Active Monitoring
						</p>
					</div>
					<div className="flex items-center gap-2 w-full">
						<div className="w-4 h-4 bg-track rounded-sm"></div>
						<p>
							Overall Performance <span>(65%)</span>
						</p>
					</div>
					<div className="flex items-center gap-2 w-full pb-2">
						<div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
						<p>
							Remaining Time <span>(35%)</span>
						</p>
					</div>
					<div className="flex items-start justify-center gap-8 w-full flex-wrap">
						<div className="flex flex-col items-center justify-center gap-3 px-4">
							<div
								className="w-36 h-36 rounded-full 
						bg-[conic-gradient(from_0deg,_theme(colors.track.DEFAULT)_0%,_theme(colors.track.DEFAULT)_65%,_theme(colors.gray.200)_65%,_theme(colors.gray.200)_100%)]"
							></div>
							<p className="text-sm text-yellow-500 bg-yellow-100 p-2 rounded-md border border-yellow-500">
								Moderate Activity
							</p>
						</div>
						<div className="flex flex-col gap-2 grow">
							<div className="flex flex-col gap-2">
								<span className="flex items-center justify-between gap-1 w-full">
									<p>Average Key Press %</p>
									<p className="font-bold">36%</p>
								</span>
								<div className="w-full h-3 bg-gray-200 rounded-full">
									<div className="h-3 rounded-full bg-blue-400 w-[36%]"></div>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<span className="flex items-center justify-between gap-1 w-full">
									<p>Average Mouse Click %</p>
									<p className="font-bold">56%</p>
								</span>
								<div className="w-full h-3 bg-gray-200 rounded-full">
									<div className="h-3 rounded-full bg-blue-400 w-[56%]"></div>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<span className="flex items-center justify-between gap-1 w-full">
									<p>Average Mouse Movement %</p>
									<p className="font-bold">88%</p>
								</span>
								<div className="w-full h-3 bg-gray-200 rounded-full">
									<div className="h-3 rounded-full bg-blue-400 w-[88%]"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Dashboard Cards */}
			<div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
				<div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
					<div className="flex justify-between gap-1">
						<div className="flex flex-col gap-2">
							<p className="font-medium">No. of Projects</p>
							<p className="text-4xl font-bold">4</p>
						</div>
						<div className="bg-track-light p-2 rounded-xl h-fit">
							<Briefcase size={28} className="text-track" />
						</div>
					</div>
					<p className="text-sm text-gray-600 font-medium">Active Projects</p>
					{/* <div className="flex items-center gap-x-1 flex-wrap font-medium pt-3">
						<span className="text-track flex items-center gap-2">
							<TrendingUp size={20} />
							8.5%
						</span>
						<span className="text-gray-600 ">Up from yesterday</span>
					</div> */}
				</div>

				<div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
					<div className="flex justify-between gap-4">
						<div className="flex flex-col gap-2">
							<p className="font-medium">Task Completed</p>
							<p className="text-4xl font-bold">12</p>
						</div>
						<div className="bg-indigo-100 p-2 rounded-xl h-fit">
							<CircleCheckBig size={28} className="text-indigo-400" />
						</div>
					</div>
					<p className="text-sm text-gray-600 font-medium">This Week</p>
					<div className="flex items-center gap-x-1 flex-wrap font-medium pt-3">
						<span className="text-track flex items-center gap-2">
							<TrendingUp size={20} />
							8.5%
						</span>
						<span className="text-gray-600 ">Up from yesterday</span>
					</div>
				</div>

				<div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
					<div className="flex justify-between gap-4">
						<div className="flex flex-col gap-2">
							<p className="font-medium">Task In Progress</p>
							<p className="text-4xl font-bold">12</p>
						</div>
						<div className="bg-amber-100 p-2 rounded-xl h-fit">
							<ClipboardList size={28} className="text-amber-400" />
						</div>
					</div>
					<p className="text-sm text-gray-600 font-medium">This Week</p>
					<div className="flex items-center gap-x-1 flex-wrap font-medium pt-3">
						<span className="text-track flex items-center gap-2">
							<TrendingUp size={20} />
							8.5%
						</span>
						<span className="text-gray-600 ">Up from yesterday</span>
					</div>
				</div>

				<div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
					<div className="flex justify-between gap-4">
						<div className="flex flex-col gap-2">
							<p className="font-medium">Tasks Pending</p>
							<p className="text-4xl font-bold">12</p>
						</div>
						<div className="bg-orange-100 p-2 rounded-xl h-fit">
							<History size={28} className="text-orange-400" />
						</div>
					</div>
					<p className="text-sm text-gray-600 font-medium">This Week</p>
					<div className="flex items-center gap-x-1 flex-wrap font-medium pt-3">
						<span className="text-red-500 flex items-center gap-2">
							<TrendingDown size={20} />
							8.5%
						</span>
						<span className="text-gray-600 ">Down from yesterday</span>
					</div>
				</div>
			</div>

			{/* My Task & Recent Chat Row */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				
				
				{/* My Task */}
				<div className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between gap-3">
					<div className="flex flex-col gap-3">
						<div className="flex justify-between gap-4">
							<div className="flex gap-3 items-center">
								<h2 className="font-medium text-2xl">My Task</h2>
								<p className="bg-gray-200 py-1 px-2 rounded-xl text-sm">
									5 tasks
								</p>
							</div>
							<button className="flex items-start gap-1 bg-track text-white p-2 rounded-md h-fit font-medium">
								<Plus size={20} /> Add Task
							</button>
						</div>

						<div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-xl">
							<div className="flex items-start justify-between gap-2">
								<div className="flex flex-col gap-1">
									<h5 className="font-medium">Create Dashboard Wireframe</h5>
									<p className="text-sm text-gray-600 font-medium">
										Kaamsansar Web
									</p>
									<p className="text-sm text-gray-600 font-medium">
										Due Date: 2025-05-15
									</p>
								</div>
								<div className="flex items-center gap-2">
									<p className="bg-track-light px-3 py-2 rounded-2xl text-base text-track">
										Completed
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-xl">
							<div className="flex items-start justify-between gap-2">
								<div className="flex flex-col gap-1">
									<h5 className="font-medium">Create Dashboard Wireframe</h5>
									<p className="text-sm text-gray-600 font-medium">
										Kaamsansar Web
									</p>
									<p className="text-sm text-gray-600 font-medium">
										Due Date: 2025-05-15
									</p>
								</div>
								<div className="flex items-center gap-2">
									<p className="bg-track-light px-3 py-2 rounded-2xl text-base text-track">
										Completed
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-xl">
							<div className="flex items-start justify-between gap-2">
								<div className="flex flex-col gap-1">
									<h5 className="font-medium">Create Dashboard Wireframe</h5>
									<p className="text-sm text-gray-600 font-medium">
										Kaamsansar Web
									</p>
									<p className="text-sm text-gray-600 font-medium">
										Due Date: 2025-05-15
									</p>
								</div>
								<div className="flex items-center gap-2">
									<p className="bg-track-light px-3 py-2 rounded-2xl text-base text-track">
										Completed
									</p>
								</div>
							</div>
						</div>
					</div>
					<Link to="/admin/tasks">
						<button className="flex items-center gap-1 text-track w-fit font-medium border-b border-track p-2">
							View All Tasks <ChevronRight size={20} />
						</button>
					</Link>
				</div>

				{/* Recent Chats */}
				<div className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between gap-3">
					<div className="flex flex-col gap-3">
						<div className="flex justify-between gap-4">
							<div className="flex gap-3 items-center">
								<h2 className="font-medium text-2xl">Recent Chats</h2>
							</div>
						</div>

						<div className="flex flex-col gap-4 p-2">
							<div className="flex items-start gap-2">
								<div className="flex items-center justify-center aspect-square h-12 w-12">
									<img
										src="../../img/chat-user-1.jpg"
										alt=""
										className="h-full w-full rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-1 grow">
									<div className="flex items-center justify-between gap-2">
										<h5 className="font-semibold">Nirmal GC</h5>
										<p className="text-sm text-gray-600 font-medium">10:25 AM</p>
									</div>
									<p className="text-sm text-gray-600 font-medium">
										<span className="text-blue-500">@Manish</span> Could you
										review the homepage design?
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="flex items-center justify-center aspect-square h-12 w-12">
									<img
										src="../../img/chat-user-2.jpg"
										alt=""
										className="h-full w-full rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-1 grow">
									<div className="flex items-center justify-between gap-2">
										<h5 className="font-semibold">Sangam Giri</h5>
										<p className="text-sm text-gray-600 font-medium">10:25 AM</p>
									</div>
									<p className="text-sm text-gray-600 font-medium">
										<span className="text-blue-500">@Manish</span> Could you
										review the homepage design?
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="flex items-center justify-center aspect-square h-12 w-12">
									<img
										src="../../img/chat-user-1.jpg"
										alt=""
										className="h-full w-full rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-1 grow">
									<div className="flex items-center justify-between gap-2">
										<h5 className="font-semibold">Mandeep</h5>
										<p className="text-sm text-gray-600 font-medium">10:25 AM</p>
									</div>
									<p className="text-sm text-gray-600 font-medium">
										<span className="text-blue-500">@Manish</span> Could you
										review the homepage design?
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="flex items-center justify-center aspect-square h-12 w-12">
									<img
										src="../../img/chat-user-2.jpg"
										alt=""
										className="h-full w-full rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-1 grow">
									<div className="flex items-center justify-between gap-2">
										<h5 className="font-semibold">Nirmal GC</h5>
										<p className="text-sm text-gray-600 font-medium">10:25 AM</p>
									</div>
									<p className="text-sm text-gray-600 font-medium">
										<span className="text-blue-500">@Manish</span> Could you
										review the homepage design?
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="flex items-center justify-center aspect-square h-12 w-12">
									<img
										src="../../img/chat-user-1.jpg"
										alt=""
										className="h-full w-full rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-1 grow">
									<div className="flex items-center justify-between gap-2">
										<h5 className="font-semibold">Nirmal GC</h5>
										<p className="text-sm text-gray-600 font-medium">10:25 AM</p>
									</div>
									<p className="text-sm text-gray-600 font-medium">
										<span className="text-blue-500">@Manish</span> Could you
										review the homepage design?
									</p>
								</div>
							</div>
							<div className="flex items-start gap-2">
								<div className="flex items-center justify-center aspect-square h-12 w-12">
									<img
										src="../../img/chat-user-2.jpg"
										alt=""
										className="h-full w-full rounded-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-1 grow">
									<div className="flex items-center justify-between gap-2">
										<h5 className="font-semibold">Nirmal GC</h5>
										<p className="text-sm text-gray-600 font-medium">10:25 AM</p>
									</div>
									<p className="text-sm text-gray-600 font-medium">
										<span className="text-blue-500">@Manish</span> Could you
										review the homepage design?
									</p>
								</div>
							</div>
						</div>
					</div>
					<Link to="/admin/chat">
						<button className="flex items-center gap-1 text-track w-fit font-medium border-b border-track p-2">
							View All Chats <ChevronRight size={20} />
						</button>
					</Link>
				</div>
			</div>

			{/* My Task & Recent Chat Row */}
		</div>
	);
};

export default Dashboard;
