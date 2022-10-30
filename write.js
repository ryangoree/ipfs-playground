import * as IPFS from 'ipfs-core'

async function write() {
  const node = await IPFS.create()
  const file = await node.files.write('/stuff/test.txt', 'Test 1', {
    create: true,
    parents: true,
  })
  console.log('wrote:', file)
}

write()
