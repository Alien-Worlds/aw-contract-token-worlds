/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 12:11:52 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/api-core';
import { MongoConfig, MongoSource } from '@alien-worlds/storage-mongodb';

import { TokenWorldsActionMongoMapper } from './actions/data/mappers';
import { TokenWorldsActionMongoSource } from './actions/data/data-sources';
import { TokenWorldsActionRepository } from './actions/domain/repositories';
import { TokenWorldsContractService } from "./services/token-worlds-contract.service";
import { TokenWorldsContractServiceImpl } from "./services/token-worlds-contract.service-impl";
import { TokenWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { TokenWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { TokenWorldsDeltaRepository } from './deltas/domain/repositories';
import { EosRpcSourceImpl } from '@alien-worlds/eos';

export const setupTokenWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<TokenWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }
  const repository = new RepositoryImpl(
    new TokenWorldsActionMongoSource(mongoSource),
    new TokenWorldsActionMongoMapper(),
    null
  );

  if (container) {
    container
      .bind<TokenWorldsActionRepository>(TokenWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupTokenWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<TokenWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }
  const repository = new RepositoryImpl(
    new TokenWorldsDeltaMongoSource(mongoSource),
    new TokenWorldsDeltaMongoMapper(),
    null
  );

  if (container) {
    container
      .bind<TokenWorldsDeltaRepository>(TokenWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupTokenWorldsContractService = (
  eosRpcSourceImpl: EosRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): TokenWorldsContractService => {
  const service = new TokenWorldsContractServiceImpl(
    eosRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<TokenWorldsContractService>(TokenWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
