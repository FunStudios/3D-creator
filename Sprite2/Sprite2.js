/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("main (door)", "./Sprite2/costumes/main (door).svg", {
        x: 74,
        y: 61.5
      }),
      new Costume("main (no door)", "./Sprite2/costumes/main (no door).svg", {
        x: 74.00000000000003,
        y: 61.5
      }),
      new Costume("edge", "./Sprite2/costumes/edge.svg", {
        x: 74.07561000000004,
        y: 62.9769201587558
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *startAsClone() {
    this.costume = "edge";
    this.effects.color = this.toNumber(this.stage.vars.sideColourColor);
    for (let i = 0; i < this.toNumber(this.stage.vars.length); i++) {
      this.x += 1;
      this.y += 1;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "main (no door)";
    while (true) {
      this.effects.color = this.toNumber(this.stage.vars.frontColourColor);
      this.createClone();
      this.size = this.toNumber(this.stage.vars.size);
      yield;
    }
  }
}
