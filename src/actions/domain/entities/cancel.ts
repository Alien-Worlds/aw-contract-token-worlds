/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 16:44:35 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Symbol } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Cancel` object.
 *
 * @class
 */
export class Cancel implements Entity {
  /**
   * Constructs a new instance of the `Cancel` class.
   *
   * @public
   * @constructor
   * @param bigint unstakeId
   * @param Symbol tokenSymbol
   * @param string [id]
   * @returns `Cancel` - An instance of the `Cancel` class.
   */
  public constructor(
    public unstakeId: bigint,
    public tokenSymbol: Symbol,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Cancel` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      unstakeId: this.unstakeId,
      tokenSymbol: this.tokenSymbol,
    };
  }

  /**
   * Creates an instance of the `Cancel` class.
   *
   * @static
   * @public
   * @returns `Cancel` An instance of the `Cancel` class.
   */
  public static create(
    unstakeId: bigint,
    tokenSymbol: Symbol,
    id?: string,
    rest?: UnknownObject
  ): Cancel {
    const entity = new Cancel(
      unstakeId,
      tokenSymbol,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Cancel {
    return new Cancel(
      0n,
      Symbol.getDefault(),
    );
  }
}

