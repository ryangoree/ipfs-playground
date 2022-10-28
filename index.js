import * as IPFS from 'ipfs-core'
import toBuffer from 'it-to-buffer'

const utf8decoder = new TextDecoder()

async function main() {
  const node = await IPFS.create()
  let secretMessage = await toBuffer(node.files.read('/stuff/mfs.txt'))
  console.log(utf8decoder.decode(secretMessage))
}

main()