import loader from '@monaco-editor/loader'
import * as monaco from 'monaco-editor'

loader.config({ monaco})
import('./render').then(exports => {
    exports.render()
})
