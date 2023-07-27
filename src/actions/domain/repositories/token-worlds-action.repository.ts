/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/token-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/token-worlds-action';

/**
 * @description This abstract class represents a repository for `token.worlds` contract actions.
 */
@injectable()
export abstract class TokenWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'TOKEN_WORLDS_ACTION_REPOSITORY';
}
