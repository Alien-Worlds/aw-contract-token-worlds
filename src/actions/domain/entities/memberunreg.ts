/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 07:20:11 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Memberunreg` object.
 *
 * @class
 */
export class Memberunreg implements Entity {
  /**
   * Constructs a new instance of the `Memberunreg` class.
   *
   * @public
   * @constructor
   * @param string sender
   * @param string dacId
   * @param string [id]
   * @returns `Memberunreg` - An instance of the `Memberunreg` class.
   */
  public constructor(
    public sender: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Memberunreg` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      sender: this.sender,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Memberunreg` class.
   *
   * @static
   * @public
   * @returns `Memberunreg` An instance of the `Memberunreg` class.
   */
  public static create(
    sender: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Memberunreg {
    const entity = new Memberunreg(
      sender,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Memberunreg {
    return new Memberunreg(
      '',
      '',
    );
  }
}

