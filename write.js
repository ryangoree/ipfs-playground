import * as IPFS from 'ipfs-core'

const content = 'Test 1'

async function write() {
  const node = await IPFS.create()
  const file = await node.files.write('/stuff/test.txt', content, {
    create: true,
    parents: true,
  })
  console.log('wrote:', content)
  process.exit()
}

write()
