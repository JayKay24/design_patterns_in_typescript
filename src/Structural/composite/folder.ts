import IComponent from './icomponent';

export default class Folder implements IComponent {
  // A Composite can contain Leaves and Composites

  referenceToParent?: Folder;
  name: string;
  components: IComponent[];

  constructor(name: string) {
    this.name = name;
    this.components = [];
  }

  dir(indent: string): void {
    console.log(`${indent}<DIR> ${this.name}`);

    this.components.forEach((component) => {
      component.dir(indent + '..');
    });
  }

  attach(component: IComponent): void {
    /**
     * Detach Leaf/Composite from any current parent reference and
     * then set the parent reference to this composite
     */
    component.detach();
    component.referenceToParent = this;
    this.components.push(component);
  }

  delete(component: IComponent): void {
    // Removes Leaf/Composite from this.components
    const idx = this.components.indexOf(component);
    if (idx > -1) {
      this.components.splice(idx, 1);
    }
  }

  detach(): void {
    // Detaching this composite from its parent composite
    if (this.referenceToParent) {
      this.referenceToParent.delete(this);
      this.referenceToParent = undefined;
    }
  }
}
