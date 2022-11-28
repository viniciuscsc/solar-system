import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets
          .map((planet, index) => {
            const { name, image } = planet;
            return <PlanetCard key={ index } planetName={ name } planetImage={ image } />;
          })}
      </div>
    );
  }
}

export default SolarSystem;
