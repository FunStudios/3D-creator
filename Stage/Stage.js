/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.length = 50;
    this.vars.size = 100;
    this.vars.frontColourColor = 61;
    this.vars.sideColourColor = 14;
    this.vars.door = 0;

    this.watchers.length = new Watcher({
      label: "length",
      style: "slider",
      visible: true,
      value: () => this.vars.length,
      setValue: value => {
        this.vars.length = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 240,
      y: 180
    });
    this.watchers.size = new Watcher({
      label: "size",
      style: "slider",
      visible: true,
      value: () => this.vars.size,
      setValue: value => {
        this.vars.size = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 240,
      y: 138
    });
    this.watchers.frontColourColor = new Watcher({
      label: "front colour/color",
      style: "slider",
      visible: true,
      value: () => this.vars.frontColourColor,
      setValue: value => {
        this.vars.frontColourColor = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 240,
      y: 99
    });
    this.watchers.sideColourColor = new Watcher({
      label: "side colour/color",
      style: "slider",
      visible: true,
      value: () => this.vars.sideColourColor,
      setValue: value => {
        this.vars.sideColourColor = value;
      },
      step: 1,
      min: 0,
      max: 100,
      x: 240,
      y: 57
    });
    this.watchers.door = new Watcher({
      label: "door",
      style: "normal",
      visible: true,
      value: () => this.vars.door,
      x: 245,
      y: -19
    });
  }
}
