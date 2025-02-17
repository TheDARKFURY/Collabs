/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CreateXpPool
 * @category generated
 */
export const createXpPoolStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CreateXpPoolInstructionArgs'
)
/**
 * Accounts required by the _createXpPool_ instruction
 *
 * @property [_writable_] xpPoolAccount
 * @property [_writable_, **signer**] leader
 * @category Instructions
 * @category CreateXpPool
 * @category generated
 */
export type CreateXpPoolInstructionAccounts = {
  xpPoolAccount: web3.PublicKey
  leader: web3.PublicKey
  systemProgram?: web3.PublicKey
}

export const createXpPoolInstructionDiscriminator = [
  15, 11, 116, 137, 83, 201, 75, 60,
]

/**
 * Creates a _CreateXpPool_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CreateXpPool
 * @category generated
 */
export function createCreateXpPoolInstruction(
  accounts: CreateXpPoolInstructionAccounts,
  programId = new web3.PublicKey('4HYr7M3ytiSoqr3Zh3iK1VcNNm7ZgrNikwmWYJdGMvw4')
) {
  const [data] = createXpPoolStruct.serialize({
    instructionDiscriminator: createXpPoolInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.xpPoolAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.leader,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
