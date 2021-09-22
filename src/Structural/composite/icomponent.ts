import Folder from './folder';

export default interface IComponent {
  /**
   * A component interface describing the common
   * fields and methods of leaves and composites
   */

  referenceToParent?: Folder; // Parents are composites, and not leaves

  dir(indent: string): void;
  // A method each Leaf and Composite should implement

  detach(): void;
  // Called before a Leaf is attached to a Composite
}
