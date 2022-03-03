export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** Parse numeric and string values */
  Primitives: any;
};

export type AppLog = {
  level: Scalars['String'];
  message: Scalars['String'];
  meta?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type CreateListInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  listId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type DbLog = {
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ip?: Maybe<Scalars['String']>;
  target: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Filter = {
  column?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['Boolean']>;
  operation?: Maybe<OperationsEnum>;
  value?: Maybe<Array<Scalars['Primitives']>>;
};

export type FilterExtended = {
  column?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['Boolean']>;
  operation?: Maybe<OperationsEnum>;
  relationName?: Maybe<Scalars['String']>;
  select?: Maybe<SelectProps>;
  value?: Maybe<Array<Scalars['Primitives']>>;
};

export type FilterExtendedInput = {
  column?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Scalars['Boolean']>;
  operation?: InputMaybe<OperationsEnum>;
  relationName?: InputMaybe<Scalars['String']>;
  select?: InputMaybe<SelectPropsInput>;
  value?: InputMaybe<Array<Scalars['Primitives']>>;
};

export type FilterInput = {
  column?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Scalars['Boolean']>;
  operation?: InputMaybe<OperationsEnum>;
  value?: InputMaybe<Array<Scalars['Primitives']>>;
};

export type FilterOptionsInput = {
  filters?: InputMaybe<Array<FilterInput>>;
  operator?: InputMaybe<OperatorsEnum>;
  subFilters?: InputMaybe<Array<FindOptionsInput>>;
};

export type FindByIdOptionsInput = {
  relations?: InputMaybe<Array<Scalars['String']>>;
  select?: InputMaybe<Array<Scalars['String']>>;
};

export type FindManyOptionsInput = {
  find?: InputMaybe<FindOptionsInput>;
  groupBy?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Array<OrderByInput>>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};

export type FindOptions = {
  filters?: Maybe<Array<FilterExtended>>;
  operator?: Maybe<OperatorsEnum>;
  subFilters?: Maybe<Array<FindOptions>>;
};

export type FindOptionsInput = {
  filters?: InputMaybe<Array<FilterExtendedInput>>;
  operator?: InputMaybe<OperatorsEnum>;
  subFilters?: InputMaybe<Array<FindOptionsInput>>;
};

export type List = {
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tasks?: Maybe<Array<Task>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type LoginResponse = {
  accessToken: Scalars['String'];
  data: PartialUser;
  refreshHash: Scalars['String'];
};

export type Mutation = {
  createList: List;
  createTask: Task;
  createUser: User;
  deleteBucketFile: Scalars['Boolean'];
  deleteList: Scalars['Boolean'];
  deleteTask: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  restoreList: Scalars['Boolean'];
  restoreTask: Scalars['Boolean'];
  restoreUser: Scalars['Boolean'];
  softDeleteList: Scalars['Boolean'];
  softDeleteTask: Scalars['Boolean'];
  softDeleteUser: Scalars['Boolean'];
  updateList: Scalars['Boolean'];
  updateTask: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
  userLogin: LoginResponse;
};

export type MutationCreateListArgs = {
  data: CreateListInput;
};

export type MutationCreateTaskArgs = {
  data: CreateTaskInput;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationDeleteBucketFileArgs = {
  bucket: Scalars['String'];
  filepath: Scalars['String'];
};

export type MutationDeleteListArgs = {
  id: Scalars['String'];
};

export type MutationDeleteTaskArgs = {
  id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationRestoreListArgs = {
  id: Scalars['String'];
};

export type MutationRestoreTaskArgs = {
  id: Scalars['String'];
};

export type MutationRestoreUserArgs = {
  id: Scalars['String'];
};

export type MutationSoftDeleteListArgs = {
  id: Scalars['String'];
};

export type MutationSoftDeleteTaskArgs = {
  id: Scalars['String'];
};

export type MutationSoftDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationUpdateListArgs = {
  data: Array<UpdateListInput>;
  filter?: InputMaybe<FindOptionsInput>;
};

export type MutationUpdateTaskArgs = {
  data: Array<UpdateTaskInput>;
  filter?: InputMaybe<FindOptionsInput>;
};

export type MutationUpdateUserArgs = {
  data: Array<UpdateUserInput>;
  filter?: InputMaybe<FilterOptionsInput>;
};

export type MutationUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum OperationsEnum {
  Any = 'ANY',
  Between = 'BETWEEN',
  Eq = 'EQ',
  Ge = 'GE',
  Gt = 'GT',
  Ilike = 'ILIKE',
  In = 'IN',
  Json = 'JSON',
  Le = 'LE',
  Like = 'LIKE',
  Lt = 'LT',
  Null = 'NULL',
}

export enum OperatorsEnum {
  And = 'AND',
  Or = 'OR',
}

export type OrderBy = {
  column: Scalars['String'];
  nulls: OrderByNulls;
  order?: Maybe<OrderByEnum>;
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type OrderByInput = {
  column: Scalars['String'];
  nulls?: InputMaybe<OrderByNulls>;
  order?: InputMaybe<OrderByEnum>;
};

export enum OrderByNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST',
}

export type PartialUser = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

export type Query = {
  aggregateList: Scalars['JSONObject'];
  aggregateLists: Scalars['JSON'];
  aggregateTask: Scalars['JSONObject'];
  aggregateTasks: Scalars['JSON'];
  aggregateUser: Scalars['JSONObject'];
  aggregateUsers: Scalars['JSON'];
  appLogs: Array<AppLog>;
  dbLogs: Array<DbLog>;
  list: List;
  listById: List;
  lists: Array<List>;
  signedUploadUrl: Scalars['String'];
  signedUploadUrls: Array<Scalars['String']>;
  task: Task;
  taskById: Task;
  tasks: Array<Task>;
  user: User;
  userById: User;
  userRefreshAccessToken: RefreshAccessTokenResponse;
  users: Array<User>;
};

export type QueryAggregateListArgs = {
  options: FindOptionsInput;
};

export type QueryAggregateListsArgs = {
  options: FindManyOptionsInput;
};

export type QueryAggregateTaskArgs = {
  options: FindOptionsInput;
};

export type QueryAggregateTasksArgs = {
  options: FindManyOptionsInput;
};

export type QueryAggregateUserArgs = {
  options: FindOptionsInput;
};

export type QueryAggregateUsersArgs = {
  options: FindManyOptionsInput;
};

export type QueryAppLogsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']>;
  options?: InputMaybe<Scalars['JSONObject']>;
};

export type QueryDbLogsArgs = {
  filter?: InputMaybe<Scalars['JSONObject']>;
  options?: InputMaybe<Scalars['JSONObject']>;
};

export type QueryListArgs = {
  options?: InputMaybe<FindOptionsInput>;
};

export type QueryListByIdArgs = {
  id: Scalars['String'];
  options?: InputMaybe<FindByIdOptionsInput>;
};

export type QueryListsArgs = {
  options?: InputMaybe<FindManyOptionsInput>;
};

export type QuerySignedUploadUrlArgs = {
  bucket: Scalars['String'];
  contentType?: InputMaybe<Scalars['String']>;
  filepath: Scalars['String'];
};

export type QuerySignedUploadUrlsArgs = {
  bucket: Scalars['String'];
  contentType: Array<Scalars['String']>;
  filepath: Array<Scalars['String']>;
};

export type QueryTaskArgs = {
  options?: InputMaybe<FindOptionsInput>;
};

export type QueryTaskByIdArgs = {
  id: Scalars['String'];
  options?: InputMaybe<FindByIdOptionsInput>;
};

export type QueryTasksArgs = {
  options?: InputMaybe<FindManyOptionsInput>;
};

export type QueryUserArgs = {
  options?: InputMaybe<FindOptionsInput>;
};

export type QueryUserByIdArgs = {
  id: Scalars['String'];
  options?: InputMaybe<FindByIdOptionsInput>;
};

export type QueryUsersArgs = {
  options?: InputMaybe<FindManyOptionsInput>;
};

export type RefreshAccessTokenResponse = {
  accessToken: Scalars['String'];
  refreshHash?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type SelectProps = {
  alias?: Maybe<Scalars['String']>;
  column: Array<Scalars['String']>;
};

export type SelectPropsInput = {
  alias?: InputMaybe<Scalars['String']>;
  column: Array<Scalars['String']>;
};

export type Task = {
  completed?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  list?: Maybe<List>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateListInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTaskInput = {
  completed?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

export type User = {
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lists?: Maybe<Array<List>>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};
