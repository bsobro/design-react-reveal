import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const AboveFooter: React.FC = () => {
    return (
        <section className="bg-track p-4 md:p-8 text-center text-white">
            <h2 className="text-xl md:text-3xl font-medium mb-4 max-w-4xl mx-auto">Experience The Future Of Workforce Management With TrackStaff</h2>
            <div className="flex justify-center items-center gap-6 max-w-lg mx-auto">

                <Link to="/" className="w-1/2">
                <Button className="bg-white text-track hover:bg-slate-100 md:text-xl md:py-6 w-full">Get Started</Button>
                </Link>
                <Link to="/" className="w-1/2">
                <Button className="bg-white text-track hover:bg-slate-100 md:text-xl md:py-6 w-full">Schedule a Demo</Button>
                </Link>
            </div>
        </section>
    );
};


export default AboveFooter;