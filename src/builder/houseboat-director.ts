import House from './house';
import HouseBuilder from './house-builder';

export default class HouseBoatDirector {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('House Boat')
      .setWallMaterial('Wood')
      .setNumberDoors(6)
      .setNummberWindows(8)
      .getResult();
  }
}
