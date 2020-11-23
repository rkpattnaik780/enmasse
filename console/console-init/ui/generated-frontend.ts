import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  topic?: Maybe<Topic>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type QueryTopicArgs = {
  name?: Maybe<Scalars["String"]>;
};

export type Topic = {
  __typename?: "Topic";
  name: Scalars["String"];
  partitions?: Maybe<Scalars["Int"]>;
  replicas?: Maybe<Scalars["Int"]>;
};
