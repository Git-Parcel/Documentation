import tsj from 'ts-json-schema-generator'
import * as fs from '@leawind/inventory/fs'

const CONFIG: tsj.Config = {
  path: 'scripts/schema/index.ts',
  discriminatorType: 'open-api',
  encodeRefs: false,
  expose: 'export',
  functions: 'comment',
  jsDoc: 'extended',
  skipTypeCheck: true,
  sortProps: true,
  topRef: true,
}

const JOBS: Record<string, tsj.Config> = {
  'dist/ParcelMeta.schema.json': {
    ...CONFIG,
    ...{
      type: 'ParcelMeta',
      schemaId: 'ParcelMeta',
    },
  },
  'dist/RepoMeta.schema.json': {
    ...CONFIG,
    ...{
      type: 'RepoMeta',
      schemaId: 'RepoMeta',
    },
  },
}

function main() {
  for (const [output, config] of Object.entries(JOBS)) {
    const generator = tsj.createGenerator(config)
    const schema = generator.createSchema(config.type)
    fs.makeParentDir(output)
    fs.Path.from(output).writeSync(JSON.stringify(schema, null, 2))
  }
}

main()
