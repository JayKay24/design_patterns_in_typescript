import { ITable } from './table';
import SmallTable from './small-table';
import MediumTable from './medium-table';
import BigTable from './big-table';

export default class TableFactory {
  static getTable(table: string): ITable {
    switch (table) {
      case 'BigTable':
        return new BigTable();
      case 'MediumTable':
        return new MediumTable();
      case 'SmallTable':
        return new SmallTable();
      default:
        throw new Error('No Table Found');
    }
  }
}
