/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
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
   * @param bigint key
   * @param string account
   * @param Asset stake
   * @param Date releaseTime
   * @param string [id]
   * @returns `Unstakes` - An instance of the `Unstakes` class.
   */
  public constructor(
    public key: bigint,
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
   * @returns `Unstakes` An instance of the `Unstakes` class.
   */
  public static create(
    key: bigint,
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
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unstakes {
    return new Unstakes(
      0n,
      '',
      Asset.getDefault(),
      new Date(0),
    );
  }
}

