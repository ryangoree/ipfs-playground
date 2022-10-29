import * as IPFS from 'ipfs-core'
import toBuffer from 'it-to-buffer'

const utf8decoder = new TextDecoder()

async function write(node) {
  return node.files.write('/stuff/hello.txt', 'Hello, World!!', {
    create: true,
    parents: true,
  })
}

async function read(node) {
  let secretMessage = await toBuffer(node.files.read('/stuff/hello.txt'))
  console.log(utf8decoder.decode(secretMessage))
}

async function main() {
  const node = await IPFS.create()
  try {
    await read(node)
  } catch(err) {
    console.error(err);
    await write(node)
    await read(node)
  }
}

main()
