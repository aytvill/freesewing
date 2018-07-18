import { Point } from './point'
import { Path } from './path'
import { Snippet } from './snippet'
import { Attributes } from './attributes'

export class Part {
  id: string;
  render: boolean;
  points: { [index: string]: Point; } = {};
  paths: { [index: string]: Path; } = {};
  snippets: { [index: string]: Snippet; } = {};
  attributes = new Attributes();
  [propName: string]: any;

  constructor(id: string) {
    this.id = id;
    this.render = (id.substr(0,1) === '_') ? false : true;
    this.points.origin = new Point(0,0);

    return this;
  }
//  purge = {
//    points = function(prefix: string): void {}
//    paths = function(prefix: string): void {}
//  }
}
