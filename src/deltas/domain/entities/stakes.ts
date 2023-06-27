/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 16:44:35 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Asset } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Stakes` object.
 *
 * @class
 */
export class Stakes implements Entity {
  /**
   * Constructs a new instance of the `Stakes` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Asset stake
   * @param string [id]
   * @returns `Stakes` - An instance of the `Stakes` class.
   */
  public constructor(
    public account: string,
    public stake: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Stakes` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      stake: this.stake,
    };
  }

  /**
   * Creates an instance of the `Stakes` class.
   *
   * @static
   * @public
   * @returns `Stakes` An instance of the `Stakes` class.
   */
  public static create(
    account: string,
    stake: Asset,
    id?: string,
    rest?: UnknownObject
  ): Stakes {
    const entity = new Stakes(
      account,
      stake,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Stakes {
    return new Stakes(
      '',
      Asset.getDefault(),
    );
  }
}

