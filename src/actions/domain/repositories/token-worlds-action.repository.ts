/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

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
