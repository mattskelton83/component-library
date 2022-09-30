import { Component, Event, EventEmitter, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {
  @Prop() inputType: string = 'text';
  @Prop() inputId: string = 'text';
  @Prop() inputAppearance: string;
  @Prop() inputLabel: string;
  @Prop() inputPlaceholder: string;

  @Event() inputChange: EventEmitter<string>;

  @State() value: string;

  private handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.inputChange.emit(this.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="{this.inputId}">{this.inputLabel}</label>
        <input
          type="{this.inputType}"
          id="{this.inputId}"
          class="{this.inputAppearance}"
          placeholder="{this.inputPlaceholder}"
          value={this.value}
          onInput={event => this.handleChange(event)}
        />
      </div>
    );
  }
}
