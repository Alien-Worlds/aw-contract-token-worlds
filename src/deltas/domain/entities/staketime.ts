/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Staketime` object.
 *
 * @class
 */
export class Staketime implements Entity {
  /**
   * Constructs a new instance of the `Staketime` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param number delay
   * @param string [id]
   * @returns `Staketime` - An instance of the `Staketime` class.
   */
  public constructor(
    public account: string,
    public delay: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Staketime` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      delay: this.delay,
    };
  }

  /**
   * Creates an instance of the `Staketime` class.
   *
   * @static
   * @public
   * @returns `Staketime` An instance of the `Staketime` class.
   */
  public static create(
    account: string,
    delay: number,
    id?: string,
    rest?: UnknownObject
  ): Staketime {
    const entity = new Staketime(
      account,
      delay,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Staketime {
    return new Staketime(
      '',
      0,
    );
  }
}

