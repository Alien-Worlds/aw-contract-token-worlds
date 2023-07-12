/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Memberterms` object.
 *
 * @class
 */
export class Memberterms implements Entity {
  /**
   * Constructs a new instance of the `Memberterms` class.
   *
   * @public
   * @constructor
   * @param string terms
   * @param string hash
   * @param number version
   * @param string [id]
   * @returns `Memberterms` - An instance of the `Memberterms` class.
   */
  public constructor(
    public terms: string,
    public hash: string,
    public version: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Memberterms` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      terms: this.terms,
      hash: this.hash,
      version: this.version,
    };
  }

  /**
   * Creates an instance of the `Memberterms` class.
   *
   * @static
   * @public
   * @param string terms
   * @param string hash
   * @param number version
   * @returns `Memberterms` An instance of the `Memberterms` class.
   */
  public static create(
    terms: string,
    hash: string,
    version: number,
    id?: string,
    rest?: UnknownObject
  ): Memberterms {
    const entity = new Memberterms(
      terms,
      hash,
      version,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Memberterms {
    return new Memberterms(
      '',
      '',
      0,
    );
  }
}

