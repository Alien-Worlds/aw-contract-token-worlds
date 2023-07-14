/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:17:23 GMT
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
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { TokenWorldsContractService } from './token-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

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
  public async fetchAccounts (
    options?: GetTableRowsOptions
  ): Promise<Result<AccountsRawModel[], Error>> {
    const table_key = 'balance';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'accounts',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<AccountsRawModel>(tableRowOptions)
      : await this.getAll<AccountsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the members table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchMembers (
    options?: GetTableRowsOptions
  ): Promise<Result<MembersRawModel[], Error>> {
    const table_key = 'sender';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'members',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<MembersRawModel>(tableRowOptions)
      : await this.getAll<MembersRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the memberterms table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchMemberterms (
    options?: GetTableRowsOptions
  ): Promise<Result<MembertermsRawModel[], Error>> {
    const table_key = 'version';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'memberterms',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<MembertermsRawModel>(tableRowOptions)
      : await this.getAll<MembertermsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the stakeconfig table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchStakeconfig (
    options?: GetTableRowsOptions
  ): Promise<Result<StakeconfigRawModel[], Error>> {
    const table_key = 'enabled';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'stakeconfig',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<StakeconfigRawModel>(tableRowOptions)
      : await this.getAll<StakeconfigRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the stakes table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchStakes (
    options?: GetTableRowsOptions
  ): Promise<Result<StakesRawModel[], Error>> {
    const table_key = 'account';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'stakes',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<StakesRawModel>(tableRowOptions)
      : await this.getAll<StakesRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the staketime table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchStaketime (
    options?: GetTableRowsOptions
  ): Promise<Result<StaketimeRawModel[], Error>> {
    const table_key = 'account';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'staketime',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<StaketimeRawModel>(tableRowOptions)
      : await this.getAll<StaketimeRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the stat table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchStat (
    options?: GetTableRowsOptions
  ): Promise<Result<StatRawModel[], Error>> {
    const table_key = 'issuer';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'stat',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<StatRawModel>(tableRowOptions)
      : await this.getAll<StatRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the unstakes table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchUnstakes (
    options?: GetTableRowsOptions
  ): Promise<Result<UnstakesRawModel[], Error>> {
    const table_key = 'key';
    const tableRowOptions = {
      ...options,
      code: 'token.worlds',
      table: 'unstakes',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<UnstakesRawModel>(tableRowOptions)
      : await this.getAll<UnstakesRawModel>(table_key, tableRowOptions);
  }
}
