import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() app: string;

  render() {
    return <div>This is {this.app}</div>;
  }
}
