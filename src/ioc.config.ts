/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/aw-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/aw-storage-mongodb';

import { TokenWorldsActionMongoMapper } from './actions/data/mappers';
import { TokenWorldsActionMongoSource } from './actions/data/data-sources';
import { TokenWorldsActionRepository } from './actions/domain/repositories';
import { TokenWorldsContractService } from "./services/token-worlds-contract.service";
import { TokenWorldsContractServiceImpl } from "./services/token-worlds-contract.service-impl";
import { TokenWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { TokenWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { TokenWorldsDeltaRepository } from './deltas/domain/repositories';
import { AntelopeRpcSourceImpl } from '@alien-worlds/aw-antelope';

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

  const mapper = new TokenWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new TokenWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
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

  const mapper = new TokenWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new TokenWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<TokenWorldsDeltaRepository>(TokenWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupTokenWorldsContractService = (
  antelopeRpcSourceImpl: AntelopeRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): TokenWorldsContractService => {
  const service = new TokenWorldsContractServiceImpl(
    antelopeRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<TokenWorldsContractService>(TokenWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
