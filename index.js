import { Builder } from './flatbuffers_mjs/builder.js'
import { ByteBuffer } from './flatbuffers_mjs/byte-buffer.js'
import { Item } from './item/stuff.js'

export function serializeData(data) {
    const builder = new Builder(128)            
    const uuid = builder.createString(data.uuid)
    Item.startItem(builder)
    Item.addUuid(builder, uuid)
    const item = Item.endItem(builder)
    builder.finish(item)
    return builder.asUint8Array()
}

export function parseBuffer(buffer) {
    const data = Item.getRootAsItem(new ByteBuffer(buffer))
    const result = {
        uuid: data.uuid(),
    }
    return result
}
serializeData({ uuid: 'TEST' })
