/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Newmemterms` object.
 *
 * @class
 */
export class Newmemterms implements Entity {
  /**
   * Constructs a new instance of the `Newmemterms` class.
   *
   * @public
   * @constructor
   * @param string terms
   * @param string hash
   * @param string dacId
   * @param string [id]
   * @returns `Newmemterms` - An instance of the `Newmemterms` class.
   */
  public constructor(
    public terms: string,
    public hash: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Newmemterms` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      terms: this.terms,
      hash: this.hash,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Newmemterms` class.
   *
   * @static
   * @public
   * @param string terms
   * @param string hash
   * @param string dacId
   * @returns `Newmemterms` An instance of the `Newmemterms` class.
   */
  public static create(
    terms: string,
    hash: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Newmemterms {
    const entity = new Newmemterms(
      terms,
      hash,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Newmemterms {
    return new Newmemterms(
      '',
      '',
      '',
    );
  }
}

