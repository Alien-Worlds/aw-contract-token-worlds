/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:17:23 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Members` object.
 *
 * @class
 */
export class Members implements Entity {
  /**
   * Constructs a new instance of the `Members` class.
   *
   * @public
   * @constructor
   * @param string sender
   * @param number agreedtermsversion
   * @param string [id]
   * @returns `Members` - An instance of the `Members` class.
   */
  public constructor(
    public sender: string,
    public agreedtermsversion: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Members` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      sender: this.sender,
      agreedtermsversion: this.agreedtermsversion,
    };
  }

  /**
   * Creates an instance of the `Members` class.
   *
   * @static
   * @public
   * @param string sender
   * @param number agreedtermsversion
   * @returns `Members` An instance of the `Members` class.
   */
  public static create(
    sender: string,
    agreedtermsversion: number,
    id?: string,
    rest?: UnknownObject
  ): Members {
    const entity = new Members(
      sender,
      agreedtermsversion,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Members {
    return new Members(
      '',
      0,
    );
  }
}

