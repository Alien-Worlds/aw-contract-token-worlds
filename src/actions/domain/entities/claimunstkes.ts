/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:11:52 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Symbol } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Claimunstkes` object.
 *
 * @class
 */
export class Claimunstkes implements Entity {
  /**
   * Constructs a new instance of the `Claimunstkes` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Symbol tokenSymbol
   * @param string [id]
   * @returns `Claimunstkes` - An instance of the `Claimunstkes` class.
   */
  public constructor(
    public account: string,
    public tokenSymbol: Symbol,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Claimunstkes` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      tokenSymbol: this.tokenSymbol,
    };
  }

  /**
   * Creates an instance of the `Claimunstkes` class.
   *
   * @static
   * @public
   * @returns `Claimunstkes` An instance of the `Claimunstkes` class.
   */
  public static create(
    account: string,
    tokenSymbol: Symbol,
    id?: string,
    rest?: UnknownObject
  ): Claimunstkes {
    const entity = new Claimunstkes(
      account,
      tokenSymbol,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Claimunstkes {
    return new Claimunstkes(
      '',
      Symbol.getDefault(),
    );
  }
}

