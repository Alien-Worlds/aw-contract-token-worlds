import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';
import {
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:49:54 GMT
 */

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
import { TokenWorldsContractService } from './token-worlds-contract.service';

/**
 * A service class for interacting with the token.worlds smart contract.
 *
 * @class TokenWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { TokenWorldsContractService}
 */
export class TokenWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements TokenWorldsContractService
{
  /**
   * Creates an instance of TokenWorldsContractServiceImpl.
   *
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'token.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the accounts table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchAccounts(
    options?: GetTableRowsOptions
  ): Promise<Result<AccountsRawModel[], Error>> {
    return await this.getAll<AccountsRawModel>('balance', {
      ...options,
      code: 'token.worlds',
      table: 'accounts',
      table_key: 'balance',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the members table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchMembers(
    options?: GetTableRowsOptions
  ): Promise<Result<MembersRawModel[], Error>> {
    return await this.getAll<MembersRawModel>('sender', {
      ...options,
      code: 'token.worlds',
      table: 'members',
      table_key: 'sender',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the memberterms table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchMemberterms(
    options?: GetTableRowsOptions
  ): Promise<Result<MembertermsRawModel[], Error>> {
    return await this.getAll<MembertermsRawModel>('version', {
      ...options,
      code: 'token.worlds',
      table: 'memberterms',
      table_key: 'version',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the stakeconfig table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchStakeconfig(
    options?: GetTableRowsOptions
  ): Promise<Result<StakeconfigRawModel[], Error>> {
    return await this.getAll<StakeconfigRawModel>('enabled', {
      ...options,
      code: 'token.worlds',
      table: 'stakeconfig',
      table_key: 'enabled',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the stakes table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchStakes(
    options?: GetTableRowsOptions
  ): Promise<Result<StakesRawModel[], Error>> {
    return await this.getAll<StakesRawModel>('account', {
      ...options,
      code: 'token.worlds',
      table: 'stakes',
      table_key: 'account',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the staketime table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchStaketime(
    options?: GetTableRowsOptions
  ): Promise<Result<StaketimeRawModel[], Error>> {
    return await this.getAll<StaketimeRawModel>('account', {
      ...options,
      code: 'token.worlds',
      table: 'staketime',
      table_key: 'account',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the stat table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchStat(
    options?: GetTableRowsOptions
  ): Promise<Result<StatRawModel[], Error>> {
    return await this.getAll<StatRawModel>('supply', {
      ...options,
      code: 'token.worlds',
      table: 'stat',
      table_key: 'supply',
    });
  }

  /**
   * A EosSmartContractServiceImpl for the unstakes table.
   *
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options
   */
  public async fetchUnstakes(
    options?: GetTableRowsOptions
  ): Promise<Result<UnstakesRawModel[], Error>> {
    return await this.getAll<UnstakesRawModel>('key', {
      ...options,
      code: 'token.worlds',
      table: 'unstakes',
      table_key: 'key',
    });
  }
}
