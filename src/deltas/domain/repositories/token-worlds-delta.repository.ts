/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/token-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/token-worlds-delta';

/**
 * @description This abstract class represents a repository for `token.worlds` contract deltas.
 */
@injectable()
export abstract class TokenWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'TOKEN_WORLDS_DELTA_REPOSITORY';
}
