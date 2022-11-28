import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets
            .map((planet, index) => {
              const { name, image: img } = planet;
              return <PlanetCard key={ index } planetName={ name } planetImage={ img } />;
            })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
