import { CardTeam } from "./components/CardTeam";
import { TeamData } from "./data/TeanData";

export default function App() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
     
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-black mb-4">The creative crew</h1>
        <div className="md:w-1/2">
          <h2 className="text-xl font-medium text-black mb-2">Who we are</h2>
          <p className="text-lg">
            We are team of creatively diverse, driven, innovative individuals working in various locations from the world.
          </p>
        </div>
      </header>

     
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TeamData.map((member, index) => (
          <CardTeam 
            key={index}
            photo={member.photo}
            name={member.name}
            role={member.role}
           
          />
        ))}
      </div>
    </div>
  );
}