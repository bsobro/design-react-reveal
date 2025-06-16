import React from "react";
import solutionsData from "@/components/solutions/solutions-menu.json";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsMenu: React.FC = () => {
  // Dynamically generate the icon components
  const iconComponents = solutionsData.solutions.reduce<Record<string, React.LazyExoticComponent<LucideIcon>>>((map, solution) => {
    if (!solution.icon) return map;

    map[solution.icon] = React.lazy(() =>
      import("lucide-react").then((mod) => {
        if (!(solution.icon in mod)) {
          throw new Error(`Icon "${solution.icon}" not found in lucide-react`);
        }
        return { default: mod[solution.icon] as LucideIcon };
      })
    );

    return map;
  }, {});

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.solutions.map((solution) => {
            // Dynamically render the icon
            const IconComponent = iconComponents[solution.icon];

            return (
              <div key={solution.id} className="flex flex-col border border-gray-200 rounded-lg p-6">
                <div className="grow items-center text-center mb-4 gap-4">
                  {/* Render the icon dynamically */}
                  {IconComponent && (
                    <div
                      style={{ color: solution.color }}
                      className="mx-auto text-white flex items-center justify-center"
                    >
                      <React.Suspense fallback={<div>Loading...</div>}>
                        <IconComponent size={48}/>
                      </React.Suspense>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold my-4 mx-auto w-64">{solution.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{solution.description}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <div
                          style={{ backgroundColor: solution.color }}
                          className="text-white rounded-full p-1 flex items-center justify-center mr-4"
                        >
                          <Check />
                        </div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-4 italic text-balance">{solution.shortDesc}</p>
                  <Button
                    style={{ backgroundColor: solution.color }}
                    className="hover:opacity-80 text-white rounded-md text-xl w-fit"
                  >
                    <Link to={solution.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsMenu;