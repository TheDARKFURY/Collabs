/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link ContributorAccount}
 * @category Accounts
 * @category generated
 */
export type ContributorAccountArgs = {
  contributorPubkey: web3.PublicKey
  xpPoolPubkey: web3.PublicKey
  xp: beet.bignum
}

export const contributorAccountDiscriminator = [
  14, 30, 60, 53, 185, 245, 180, 86,
]
/**
 * Holds the data for the {@link ContributorAccount} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class ContributorAccount implements ContributorAccountArgs {
  private constructor(
    readonly contributorPubkey: web3.PublicKey,
    readonly xpPoolPubkey: web3.PublicKey,
    readonly xp: beet.bignum
  ) {}

  /**
   * Creates a {@link ContributorAccount} instance from the provided args.
   */
  static fromArgs(args: ContributorAccountArgs) {
    return new ContributorAccount(
      args.contributorPubkey,
      args.xpPoolPubkey,
      args.xp
    )
  }

  /**
   * Deserializes the {@link ContributorAccount} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [ContributorAccount, number] {
    return ContributorAccount.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link ContributorAccount} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<ContributorAccount> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find ContributorAccount account at ${address}`)
    }
    return ContributorAccount.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '4HYr7M3ytiSoqr3Zh3iK1VcNNm7ZgrNikwmWYJdGMvw4'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, contributorAccountBeet)
  }

  /**
   * Deserializes the {@link ContributorAccount} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [ContributorAccount, number] {
    return contributorAccountBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link ContributorAccount} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return contributorAccountBeet.serialize({
      accountDiscriminator: contributorAccountDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link ContributorAccount}
   */
  static get byteSize() {
    return contributorAccountBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link ContributorAccount} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      ContributorAccount.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link ContributorAccount} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === ContributorAccount.byteSize
  }

  /**
   * Returns a readable version of {@link ContributorAccount} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      contributorPubkey: this.contributorPubkey.toBase58(),
      xpPoolPubkey: this.xpPoolPubkey.toBase58(),
      xp: (() => {
        const x = <{ toNumber: () => number }>this.xp
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const contributorAccountBeet = new beet.BeetStruct<
  ContributorAccount,
  ContributorAccountArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['contributorPubkey', beetSolana.publicKey],
    ['xpPoolPubkey', beetSolana.publicKey],
    ['xp', beet.u64],
  ],
  ContributorAccount.fromArgs,
  'ContributorAccount'
)
