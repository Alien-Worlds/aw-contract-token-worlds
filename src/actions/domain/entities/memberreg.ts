/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:59:46 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Memberreg` object.
 *
 * @class
 */
export class Memberreg implements Entity {
  /**
   * Constructs a new instance of the `Memberreg` class.
   *
   * @public
   * @constructor
   * @param string sender
   * @param string agreedterms
   * @param string dacId
   * @param string [id]
   * @returns `Memberreg` - An instance of the `Memberreg` class.
   */
  public constructor(
    public sender: string,
    public agreedterms: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Memberreg` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      sender: this.sender,
      agreedterms: this.agreedterms,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Memberreg` class.
   *
   * @static
   * @public
   * @param string sender
   * @param string agreedterms
   * @param string dacId
   * @returns `Memberreg` An instance of the `Memberreg` class.
   */
  public static create(
    sender: string,
    agreedterms: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Memberreg {
    const entity = new Memberreg(
      sender,
      agreedterms,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Memberreg {
    return new Memberreg(
      '',
      '',
      '',
    );
  }
}

