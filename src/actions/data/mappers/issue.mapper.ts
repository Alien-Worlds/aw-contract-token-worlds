/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:31:56 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Asset, AssetMongoMapper, AssetRawMapper } from '@alien-worlds/aw-antelope';
import { Issue  } from "../../domain/entities";
import { IssueMongoModel, IssueRawModel  } from "../dtos/issue.dto";

// Mongo Mappers
export class IssueMongoMapper
  extends MongoMapper<Issue, IssueMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('to', { 
      key: 'to', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('quantity', { 
      key: 'quantity', 
      mapper: (value: Asset) => new AssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('memo', { 
      key: 'memo', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: IssueMongoModel): Issue {
    const { 
      to,
      quantity,
      memo,
      _id,
      ...rest
    } = mongoModel;

    return Issue.create(
      to || '',
      quantity ? new AssetMongoMapper().toEntity(quantity) : Asset.getDefault(),
      memo || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class IssueRawMapper
  extends MapperImpl<Issue, IssueRawModel>
{
  public fromEntity(entity: Issue): IssueRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: IssueRawModel): Issue {
    const { 
      to,
      quantity,
      memo,
      ...rest
    } = rawModel;

    return Issue.create(
      to || '',
      quantity ? new AssetRawMapper().toEntity(quantity) : Asset.getDefault(),
      memo || '',
      undefined,
      rest
    );
  }
}

