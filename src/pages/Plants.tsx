// import Filters from "../components/Filters";
import { plants } from "../data/plants";

const Home = () => (
  <div className="space-y-6 max-w-7xl mx-auto">
    <h2>Planter 🌱</h2>
    {/* <Filters /> */}
    <div className="grid grid-cols-3 gap-4">
      {plants.map((plant) => (
        <div
          className="bg-foreground rounded-lg p-4 sm:p-6 shadow-md space-y-2 hover:shadow-lg transition-shadow duration-300"
          key={plant.id}
        >
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
