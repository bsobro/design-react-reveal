import supportHelp from "@/components/resources/support/supportHelp.json";
import React from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
const MoreHelp = () => {
    const iconComponents = supportHelp.method.reduce<Record<string, React.LazyExoticComponent<LucideIcon>>>((map, item) => {
        if (!item.icon) return map;
    
        map[item.icon] = React.lazy(() =>
          import("lucide-react").then((mod) => {
            if (!(item.icon in mod)) {
              throw new Error(`Icon "${item.icon}" not found in lucide-react`);
            }
            return { default: mod[item.icon] as LucideIcon };
          })
        );
    
        return map;
      }, {});
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="w-full max-w-4xl mx-auto text-center">
                    <h3 className="text-4xl font-semibold mb-16">
                        Need More Help?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {supportHelp.method.map((item, index) => {
                            const IconComponent = iconComponents[item.icon];
                        return (
                            <div key={index} className="flex flex-col items-center text-center gap-4">
                                <div className=" bg-track rounded-full p-3 text-white">
                                    <React.Suspense fallback={<div>Loading...</div>}>
                                        <IconComponent size={28}/>
                                    </React.Suspense>
                                </div>
                                <h4 className="text-lg font-semibold mt-2">{item.name}</h4>
                                <p className="text-gray-600 text-balance">{item.description}</p>
                                <Link to={item.link} className="text-track text-balance">{item.linkText}</Link>
                            </div>
                        );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreHelp;