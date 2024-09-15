import auth from './modules/auth.js'
import files from './modules/files.js'
import space from './modules/space.js'

export default {
    ...auth,
    ...files,
    ...space
}