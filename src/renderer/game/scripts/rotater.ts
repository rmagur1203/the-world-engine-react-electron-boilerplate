/* eslint-disable no-underscore-dangle */
import { Component } from 'the-world-engine';

export default class Rotator extends Component {
  private _accumulatedTime = 0;

  public update() {
    this._accumulatedTime += this.engine.time.deltaTime;
    this.transform.position.x = Math.sin(this._accumulatedTime) * 3;
    this.transform.position.y = Math.cos(this._accumulatedTime) * 3;
  }
}
