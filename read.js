import * as IPFS from 'ipfs-core'
import toBuffer from 'it-to-buffer'

const utf8decoder = new TextDecoder()

async function read() {
  try {
    const node = await IPFS.create()
    let buffer = await toBuffer(node.files.read('/stuff/test.txt'))
    const content = utf8decoder.decode(buffer)
    console.log(content)
  } catch (err) {
    console.error(err)
  }
}

read()
