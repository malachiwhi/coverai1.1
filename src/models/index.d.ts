import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCoverSearch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CoverSearch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly Experience: string;
  readonly PrevPos?: string | null;
  readonly Why?: string | null;
  readonly Skills: string;
  readonly CompNpos: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoverSearch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CoverSearch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly Experience: string;
  readonly PrevPos?: string | null;
  readonly Why?: string | null;
  readonly Skills: string;
  readonly CompNpos: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CoverSearch = LazyLoading extends LazyLoadingDisabled ? EagerCoverSearch : LazyCoverSearch

export declare const CoverSearch: (new (init: ModelInit<CoverSearch>) => CoverSearch) & {
  copyOf(source: CoverSearch, mutator: (draft: MutableModel<CoverSearch>) => MutableModel<CoverSearch> | void): CoverSearch;
}