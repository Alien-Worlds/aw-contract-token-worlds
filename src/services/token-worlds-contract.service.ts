/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 06:31:56 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/api-core';

import { 
  AccountsRawModel,
  MembersRawModel,
  MembertermsRawModel,
  StakeconfigRawModel,
  StakesRawModel,
  StaketimeRawModel,
  StatRawModel,
  UnstakesRawModel,
} from '../deltas/data/dtos';

export abstract class TokenWorldsContractService extends SmartContractService {
  public static Token = 'TOKEN_WORLDS_CONTRACT_SERVICE';

  public abstract fetchAccounts(
    options?: GetTableRowsOptions
  ): Promise<Result<AccountsRawModel[], Error>>;
  public abstract fetchMembers(
    options?: GetTableRowsOptions
  ): Promise<Result<MembersRawModel[], Error>>;
  public abstract fetchMemberterms(
    options?: GetTableRowsOptions
  ): Promise<Result<MembertermsRawModel[], Error>>;
  public abstract fetchStakeconfig(
    options?: GetTableRowsOptions
  ): Promise<Result<StakeconfigRawModel[], Error>>;
  public abstract fetchStakes(
    options?: GetTableRowsOptions
  ): Promise<Result<StakesRawModel[], Error>>;
  public abstract fetchStaketime(
    options?: GetTableRowsOptions
  ): Promise<Result<StaketimeRawModel[], Error>>;
  public abstract fetchStat(
    options?: GetTableRowsOptions
  ): Promise<Result<StatRawModel[], Error>>;
  public abstract fetchUnstakes(
    options?: GetTableRowsOptions
  ): Promise<Result<UnstakesRawModel[], Error>>;
}
