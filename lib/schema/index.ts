type $schema = {
  $schema?: string
}

type ParcelFormat = {
  id: string
  version: number
}

type ModDependency = {
  id: string
  /** Minimum version (SemVer) */
  min?: string
  /** Maximum version (SemVer) */
  max?: string
}

export type ParcelMeta = $schema & {
  /** The format of parcel */
  format: ParcelFormat
  /** Minecraft data version */
  dataVersion: number
  /** Size of parcel in X,Y,Z */
  size: [number, number, number]
  name?: string
  description?: string
  /** Tags for searching */
  tags?: string[]
  /**
   * List of mods that are allowed to be used in the parcel
   */
  mods?: ModDependency[]
  /**
   * Whether to include blocks
   *
   * @default true
   */
  includeBlock?: boolean
  /**
   * Whether to include entities
   *
   * @default false
   */
  includeEntity?: boolean
}

type ParcelPath = string

export type RepoMeta = $schema & {
  /**
   * List of path to parcels, relative to this meta file
   *
   * ### Example
   *
   * Repo directory structure:
   *
   * ```
   * repo/
   * ├─ houses/
   * │  ├─ alice_house/
   * │  │  └─ *
   * │  └─ bob_house/
   * │     └─ *
   * └─ common/
   *    └─ bus_station/
   *       └─ *
   * ```
   *
   * You can write it like this:
   *
   * ```json
   * {
   *   "parcels": [
   *     "houses/alice_house",
   *     "houses/bob_house",
   *     "common/bus_station"
   *   ]
   * }
   * ```
   */
  parcels: string[]
}
