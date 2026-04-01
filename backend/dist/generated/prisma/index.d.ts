
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model BloodRequest
 * 
 */
export type BloodRequest = $Result.DefaultSelection<Prisma.$BloodRequestPayload>
/**
 * Model DonationPledge
 * 
 */
export type DonationPledge = $Result.DefaultSelection<Prisma.$DonationPledgePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BloodType: {
  APOS: 'APOS',
  ANEG: 'ANEG',
  BPOS: 'BPOS',
  BNEG: 'BNEG',
  ABPOS: 'ABPOS',
  ABNEG: 'ABNEG',
  OPOS: 'OPOS',
  ONEG: 'ONEG'
};

export type BloodType = (typeof BloodType)[keyof typeof BloodType]


export const Urgency: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Urgency = (typeof Urgency)[keyof typeof Urgency]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BloodRequestStatus: {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  CANCELLED: 'CANCELLED'
};

export type BloodRequestStatus = (typeof BloodRequestStatus)[keyof typeof BloodRequestStatus]


export const DonationPledgeStatus: {
  PENDING: 'PENDING',
  EN_ROUTE: 'EN_ROUTE',
  DONATED: 'DONATED',
  CANCELLED: 'CANCELLED'
};

export type DonationPledgeStatus = (typeof DonationPledgeStatus)[keyof typeof DonationPledgeStatus]

}

export type BloodType = $Enums.BloodType

export const BloodType: typeof $Enums.BloodType

export type Urgency = $Enums.Urgency

export const Urgency: typeof $Enums.Urgency

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BloodRequestStatus = $Enums.BloodRequestStatus

export const BloodRequestStatus: typeof $Enums.BloodRequestStatus

export type DonationPledgeStatus = $Enums.DonationPledgeStatus

