/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 27 Jun 2023 16:44:35 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Symbol } from '@alien-worlds/eosio-contract-types';

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
   * @param number unstakeTime
   * @param Symbol tokenSymbol
   * @param string [id]
   * @returns `Staketime` - An instance of the `Staketime` class.
   */
  public constructor(
    public account: string,
    public unstakeTime: number,
    public tokenSymbol: Symbol,
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
      unstakeTime: this.unstakeTime,
      tokenSymbol: this.tokenSymbol,
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
    unstakeTime: number,
    tokenSymbol: Symbol,
    id?: string,
    rest?: UnknownObject
  ): Staketime {
    const entity = new Staketime(
      account,
      unstakeTime,
      tokenSymbol,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Staketime {
    return new Staketime(
      '',
      0,
      Symbol.getDefault(),
    );
  }
}

