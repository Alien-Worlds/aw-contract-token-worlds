/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { Asset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Transfer` object.
 *
 * @class
 */
export class Transfer implements Entity {
  /**
   * Constructs a new instance of the `Transfer` class.
   *
   * @public
   * @constructor
   * @param string from
   * @param string to
   * @param Asset quantity
   * @param string memo
   * @param string [id]
   * @returns `Transfer` - An instance of the `Transfer` class.
   */
  public constructor(
    public from: string,
    public to: string,
    public quantity: Asset,
    public memo: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Transfer` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      from: this.from,
      to: this.to,
      quantity: this.quantity,
      memo: this.memo,
    };
  }

  /**
   * Creates an instance of the `Transfer` class.
   *
   * @static
   * @public
   * @param string from
   * @param string to
   * @param Asset quantity
   * @param string memo
   * @returns `Transfer` An instance of the `Transfer` class.
   */
  public static create(
    from: string,
    to: string,
    quantity: Asset,
    memo: string,
    id?: string,
    rest?: UnknownObject
  ): Transfer {
    const entity = new Transfer(
      from,
      to,
      quantity,
      memo,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Transfer {
    return new Transfer(
      '',
      '',
      Asset.getDefault(),
      '',
    );
  }
}