export const DonationPledgeStatus: typeof $Enums.DonationPledgeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodRequest`: Exposes CRUD operations for the **BloodRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodRequests
    * const bloodRequests = await prisma.bloodRequest.findMany()
    * ```
    */
  get bloodRequest(): Prisma.BloodRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationPledge`: Exposes CRUD operations for the **DonationPledge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationPledges
    * const donationPledges = await prisma.donationPledge.findMany()
    * ```
    */
  get donationPledge(): Prisma.DonationPledgeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Hospital: 'Hospital',
    BloodRequest: 'BloodRequest',
    DonationPledge: 'DonationPledge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "hospital" | "bloodRequest" | "donationPledge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      BloodRequest: {
        payload: Prisma.$BloodRequestPayload<ExtArgs>
        fields: Prisma.BloodRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findFirst: {
            args: Prisma.BloodRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findMany: {
            args: Prisma.BloodRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          create: {
            args: Prisma.BloodRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          createMany: {
            args: Prisma.BloodRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloodRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          delete: {
            args: Prisma.BloodRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          update: {
            args: Prisma.BloodRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          deleteMany: {
            args: Prisma.BloodRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloodRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloodRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          upsert: {
            args: Prisma.BloodRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          aggregate: {
            args: Prisma.BloodRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodRequest>
          }
          groupBy: {
            args: Prisma.BloodRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloodRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestCountAggregateOutputType> | number
          }
        }
      }
      DonationPledge: {
        payload: Prisma.$DonationPledgePayload<ExtArgs>
        fields: Prisma.DonationPledgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationPledgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationPledgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>
          }
          findFirst: {
            args: Prisma.DonationPledgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationPledgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>
          }
          findMany: {
            args: Prisma.DonationPledgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>[]
          }
          create: {
            args: Prisma.DonationPledgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>
          }
          createMany: {
            args: Prisma.DonationPledgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationPledgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>[]
          }
          delete: {
            args: Prisma.DonationPledgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>
          }
          update: {
            args: Prisma.DonationPledgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>
          }
          deleteMany: {
            args: Prisma.DonationPledgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationPledgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationPledgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>[]
          }
          upsert: {
            args: Prisma.DonationPledgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPledgePayload>
          }
          aggregate: {
            args: Prisma.DonationPledgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationPledge>
          }
          groupBy: {
            args: Prisma.DonationPledgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationPledgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationPledgeCountArgs<ExtArgs>
            result: $Utils.Optional<DonationPledgeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    hospital?: HospitalOmit
    bloodRequest?: BloodRequestOmit
    donationPledge?: DonationPledgeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bloodRequests: number
    donationPledges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequests?: boolean | UserCountOutputTypeCountBloodRequestsArgs
    donationPledges?: boolean | UserCountOutputTypeCountDonationPledgesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationPledgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationPledgeWhereInput
  }


  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    bloodRequests: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequests?: boolean | HospitalCountOutputTypeCountBloodRequestsArgs
  }

  // Custom InputTypes
  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }


  /**
   * Count Type BloodRequestCountOutputType
   */

  export type BloodRequestCountOutputType = {
    donationPledges: number
  }

  export type BloodRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationPledges?: boolean | BloodRequestCountOutputTypeCountDonationPledgesArgs
  }

  // Custom InputTypes
  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequestCountOutputType
     */
    select?: BloodRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BloodRequestCountOutputType without action
   */
  export type BloodRequestCountOutputTypeCountDonationPledgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationPledgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    bloodType: $Enums.BloodType | null
    isDonor: boolean | null
    isRecipient: boolean | null
    latitude: number | null
    longitude: number | null
    contactNumber: string | null
    lastDonationDate: Date | null
    medicalHistory: string | null
    role: $Enums.Role | null
    deviceToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    bloodType: $Enums.BloodType | null
    isDonor: boolean | null
    isRecipient: boolean | null
    latitude: number | null
    longitude: number | null
    contactNumber: string | null
    lastDonationDate: Date | null
    medicalHistory: string | null
    role: $Enums.Role | null
    deviceToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    bloodType: number
    isDonor: number
    isRecipient: number
    latitude: number
    longitude: number
    contactNumber: number
    lastDonationDate: number
    medicalHistory: number
    role: number
    deviceToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    bloodType?: true
    isDonor?: true
    isRecipient?: true
    latitude?: true
    longitude?: true
    contactNumber?: true
    lastDonationDate?: true
    medicalHistory?: true
    role?: true
    deviceToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    bloodType?: true
    isDonor?: true
    isRecipient?: true
    latitude?: true
    longitude?: true
    contactNumber?: true
    lastDonationDate?: true
    medicalHistory?: true
    role?: true
    deviceToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    bloodType?: true
    isDonor?: true
    isRecipient?: true
    latitude?: true
    longitude?: true
    contactNumber?: true
    lastDonationDate?: true
    medicalHistory?: true
    role?: true
    deviceToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor: boolean
    isRecipient: boolean
    latitude: number | null
    longitude: number | null
    contactNumber: string | null
    lastDonationDate: Date | null
    medicalHistory: string | null
    role: $Enums.Role
    deviceToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    bloodType?: boolean
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    lastDonationDate?: boolean
    medicalHistory?: boolean
    role?: boolean
    deviceToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bloodRequests?: boolean | User$bloodRequestsArgs<ExtArgs>
    donationPledges?: boolean | User$donationPledgesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    bloodType?: boolean
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    lastDonationDate?: boolean
    medicalHistory?: boolean
    role?: boolean
    deviceToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    bloodType?: boolean
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    lastDonationDate?: boolean
    medicalHistory?: boolean
    role?: boolean
    deviceToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    bloodType?: boolean
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    lastDonationDate?: boolean
    medicalHistory?: boolean
    role?: boolean
    deviceToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "bloodType" | "isDonor" | "isRecipient" | "latitude" | "longitude" | "contactNumber" | "lastDonationDate" | "medicalHistory" | "role" | "deviceToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequests?: boolean | User$bloodRequestsArgs<ExtArgs>
    donationPledges?: boolean | User$donationPledgesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bloodRequests: Prisma.$BloodRequestPayload<ExtArgs>[]
      donationPledges: Prisma.$DonationPledgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      bloodType: $Enums.BloodType
      isDonor: boolean
      isRecipient: boolean
      latitude: number | null
      longitude: number | null
      contactNumber: string | null
      lastDonationDate: Date | null
      medicalHistory: string | null
      role: $Enums.Role
      deviceToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodRequests<T extends User$bloodRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$bloodRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationPledges<T extends User$donationPledgesArgs<ExtArgs> = {}>(args?: Subset<T, User$donationPledgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly bloodType: FieldRef<"User", 'BloodType'>
    readonly isDonor: FieldRef<"User", 'Boolean'>
    readonly isRecipient: FieldRef<"User", 'Boolean'>
    readonly latitude: FieldRef<"User", 'Float'>
    readonly longitude: FieldRef<"User", 'Float'>
    readonly contactNumber: FieldRef<"User", 'String'>
    readonly lastDonationDate: FieldRef<"User", 'DateTime'>
    readonly medicalHistory: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly deviceToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bloodRequests
   */
  export type User$bloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * User.donationPledges
   */
  export type User$donationPledgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    where?: DonationPledgeWhereInput
    orderBy?: DonationPledgeOrderByWithRelationInput | DonationPledgeOrderByWithRelationInput[]
    cursor?: DonationPledgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationPledgeScalarFieldEnum | DonationPledgeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HospitalSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HospitalMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    contactInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    contactInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    address: number
    latitude: number
    longitude: number
    contactInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HospitalSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    contactInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    contactInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    contactInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _avg?: HospitalAvgAggregateInputType
    _sum?: HospitalSumAggregateInputType
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: string
    name: string
    address: string
    latitude: number
    longitude: number
    contactInfo: string | null
    createdAt: Date
    updatedAt: Date
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bloodRequests?: boolean | Hospital$bloodRequestsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "latitude" | "longitude" | "contactInfo" | "createdAt" | "updatedAt", ExtArgs["result"]["hospital"]>
  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequests?: boolean | Hospital$bloodRequestsArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospitalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      bloodRequests: Prisma.$BloodRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      latitude: number
      longitude: number
      contactInfo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodRequests<T extends Hospital$bloodRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$bloodRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'String'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly address: FieldRef<"Hospital", 'String'>
    readonly latitude: FieldRef<"Hospital", 'Float'>
    readonly longitude: FieldRef<"Hospital", 'Float'>
    readonly contactInfo: FieldRef<"Hospital", 'String'>
    readonly createdAt: FieldRef<"Hospital", 'DateTime'>
    readonly updatedAt: FieldRef<"Hospital", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital.bloodRequests
   */
  export type Hospital$bloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
  }


  /**
   * Model BloodRequest
   */

  export type AggregateBloodRequest = {
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  export type BloodRequestAvgAggregateOutputType = {
    unitsRequired: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BloodRequestSumAggregateOutputType = {
    unitsRequired: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BloodRequestMinAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    requesterId: string | null
    bloodType: $Enums.BloodType | null
    unitsRequired: number | null
    urgency: $Enums.Urgency | null
    latitude: number | null
    longitude: number | null
    status: $Enums.BloodRequestStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestMaxAggregateOutputType = {
    id: string | null
    hospitalId: string | null
    requesterId: string | null
    bloodType: $Enums.BloodType | null
    unitsRequired: number | null
    urgency: $Enums.Urgency | null
    latitude: number | null
    longitude: number | null
    status: $Enums.BloodRequestStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestCountAggregateOutputType = {
    id: number
    hospitalId: number
    requesterId: number
    bloodType: number
    unitsRequired: number
    urgency: number
    latitude: number
    longitude: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BloodRequestAvgAggregateInputType = {
    unitsRequired?: true
    latitude?: true
    longitude?: true
  }

  export type BloodRequestSumAggregateInputType = {
    unitsRequired?: true
    latitude?: true
    longitude?: true
  }

  export type BloodRequestMinAggregateInputType = {
    id?: true
    hospitalId?: true
    requesterId?: true
    bloodType?: true
    unitsRequired?: true
    urgency?: true
    latitude?: true
    longitude?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestMaxAggregateInputType = {
    id?: true
    hospitalId?: true
    requesterId?: true
    bloodType?: true
    unitsRequired?: true
    urgency?: true
    latitude?: true
    longitude?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestCountAggregateInputType = {
    id?: true
    hospitalId?: true
    requesterId?: true
    bloodType?: true
    unitsRequired?: true
    urgency?: true
    latitude?: true
    longitude?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BloodRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequest to aggregate.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodRequests
    **/
    _count?: true | BloodRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodRequestMaxAggregateInputType
  }

  export type GetBloodRequestAggregateType<T extends BloodRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodRequest[P]>
      : GetScalarType<T[P], AggregateBloodRequest[P]>
  }




  export type BloodRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithAggregationInput | BloodRequestOrderByWithAggregationInput[]
    by: BloodRequestScalarFieldEnum[] | BloodRequestScalarFieldEnum
    having?: BloodRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodRequestCountAggregateInputType | true
    _avg?: BloodRequestAvgAggregateInputType
    _sum?: BloodRequestSumAggregateInputType
    _min?: BloodRequestMinAggregateInputType
    _max?: BloodRequestMaxAggregateInputType
  }

  export type BloodRequestGroupByOutputType = {
    id: string
    hospitalId: string
    requesterId: string | null
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status: $Enums.BloodRequestStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  type GetBloodRequestGroupByPayload<T extends BloodRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
        }
      >
    >


  export type BloodRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    requesterId?: boolean
    bloodType?: boolean
    unitsRequired?: boolean
    urgency?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    donationPledges?: boolean | BloodRequest$donationPledgesArgs<ExtArgs>
    _count?: boolean | BloodRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    requesterId?: boolean
    bloodType?: boolean
    unitsRequired?: boolean
    urgency?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospitalId?: boolean
    requesterId?: boolean
    bloodType?: boolean
    unitsRequired?: boolean
    urgency?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectScalar = {
    id?: boolean
    hospitalId?: boolean
    requesterId?: boolean
    bloodType?: boolean
    unitsRequired?: boolean
    urgency?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BloodRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hospitalId" | "requesterId" | "bloodType" | "unitsRequired" | "urgency" | "latitude" | "longitude" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["bloodRequest"]>
  export type BloodRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
    donationPledges?: boolean | BloodRequest$donationPledgesArgs<ExtArgs>
    _count?: boolean | BloodRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BloodRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
  }
  export type BloodRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | HospitalDefaultArgs<ExtArgs>
    requester?: boolean | BloodRequest$requesterArgs<ExtArgs>
  }

  export type $BloodRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodRequest"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs> | null
      donationPledges: Prisma.$DonationPledgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hospitalId: string
      requesterId: string | null
      bloodType: $Enums.BloodType
      unitsRequired: number
      urgency: $Enums.Urgency
      latitude: number
      longitude: number
      status: $Enums.BloodRequestStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bloodRequest"]>
    composites: {}
  }

  type BloodRequestGetPayload<S extends boolean | null | undefined | BloodRequestDefaultArgs> = $Result.GetResult<Prisma.$BloodRequestPayload, S>

  type BloodRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloodRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodRequestCountAggregateInputType | true
    }

  export interface BloodRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodRequest'], meta: { name: 'BloodRequest' } }
    /**
     * Find zero or one BloodRequest that matches the filter.
     * @param {BloodRequestFindUniqueArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloodRequestFindUniqueArgs>(args: SelectSubset<T, BloodRequestFindUniqueArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloodRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloodRequestFindUniqueOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloodRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BloodRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloodRequestFindFirstArgs>(args?: SelectSubset<T, BloodRequestFindFirstArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloodRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BloodRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany()
     * 
     * // Get first 10 BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloodRequestFindManyArgs>(args?: SelectSubset<T, BloodRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloodRequest.
     * @param {BloodRequestCreateArgs} args - Arguments to create a BloodRequest.
     * @example
     * // Create one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.create({
     *   data: {
     *     // ... data to create a BloodRequest
     *   }
     * })
     * 
     */
    create<T extends BloodRequestCreateArgs>(args: SelectSubset<T, BloodRequestCreateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloodRequests.
     * @param {BloodRequestCreateManyArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloodRequestCreateManyArgs>(args?: SelectSubset<T, BloodRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BloodRequests and returns the data saved in the database.
     * @param {BloodRequestCreateManyAndReturnArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloodRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, BloodRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BloodRequest.
     * @param {BloodRequestDeleteArgs} args - Arguments to delete one BloodRequest.
     * @example
     * // Delete one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.delete({
     *   where: {
     *     // ... filter to delete one BloodRequest
     *   }
     * })
     * 
     */
    delete<T extends BloodRequestDeleteArgs>(args: SelectSubset<T, BloodRequestDeleteArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloodRequest.
     * @param {BloodRequestUpdateArgs} args - Arguments to update one BloodRequest.
     * @example
     * // Update one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloodRequestUpdateArgs>(args: SelectSubset<T, BloodRequestUpdateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloodRequests.
     * @param {BloodRequestDeleteManyArgs} args - Arguments to filter BloodRequests to delete.
     * @example
     * // Delete a few BloodRequests
     * const { count } = await prisma.bloodRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloodRequestDeleteManyArgs>(args?: SelectSubset<T, BloodRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloodRequestUpdateManyArgs>(args: SelectSubset<T, BloodRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests and returns the data updated in the database.
     * @param {BloodRequestUpdateManyAndReturnArgs} args - Arguments to update many BloodRequests.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloodRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, BloodRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BloodRequest.
     * @param {BloodRequestUpsertArgs} args - Arguments to update or create a BloodRequest.
     * @example
     * // Update or create a BloodRequest
     * const bloodRequest = await prisma.bloodRequest.upsert({
     *   create: {
     *     // ... data to create a BloodRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodRequest we want to update
     *   }
     * })
     */
    upsert<T extends BloodRequestUpsertArgs>(args: SelectSubset<T, BloodRequestUpsertArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestCountArgs} args - Arguments to filter BloodRequests to count.
     * @example
     * // Count the number of BloodRequests
     * const count = await prisma.bloodRequest.count({
     *   where: {
     *     // ... the filter for the BloodRequests we want to count
     *   }
     * })
    **/
    count<T extends BloodRequestCountArgs>(
      args?: Subset<T, BloodRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodRequestAggregateArgs>(args: Subset<T, BloodRequestAggregateArgs>): Prisma.PrismaPromise<GetBloodRequestAggregateType<T>>

    /**
     * Group by BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloodRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodRequestGroupByArgs['orderBy'] }
        : { orderBy?: BloodRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloodRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodRequest model
   */
  readonly fields: BloodRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends HospitalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospitalDefaultArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requester<T extends BloodRequest$requesterArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequest$requesterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    donationPledges<T extends BloodRequest$donationPledgesArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequest$donationPledgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BloodRequest model
   */
  interface BloodRequestFieldRefs {
    readonly id: FieldRef<"BloodRequest", 'String'>
    readonly hospitalId: FieldRef<"BloodRequest", 'String'>
    readonly requesterId: FieldRef<"BloodRequest", 'String'>
    readonly bloodType: FieldRef<"BloodRequest", 'BloodType'>
    readonly unitsRequired: FieldRef<"BloodRequest", 'Int'>
    readonly urgency: FieldRef<"BloodRequest", 'Urgency'>
    readonly latitude: FieldRef<"BloodRequest", 'Float'>
    readonly longitude: FieldRef<"BloodRequest", 'Float'>
    readonly status: FieldRef<"BloodRequest", 'BloodRequestStatus'>
    readonly notes: FieldRef<"BloodRequest", 'String'>
    readonly createdAt: FieldRef<"BloodRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"BloodRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BloodRequest findUnique
   */
  export type BloodRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findUniqueOrThrow
   */
  export type BloodRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findFirst
   */
  export type BloodRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findFirstOrThrow
   */
  export type BloodRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findMany
   */
  export type BloodRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequests to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest create
   */
  export type BloodRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BloodRequest.
     */
    data: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
  }

  /**
   * BloodRequest createMany
   */
  export type BloodRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
  }

  /**
   * BloodRequest createManyAndReturn
   */
  export type BloodRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodRequest update
   */
  export type BloodRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BloodRequest.
     */
    data: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
    /**
     * Choose, which BloodRequest to update.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest updateMany
   */
  export type BloodRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
  }

  /**
   * BloodRequest updateManyAndReturn
   */
  export type BloodRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BloodRequest upsert
   */
  export type BloodRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BloodRequest to update in case it exists.
     */
    where: BloodRequestWhereUniqueInput
    /**
     * In case the BloodRequest found by the `where` argument doesn't exist, create a new BloodRequest with this data.
     */
    create: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
    /**
     * In case the BloodRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
  }

  /**
   * BloodRequest delete
   */
  export type BloodRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter which BloodRequest to delete.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest deleteMany
   */
  export type BloodRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequests to delete
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to delete.
     */
    limit?: number
  }

  /**
   * BloodRequest.requester
   */
  export type BloodRequest$requesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BloodRequest.donationPledges
   */
  export type BloodRequest$donationPledgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    where?: DonationPledgeWhereInput
    orderBy?: DonationPledgeOrderByWithRelationInput | DonationPledgeOrderByWithRelationInput[]
    cursor?: DonationPledgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationPledgeScalarFieldEnum | DonationPledgeScalarFieldEnum[]
  }

  /**
   * BloodRequest without action
   */
  export type BloodRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloodRequestInclude<ExtArgs> | null
  }


  /**
   * Model DonationPledge
   */

  export type AggregateDonationPledge = {
    _count: DonationPledgeCountAggregateOutputType | null
    _min: DonationPledgeMinAggregateOutputType | null
    _max: DonationPledgeMaxAggregateOutputType | null
  }

  export type DonationPledgeMinAggregateOutputType = {
    id: string | null
    bloodRequestId: string | null
    userId: string | null
    status: $Enums.DonationPledgeStatus | null
    pledgedAt: Date | null
    updatedAt: Date | null
  }

  export type DonationPledgeMaxAggregateOutputType = {
    id: string | null
    bloodRequestId: string | null
    userId: string | null
    status: $Enums.DonationPledgeStatus | null
    pledgedAt: Date | null
    updatedAt: Date | null
  }

  export type DonationPledgeCountAggregateOutputType = {
    id: number
    bloodRequestId: number
    userId: number
    status: number
    pledgedAt: number
    updatedAt: number
    _all: number
  }


  export type DonationPledgeMinAggregateInputType = {
    id?: true
    bloodRequestId?: true
    userId?: true
    status?: true
    pledgedAt?: true
    updatedAt?: true
  }

  export type DonationPledgeMaxAggregateInputType = {
    id?: true
    bloodRequestId?: true
    userId?: true
    status?: true
    pledgedAt?: true
    updatedAt?: true
  }

  export type DonationPledgeCountAggregateInputType = {
    id?: true
    bloodRequestId?: true
    userId?: true
    status?: true
    pledgedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonationPledgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationPledge to aggregate.
     */
    where?: DonationPledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationPledges to fetch.
     */
    orderBy?: DonationPledgeOrderByWithRelationInput | DonationPledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationPledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationPledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationPledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationPledges
    **/
    _count?: true | DonationPledgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationPledgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationPledgeMaxAggregateInputType
  }

  export type GetDonationPledgeAggregateType<T extends DonationPledgeAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationPledge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationPledge[P]>
      : GetScalarType<T[P], AggregateDonationPledge[P]>
  }




  export type DonationPledgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationPledgeWhereInput
    orderBy?: DonationPledgeOrderByWithAggregationInput | DonationPledgeOrderByWithAggregationInput[]
    by: DonationPledgeScalarFieldEnum[] | DonationPledgeScalarFieldEnum
    having?: DonationPledgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationPledgeCountAggregateInputType | true
    _min?: DonationPledgeMinAggregateInputType
    _max?: DonationPledgeMaxAggregateInputType
  }

  export type DonationPledgeGroupByOutputType = {
    id: string
    bloodRequestId: string
    userId: string
    status: $Enums.DonationPledgeStatus
    pledgedAt: Date
    updatedAt: Date
    _count: DonationPledgeCountAggregateOutputType | null
    _min: DonationPledgeMinAggregateOutputType | null
    _max: DonationPledgeMaxAggregateOutputType | null
  }

  type GetDonationPledgeGroupByPayload<T extends DonationPledgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationPledgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationPledgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationPledgeGroupByOutputType[P]>
            : GetScalarType<T[P], DonationPledgeGroupByOutputType[P]>
        }
      >
    >


  export type DonationPledgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bloodRequestId?: boolean
    userId?: boolean
    status?: boolean
    pledgedAt?: boolean
    updatedAt?: boolean
    bloodRequest?: boolean | BloodRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationPledge"]>

  export type DonationPledgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bloodRequestId?: boolean
    userId?: boolean
    status?: boolean
    pledgedAt?: boolean
    updatedAt?: boolean
    bloodRequest?: boolean | BloodRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationPledge"]>

  export type DonationPledgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bloodRequestId?: boolean
    userId?: boolean
    status?: boolean
    pledgedAt?: boolean
    updatedAt?: boolean
    bloodRequest?: boolean | BloodRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationPledge"]>

  export type DonationPledgeSelectScalar = {
    id?: boolean
    bloodRequestId?: boolean
    userId?: boolean
    status?: boolean
    pledgedAt?: boolean
    updatedAt?: boolean
  }

  export type DonationPledgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bloodRequestId" | "userId" | "status" | "pledgedAt" | "updatedAt", ExtArgs["result"]["donationPledge"]>
  export type DonationPledgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequest?: boolean | BloodRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationPledgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequest?: boolean | BloodRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationPledgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloodRequest?: boolean | BloodRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPledgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationPledge"
    objects: {
      bloodRequest: Prisma.$BloodRequestPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bloodRequestId: string
      userId: string
      status: $Enums.DonationPledgeStatus
      pledgedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donationPledge"]>
    composites: {}
  }

  type DonationPledgeGetPayload<S extends boolean | null | undefined | DonationPledgeDefaultArgs> = $Result.GetResult<Prisma.$DonationPledgePayload, S>

  type DonationPledgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationPledgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationPledgeCountAggregateInputType | true
    }

  export interface DonationPledgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationPledge'], meta: { name: 'DonationPledge' } }
    /**
     * Find zero or one DonationPledge that matches the filter.
     * @param {DonationPledgeFindUniqueArgs} args - Arguments to find a DonationPledge
     * @example
     * // Get one DonationPledge
     * const donationPledge = await prisma.donationPledge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationPledgeFindUniqueArgs>(args: SelectSubset<T, DonationPledgeFindUniqueArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationPledge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationPledgeFindUniqueOrThrowArgs} args - Arguments to find a DonationPledge
     * @example
     * // Get one DonationPledge
     * const donationPledge = await prisma.donationPledge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationPledgeFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationPledgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationPledge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationPledgeFindFirstArgs} args - Arguments to find a DonationPledge
     * @example
     * // Get one DonationPledge
     * const donationPledge = await prisma.donationPledge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationPledgeFindFirstArgs>(args?: SelectSubset<T, DonationPledgeFindFirstArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationPledge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationPledgeFindFirstOrThrowArgs} args - Arguments to find a DonationPledge
     * @example
     * // Get one DonationPledge
     * const donationPledge = await prisma.donationPledge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationPledgeFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationPledgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationPledges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationPledgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationPledges
     * const donationPledges = await prisma.donationPledge.findMany()
     * 
     * // Get first 10 DonationPledges
     * const donationPledges = await prisma.donationPledge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationPledgeWithIdOnly = await prisma.donationPledge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationPledgeFindManyArgs>(args?: SelectSubset<T, DonationPledgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationPledge.
     * @param {DonationPledgeCreateArgs} args - Arguments to create a DonationPledge.
     * @example
     * // Create one DonationPledge
     * const DonationPledge = await prisma.donationPledge.create({
     *   data: {
     *     // ... data to create a DonationPledge
     *   }
     * })
     * 
     */
    create<T extends DonationPledgeCreateArgs>(args: SelectSubset<T, DonationPledgeCreateArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationPledges.
     * @param {DonationPledgeCreateManyArgs} args - Arguments to create many DonationPledges.
     * @example
     * // Create many DonationPledges
     * const donationPledge = await prisma.donationPledge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationPledgeCreateManyArgs>(args?: SelectSubset<T, DonationPledgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationPledges and returns the data saved in the database.
     * @param {DonationPledgeCreateManyAndReturnArgs} args - Arguments to create many DonationPledges.
     * @example
     * // Create many DonationPledges
     * const donationPledge = await prisma.donationPledge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationPledges and only return the `id`
     * const donationPledgeWithIdOnly = await prisma.donationPledge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationPledgeCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationPledgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationPledge.
     * @param {DonationPledgeDeleteArgs} args - Arguments to delete one DonationPledge.
     * @example
     * // Delete one DonationPledge
     * const DonationPledge = await prisma.donationPledge.delete({
     *   where: {
     *     // ... filter to delete one DonationPledge
     *   }
     * })
     * 
     */
    delete<T extends DonationPledgeDeleteArgs>(args: SelectSubset<T, DonationPledgeDeleteArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationPledge.
     * @param {DonationPledgeUpdateArgs} args - Arguments to update one DonationPledge.
     * @example
     * // Update one DonationPledge
     * const donationPledge = await prisma.donationPledge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationPledgeUpdateArgs>(args: SelectSubset<T, DonationPledgeUpdateArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationPledges.
     * @param {DonationPledgeDeleteManyArgs} args - Arguments to filter DonationPledges to delete.
     * @example
     * // Delete a few DonationPledges
     * const { count } = await prisma.donationPledge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationPledgeDeleteManyArgs>(args?: SelectSubset<T, DonationPledgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationPledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationPledgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationPledges
     * const donationPledge = await prisma.donationPledge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationPledgeUpdateManyArgs>(args: SelectSubset<T, DonationPledgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationPledges and returns the data updated in the database.
     * @param {DonationPledgeUpdateManyAndReturnArgs} args - Arguments to update many DonationPledges.
     * @example
     * // Update many DonationPledges
     * const donationPledge = await prisma.donationPledge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationPledges and only return the `id`
     * const donationPledgeWithIdOnly = await prisma.donationPledge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationPledgeUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationPledgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationPledge.
     * @param {DonationPledgeUpsertArgs} args - Arguments to update or create a DonationPledge.
     * @example
     * // Update or create a DonationPledge
     * const donationPledge = await prisma.donationPledge.upsert({
     *   create: {
     *     // ... data to create a DonationPledge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationPledge we want to update
     *   }
     * })
     */
    upsert<T extends DonationPledgeUpsertArgs>(args: SelectSubset<T, DonationPledgeUpsertArgs<ExtArgs>>): Prisma__DonationPledgeClient<$Result.GetResult<Prisma.$DonationPledgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationPledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationPledgeCountArgs} args - Arguments to filter DonationPledges to count.
     * @example
     * // Count the number of DonationPledges
     * const count = await prisma.donationPledge.count({
     *   where: {
     *     // ... the filter for the DonationPledges we want to count
     *   }
     * })
    **/
    count<T extends DonationPledgeCountArgs>(
      args?: Subset<T, DonationPledgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationPledgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationPledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationPledgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationPledgeAggregateArgs>(args: Subset<T, DonationPledgeAggregateArgs>): Prisma.PrismaPromise<GetDonationPledgeAggregateType<T>>

    /**
     * Group by DonationPledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationPledgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationPledgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationPledgeGroupByArgs['orderBy'] }
        : { orderBy?: DonationPledgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationPledgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationPledgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationPledge model
   */
  readonly fields: DonationPledgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationPledge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationPledgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloodRequest<T extends BloodRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BloodRequestDefaultArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationPledge model
   */
  interface DonationPledgeFieldRefs {
    readonly id: FieldRef<"DonationPledge", 'String'>
    readonly bloodRequestId: FieldRef<"DonationPledge", 'String'>
    readonly userId: FieldRef<"DonationPledge", 'String'>
    readonly status: FieldRef<"DonationPledge", 'DonationPledgeStatus'>
    readonly pledgedAt: FieldRef<"DonationPledge", 'DateTime'>
    readonly updatedAt: FieldRef<"DonationPledge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonationPledge findUnique
   */
  export type DonationPledgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * Filter, which DonationPledge to fetch.
     */
    where: DonationPledgeWhereUniqueInput
  }

  /**
   * DonationPledge findUniqueOrThrow
   */
  export type DonationPledgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * Filter, which DonationPledge to fetch.
     */
    where: DonationPledgeWhereUniqueInput
  }

  /**
   * DonationPledge findFirst
   */
  export type DonationPledgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * Filter, which DonationPledge to fetch.
     */
    where?: DonationPledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationPledges to fetch.
     */
    orderBy?: DonationPledgeOrderByWithRelationInput | DonationPledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationPledges.
     */
    cursor?: DonationPledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationPledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationPledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationPledges.
     */
    distinct?: DonationPledgeScalarFieldEnum | DonationPledgeScalarFieldEnum[]
  }

  /**
   * DonationPledge findFirstOrThrow
   */
  export type DonationPledgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * Filter, which DonationPledge to fetch.
     */
    where?: DonationPledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationPledges to fetch.
     */
    orderBy?: DonationPledgeOrderByWithRelationInput | DonationPledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationPledges.
     */
    cursor?: DonationPledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationPledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationPledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationPledges.
     */
    distinct?: DonationPledgeScalarFieldEnum | DonationPledgeScalarFieldEnum[]
  }

  /**
   * DonationPledge findMany
   */
  export type DonationPledgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * Filter, which DonationPledges to fetch.
     */
    where?: DonationPledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationPledges to fetch.
     */
    orderBy?: DonationPledgeOrderByWithRelationInput | DonationPledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationPledges.
     */
    cursor?: DonationPledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationPledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationPledges.
     */
    skip?: number
    distinct?: DonationPledgeScalarFieldEnum | DonationPledgeScalarFieldEnum[]
  }

  /**
   * DonationPledge create
   */
  export type DonationPledgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationPledge.
     */
    data: XOR<DonationPledgeCreateInput, DonationPledgeUncheckedCreateInput>
  }

  /**
   * DonationPledge createMany
   */
  export type DonationPledgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationPledges.
     */
    data: DonationPledgeCreateManyInput | DonationPledgeCreateManyInput[]
  }

  /**
   * DonationPledge createManyAndReturn
   */
  export type DonationPledgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * The data used to create many DonationPledges.
     */
    data: DonationPledgeCreateManyInput | DonationPledgeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationPledge update
   */
  export type DonationPledgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationPledge.
     */
    data: XOR<DonationPledgeUpdateInput, DonationPledgeUncheckedUpdateInput>
    /**
     * Choose, which DonationPledge to update.
     */
    where: DonationPledgeWhereUniqueInput
  }

  /**
   * DonationPledge updateMany
   */
  export type DonationPledgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationPledges.
     */
    data: XOR<DonationPledgeUpdateManyMutationInput, DonationPledgeUncheckedUpdateManyInput>
    /**
     * Filter which DonationPledges to update
     */
    where?: DonationPledgeWhereInput
    /**
     * Limit how many DonationPledges to update.
     */
    limit?: number
  }

  /**
   * DonationPledge updateManyAndReturn
   */
  export type DonationPledgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * The data used to update DonationPledges.
     */
    data: XOR<DonationPledgeUpdateManyMutationInput, DonationPledgeUncheckedUpdateManyInput>
    /**
     * Filter which DonationPledges to update
     */
    where?: DonationPledgeWhereInput
    /**
     * Limit how many DonationPledges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationPledge upsert
   */
  export type DonationPledgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationPledge to update in case it exists.
     */
    where: DonationPledgeWhereUniqueInput
    /**
     * In case the DonationPledge found by the `where` argument doesn't exist, create a new DonationPledge with this data.
     */
    create: XOR<DonationPledgeCreateInput, DonationPledgeUncheckedCreateInput>
    /**
     * In case the DonationPledge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationPledgeUpdateInput, DonationPledgeUncheckedUpdateInput>
  }

  /**
   * DonationPledge delete
   */
  export type DonationPledgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
    /**
     * Filter which DonationPledge to delete.
     */
    where: DonationPledgeWhereUniqueInput
  }

  /**
   * DonationPledge deleteMany
   */
  export type DonationPledgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationPledges to delete
     */
    where?: DonationPledgeWhereInput
    /**
     * Limit how many DonationPledges to delete.
     */
    limit?: number
  }

  /**
   * DonationPledge without action
   */
  export type DonationPledgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationPledge
     */
    select?: DonationPledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationPledge
     */
    omit?: DonationPledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationPledgeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    bloodType: 'bloodType',
    isDonor: 'isDonor',
    isRecipient: 'isRecipient',
    latitude: 'latitude',
    longitude: 'longitude',
    contactNumber: 'contactNumber',
    lastDonationDate: 'lastDonationDate',
    medicalHistory: 'medicalHistory',
    role: 'role',
    deviceToken: 'deviceToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    contactInfo: 'contactInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const BloodRequestScalarFieldEnum: {
    id: 'id',
    hospitalId: 'hospitalId',
    requesterId: 'requesterId',
    bloodType: 'bloodType',
    unitsRequired: 'unitsRequired',
    urgency: 'urgency',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BloodRequestScalarFieldEnum = (typeof BloodRequestScalarFieldEnum)[keyof typeof BloodRequestScalarFieldEnum]


  export const DonationPledgeScalarFieldEnum: {
    id: 'id',
    bloodRequestId: 'bloodRequestId',
    userId: 'userId',
    status: 'status',
    pledgedAt: 'pledgedAt',
    updatedAt: 'updatedAt'
  };

  export type DonationPledgeScalarFieldEnum = (typeof DonationPledgeScalarFieldEnum)[keyof typeof DonationPledgeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BloodType'
   */
  export type EnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Urgency'
   */
  export type EnumUrgencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Urgency'>
    


  /**
   * Reference to a field of type 'BloodRequestStatus'
   */
  export type EnumBloodRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodRequestStatus'>
    


  /**
   * Reference to a field of type 'DonationPledgeStatus'
   */
  export type EnumDonationPledgeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DonationPledgeStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    bloodType?: EnumBloodTypeFilter<"User"> | $Enums.BloodType
    isDonor?: BoolFilter<"User"> | boolean
    isRecipient?: BoolFilter<"User"> | boolean
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    contactNumber?: StringNullableFilter<"User"> | string | null
    lastDonationDate?: DateTimeNullableFilter<"User"> | Date | string | null
    medicalHistory?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    deviceToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bloodRequests?: BloodRequestListRelationFilter
    donationPledges?: DonationPledgeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bloodType?: SortOrder
    isDonor?: SortOrder
    isRecipient?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    lastDonationDate?: SortOrderInput | SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    role?: SortOrder
    deviceToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bloodRequests?: BloodRequestOrderByRelationAggregateInput
    donationPledges?: DonationPledgeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    bloodType?: EnumBloodTypeFilter<"User"> | $Enums.BloodType
    isDonor?: BoolFilter<"User"> | boolean
    isRecipient?: BoolFilter<"User"> | boolean
    latitude?: FloatNullableFilter<"User"> | number | null
    longitude?: FloatNullableFilter<"User"> | number | null
    contactNumber?: StringNullableFilter<"User"> | string | null
    lastDonationDate?: DateTimeNullableFilter<"User"> | Date | string | null
    medicalHistory?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    deviceToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bloodRequests?: BloodRequestListRelationFilter
    donationPledges?: DonationPledgeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bloodType?: SortOrder
    isDonor?: SortOrder
    isRecipient?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    lastDonationDate?: SortOrderInput | SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    role?: SortOrder
    deviceToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    bloodType?: EnumBloodTypeWithAggregatesFilter<"User"> | $Enums.BloodType
    isDonor?: BoolWithAggregatesFilter<"User"> | boolean
    isRecipient?: BoolWithAggregatesFilter<"User"> | boolean
    latitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    contactNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastDonationDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    medicalHistory?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    deviceToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: StringFilter<"Hospital"> | string
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    latitude?: FloatFilter<"Hospital"> | number
    longitude?: FloatFilter<"Hospital"> | number
    contactInfo?: StringNullableFilter<"Hospital"> | string | null
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    bloodRequests?: BloodRequestListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bloodRequests?: BloodRequestOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    latitude?: FloatFilter<"Hospital"> | number
    longitude?: FloatFilter<"Hospital"> | number
    contactInfo?: StringNullableFilter<"Hospital"> | string | null
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    bloodRequests?: BloodRequestListRelationFilter
  }, "id">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _avg?: HospitalAvgOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
    _sum?: HospitalSumOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hospital"> | string
    name?: StringWithAggregatesFilter<"Hospital"> | string
    address?: StringWithAggregatesFilter<"Hospital"> | string
    latitude?: FloatWithAggregatesFilter<"Hospital"> | number
    longitude?: FloatWithAggregatesFilter<"Hospital"> | number
    contactInfo?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
  }

  export type BloodRequestWhereInput = {
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    hospitalId?: StringFilter<"BloodRequest"> | string
    requesterId?: StringNullableFilter<"BloodRequest"> | string | null
    bloodType?: EnumBloodTypeFilter<"BloodRequest"> | $Enums.BloodType
    unitsRequired?: IntFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyFilter<"BloodRequest"> | $Enums.Urgency
    latitude?: FloatFilter<"BloodRequest"> | number
    longitude?: FloatFilter<"BloodRequest"> | number
    status?: EnumBloodRequestStatusFilter<"BloodRequest"> | $Enums.BloodRequestStatus
    notes?: StringNullableFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    requester?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    donationPledges?: DonationPledgeListRelationFilter
  }

  export type BloodRequestOrderByWithRelationInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    requesterId?: SortOrderInput | SortOrder
    bloodType?: SortOrder
    unitsRequired?: SortOrder
    urgency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hospital?: HospitalOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
    donationPledges?: DonationPledgeOrderByRelationAggregateInput
  }

  export type BloodRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    hospitalId?: StringFilter<"BloodRequest"> | string
    requesterId?: StringNullableFilter<"BloodRequest"> | string | null
    bloodType?: EnumBloodTypeFilter<"BloodRequest"> | $Enums.BloodType
    unitsRequired?: IntFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyFilter<"BloodRequest"> | $Enums.Urgency
    latitude?: FloatFilter<"BloodRequest"> | number
    longitude?: FloatFilter<"BloodRequest"> | number
    status?: EnumBloodRequestStatusFilter<"BloodRequest"> | $Enums.BloodRequestStatus
    notes?: StringNullableFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
    hospital?: XOR<HospitalScalarRelationFilter, HospitalWhereInput>
    requester?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    donationPledges?: DonationPledgeListRelationFilter
  }, "id">

  export type BloodRequestOrderByWithAggregationInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    requesterId?: SortOrderInput | SortOrder
    bloodType?: SortOrder
    unitsRequired?: SortOrder
    urgency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BloodRequestCountOrderByAggregateInput
    _avg?: BloodRequestAvgOrderByAggregateInput
    _max?: BloodRequestMaxOrderByAggregateInput
    _min?: BloodRequestMinOrderByAggregateInput
    _sum?: BloodRequestSumOrderByAggregateInput
  }

  export type BloodRequestScalarWhereWithAggregatesInput = {
    AND?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    OR?: BloodRequestScalarWhereWithAggregatesInput[]
    NOT?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BloodRequest"> | string
    hospitalId?: StringWithAggregatesFilter<"BloodRequest"> | string
    requesterId?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    bloodType?: EnumBloodTypeWithAggregatesFilter<"BloodRequest"> | $Enums.BloodType
    unitsRequired?: IntWithAggregatesFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyWithAggregatesFilter<"BloodRequest"> | $Enums.Urgency
    latitude?: FloatWithAggregatesFilter<"BloodRequest"> | number
    longitude?: FloatWithAggregatesFilter<"BloodRequest"> | number
    status?: EnumBloodRequestStatusWithAggregatesFilter<"BloodRequest"> | $Enums.BloodRequestStatus
    notes?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
  }

  export type DonationPledgeWhereInput = {
    AND?: DonationPledgeWhereInput | DonationPledgeWhereInput[]
    OR?: DonationPledgeWhereInput[]
    NOT?: DonationPledgeWhereInput | DonationPledgeWhereInput[]
    id?: StringFilter<"DonationPledge"> | string
    bloodRequestId?: StringFilter<"DonationPledge"> | string
    userId?: StringFilter<"DonationPledge"> | string
    status?: EnumDonationPledgeStatusFilter<"DonationPledge"> | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFilter<"DonationPledge"> | Date | string
    updatedAt?: DateTimeFilter<"DonationPledge"> | Date | string
    bloodRequest?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationPledgeOrderByWithRelationInput = {
    id?: SortOrder
    bloodRequestId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    pledgedAt?: SortOrder
    updatedAt?: SortOrder
    bloodRequest?: BloodRequestOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DonationPledgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationPledgeWhereInput | DonationPledgeWhereInput[]
    OR?: DonationPledgeWhereInput[]
    NOT?: DonationPledgeWhereInput | DonationPledgeWhereInput[]
    bloodRequestId?: StringFilter<"DonationPledge"> | string
    userId?: StringFilter<"DonationPledge"> | string
    status?: EnumDonationPledgeStatusFilter<"DonationPledge"> | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFilter<"DonationPledge"> | Date | string
    updatedAt?: DateTimeFilter<"DonationPledge"> | Date | string
    bloodRequest?: XOR<BloodRequestScalarRelationFilter, BloodRequestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DonationPledgeOrderByWithAggregationInput = {
    id?: SortOrder
    bloodRequestId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    pledgedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonationPledgeCountOrderByAggregateInput
    _max?: DonationPledgeMaxOrderByAggregateInput
    _min?: DonationPledgeMinOrderByAggregateInput
  }

  export type DonationPledgeScalarWhereWithAggregatesInput = {
    AND?: DonationPledgeScalarWhereWithAggregatesInput | DonationPledgeScalarWhereWithAggregatesInput[]
    OR?: DonationPledgeScalarWhereWithAggregatesInput[]
    NOT?: DonationPledgeScalarWhereWithAggregatesInput | DonationPledgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationPledge"> | string
    bloodRequestId?: StringWithAggregatesFilter<"DonationPledge"> | string
    userId?: StringWithAggregatesFilter<"DonationPledge"> | string
    status?: EnumDonationPledgeStatusWithAggregatesFilter<"DonationPledge"> | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeWithAggregatesFilter<"DonationPledge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DonationPledge"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: number | null
    longitude?: number | null
    contactNumber?: string | null
    lastDonationDate?: Date | string | null
    medicalHistory?: string | null
    role?: $Enums.Role
    deviceToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
    donationPledges?: DonationPledgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: number | null
    longitude?: number | null
    contactNumber?: string | null
    lastDonationDate?: Date | string | null
    medicalHistory?: string | null
    role?: $Enums.Role
    deviceToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    donationPledges?: DonationPledgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
    donationPledges?: DonationPledgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    donationPledges?: DonationPledgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: number | null
    longitude?: number | null
    contactNumber?: string | null
    lastDonationDate?: Date | string | null
    medicalHistory?: string | null
    role?: $Enums.Role
    deviceToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalCreateInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodRequests?: BloodRequestCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateInput = {
    id?: string
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutBloodRequestsInput
    requester?: UserCreateNestedOneWithoutBloodRequestsInput
    donationPledges?: DonationPledgeCreateNestedManyWithoutBloodRequestInput
  }

  export type BloodRequestUncheckedCreateInput = {
    id?: string
    hospitalId: string
    requesterId?: string | null
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donationPledges?: DonationPledgeUncheckedCreateNestedManyWithoutBloodRequestInput
  }

  export type BloodRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput
    requester?: UserUpdateOneWithoutBloodRequestsNestedInput
    donationPledges?: DonationPledgeUpdateManyWithoutBloodRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    requesterId?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationPledges?: DonationPledgeUncheckedUpdateManyWithoutBloodRequestNestedInput
  }

  export type BloodRequestCreateManyInput = {
    id?: string
    hospitalId: string
    requesterId?: string | null
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    requesterId?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationPledgeCreateInput = {
    id?: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
    bloodRequest: BloodRequestCreateNestedOneWithoutDonationPledgesInput
    user: UserCreateNestedOneWithoutDonationPledgesInput
  }

  export type DonationPledgeUncheckedCreateInput = {
    id?: string
    bloodRequestId: string
    userId: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationPledgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequest?: BloodRequestUpdateOneRequiredWithoutDonationPledgesNestedInput
    user?: UserUpdateOneRequiredWithoutDonationPledgesNestedInput
  }

  export type DonationPledgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodRequestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationPledgeCreateManyInput = {
    id?: string
    bloodRequestId: string
    userId: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationPledgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationPledgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodRequestId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumBloodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[]
    notIn?: $Enums.BloodType[]
    not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BloodRequestListRelationFilter = {
    every?: BloodRequestWhereInput
    some?: BloodRequestWhereInput
    none?: BloodRequestWhereInput
  }

  export type DonationPledgeListRelationFilter = {
    every?: DonationPledgeWhereInput
    some?: DonationPledgeWhereInput
    none?: DonationPledgeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BloodRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationPledgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bloodType?: SortOrder
    isDonor?: SortOrder
    isRecipient?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrder
    lastDonationDate?: SortOrder
    medicalHistory?: SortOrder
    role?: SortOrder
    deviceToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bloodType?: SortOrder
    isDonor?: SortOrder
    isRecipient?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrder
    lastDonationDate?: SortOrder
    medicalHistory?: SortOrder
    role?: SortOrder
    deviceToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    bloodType?: SortOrder
    isDonor?: SortOrder
    isRecipient?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrder
    lastDonationDate?: SortOrder
    medicalHistory?: SortOrder
    role?: SortOrder
    deviceToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[]
    notIn?: $Enums.BloodType[]
    not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type EnumBloodRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodRequestStatus | EnumBloodRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BloodRequestStatus[]
    notIn?: $Enums.BloodRequestStatus[]
    not?: NestedEnumBloodRequestStatusFilter<$PrismaModel> | $Enums.BloodRequestStatus
  }

  export type HospitalScalarRelationFilter = {
    is?: HospitalWhereInput
    isNot?: HospitalWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BloodRequestCountOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    requesterId?: SortOrder
    bloodType?: SortOrder
    unitsRequired?: SortOrder
    urgency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestAvgOrderByAggregateInput = {
    unitsRequired?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BloodRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    requesterId?: SortOrder
    bloodType?: SortOrder
    unitsRequired?: SortOrder
    urgency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestMinOrderByAggregateInput = {
    id?: SortOrder
    hospitalId?: SortOrder
    requesterId?: SortOrder
    bloodType?: SortOrder
    unitsRequired?: SortOrder
    urgency?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestSumOrderByAggregateInput = {
    unitsRequired?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type EnumBloodRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodRequestStatus | EnumBloodRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BloodRequestStatus[]
    notIn?: $Enums.BloodRequestStatus[]
    not?: NestedEnumBloodRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.BloodRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumBloodRequestStatusFilter<$PrismaModel>
  }

  export type EnumDonationPledgeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationPledgeStatus | EnumDonationPledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationPledgeStatus[]
    notIn?: $Enums.DonationPledgeStatus[]
    not?: NestedEnumDonationPledgeStatusFilter<$PrismaModel> | $Enums.DonationPledgeStatus
  }

  export type BloodRequestScalarRelationFilter = {
    is?: BloodRequestWhereInput
    isNot?: BloodRequestWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DonationPledgeCountOrderByAggregateInput = {
    id?: SortOrder
    bloodRequestId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    pledgedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationPledgeMaxOrderByAggregateInput = {
    id?: SortOrder
    bloodRequestId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    pledgedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonationPledgeMinOrderByAggregateInput = {
    id?: SortOrder
    bloodRequestId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    pledgedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDonationPledgeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationPledgeStatus | EnumDonationPledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationPledgeStatus[]
    notIn?: $Enums.DonationPledgeStatus[]
    not?: NestedEnumDonationPledgeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationPledgeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDonationPledgeStatusFilter<$PrismaModel>
    _max?: NestedEnumDonationPledgeStatusFilter<$PrismaModel>
  }

  export type BloodRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type DonationPledgeCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationPledgeCreateWithoutUserInput, DonationPledgeUncheckedCreateWithoutUserInput> | DonationPledgeCreateWithoutUserInput[] | DonationPledgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutUserInput | DonationPledgeCreateOrConnectWithoutUserInput[]
    createMany?: DonationPledgeCreateManyUserInputEnvelope
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type DonationPledgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationPledgeCreateWithoutUserInput, DonationPledgeUncheckedCreateWithoutUserInput> | DonationPledgeCreateWithoutUserInput[] | DonationPledgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutUserInput | DonationPledgeCreateOrConnectWithoutUserInput[]
    createMany?: DonationPledgeCreateManyUserInputEnvelope
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumBloodTypeFieldUpdateOperationsInput = {
    set?: $Enums.BloodType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BloodRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type DonationPledgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationPledgeCreateWithoutUserInput, DonationPledgeUncheckedCreateWithoutUserInput> | DonationPledgeCreateWithoutUserInput[] | DonationPledgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutUserInput | DonationPledgeCreateOrConnectWithoutUserInput[]
    upsert?: DonationPledgeUpsertWithWhereUniqueWithoutUserInput | DonationPledgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationPledgeCreateManyUserInputEnvelope
    set?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    disconnect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    delete?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    update?: DonationPledgeUpdateWithWhereUniqueWithoutUserInput | DonationPledgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationPledgeUpdateManyWithWhereWithoutUserInput | DonationPledgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationPledgeScalarWhereInput | DonationPledgeScalarWhereInput[]
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type DonationPledgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationPledgeCreateWithoutUserInput, DonationPledgeUncheckedCreateWithoutUserInput> | DonationPledgeCreateWithoutUserInput[] | DonationPledgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutUserInput | DonationPledgeCreateOrConnectWithoutUserInput[]
    upsert?: DonationPledgeUpsertWithWhereUniqueWithoutUserInput | DonationPledgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationPledgeCreateManyUserInputEnvelope
    set?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    disconnect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    delete?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    update?: DonationPledgeUpdateWithWhereUniqueWithoutUserInput | DonationPledgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationPledgeUpdateManyWithWhereWithoutUserInput | DonationPledgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationPledgeScalarWhereInput | DonationPledgeScalarWhereInput[]
  }

  export type BloodRequestCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BloodRequestUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutHospitalInput | BloodRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutHospitalInput | BloodRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutHospitalInput | BloodRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type BloodRequestUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput> | BloodRequestCreateWithoutHospitalInput[] | BloodRequestUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutHospitalInput | BloodRequestCreateOrConnectWithoutHospitalInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutHospitalInput | BloodRequestUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: BloodRequestCreateManyHospitalInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutHospitalInput | BloodRequestUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutHospitalInput | BloodRequestUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type HospitalCreateNestedOneWithoutBloodRequestsInput = {
    create?: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBloodRequestsInput
    connect?: HospitalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBloodRequestsInput = {
    create?: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBloodRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type DonationPledgeCreateNestedManyWithoutBloodRequestInput = {
    create?: XOR<DonationPledgeCreateWithoutBloodRequestInput, DonationPledgeUncheckedCreateWithoutBloodRequestInput> | DonationPledgeCreateWithoutBloodRequestInput[] | DonationPledgeUncheckedCreateWithoutBloodRequestInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutBloodRequestInput | DonationPledgeCreateOrConnectWithoutBloodRequestInput[]
    createMany?: DonationPledgeCreateManyBloodRequestInputEnvelope
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
  }

  export type DonationPledgeUncheckedCreateNestedManyWithoutBloodRequestInput = {
    create?: XOR<DonationPledgeCreateWithoutBloodRequestInput, DonationPledgeUncheckedCreateWithoutBloodRequestInput> | DonationPledgeCreateWithoutBloodRequestInput[] | DonationPledgeUncheckedCreateWithoutBloodRequestInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutBloodRequestInput | DonationPledgeCreateOrConnectWithoutBloodRequestInput[]
    createMany?: DonationPledgeCreateManyBloodRequestInputEnvelope
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUrgencyFieldUpdateOperationsInput = {
    set?: $Enums.Urgency
  }

  export type EnumBloodRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.BloodRequestStatus
  }

  export type HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput = {
    create?: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutBloodRequestsInput
    upsert?: HospitalUpsertWithoutBloodRequestsInput
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutBloodRequestsInput, HospitalUpdateWithoutBloodRequestsInput>, HospitalUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type UserUpdateOneWithoutBloodRequestsNestedInput = {
    create?: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBloodRequestsInput
    upsert?: UserUpsertWithoutBloodRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBloodRequestsInput, UserUpdateWithoutBloodRequestsInput>, UserUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type DonationPledgeUpdateManyWithoutBloodRequestNestedInput = {
    create?: XOR<DonationPledgeCreateWithoutBloodRequestInput, DonationPledgeUncheckedCreateWithoutBloodRequestInput> | DonationPledgeCreateWithoutBloodRequestInput[] | DonationPledgeUncheckedCreateWithoutBloodRequestInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutBloodRequestInput | DonationPledgeCreateOrConnectWithoutBloodRequestInput[]
    upsert?: DonationPledgeUpsertWithWhereUniqueWithoutBloodRequestInput | DonationPledgeUpsertWithWhereUniqueWithoutBloodRequestInput[]
    createMany?: DonationPledgeCreateManyBloodRequestInputEnvelope
    set?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    disconnect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    delete?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    update?: DonationPledgeUpdateWithWhereUniqueWithoutBloodRequestInput | DonationPledgeUpdateWithWhereUniqueWithoutBloodRequestInput[]
    updateMany?: DonationPledgeUpdateManyWithWhereWithoutBloodRequestInput | DonationPledgeUpdateManyWithWhereWithoutBloodRequestInput[]
    deleteMany?: DonationPledgeScalarWhereInput | DonationPledgeScalarWhereInput[]
  }

  export type DonationPledgeUncheckedUpdateManyWithoutBloodRequestNestedInput = {
    create?: XOR<DonationPledgeCreateWithoutBloodRequestInput, DonationPledgeUncheckedCreateWithoutBloodRequestInput> | DonationPledgeCreateWithoutBloodRequestInput[] | DonationPledgeUncheckedCreateWithoutBloodRequestInput[]
    connectOrCreate?: DonationPledgeCreateOrConnectWithoutBloodRequestInput | DonationPledgeCreateOrConnectWithoutBloodRequestInput[]
    upsert?: DonationPledgeUpsertWithWhereUniqueWithoutBloodRequestInput | DonationPledgeUpsertWithWhereUniqueWithoutBloodRequestInput[]
    createMany?: DonationPledgeCreateManyBloodRequestInputEnvelope
    set?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    disconnect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    delete?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    connect?: DonationPledgeWhereUniqueInput | DonationPledgeWhereUniqueInput[]
    update?: DonationPledgeUpdateWithWhereUniqueWithoutBloodRequestInput | DonationPledgeUpdateWithWhereUniqueWithoutBloodRequestInput[]
    updateMany?: DonationPledgeUpdateManyWithWhereWithoutBloodRequestInput | DonationPledgeUpdateManyWithWhereWithoutBloodRequestInput[]
    deleteMany?: DonationPledgeScalarWhereInput | DonationPledgeScalarWhereInput[]
  }

  export type BloodRequestCreateNestedOneWithoutDonationPledgesInput = {
    create?: XOR<BloodRequestCreateWithoutDonationPledgesInput, BloodRequestUncheckedCreateWithoutDonationPledgesInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonationPledgesInput
    connect?: BloodRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonationPledgesInput = {
    create?: XOR<UserCreateWithoutDonationPledgesInput, UserUncheckedCreateWithoutDonationPledgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationPledgesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDonationPledgeStatusFieldUpdateOperationsInput = {
    set?: $Enums.DonationPledgeStatus
  }

  export type BloodRequestUpdateOneRequiredWithoutDonationPledgesNestedInput = {
    create?: XOR<BloodRequestCreateWithoutDonationPledgesInput, BloodRequestUncheckedCreateWithoutDonationPledgesInput>
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonationPledgesInput
    upsert?: BloodRequestUpsertWithoutDonationPledgesInput
    connect?: BloodRequestWhereUniqueInput
    update?: XOR<XOR<BloodRequestUpdateToOneWithWhereWithoutDonationPledgesInput, BloodRequestUpdateWithoutDonationPledgesInput>, BloodRequestUncheckedUpdateWithoutDonationPledgesInput>
  }

  export type UserUpdateOneRequiredWithoutDonationPledgesNestedInput = {
    create?: XOR<UserCreateWithoutDonationPledgesInput, UserUncheckedCreateWithoutDonationPledgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationPledgesInput
    upsert?: UserUpsertWithoutDonationPledgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationPledgesInput, UserUpdateWithoutDonationPledgesInput>, UserUncheckedUpdateWithoutDonationPledgesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumBloodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[]
    notIn?: $Enums.BloodType[]
    not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[]
    notIn?: $Enums.BloodType[]
    not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyFilter<$PrismaModel> | $Enums.Urgency
  }

  export type NestedEnumBloodRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodRequestStatus | EnumBloodRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BloodRequestStatus[]
    notIn?: $Enums.BloodRequestStatus[]
    not?: NestedEnumBloodRequestStatusFilter<$PrismaModel> | $Enums.BloodRequestStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Urgency | EnumUrgencyFieldRefInput<$PrismaModel>
    in?: $Enums.Urgency[]
    notIn?: $Enums.Urgency[]
    not?: NestedEnumUrgencyWithAggregatesFilter<$PrismaModel> | $Enums.Urgency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyFilter<$PrismaModel>
    _max?: NestedEnumUrgencyFilter<$PrismaModel>
  }

  export type NestedEnumBloodRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodRequestStatus | EnumBloodRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BloodRequestStatus[]
    notIn?: $Enums.BloodRequestStatus[]
    not?: NestedEnumBloodRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.BloodRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumBloodRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumDonationPledgeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationPledgeStatus | EnumDonationPledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationPledgeStatus[]
    notIn?: $Enums.DonationPledgeStatus[]
    not?: NestedEnumDonationPledgeStatusFilter<$PrismaModel> | $Enums.DonationPledgeStatus
  }

  export type NestedEnumDonationPledgeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationPledgeStatus | EnumDonationPledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DonationPledgeStatus[]
    notIn?: $Enums.DonationPledgeStatus[]
    not?: NestedEnumDonationPledgeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationPledgeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDonationPledgeStatusFilter<$PrismaModel>
    _max?: NestedEnumDonationPledgeStatusFilter<$PrismaModel>
  }

  export type BloodRequestCreateWithoutRequesterInput = {
    id?: string
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutBloodRequestsInput
    donationPledges?: DonationPledgeCreateNestedManyWithoutBloodRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    hospitalId: string
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donationPledges?: DonationPledgeUncheckedCreateNestedManyWithoutBloodRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestCreateManyRequesterInputEnvelope = {
    data: BloodRequestCreateManyRequesterInput | BloodRequestCreateManyRequesterInput[]
  }

  export type DonationPledgeCreateWithoutUserInput = {
    id?: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
    bloodRequest: BloodRequestCreateNestedOneWithoutDonationPledgesInput
  }

  export type DonationPledgeUncheckedCreateWithoutUserInput = {
    id?: string
    bloodRequestId: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationPledgeCreateOrConnectWithoutUserInput = {
    where: DonationPledgeWhereUniqueInput
    create: XOR<DonationPledgeCreateWithoutUserInput, DonationPledgeUncheckedCreateWithoutUserInput>
  }

  export type DonationPledgeCreateManyUserInputEnvelope = {
    data: DonationPledgeCreateManyUserInput | DonationPledgeCreateManyUserInput[]
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type BloodRequestScalarWhereInput = {
    AND?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    OR?: BloodRequestScalarWhereInput[]
    NOT?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    hospitalId?: StringFilter<"BloodRequest"> | string
    requesterId?: StringNullableFilter<"BloodRequest"> | string | null
    bloodType?: EnumBloodTypeFilter<"BloodRequest"> | $Enums.BloodType
    unitsRequired?: IntFilter<"BloodRequest"> | number
    urgency?: EnumUrgencyFilter<"BloodRequest"> | $Enums.Urgency
    latitude?: FloatFilter<"BloodRequest"> | number
    longitude?: FloatFilter<"BloodRequest"> | number
    status?: EnumBloodRequestStatusFilter<"BloodRequest"> | $Enums.BloodRequestStatus
    notes?: StringNullableFilter<"BloodRequest"> | string | null
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
  }

  export type DonationPledgeUpsertWithWhereUniqueWithoutUserInput = {
    where: DonationPledgeWhereUniqueInput
    update: XOR<DonationPledgeUpdateWithoutUserInput, DonationPledgeUncheckedUpdateWithoutUserInput>
    create: XOR<DonationPledgeCreateWithoutUserInput, DonationPledgeUncheckedCreateWithoutUserInput>
  }

  export type DonationPledgeUpdateWithWhereUniqueWithoutUserInput = {
    where: DonationPledgeWhereUniqueInput
    data: XOR<DonationPledgeUpdateWithoutUserInput, DonationPledgeUncheckedUpdateWithoutUserInput>
  }

  export type DonationPledgeUpdateManyWithWhereWithoutUserInput = {
    where: DonationPledgeScalarWhereInput
    data: XOR<DonationPledgeUpdateManyMutationInput, DonationPledgeUncheckedUpdateManyWithoutUserInput>
  }

  export type DonationPledgeScalarWhereInput = {
    AND?: DonationPledgeScalarWhereInput | DonationPledgeScalarWhereInput[]
    OR?: DonationPledgeScalarWhereInput[]
    NOT?: DonationPledgeScalarWhereInput | DonationPledgeScalarWhereInput[]
    id?: StringFilter<"DonationPledge"> | string
    bloodRequestId?: StringFilter<"DonationPledge"> | string
    userId?: StringFilter<"DonationPledge"> | string
    status?: EnumDonationPledgeStatusFilter<"DonationPledge"> | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFilter<"DonationPledge"> | Date | string
    updatedAt?: DateTimeFilter<"DonationPledge"> | Date | string
  }

  export type BloodRequestCreateWithoutHospitalInput = {
    id?: string
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requester?: UserCreateNestedOneWithoutBloodRequestsInput
    donationPledges?: DonationPledgeCreateNestedManyWithoutBloodRequestInput
  }

  export type BloodRequestUncheckedCreateWithoutHospitalInput = {
    id?: string
    requesterId?: string | null
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donationPledges?: DonationPledgeUncheckedCreateNestedManyWithoutBloodRequestInput
  }

  export type BloodRequestCreateOrConnectWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput>
  }

  export type BloodRequestCreateManyHospitalInputEnvelope = {
    data: BloodRequestCreateManyHospitalInput | BloodRequestCreateManyHospitalInput[]
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutHospitalInput, BloodRequestUncheckedUpdateWithoutHospitalInput>
    create: XOR<BloodRequestCreateWithoutHospitalInput, BloodRequestUncheckedCreateWithoutHospitalInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutHospitalInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutHospitalInput, BloodRequestUncheckedUpdateWithoutHospitalInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutHospitalInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutHospitalInput>
  }

  export type HospitalCreateWithoutBloodRequestsInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalUncheckedCreateWithoutBloodRequestsInput = {
    id?: string
    name: string
    address: string
    latitude: number
    longitude: number
    contactInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalCreateOrConnectWithoutBloodRequestsInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
  }

  export type UserCreateWithoutBloodRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: number | null
    longitude?: number | null
    contactNumber?: string | null
    lastDonationDate?: Date | string | null
    medicalHistory?: string | null
    role?: $Enums.Role
    deviceToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donationPledges?: DonationPledgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBloodRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: number | null
    longitude?: number | null
    contactNumber?: string | null
    lastDonationDate?: Date | string | null
    medicalHistory?: string | null
    role?: $Enums.Role
    deviceToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    donationPledges?: DonationPledgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBloodRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
  }

  export type DonationPledgeCreateWithoutBloodRequestInput = {
    id?: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDonationPledgesInput
  }

  export type DonationPledgeUncheckedCreateWithoutBloodRequestInput = {
    id?: string
    userId: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationPledgeCreateOrConnectWithoutBloodRequestInput = {
    where: DonationPledgeWhereUniqueInput
    create: XOR<DonationPledgeCreateWithoutBloodRequestInput, DonationPledgeUncheckedCreateWithoutBloodRequestInput>
  }

  export type DonationPledgeCreateManyBloodRequestInputEnvelope = {
    data: DonationPledgeCreateManyBloodRequestInput | DonationPledgeCreateManyBloodRequestInput[]
  }

  export type HospitalUpsertWithoutBloodRequestsInput = {
    update: XOR<HospitalUpdateWithoutBloodRequestsInput, HospitalUncheckedUpdateWithoutBloodRequestsInput>
    create: XOR<HospitalCreateWithoutBloodRequestsInput, HospitalUncheckedCreateWithoutBloodRequestsInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutBloodRequestsInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutBloodRequestsInput, HospitalUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type HospitalUpdateWithoutBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUncheckedUpdateWithoutBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBloodRequestsInput = {
    update: XOR<UserUpdateWithoutBloodRequestsInput, UserUncheckedUpdateWithoutBloodRequestsInput>
    create: XOR<UserCreateWithoutBloodRequestsInput, UserUncheckedCreateWithoutBloodRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBloodRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBloodRequestsInput, UserUncheckedUpdateWithoutBloodRequestsInput>
  }

  export type UserUpdateWithoutBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationPledges?: DonationPledgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationPledges?: DonationPledgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DonationPledgeUpsertWithWhereUniqueWithoutBloodRequestInput = {
    where: DonationPledgeWhereUniqueInput
    update: XOR<DonationPledgeUpdateWithoutBloodRequestInput, DonationPledgeUncheckedUpdateWithoutBloodRequestInput>
    create: XOR<DonationPledgeCreateWithoutBloodRequestInput, DonationPledgeUncheckedCreateWithoutBloodRequestInput>
  }

  export type DonationPledgeUpdateWithWhereUniqueWithoutBloodRequestInput = {
    where: DonationPledgeWhereUniqueInput
    data: XOR<DonationPledgeUpdateWithoutBloodRequestInput, DonationPledgeUncheckedUpdateWithoutBloodRequestInput>
  }

  export type DonationPledgeUpdateManyWithWhereWithoutBloodRequestInput = {
    where: DonationPledgeScalarWhereInput
    data: XOR<DonationPledgeUpdateManyMutationInput, DonationPledgeUncheckedUpdateManyWithoutBloodRequestInput>
  }

  export type BloodRequestCreateWithoutDonationPledgesInput = {
    id?: string
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hospital: HospitalCreateNestedOneWithoutBloodRequestsInput
    requester?: UserCreateNestedOneWithoutBloodRequestsInput
  }

  export type BloodRequestUncheckedCreateWithoutDonationPledgesInput = {
    id?: string
    hospitalId: string
    requesterId?: string | null
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestCreateOrConnectWithoutDonationPledgesInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutDonationPledgesInput, BloodRequestUncheckedCreateWithoutDonationPledgesInput>
  }

  export type UserCreateWithoutDonationPledgesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: number | null
    longitude?: number | null
    contactNumber?: string | null
    lastDonationDate?: Date | string | null
    medicalHistory?: string | null
    role?: $Enums.Role
    deviceToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutDonationPledgesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    bloodType: $Enums.BloodType
    isDonor?: boolean
    isRecipient?: boolean
    latitude?: number | null
    longitude?: number | null
    contactNumber?: string | null
    lastDonationDate?: Date | string | null
    medicalHistory?: string | null
    role?: $Enums.Role
    deviceToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutDonationPledgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationPledgesInput, UserUncheckedCreateWithoutDonationPledgesInput>
  }

  export type BloodRequestUpsertWithoutDonationPledgesInput = {
    update: XOR<BloodRequestUpdateWithoutDonationPledgesInput, BloodRequestUncheckedUpdateWithoutDonationPledgesInput>
    create: XOR<BloodRequestCreateWithoutDonationPledgesInput, BloodRequestUncheckedCreateWithoutDonationPledgesInput>
    where?: BloodRequestWhereInput
  }

  export type BloodRequestUpdateToOneWithWhereWithoutDonationPledgesInput = {
    where?: BloodRequestWhereInput
    data: XOR<BloodRequestUpdateWithoutDonationPledgesInput, BloodRequestUncheckedUpdateWithoutDonationPledgesInput>
  }

  export type BloodRequestUpdateWithoutDonationPledgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput
    requester?: UserUpdateOneWithoutBloodRequestsNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutDonationPledgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    requesterId?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDonationPledgesInput = {
    update: XOR<UserUpdateWithoutDonationPledgesInput, UserUncheckedUpdateWithoutDonationPledgesInput>
    create: XOR<UserCreateWithoutDonationPledgesInput, UserUncheckedCreateWithoutDonationPledgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationPledgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationPledgesInput, UserUncheckedUpdateWithoutDonationPledgesInput>
  }

  export type UserUpdateWithoutDonationPledgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationPledgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    isDonor?: BoolFieldUpdateOperationsInput | boolean
    isRecipient?: BoolFieldUpdateOperationsInput | boolean
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type BloodRequestCreateManyRequesterInput = {
    id?: string
    hospitalId: string
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationPledgeCreateManyUserInput = {
    id?: string
    bloodRequestId: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospital?: HospitalUpdateOneRequiredWithoutBloodRequestsNestedInput
    donationPledges?: DonationPledgeUpdateManyWithoutBloodRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationPledges?: DonationPledgeUncheckedUpdateManyWithoutBloodRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    hospitalId?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationPledgeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodRequest?: BloodRequestUpdateOneRequiredWithoutDonationPledgesNestedInput
  }

  export type DonationPledgeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationPledgeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodRequestId?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateManyHospitalInput = {
    id?: string
    requesterId?: string | null
    bloodType: $Enums.BloodType
    unitsRequired: number
    urgency: $Enums.Urgency
    latitude: number
    longitude: number
    status?: $Enums.BloodRequestStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneWithoutBloodRequestsNestedInput
    donationPledges?: DonationPledgeUpdateManyWithoutBloodRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationPledges?: DonationPledgeUncheckedUpdateManyWithoutBloodRequestNestedInput
  }

  export type BloodRequestUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    unitsRequired?: IntFieldUpdateOperationsInput | number
    urgency?: EnumUrgencyFieldUpdateOperationsInput | $Enums.Urgency
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: EnumBloodRequestStatusFieldUpdateOperationsInput | $Enums.BloodRequestStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationPledgeCreateManyBloodRequestInput = {
    id?: string
    userId: string
    status?: $Enums.DonationPledgeStatus
    pledgedAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationPledgeUpdateWithoutBloodRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDonationPledgesNestedInput
  }

  export type DonationPledgeUncheckedUpdateWithoutBloodRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationPledgeUncheckedUpdateManyWithoutBloodRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumDonationPledgeStatusFieldUpdateOperationsInput | $Enums.DonationPledgeStatus
    pledgedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}