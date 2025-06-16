
import resourcesMenu from "./resources-menu.json";
import { Link } from 'react-router-dom';



const ResourcesMenu = () => {
	return (
		<section className="py-8">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{resourcesMenu.menuItems.map((item) => (
						<div>
							<div
								key={item.id}
								className="text-track border-b-2 border-track w-2/3"
							>
								<h3 className="text-2xl font-medium mb-2">{item.name}</h3>
							</div>
                            <div>
                                {item.children.map((child) => (
                                    <Link
                                        to={child.link}
                                        key={child.id}
                                        className="block my-8"
                                    >
                                        <h4 className="text-lg font-medium mb-2">{child.name}</h4>
                                        <p className="text-base text-gray-600">{child.description}</p>
                                    </Link>
                                ))}
                            </div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ResourcesMenu;
