/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:01:20 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Unstakes` object.
 *
 * @class
 */
export class Unstakes implements Entity {
  /**
   * Constructs a new instance of the `Unstakes` class.
   *
   * @public
   * @constructor
   * @param number key
   * @param string account
   * @param Asset stake
   * @param Date releaseTime
   * @param string [id]
   * @returns `Unstakes` - An instance of the `Unstakes` class.
   */
  public constructor(
    public key: number,
    public account: string,
    public stake: Asset,
    public releaseTime: Date,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unstakes` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      account: this.account,
      stake: this.stake,
      releaseTime: this.releaseTime,
    };
  }

  /**
   * Creates an instance of the `Unstakes` class.
   *
   * @static
   * @public
   * @param number key
   * @param string account
   * @param Asset stake
   * @param Date releaseTime
   * @returns `Unstakes` An instance of the `Unstakes` class.
   */
  public static create(
    key: number,
    account: string,
    stake: Asset,
    releaseTime: Date,
    id?: string,
    rest?: UnknownObject
  ): Unstakes {
    const entity = new Unstakes(
      key,
      account,
      stake,
      releaseTime,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unstakes {
    return new Unstakes(
      0,
      '',
      Asset.getDefault(),
      new Date(0),
    );
  }
}

