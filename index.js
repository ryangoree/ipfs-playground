import * as IPFS from 'ipfs-core'

async function main() {
  const node = await IPFS.create()
  const content = await node.files.ls('/')
  for await (const file of content) {
    console.log(file)
  }
  // await node.files.write('/hello.txt', 'Hello, World!', { create: true })
}

main()