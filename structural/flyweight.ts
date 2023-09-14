class FileSharingAttachment {
    base64: string
}

class FileSharingDocument {
    name: string
    type: string
    attachment: FileSharingAttachment
}


class FileSharing {
    documents: FileSharingDocument[] = []
}

const attachment = new FileSharingAttachment()
attachment.base64 = "BASE_64_FILE"

const doc = new FileSharingDocument()
doc.name = "Doc1"
doc.type = "image/jpg"
doc.attachment = attachment

const doc2 = new FileSharingDocument()
doc2.name = "Doc1 - Copy"
doc2.type = "image/jpg"
doc2.attachment = attachment

const fileSharing = new FileSharing()
fileSharing.documents.push(doc)
fileSharing.documents.push(doc2)

console.log(JSON.stringify(fileSharing))