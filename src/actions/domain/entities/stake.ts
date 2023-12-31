/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Stake` object.
 *
 * @class
 */
export class Stake implements Entity {
  /**
   * Constructs a new instance of the `Stake` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Asset quantity
   * @param string [id]
   * @returns `Stake` - An instance of the `Stake` class.
   */
  public constructor(
    public account: string,
    public quantity: Asset,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Stake` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      quantity: this.quantity,
    };
  }

  /**
   * Creates an instance of the `Stake` class.
   *
   * @static
   * @public
   * @param string account
   * @param Asset quantity
   * @returns `Stake` An instance of the `Stake` class.
   */
  public static create(
    account: string,
    quantity: Asset,
    id?: string,
    rest?: UnknownObject
  ): Stake {
    const entity = new Stake(
      account,
      quantity,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Stake {
    return new Stake(
      '',
      Asset.getDefault(),
    );
  }
}

