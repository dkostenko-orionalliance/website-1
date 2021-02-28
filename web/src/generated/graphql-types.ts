export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MediumCollection = Node & {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  creatorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  image?: Maybe<MediumCollectionImage>;
  metadata?: Maybe<MediumCollectionMetadata>;
  virtuals?: Maybe<MediumCollectionVirtuals>;
  logo?: Maybe<MediumCollectionLogo>;
  twitterUsername?: Maybe<Scalars['String']>;
  facebookPageName?: Maybe<Scalars['String']>;
  publicEmail?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<MediumCollectionSections>>>;
  tintColor?: Maybe<Scalars['String']>;
  lightText?: Maybe<Scalars['Boolean']>;
  favicon?: Maybe<MediumCollectionFavicon>;
  colorPalette?: Maybe<MediumCollectionColorPalette>;
  navItems?: Maybe<Array<Maybe<MediumCollectionNavItems>>>;
  colorBehavior?: Maybe<Scalars['Int']>;
  instantArticlesState?: Maybe<Scalars['Int']>;
  acceleratedMobilePagesState?: Maybe<Scalars['Int']>;
  ampLogo?: Maybe<MediumCollectionAmpLogo>;
  header?: Maybe<MediumCollectionHeader>;
  paidForDomainAt?: Maybe<Scalars['Date']>;
  subscriberCount?: Maybe<Scalars['Int']>;
  tagline?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  medium_id?: Maybe<Scalars['String']>;
  collectionMastheadId?: Maybe<Scalars['String']>;
  polarisCoverImage?: Maybe<MediumCollectionPolarisCoverImage>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumCollectionPaidForDomainAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumCollectionAmpLogo = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionAmpLogoFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionColorPalette = {
  defaultBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrum>;
  tintBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrum>;
  highlightSpectrum?: Maybe<MediumCollectionColorPaletteHighlightSpectrum>;
  darkBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrum>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteDarkBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteDefaultBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteFilterInput = {
  defaultBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDefaultBackgroundSpectrumFilterInput>;
  tintBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumFilterInput>;
  highlightSpectrum?: Maybe<MediumCollectionColorPaletteHighlightSpectrumFilterInput>;
  darkBackgroundSpectrum?: Maybe<MediumCollectionColorPaletteDarkBackgroundSpectrumFilterInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteHighlightSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteHighlightSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrum = {
  colorPoints?: Maybe<Array<Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPoints>>>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPoints = {
  color?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Float']>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  point?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterInput>;
};

export type MediumCollectionColorPaletteTintBackgroundSpectrumFilterInput = {
  colorPoints?: Maybe<MediumCollectionColorPaletteTintBackgroundSpectrumColorPointsFilterListInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumCollectionEdge>;
  nodes: Array<MediumCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumCollectionGroupConnection>;
};


export type MediumCollectionConnectionDistinctArgs = {
  field: MediumCollectionFieldsEnum;
};


export type MediumCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumCollectionFieldsEnum;
};

export type MediumCollectionEdge = {
  next?: Maybe<MediumCollection>;
  node: MediumCollection;
  previous?: Maybe<MediumCollection>;
};

export type MediumCollectionFavicon = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionFaviconFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionFieldsEnum =
  | 'name'
  | 'slug'
  | 'tags'
  | 'creatorId'
  | 'description'
  | 'shortDescription'
  | 'image___imageId'
  | 'image___filter'
  | 'image___backgroundSize'
  | 'image___originalWidth'
  | 'image___originalHeight'
  | 'image___strategy'
  | 'image___height'
  | 'image___width'
  | 'metadata___followerCount'
  | 'metadata___activeAt'
  | 'virtuals___permissions___canPublish'
  | 'virtuals___permissions___canPublishAll'
  | 'virtuals___permissions___canRepublish'
  | 'virtuals___permissions___canRemove'
  | 'virtuals___permissions___canManageAll'
  | 'virtuals___permissions___canSubmit'
  | 'virtuals___permissions___canEditPosts'
  | 'virtuals___permissions___canAddWriters'
  | 'virtuals___permissions___canViewStats'
  | 'virtuals___permissions___canSendNewsletter'
  | 'virtuals___permissions___canViewLockedPosts'
  | 'virtuals___permissions___canViewCloaked'
  | 'virtuals___permissions___canEditOwnPosts'
  | 'virtuals___permissions___canBeAssignedAuthor'
  | 'virtuals___permissions___canEnrollInHightower'
  | 'virtuals___permissions___canLockPostsForMediumMembers'
  | 'virtuals___permissions___canLockOwnPostsForMediumMembers'
  | 'virtuals___permissions___canViewNewsletterV2Stats'
  | 'virtuals___permissions___canCreateNewsletterV3'
  | 'virtuals___isSubscribed'
  | 'virtuals___isEnrolledInHightower'
  | 'virtuals___isEligibleForHightower'
  | 'virtuals___isSubscribedToCollectionEmails'
  | 'virtuals___isMuted'
  | 'virtuals___canToggleEmail'
  | 'logo___imageId'
  | 'logo___filter'
  | 'logo___backgroundSize'
  | 'logo___originalWidth'
  | 'logo___originalHeight'
  | 'logo___strategy'
  | 'logo___height'
  | 'logo___width'
  | 'twitterUsername'
  | 'facebookPageName'
  | 'publicEmail'
  | 'domain'
  | 'sections'
  | 'sections___type'
  | 'sections___collectionHeaderMetadata___title'
  | 'sections___collectionHeaderMetadata___description'
  | 'sections___collectionHeaderMetadata___backgroundImage___id'
  | 'sections___collectionHeaderMetadata___backgroundImage___originalWidth'
  | 'sections___collectionHeaderMetadata___backgroundImage___originalHeight'
  | 'sections___collectionHeaderMetadata___backgroundImage___focusPercentX'
  | 'sections___collectionHeaderMetadata___backgroundImage___focusPercentY'
  | 'sections___collectionHeaderMetadata___logoImage___id'
  | 'sections___collectionHeaderMetadata___logoImage___originalWidth'
  | 'sections___collectionHeaderMetadata___logoImage___originalHeight'
  | 'sections___collectionHeaderMetadata___logoImage___alt'
  | 'sections___collectionHeaderMetadata___alignment'
  | 'sections___collectionHeaderMetadata___layout'
  | 'sections___postListMetadata___source'
  | 'sections___postListMetadata___layout'
  | 'sections___postListMetadata___number'
  | 'tintColor'
  | 'lightText'
  | 'favicon___imageId'
  | 'favicon___filter'
  | 'favicon___backgroundSize'
  | 'favicon___originalWidth'
  | 'favicon___originalHeight'
  | 'favicon___strategy'
  | 'favicon___height'
  | 'favicon___width'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___defaultBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___defaultBackgroundSpectrum___backgroundColor'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___tintBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___tintBackgroundSpectrum___backgroundColor'
  | 'colorPalette___highlightSpectrum___colorPoints'
  | 'colorPalette___highlightSpectrum___colorPoints___color'
  | 'colorPalette___highlightSpectrum___colorPoints___point'
  | 'colorPalette___highlightSpectrum___backgroundColor'
  | 'colorPalette___darkBackgroundSpectrum___colorPoints'
  | 'colorPalette___darkBackgroundSpectrum___colorPoints___color'
  | 'colorPalette___darkBackgroundSpectrum___colorPoints___point'
  | 'colorPalette___darkBackgroundSpectrum___backgroundColor'
  | 'navItems'
  | 'navItems___type'
  | 'navItems___title'
  | 'navItems___url'
  | 'navItems___topicId'
  | 'navItems___source'
  | 'colorBehavior'
  | 'instantArticlesState'
  | 'acceleratedMobilePagesState'
  | 'ampLogo___imageId'
  | 'ampLogo___filter'
  | 'ampLogo___backgroundSize'
  | 'ampLogo___originalWidth'
  | 'ampLogo___originalHeight'
  | 'ampLogo___strategy'
  | 'ampLogo___height'
  | 'ampLogo___width'
  | 'header___title'
  | 'header___description'
  | 'header___backgroundImage___id'
  | 'header___backgroundImage___originalWidth'
  | 'header___backgroundImage___originalHeight'
  | 'header___backgroundImage___focusPercentX'
  | 'header___backgroundImage___focusPercentY'
  | 'header___logoImage___id'
  | 'header___logoImage___originalWidth'
  | 'header___logoImage___originalHeight'
  | 'header___logoImage___alt'
  | 'header___alignment'
  | 'header___layout'
  | 'paidForDomainAt'
  | 'subscriberCount'
  | 'tagline'
  | 'type'
  | 'medium_id'
  | 'collectionMastheadId'
  | 'polarisCoverImage___imageId'
  | 'polarisCoverImage___filter'
  | 'polarisCoverImage___backgroundSize'
  | 'polarisCoverImage___originalWidth'
  | 'polarisCoverImage___originalHeight'
  | 'polarisCoverImage___strategy'
  | 'polarisCoverImage___height'
  | 'polarisCoverImage___width'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumCollectionFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MediumCollectionImageFilterInput>;
  metadata?: Maybe<MediumCollectionMetadataFilterInput>;
  virtuals?: Maybe<MediumCollectionVirtualsFilterInput>;
  logo?: Maybe<MediumCollectionLogoFilterInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
  facebookPageName?: Maybe<StringQueryOperatorInput>;
  publicEmail?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<MediumCollectionSectionsFilterListInput>;
  tintColor?: Maybe<StringQueryOperatorInput>;
  lightText?: Maybe<BooleanQueryOperatorInput>;
  favicon?: Maybe<MediumCollectionFaviconFilterInput>;
  colorPalette?: Maybe<MediumCollectionColorPaletteFilterInput>;
  navItems?: Maybe<MediumCollectionNavItemsFilterListInput>;
  colorBehavior?: Maybe<IntQueryOperatorInput>;
  instantArticlesState?: Maybe<IntQueryOperatorInput>;
  acceleratedMobilePagesState?: Maybe<IntQueryOperatorInput>;
  ampLogo?: Maybe<MediumCollectionAmpLogoFilterInput>;
  header?: Maybe<MediumCollectionHeaderFilterInput>;
  paidForDomainAt?: Maybe<DateQueryOperatorInput>;
  subscriberCount?: Maybe<IntQueryOperatorInput>;
  tagline?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  collectionMastheadId?: Maybe<StringQueryOperatorInput>;
  polarisCoverImage?: Maybe<MediumCollectionPolarisCoverImageFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumCollectionEdge>;
  nodes: Array<MediumCollection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumCollectionHeader = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<MediumCollectionHeaderBackgroundImage>;
  logoImage?: Maybe<MediumCollectionHeaderLogoImage>;
  alignment?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
};

export type MediumCollectionHeaderBackgroundImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  focusPercentX?: Maybe<Scalars['Float']>;
  focusPercentY?: Maybe<Scalars['Float']>;
};

export type MediumCollectionHeaderBackgroundImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  focusPercentX?: Maybe<FloatQueryOperatorInput>;
  focusPercentY?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionHeaderFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  backgroundImage?: Maybe<MediumCollectionHeaderBackgroundImageFilterInput>;
  logoImage?: Maybe<MediumCollectionHeaderLogoImageFilterInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionHeaderLogoImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumCollectionHeaderLogoImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionLogo = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionLogoFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionMetadata = {
  followerCount?: Maybe<Scalars['Int']>;
  activeAt?: Maybe<Scalars['Date']>;
};


export type MediumCollectionMetadataActiveAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumCollectionMetadataFilterInput = {
  followerCount?: Maybe<IntQueryOperatorInput>;
  activeAt?: Maybe<DateQueryOperatorInput>;
};

export type MediumCollectionNavItems = {
  type?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type MediumCollectionNavItemsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  topicId?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionNavItemsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionNavItemsFilterInput>;
};

export type MediumCollectionPolarisCoverImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumCollectionPolarisCoverImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSections = {
  type?: Maybe<Scalars['Int']>;
  collectionHeaderMetadata?: Maybe<MediumCollectionSectionsCollectionHeaderMetadata>;
  postListMetadata?: Maybe<MediumCollectionSectionsPostListMetadata>;
};

export type MediumCollectionSectionsCollectionHeaderMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataBackgroundImage>;
  logoImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataLogoImage>;
  alignment?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataBackgroundImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  focusPercentX?: Maybe<Scalars['Float']>;
  focusPercentY?: Maybe<Scalars['Float']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataBackgroundImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  focusPercentX?: Maybe<FloatQueryOperatorInput>;
  focusPercentY?: Maybe<FloatQueryOperatorInput>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  backgroundImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataBackgroundImageFilterInput>;
  logoImage?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataLogoImageFilterInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataLogoImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumCollectionSectionsCollectionHeaderMetadataLogoImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumCollectionSectionsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  collectionHeaderMetadata?: Maybe<MediumCollectionSectionsCollectionHeaderMetadataFilterInput>;
  postListMetadata?: Maybe<MediumCollectionSectionsPostListMetadataFilterInput>;
};

export type MediumCollectionSectionsFilterListInput = {
  elemMatch?: Maybe<MediumCollectionSectionsFilterInput>;
};

export type MediumCollectionSectionsPostListMetadata = {
  source?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
};

export type MediumCollectionSectionsPostListMetadataFilterInput = {
  source?: Maybe<IntQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  number?: Maybe<IntQueryOperatorInput>;
};

export type MediumCollectionSortInput = {
  fields?: Maybe<Array<Maybe<MediumCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MediumCollectionVirtuals = {
  permissions?: Maybe<MediumCollectionVirtualsPermissions>;
  isSubscribed?: Maybe<Scalars['Boolean']>;
  isEnrolledInHightower?: Maybe<Scalars['Boolean']>;
  isEligibleForHightower?: Maybe<Scalars['Boolean']>;
  isSubscribedToCollectionEmails?: Maybe<Scalars['Boolean']>;
  isMuted?: Maybe<Scalars['Boolean']>;
  canToggleEmail?: Maybe<Scalars['Boolean']>;
};

export type MediumCollectionVirtualsFilterInput = {
  permissions?: Maybe<MediumCollectionVirtualsPermissionsFilterInput>;
  isSubscribed?: Maybe<BooleanQueryOperatorInput>;
  isEnrolledInHightower?: Maybe<BooleanQueryOperatorInput>;
  isEligibleForHightower?: Maybe<BooleanQueryOperatorInput>;
  isSubscribedToCollectionEmails?: Maybe<BooleanQueryOperatorInput>;
  isMuted?: Maybe<BooleanQueryOperatorInput>;
  canToggleEmail?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumCollectionVirtualsPermissions = {
  canPublish?: Maybe<Scalars['Boolean']>;
  canPublishAll?: Maybe<Scalars['Boolean']>;
  canRepublish?: Maybe<Scalars['Boolean']>;
  canRemove?: Maybe<Scalars['Boolean']>;
  canManageAll?: Maybe<Scalars['Boolean']>;
  canSubmit?: Maybe<Scalars['Boolean']>;
  canEditPosts?: Maybe<Scalars['Boolean']>;
  canAddWriters?: Maybe<Scalars['Boolean']>;
  canViewStats?: Maybe<Scalars['Boolean']>;
  canSendNewsletter?: Maybe<Scalars['Boolean']>;
  canViewLockedPosts?: Maybe<Scalars['Boolean']>;
  canViewCloaked?: Maybe<Scalars['Boolean']>;
  canEditOwnPosts?: Maybe<Scalars['Boolean']>;
  canBeAssignedAuthor?: Maybe<Scalars['Boolean']>;
  canEnrollInHightower?: Maybe<Scalars['Boolean']>;
  canLockPostsForMediumMembers?: Maybe<Scalars['Boolean']>;
  canLockOwnPostsForMediumMembers?: Maybe<Scalars['Boolean']>;
  canViewNewsletterV2Stats?: Maybe<Scalars['Boolean']>;
  canCreateNewsletterV3?: Maybe<Scalars['Boolean']>;
};

export type MediumCollectionVirtualsPermissionsFilterInput = {
  canPublish?: Maybe<BooleanQueryOperatorInput>;
  canPublishAll?: Maybe<BooleanQueryOperatorInput>;
  canRepublish?: Maybe<BooleanQueryOperatorInput>;
  canRemove?: Maybe<BooleanQueryOperatorInput>;
  canManageAll?: Maybe<BooleanQueryOperatorInput>;
  canSubmit?: Maybe<BooleanQueryOperatorInput>;
  canEditPosts?: Maybe<BooleanQueryOperatorInput>;
  canAddWriters?: Maybe<BooleanQueryOperatorInput>;
  canViewStats?: Maybe<BooleanQueryOperatorInput>;
  canSendNewsletter?: Maybe<BooleanQueryOperatorInput>;
  canViewLockedPosts?: Maybe<BooleanQueryOperatorInput>;
  canViewCloaked?: Maybe<BooleanQueryOperatorInput>;
  canEditOwnPosts?: Maybe<BooleanQueryOperatorInput>;
  canBeAssignedAuthor?: Maybe<BooleanQueryOperatorInput>;
  canEnrollInHightower?: Maybe<BooleanQueryOperatorInput>;
  canLockPostsForMediumMembers?: Maybe<BooleanQueryOperatorInput>;
  canLockOwnPostsForMediumMembers?: Maybe<BooleanQueryOperatorInput>;
  canViewNewsletterV2Stats?: Maybe<BooleanQueryOperatorInput>;
  canCreateNewsletterV3?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPost = Node & {
  versionId?: Maybe<Scalars['String']>;
  creatorId?: Maybe<Scalars['String']>;
  homeCollectionId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  detectedLanguage?: Maybe<Scalars['String']>;
  latestVersion?: Maybe<Scalars['String']>;
  latestPublishedVersion?: Maybe<Scalars['String']>;
  hasUnpublishedEdits?: Maybe<Scalars['Boolean']>;
  latestRev?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  acceptedAt?: Maybe<Scalars['Int']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  latestPublishedAt?: Maybe<Scalars['Date']>;
  vote?: Maybe<Scalars['Boolean']>;
  experimentalCss?: Maybe<Scalars['String']>;
  displayAuthor?: Maybe<Scalars['String']>;
  content?: Maybe<MediumPostContent>;
  virtuals?: Maybe<MediumPostVirtuals>;
  coverless?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  translationSourcePostId?: Maybe<Scalars['String']>;
  translationSourceCreatorId?: Maybe<Scalars['String']>;
  isApprovedTranslation?: Maybe<Scalars['Boolean']>;
  inResponseToPostId?: Maybe<Scalars['String']>;
  inResponseToRemovedAt?: Maybe<Scalars['Int']>;
  isTitleSynthesized?: Maybe<Scalars['Boolean']>;
  allowResponses?: Maybe<Scalars['Boolean']>;
  importedUrl?: Maybe<Scalars['String']>;
  importedPublishedAt?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
  uniqueSlug?: Maybe<Scalars['String']>;
  previewContent?: Maybe<MediumPostPreviewContent>;
  license?: Maybe<Scalars['Int']>;
  inResponseToMediaResourceId?: Maybe<Scalars['String']>;
  canonicalUrl?: Maybe<Scalars['String']>;
  approvedHomeCollectionId?: Maybe<Scalars['String']>;
  newsletterId?: Maybe<Scalars['String']>;
  webCanonicalUrl?: Maybe<Scalars['String']>;
  mediumUrl?: Maybe<Scalars['String']>;
  migrationId?: Maybe<Scalars['String']>;
  notifyFollowers?: Maybe<Scalars['Boolean']>;
  notifyTwitter?: Maybe<Scalars['Boolean']>;
  notifyFacebook?: Maybe<Scalars['Boolean']>;
  responseHiddenOnParentPostAt?: Maybe<Scalars['Int']>;
  isSeries?: Maybe<Scalars['Boolean']>;
  isSubscriptionLocked?: Maybe<Scalars['Boolean']>;
  seriesLastAppendedAt?: Maybe<Scalars['Date']>;
  audioVersionDurationSec?: Maybe<Scalars['Int']>;
  sequenceId?: Maybe<Scalars['String']>;
  isEligibleForRevenue?: Maybe<Scalars['Boolean']>;
  isBlockedFromHightower?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['Int']>;
  lockedPostSource?: Maybe<Scalars['Int']>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<Scalars['Int']>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<Scalars['Int']>;
  featureLockRequestAcceptedAt?: Maybe<Scalars['Int']>;
  mongerRequestType?: Maybe<Scalars['Int']>;
  layerCake?: Maybe<Scalars['Int']>;
  socialTitle?: Maybe<Scalars['String']>;
  socialDek?: Maybe<Scalars['String']>;
  editorialPreviewTitle?: Maybe<Scalars['String']>;
  editorialPreviewDek?: Maybe<Scalars['String']>;
  isProxyPost?: Maybe<Scalars['Boolean']>;
  proxyPostFaviconUrl?: Maybe<Scalars['String']>;
  proxyPostProviderName?: Maybe<Scalars['String']>;
  proxyPostType?: Maybe<Scalars['Int']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  isLimitedState?: Maybe<Scalars['Boolean']>;
  seoTitle?: Maybe<Scalars['String']>;
  previewContent2?: Maybe<MediumPostPreviewContent2>;
  cardType?: Maybe<Scalars['Int']>;
  isDistributionAlertDismissed?: Maybe<Scalars['Boolean']>;
  isShortform?: Maybe<Scalars['Boolean']>;
  shortformType?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  medium_id?: Maybe<Scalars['String']>;
  author?: Maybe<MediumUser>;
  primaryTopicId?: Maybe<Scalars['String']>;
  isNewsletter?: Maybe<Scalars['Boolean']>;
  responsesLocked?: Maybe<Scalars['Boolean']>;
  isLockedResponse?: Maybe<Scalars['Boolean']>;
  isPublishToEmail?: Maybe<Scalars['Boolean']>;
  responseDistribution?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostFirstPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostLatestPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type MediumPostSeriesLastAppendedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumPostEdge>;
  nodes: Array<MediumPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumPostGroupConnection>;
};


export type MediumPostConnectionDistinctArgs = {
  field: MediumPostFieldsEnum;
};


export type MediumPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumPostFieldsEnum;
};

export type MediumPostContent = {
  subtitle?: Maybe<Scalars['String']>;
  postDisplay?: Maybe<MediumPostContentPostDisplay>;
  metaDescription?: Maybe<Scalars['String']>;
};

export type MediumPostContentFilterInput = {
  subtitle?: Maybe<StringQueryOperatorInput>;
  postDisplay?: Maybe<MediumPostContentPostDisplayFilterInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostContentPostDisplay = {
  coverless?: Maybe<Scalars['Boolean']>;
};

export type MediumPostContentPostDisplayFilterInput = {
  coverless?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostEdge = {
  next?: Maybe<MediumPost>;
  node: MediumPost;
  previous?: Maybe<MediumPost>;
};

export type MediumPostFieldsEnum =
  | 'versionId'
  | 'creatorId'
  | 'homeCollectionId'
  | 'title'
  | 'detectedLanguage'
  | 'latestVersion'
  | 'latestPublishedVersion'
  | 'hasUnpublishedEdits'
  | 'latestRev'
  | 'createdAt'
  | 'updatedAt'
  | 'acceptedAt'
  | 'firstPublishedAt'
  | 'latestPublishedAt'
  | 'vote'
  | 'experimentalCss'
  | 'displayAuthor'
  | 'content___subtitle'
  | 'content___postDisplay___coverless'
  | 'content___metaDescription'
  | 'virtuals___statusForCollection'
  | 'virtuals___allowNotes'
  | 'virtuals___previewImage___imageId'
  | 'virtuals___previewImage___filter'
  | 'virtuals___previewImage___backgroundSize'
  | 'virtuals___previewImage___originalWidth'
  | 'virtuals___previewImage___originalHeight'
  | 'virtuals___previewImage___strategy'
  | 'virtuals___previewImage___height'
  | 'virtuals___previewImage___width'
  | 'virtuals___wordCount'
  | 'virtuals___imageCount'
  | 'virtuals___readingTime'
  | 'virtuals___subtitle'
  | 'virtuals___publishedInCount'
  | 'virtuals___noIndex'
  | 'virtuals___recommends'
  | 'virtuals___isBookmarked'
  | 'virtuals___tags'
  | 'virtuals___tags___slug'
  | 'virtuals___tags___name'
  | 'virtuals___tags___postCount'
  | 'virtuals___tags___metadata___postCount'
  | 'virtuals___tags___type'
  | 'virtuals___socialRecommendsCount'
  | 'virtuals___responsesCreatedCount'
  | 'virtuals___links___entries'
  | 'virtuals___links___entries___url'
  | 'virtuals___links___entries___alts'
  | 'virtuals___links___entries___httpStatus'
  | 'virtuals___links___version'
  | 'virtuals___links___generatedAt'
  | 'virtuals___isLockedPreviewOnly'
  | 'virtuals___metaDescription'
  | 'virtuals___totalClapCount'
  | 'virtuals___sectionCount'
  | 'virtuals___readingList'
  | 'virtuals___topics'
  | 'virtuals___topics___topicId'
  | 'virtuals___topics___slug'
  | 'virtuals___topics___createdAt'
  | 'virtuals___topics___deletedAt'
  | 'virtuals___topics___image___id'
  | 'virtuals___topics___image___originalWidth'
  | 'virtuals___topics___image___originalHeight'
  | 'virtuals___topics___name'
  | 'virtuals___topics___description'
  | 'virtuals___topics___visibility'
  | 'virtuals___topics___type'
  | 'coverless'
  | 'slug'
  | 'translationSourcePostId'
  | 'translationSourceCreatorId'
  | 'isApprovedTranslation'
  | 'inResponseToPostId'
  | 'inResponseToRemovedAt'
  | 'isTitleSynthesized'
  | 'allowResponses'
  | 'importedUrl'
  | 'importedPublishedAt'
  | 'visibility'
  | 'uniqueSlug'
  | 'previewContent___bodyModel___paragraphs'
  | 'previewContent___bodyModel___paragraphs___name'
  | 'previewContent___bodyModel___paragraphs___type'
  | 'previewContent___bodyModel___paragraphs___text'
  | 'previewContent___bodyModel___paragraphs___layout'
  | 'previewContent___bodyModel___paragraphs___markups'
  | 'previewContent___bodyModel___paragraphs___alignment'
  | 'previewContent___bodyModel___paragraphs___hasDropCap'
  | 'previewContent___bodyModel___sections'
  | 'previewContent___bodyModel___sections___startIndex'
  | 'previewContent___isFullContent'
  | 'previewContent___subtitle'
  | 'license'
  | 'inResponseToMediaResourceId'
  | 'canonicalUrl'
  | 'approvedHomeCollectionId'
  | 'newsletterId'
  | 'webCanonicalUrl'
  | 'mediumUrl'
  | 'migrationId'
  | 'notifyFollowers'
  | 'notifyTwitter'
  | 'notifyFacebook'
  | 'responseHiddenOnParentPostAt'
  | 'isSeries'
  | 'isSubscriptionLocked'
  | 'seriesLastAppendedAt'
  | 'audioVersionDurationSec'
  | 'sequenceId'
  | 'isEligibleForRevenue'
  | 'isBlockedFromHightower'
  | 'deletedAt'
  | 'lockedPostSource'
  | 'hightowerMinimumGuaranteeStartsAt'
  | 'hightowerMinimumGuaranteeEndsAt'
  | 'featureLockRequestAcceptedAt'
  | 'mongerRequestType'
  | 'layerCake'
  | 'socialTitle'
  | 'socialDek'
  | 'editorialPreviewTitle'
  | 'editorialPreviewDek'
  | 'isProxyPost'
  | 'proxyPostFaviconUrl'
  | 'proxyPostProviderName'
  | 'proxyPostType'
  | 'isSuspended'
  | 'isLimitedState'
  | 'seoTitle'
  | 'previewContent2___bodyModel___paragraphs'
  | 'previewContent2___bodyModel___paragraphs___name'
  | 'previewContent2___bodyModel___paragraphs___type'
  | 'previewContent2___bodyModel___paragraphs___text'
  | 'previewContent2___bodyModel___paragraphs___markups'
  | 'previewContent2___bodyModel___paragraphs___layout'
  | 'previewContent2___bodyModel___paragraphs___hasDropCap'
  | 'previewContent2___bodyModel___sections'
  | 'previewContent2___bodyModel___sections___startIndex'
  | 'previewContent2___bodyModel___sections___name'
  | 'previewContent2___isFullContent'
  | 'previewContent2___subtitle'
  | 'cardType'
  | 'isDistributionAlertDismissed'
  | 'isShortform'
  | 'shortformType'
  | 'type'
  | 'medium_id'
  | 'author___userId'
  | 'author___name'
  | 'author___username'
  | 'author___mediumMemberAt'
  | 'author___createdAt'
  | 'author___imageId'
  | 'author___backgroundImageId'
  | 'author___bio'
  | 'author___twitterScreenName'
  | 'author___allowNotes'
  | 'author___isWriterProgramEnrolled'
  | 'author___isSuspended'
  | 'author___isMembershipTrialEligible'
  | 'author___type'
  | 'author___posts'
  | 'author___posts___versionId'
  | 'author___posts___creatorId'
  | 'author___posts___homeCollectionId'
  | 'author___posts___title'
  | 'author___posts___detectedLanguage'
  | 'author___posts___latestVersion'
  | 'author___posts___latestPublishedVersion'
  | 'author___posts___hasUnpublishedEdits'
  | 'author___posts___latestRev'
  | 'author___posts___createdAt'
  | 'author___posts___updatedAt'
  | 'author___posts___acceptedAt'
  | 'author___posts___firstPublishedAt'
  | 'author___posts___latestPublishedAt'
  | 'author___posts___vote'
  | 'author___posts___experimentalCss'
  | 'author___posts___displayAuthor'
  | 'author___posts___content___subtitle'
  | 'author___posts___content___metaDescription'
  | 'author___posts___virtuals___statusForCollection'
  | 'author___posts___virtuals___allowNotes'
  | 'author___posts___virtuals___wordCount'
  | 'author___posts___virtuals___imageCount'
  | 'author___posts___virtuals___readingTime'
  | 'author___posts___virtuals___subtitle'
  | 'author___posts___virtuals___publishedInCount'
  | 'author___posts___virtuals___noIndex'
  | 'author___posts___virtuals___recommends'
  | 'author___posts___virtuals___isBookmarked'
  | 'author___posts___virtuals___tags'
  | 'author___posts___virtuals___socialRecommendsCount'
  | 'author___posts___virtuals___responsesCreatedCount'
  | 'author___posts___virtuals___isLockedPreviewOnly'
  | 'author___posts___virtuals___metaDescription'
  | 'author___posts___virtuals___totalClapCount'
  | 'author___posts___virtuals___sectionCount'
  | 'author___posts___virtuals___readingList'
  | 'author___posts___virtuals___topics'
  | 'author___posts___coverless'
  | 'author___posts___slug'
  | 'author___posts___translationSourcePostId'
  | 'author___posts___translationSourceCreatorId'
  | 'author___posts___isApprovedTranslation'
  | 'author___posts___inResponseToPostId'
  | 'author___posts___inResponseToRemovedAt'
  | 'author___posts___isTitleSynthesized'
  | 'author___posts___allowResponses'
  | 'author___posts___importedUrl'
  | 'author___posts___importedPublishedAt'
  | 'author___posts___visibility'
  | 'author___posts___uniqueSlug'
  | 'author___posts___previewContent___isFullContent'
  | 'author___posts___previewContent___subtitle'
  | 'author___posts___license'
  | 'author___posts___inResponseToMediaResourceId'
  | 'author___posts___canonicalUrl'
  | 'author___posts___approvedHomeCollectionId'
  | 'author___posts___newsletterId'
  | 'author___posts___webCanonicalUrl'
  | 'author___posts___mediumUrl'
  | 'author___posts___migrationId'
  | 'author___posts___notifyFollowers'
  | 'author___posts___notifyTwitter'
  | 'author___posts___notifyFacebook'
  | 'author___posts___responseHiddenOnParentPostAt'
  | 'author___posts___isSeries'
  | 'author___posts___isSubscriptionLocked'
  | 'author___posts___seriesLastAppendedAt'
  | 'author___posts___audioVersionDurationSec'
  | 'author___posts___sequenceId'
  | 'author___posts___isEligibleForRevenue'
  | 'author___posts___isBlockedFromHightower'
  | 'author___posts___deletedAt'
  | 'author___posts___lockedPostSource'
  | 'author___posts___hightowerMinimumGuaranteeStartsAt'
  | 'author___posts___hightowerMinimumGuaranteeEndsAt'
  | 'author___posts___featureLockRequestAcceptedAt'
  | 'author___posts___mongerRequestType'
  | 'author___posts___layerCake'
  | 'author___posts___socialTitle'
  | 'author___posts___socialDek'
  | 'author___posts___editorialPreviewTitle'
  | 'author___posts___editorialPreviewDek'
  | 'author___posts___isProxyPost'
  | 'author___posts___proxyPostFaviconUrl'
  | 'author___posts___proxyPostProviderName'
  | 'author___posts___proxyPostType'
  | 'author___posts___isSuspended'
  | 'author___posts___isLimitedState'
  | 'author___posts___seoTitle'
  | 'author___posts___previewContent2___isFullContent'
  | 'author___posts___previewContent2___subtitle'
  | 'author___posts___cardType'
  | 'author___posts___isDistributionAlertDismissed'
  | 'author___posts___isShortform'
  | 'author___posts___shortformType'
  | 'author___posts___type'
  | 'author___posts___medium_id'
  | 'author___posts___author___userId'
  | 'author___posts___author___name'
  | 'author___posts___author___username'
  | 'author___posts___author___mediumMemberAt'
  | 'author___posts___author___createdAt'
  | 'author___posts___author___imageId'
  | 'author___posts___author___backgroundImageId'
  | 'author___posts___author___bio'
  | 'author___posts___author___twitterScreenName'
  | 'author___posts___author___allowNotes'
  | 'author___posts___author___isWriterProgramEnrolled'
  | 'author___posts___author___isSuspended'
  | 'author___posts___author___isMembershipTrialEligible'
  | 'author___posts___author___type'
  | 'author___posts___author___posts'
  | 'author___posts___author___optInToIceland'
  | 'author___posts___author___hasCompletedProfile'
  | 'author___posts___author___hasSeenIcelandOnboarding'
  | 'author___posts___author___id'
  | 'author___posts___author___children'
  | 'author___posts___primaryTopicId'
  | 'author___posts___isNewsletter'
  | 'author___posts___responsesLocked'
  | 'author___posts___isLockedResponse'
  | 'author___posts___isPublishToEmail'
  | 'author___posts___responseDistribution'
  | 'author___posts___id'
  | 'author___posts___parent___id'
  | 'author___posts___parent___children'
  | 'author___posts___children'
  | 'author___posts___children___id'
  | 'author___posts___children___children'
  | 'author___posts___internal___content'
  | 'author___posts___internal___contentDigest'
  | 'author___posts___internal___description'
  | 'author___posts___internal___fieldOwners'
  | 'author___posts___internal___ignoreType'
  | 'author___posts___internal___mediaType'
  | 'author___posts___internal___owner'
  | 'author___posts___internal___type'
  | 'author___optInToIceland'
  | 'author___hasCompletedProfile'
  | 'author___hasSeenIcelandOnboarding'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'primaryTopicId'
  | 'isNewsletter'
  | 'responsesLocked'
  | 'isLockedResponse'
  | 'isPublishToEmail'
  | 'responseDistribution'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumPostFilterInput = {
  versionId?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  homeCollectionId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  detectedLanguage?: Maybe<StringQueryOperatorInput>;
  latestVersion?: Maybe<StringQueryOperatorInput>;
  latestPublishedVersion?: Maybe<StringQueryOperatorInput>;
  hasUnpublishedEdits?: Maybe<BooleanQueryOperatorInput>;
  latestRev?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  acceptedAt?: Maybe<IntQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  latestPublishedAt?: Maybe<DateQueryOperatorInput>;
  vote?: Maybe<BooleanQueryOperatorInput>;
  experimentalCss?: Maybe<StringQueryOperatorInput>;
  displayAuthor?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<MediumPostContentFilterInput>;
  virtuals?: Maybe<MediumPostVirtualsFilterInput>;
  coverless?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  translationSourcePostId?: Maybe<StringQueryOperatorInput>;
  translationSourceCreatorId?: Maybe<StringQueryOperatorInput>;
  isApprovedTranslation?: Maybe<BooleanQueryOperatorInput>;
  inResponseToPostId?: Maybe<StringQueryOperatorInput>;
  inResponseToRemovedAt?: Maybe<IntQueryOperatorInput>;
  isTitleSynthesized?: Maybe<BooleanQueryOperatorInput>;
  allowResponses?: Maybe<BooleanQueryOperatorInput>;
  importedUrl?: Maybe<StringQueryOperatorInput>;
  importedPublishedAt?: Maybe<IntQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  uniqueSlug?: Maybe<StringQueryOperatorInput>;
  previewContent?: Maybe<MediumPostPreviewContentFilterInput>;
  license?: Maybe<IntQueryOperatorInput>;
  inResponseToMediaResourceId?: Maybe<StringQueryOperatorInput>;
  canonicalUrl?: Maybe<StringQueryOperatorInput>;
  approvedHomeCollectionId?: Maybe<StringQueryOperatorInput>;
  newsletterId?: Maybe<StringQueryOperatorInput>;
  webCanonicalUrl?: Maybe<StringQueryOperatorInput>;
  mediumUrl?: Maybe<StringQueryOperatorInput>;
  migrationId?: Maybe<StringQueryOperatorInput>;
  notifyFollowers?: Maybe<BooleanQueryOperatorInput>;
  notifyTwitter?: Maybe<BooleanQueryOperatorInput>;
  notifyFacebook?: Maybe<BooleanQueryOperatorInput>;
  responseHiddenOnParentPostAt?: Maybe<IntQueryOperatorInput>;
  isSeries?: Maybe<BooleanQueryOperatorInput>;
  isSubscriptionLocked?: Maybe<BooleanQueryOperatorInput>;
  seriesLastAppendedAt?: Maybe<DateQueryOperatorInput>;
  audioVersionDurationSec?: Maybe<IntQueryOperatorInput>;
  sequenceId?: Maybe<StringQueryOperatorInput>;
  isEligibleForRevenue?: Maybe<BooleanQueryOperatorInput>;
  isBlockedFromHightower?: Maybe<BooleanQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  lockedPostSource?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<IntQueryOperatorInput>;
  featureLockRequestAcceptedAt?: Maybe<IntQueryOperatorInput>;
  mongerRequestType?: Maybe<IntQueryOperatorInput>;
  layerCake?: Maybe<IntQueryOperatorInput>;
  socialTitle?: Maybe<StringQueryOperatorInput>;
  socialDek?: Maybe<StringQueryOperatorInput>;
  editorialPreviewTitle?: Maybe<StringQueryOperatorInput>;
  editorialPreviewDek?: Maybe<StringQueryOperatorInput>;
  isProxyPost?: Maybe<BooleanQueryOperatorInput>;
  proxyPostFaviconUrl?: Maybe<StringQueryOperatorInput>;
  proxyPostProviderName?: Maybe<StringQueryOperatorInput>;
  proxyPostType?: Maybe<IntQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isLimitedState?: Maybe<BooleanQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  previewContent2?: Maybe<MediumPostPreviewContent2FilterInput>;
  cardType?: Maybe<IntQueryOperatorInput>;
  isDistributionAlertDismissed?: Maybe<BooleanQueryOperatorInput>;
  isShortform?: Maybe<BooleanQueryOperatorInput>;
  shortformType?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<MediumUserFilterInput>;
  primaryTopicId?: Maybe<StringQueryOperatorInput>;
  isNewsletter?: Maybe<BooleanQueryOperatorInput>;
  responsesLocked?: Maybe<BooleanQueryOperatorInput>;
  isLockedResponse?: Maybe<BooleanQueryOperatorInput>;
  isPublishToEmail?: Maybe<BooleanQueryOperatorInput>;
  responseDistribution?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumPostFilterListInput = {
  elemMatch?: Maybe<MediumPostFilterInput>;
};

export type MediumPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumPostEdge>;
  nodes: Array<MediumPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent = {
  bodyModel?: Maybe<MediumPostPreviewContentBodyModel>;
  isFullContent?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2 = {
  bodyModel?: Maybe<MediumPostPreviewContent2BodyModel>;
  isFullContent?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModel = {
  paragraphs?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelParagraphs>>>;
  sections?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelSections>>>;
};

export type MediumPostPreviewContent2BodyModelFilterInput = {
  paragraphs?: Maybe<MediumPostPreviewContent2BodyModelParagraphsFilterListInput>;
  sections?: Maybe<MediumPostPreviewContent2BodyModelSectionsFilterListInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  markups?: Maybe<Array<Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkups>>>;
  layout?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMetadata>;
  hasDropCap?: Maybe<Scalars['Boolean']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<IntQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  markups?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterListInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMetadataFilterInput>;
  hasDropCap?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelParagraphsFilterInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkups = {
  type?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  anchorType?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  start?: Maybe<IntQueryOperatorInput>;
  end?: Maybe<IntQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  anchorType?: Maybe<IntQueryOperatorInput>;
  userId?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelParagraphsMarkupsFilterInput>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMetadata = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelParagraphsMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelSections = {
  startIndex?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContent2BodyModelSectionsFilterInput = {
  startIndex?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContent2BodyModelSectionsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContent2BodyModelSectionsFilterInput>;
};

export type MediumPostPreviewContent2FilterInput = {
  bodyModel?: Maybe<MediumPostPreviewContent2BodyModelFilterInput>;
  isFullContent?: Maybe<BooleanQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModel = {
  paragraphs?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelParagraphs>>>;
  sections?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelSections>>>;
};

export type MediumPostPreviewContentBodyModelFilterInput = {
  paragraphs?: Maybe<MediumPostPreviewContentBodyModelParagraphsFilterListInput>;
  sections?: Maybe<MediumPostPreviewContentBodyModelSectionsFilterListInput>;
};

export type MediumPostPreviewContentBodyModelParagraphs = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostPreviewContentBodyModelParagraphsMetadata>;
  markups?: Maybe<Array<Maybe<MediumPostPreviewContentBodyModelParagraphsMarkups>>>;
  alignment?: Maybe<Scalars['Int']>;
  hasDropCap?: Maybe<Scalars['Boolean']>;
};

export type MediumPostPreviewContentBodyModelParagraphsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<IntQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostPreviewContentBodyModelParagraphsMetadataFilterInput>;
  markups?: Maybe<MediumPostPreviewContentBodyModelParagraphsMarkupsFilterListInput>;
  alignment?: Maybe<IntQueryOperatorInput>;
  hasDropCap?: Maybe<BooleanQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelParagraphsFilterInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkups = {
  type?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkupsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  start?: Maybe<IntQueryOperatorInput>;
  end?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMarkupsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelParagraphsMarkupsFilterInput>;
};

export type MediumPostPreviewContentBodyModelParagraphsMetadata = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type MediumPostPreviewContentBodyModelParagraphsMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelSections = {
  startIndex?: Maybe<Scalars['Int']>;
};

export type MediumPostPreviewContentBodyModelSectionsFilterInput = {
  startIndex?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostPreviewContentBodyModelSectionsFilterListInput = {
  elemMatch?: Maybe<MediumPostPreviewContentBodyModelSectionsFilterInput>;
};

export type MediumPostPreviewContentFilterInput = {
  bodyModel?: Maybe<MediumPostPreviewContentBodyModelFilterInput>;
  isFullContent?: Maybe<BooleanQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostSortInput = {
  fields?: Maybe<Array<Maybe<MediumPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MediumPostVirtuals = {
  statusForCollection?: Maybe<Scalars['String']>;
  allowNotes?: Maybe<Scalars['Boolean']>;
  previewImage?: Maybe<MediumPostVirtualsPreviewImage>;
  wordCount?: Maybe<Scalars['Int']>;
  imageCount?: Maybe<Scalars['Int']>;
  readingTime?: Maybe<Scalars['Float']>;
  subtitle?: Maybe<Scalars['String']>;
  publishedInCount?: Maybe<Scalars['Int']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  recommends?: Maybe<Scalars['Int']>;
  isBookmarked?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<MediumPostVirtualsTags>>>;
  socialRecommendsCount?: Maybe<Scalars['Int']>;
  responsesCreatedCount?: Maybe<Scalars['Int']>;
  links?: Maybe<MediumPostVirtualsLinks>;
  isLockedPreviewOnly?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  totalClapCount?: Maybe<Scalars['Int']>;
  sectionCount?: Maybe<Scalars['Int']>;
  readingList?: Maybe<Scalars['Int']>;
  topics?: Maybe<Array<Maybe<MediumPostVirtualsTopics>>>;
};

export type MediumPostVirtualsFilterInput = {
  statusForCollection?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<BooleanQueryOperatorInput>;
  previewImage?: Maybe<MediumPostVirtualsPreviewImageFilterInput>;
  wordCount?: Maybe<IntQueryOperatorInput>;
  imageCount?: Maybe<IntQueryOperatorInput>;
  readingTime?: Maybe<FloatQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  publishedInCount?: Maybe<IntQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  recommends?: Maybe<IntQueryOperatorInput>;
  isBookmarked?: Maybe<BooleanQueryOperatorInput>;
  tags?: Maybe<MediumPostVirtualsTagsFilterListInput>;
  socialRecommendsCount?: Maybe<IntQueryOperatorInput>;
  responsesCreatedCount?: Maybe<IntQueryOperatorInput>;
  links?: Maybe<MediumPostVirtualsLinksFilterInput>;
  isLockedPreviewOnly?: Maybe<BooleanQueryOperatorInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
  totalClapCount?: Maybe<IntQueryOperatorInput>;
  sectionCount?: Maybe<IntQueryOperatorInput>;
  readingList?: Maybe<IntQueryOperatorInput>;
  topics?: Maybe<MediumPostVirtualsTopicsFilterListInput>;
};

export type MediumPostVirtualsLinks = {
  entries?: Maybe<Array<Maybe<MediumPostVirtualsLinksEntries>>>;
  version?: Maybe<Scalars['String']>;
  generatedAt?: Maybe<Scalars['Date']>;
};


export type MediumPostVirtualsLinksGeneratedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsLinksEntries = {
  url?: Maybe<Scalars['String']>;
  alts?: Maybe<Array<Maybe<MediumPostVirtualsLinksEntriesAlts>>>;
  httpStatus?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsLinksEntriesAlts = {
  type?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsLinksEntriesAltsFilterInput = {
  type?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsLinksEntriesAltsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsLinksEntriesAltsFilterInput>;
};

export type MediumPostVirtualsLinksEntriesFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  alts?: Maybe<MediumPostVirtualsLinksEntriesAltsFilterListInput>;
  httpStatus?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostVirtualsLinksEntriesFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsLinksEntriesFilterInput>;
};

export type MediumPostVirtualsLinksFilterInput = {
  entries?: Maybe<MediumPostVirtualsLinksEntriesFilterListInput>;
  version?: Maybe<StringQueryOperatorInput>;
  generatedAt?: Maybe<DateQueryOperatorInput>;
};

export type MediumPostVirtualsPreviewImage = {
  imageId?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  backgroundSize?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsPreviewImageFilterInput = {
  imageId?: Maybe<StringQueryOperatorInput>;
  filter?: Maybe<StringQueryOperatorInput>;
  backgroundSize?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  strategy?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostVirtualsTags = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postCount?: Maybe<Scalars['Int']>;
  metadata?: Maybe<MediumPostVirtualsTagsMetadata>;
  type?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTagsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  metadata?: Maybe<MediumPostVirtualsTagsMetadataFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTagsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsTagsFilterInput>;
};

export type MediumPostVirtualsTagsMetadata = {
  postCount?: Maybe<Scalars['Int']>;
  coverImage?: Maybe<MediumPostVirtualsTagsMetadataCoverImage>;
};

export type MediumPostVirtualsTagsMetadataCoverImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  unsplashPhotoId?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  focusPercentX?: Maybe<Scalars['Int']>;
  focusPercentY?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsTagsMetadataCoverImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
  isFeatured?: Maybe<BooleanQueryOperatorInput>;
  unsplashPhotoId?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  focusPercentX?: Maybe<IntQueryOperatorInput>;
  focusPercentY?: Maybe<IntQueryOperatorInput>;
};

export type MediumPostVirtualsTagsMetadataFilterInput = {
  postCount?: Maybe<IntQueryOperatorInput>;
  coverImage?: Maybe<MediumPostVirtualsTagsMetadataCoverImageFilterInput>;
};

export type MediumPostVirtualsTopics = {
  topicId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Int']>;
  image?: Maybe<MediumPostVirtualsTopicsImage>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};


export type MediumPostVirtualsTopicsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumPostVirtualsTopicsFilterInput = {
  topicId?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<MediumPostVirtualsTopicsImageFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type MediumPostVirtualsTopicsFilterListInput = {
  elemMatch?: Maybe<MediumPostVirtualsTopicsFilterInput>;
};

export type MediumPostVirtualsTopicsImage = {
  id?: Maybe<Scalars['String']>;
  originalWidth?: Maybe<Scalars['Int']>;
  originalHeight?: Maybe<Scalars['Int']>;
};

export type MediumPostVirtualsTopicsImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalWidth?: Maybe<IntQueryOperatorInput>;
  originalHeight?: Maybe<IntQueryOperatorInput>;
};

export type MediumUser = Node & {
  userId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  mediumMemberAt?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  imageId?: Maybe<Scalars['String']>;
  backgroundImageId?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  twitterScreenName?: Maybe<Scalars['String']>;
  allowNotes?: Maybe<Scalars['Int']>;
  isWriterProgramEnrolled?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  isMembershipTrialEligible?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<MediumPost>>>;
  optInToIceland?: Maybe<Scalars['Boolean']>;
  hasCompletedProfile?: Maybe<Scalars['Boolean']>;
  hasSeenIcelandOnboarding?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MediumUserCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MediumUserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumUserEdge>;
  nodes: Array<MediumUser>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MediumUserGroupConnection>;
};


export type MediumUserConnectionDistinctArgs = {
  field: MediumUserFieldsEnum;
};


export type MediumUserConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MediumUserFieldsEnum;
};

export type MediumUserEdge = {
  next?: Maybe<MediumUser>;
  node: MediumUser;
  previous?: Maybe<MediumUser>;
};

export type MediumUserFieldsEnum =
  | 'userId'
  | 'name'
  | 'username'
  | 'mediumMemberAt'
  | 'createdAt'
  | 'imageId'
  | 'backgroundImageId'
  | 'bio'
  | 'twitterScreenName'
  | 'allowNotes'
  | 'isWriterProgramEnrolled'
  | 'isSuspended'
  | 'isMembershipTrialEligible'
  | 'type'
  | 'posts'
  | 'posts___versionId'
  | 'posts___creatorId'
  | 'posts___homeCollectionId'
  | 'posts___title'
  | 'posts___detectedLanguage'
  | 'posts___latestVersion'
  | 'posts___latestPublishedVersion'
  | 'posts___hasUnpublishedEdits'
  | 'posts___latestRev'
  | 'posts___createdAt'
  | 'posts___updatedAt'
  | 'posts___acceptedAt'
  | 'posts___firstPublishedAt'
  | 'posts___latestPublishedAt'
  | 'posts___vote'
  | 'posts___experimentalCss'
  | 'posts___displayAuthor'
  | 'posts___content___subtitle'
  | 'posts___content___postDisplay___coverless'
  | 'posts___content___metaDescription'
  | 'posts___virtuals___statusForCollection'
  | 'posts___virtuals___allowNotes'
  | 'posts___virtuals___previewImage___imageId'
  | 'posts___virtuals___previewImage___filter'
  | 'posts___virtuals___previewImage___backgroundSize'
  | 'posts___virtuals___previewImage___originalWidth'
  | 'posts___virtuals___previewImage___originalHeight'
  | 'posts___virtuals___previewImage___strategy'
  | 'posts___virtuals___previewImage___height'
  | 'posts___virtuals___previewImage___width'
  | 'posts___virtuals___wordCount'
  | 'posts___virtuals___imageCount'
  | 'posts___virtuals___readingTime'
  | 'posts___virtuals___subtitle'
  | 'posts___virtuals___publishedInCount'
  | 'posts___virtuals___noIndex'
  | 'posts___virtuals___recommends'
  | 'posts___virtuals___isBookmarked'
  | 'posts___virtuals___tags'
  | 'posts___virtuals___tags___slug'
  | 'posts___virtuals___tags___name'
  | 'posts___virtuals___tags___postCount'
  | 'posts___virtuals___tags___type'
  | 'posts___virtuals___socialRecommendsCount'
  | 'posts___virtuals___responsesCreatedCount'
  | 'posts___virtuals___links___entries'
  | 'posts___virtuals___links___version'
  | 'posts___virtuals___links___generatedAt'
  | 'posts___virtuals___isLockedPreviewOnly'
  | 'posts___virtuals___metaDescription'
  | 'posts___virtuals___totalClapCount'
  | 'posts___virtuals___sectionCount'
  | 'posts___virtuals___readingList'
  | 'posts___virtuals___topics'
  | 'posts___virtuals___topics___topicId'
  | 'posts___virtuals___topics___slug'
  | 'posts___virtuals___topics___createdAt'
  | 'posts___virtuals___topics___deletedAt'
  | 'posts___virtuals___topics___name'
  | 'posts___virtuals___topics___description'
  | 'posts___virtuals___topics___visibility'
  | 'posts___virtuals___topics___type'
  | 'posts___coverless'
  | 'posts___slug'
  | 'posts___translationSourcePostId'
  | 'posts___translationSourceCreatorId'
  | 'posts___isApprovedTranslation'
  | 'posts___inResponseToPostId'
  | 'posts___inResponseToRemovedAt'
  | 'posts___isTitleSynthesized'
  | 'posts___allowResponses'
  | 'posts___importedUrl'
  | 'posts___importedPublishedAt'
  | 'posts___visibility'
  | 'posts___uniqueSlug'
  | 'posts___previewContent___bodyModel___paragraphs'
  | 'posts___previewContent___bodyModel___sections'
  | 'posts___previewContent___isFullContent'
  | 'posts___previewContent___subtitle'
  | 'posts___license'
  | 'posts___inResponseToMediaResourceId'
  | 'posts___canonicalUrl'
  | 'posts___approvedHomeCollectionId'
  | 'posts___newsletterId'
  | 'posts___webCanonicalUrl'
  | 'posts___mediumUrl'
  | 'posts___migrationId'
  | 'posts___notifyFollowers'
  | 'posts___notifyTwitter'
  | 'posts___notifyFacebook'
  | 'posts___responseHiddenOnParentPostAt'
  | 'posts___isSeries'
  | 'posts___isSubscriptionLocked'
  | 'posts___seriesLastAppendedAt'
  | 'posts___audioVersionDurationSec'
  | 'posts___sequenceId'
  | 'posts___isEligibleForRevenue'
  | 'posts___isBlockedFromHightower'
  | 'posts___deletedAt'
  | 'posts___lockedPostSource'
  | 'posts___hightowerMinimumGuaranteeStartsAt'
  | 'posts___hightowerMinimumGuaranteeEndsAt'
  | 'posts___featureLockRequestAcceptedAt'
  | 'posts___mongerRequestType'
  | 'posts___layerCake'
  | 'posts___socialTitle'
  | 'posts___socialDek'
  | 'posts___editorialPreviewTitle'
  | 'posts___editorialPreviewDek'
  | 'posts___isProxyPost'
  | 'posts___proxyPostFaviconUrl'
  | 'posts___proxyPostProviderName'
  | 'posts___proxyPostType'
  | 'posts___isSuspended'
  | 'posts___isLimitedState'
  | 'posts___seoTitle'
  | 'posts___previewContent2___bodyModel___paragraphs'
  | 'posts___previewContent2___bodyModel___sections'
  | 'posts___previewContent2___isFullContent'
  | 'posts___previewContent2___subtitle'
  | 'posts___cardType'
  | 'posts___isDistributionAlertDismissed'
  | 'posts___isShortform'
  | 'posts___shortformType'
  | 'posts___type'
  | 'posts___medium_id'
  | 'posts___author___userId'
  | 'posts___author___name'
  | 'posts___author___username'
  | 'posts___author___mediumMemberAt'
  | 'posts___author___createdAt'
  | 'posts___author___imageId'
  | 'posts___author___backgroundImageId'
  | 'posts___author___bio'
  | 'posts___author___twitterScreenName'
  | 'posts___author___allowNotes'
  | 'posts___author___isWriterProgramEnrolled'
  | 'posts___author___isSuspended'
  | 'posts___author___isMembershipTrialEligible'
  | 'posts___author___type'
  | 'posts___author___posts'
  | 'posts___author___posts___versionId'
  | 'posts___author___posts___creatorId'
  | 'posts___author___posts___homeCollectionId'
  | 'posts___author___posts___title'
  | 'posts___author___posts___detectedLanguage'
  | 'posts___author___posts___latestVersion'
  | 'posts___author___posts___latestPublishedVersion'
  | 'posts___author___posts___hasUnpublishedEdits'
  | 'posts___author___posts___latestRev'
  | 'posts___author___posts___createdAt'
  | 'posts___author___posts___updatedAt'
  | 'posts___author___posts___acceptedAt'
  | 'posts___author___posts___firstPublishedAt'
  | 'posts___author___posts___latestPublishedAt'
  | 'posts___author___posts___vote'
  | 'posts___author___posts___experimentalCss'
  | 'posts___author___posts___displayAuthor'
  | 'posts___author___posts___coverless'
  | 'posts___author___posts___slug'
  | 'posts___author___posts___translationSourcePostId'
  | 'posts___author___posts___translationSourceCreatorId'
  | 'posts___author___posts___isApprovedTranslation'
  | 'posts___author___posts___inResponseToPostId'
  | 'posts___author___posts___inResponseToRemovedAt'
  | 'posts___author___posts___isTitleSynthesized'
  | 'posts___author___posts___allowResponses'
  | 'posts___author___posts___importedUrl'
  | 'posts___author___posts___importedPublishedAt'
  | 'posts___author___posts___visibility'
  | 'posts___author___posts___uniqueSlug'
  | 'posts___author___posts___license'
  | 'posts___author___posts___inResponseToMediaResourceId'
  | 'posts___author___posts___canonicalUrl'
  | 'posts___author___posts___approvedHomeCollectionId'
  | 'posts___author___posts___newsletterId'
  | 'posts___author___posts___webCanonicalUrl'
  | 'posts___author___posts___mediumUrl'
  | 'posts___author___posts___migrationId'
  | 'posts___author___posts___notifyFollowers'
  | 'posts___author___posts___notifyTwitter'
  | 'posts___author___posts___notifyFacebook'
  | 'posts___author___posts___responseHiddenOnParentPostAt'
  | 'posts___author___posts___isSeries'
  | 'posts___author___posts___isSubscriptionLocked'
  | 'posts___author___posts___seriesLastAppendedAt'
  | 'posts___author___posts___audioVersionDurationSec'
  | 'posts___author___posts___sequenceId'
  | 'posts___author___posts___isEligibleForRevenue'
  | 'posts___author___posts___isBlockedFromHightower'
  | 'posts___author___posts___deletedAt'
  | 'posts___author___posts___lockedPostSource'
  | 'posts___author___posts___hightowerMinimumGuaranteeStartsAt'
  | 'posts___author___posts___hightowerMinimumGuaranteeEndsAt'
  | 'posts___author___posts___featureLockRequestAcceptedAt'
  | 'posts___author___posts___mongerRequestType'
  | 'posts___author___posts___layerCake'
  | 'posts___author___posts___socialTitle'
  | 'posts___author___posts___socialDek'
  | 'posts___author___posts___editorialPreviewTitle'
  | 'posts___author___posts___editorialPreviewDek'
  | 'posts___author___posts___isProxyPost'
  | 'posts___author___posts___proxyPostFaviconUrl'
  | 'posts___author___posts___proxyPostProviderName'
  | 'posts___author___posts___proxyPostType'
  | 'posts___author___posts___isSuspended'
  | 'posts___author___posts___isLimitedState'
  | 'posts___author___posts___seoTitle'
  | 'posts___author___posts___cardType'
  | 'posts___author___posts___isDistributionAlertDismissed'
  | 'posts___author___posts___isShortform'
  | 'posts___author___posts___shortformType'
  | 'posts___author___posts___type'
  | 'posts___author___posts___medium_id'
  | 'posts___author___posts___primaryTopicId'
  | 'posts___author___posts___isNewsletter'
  | 'posts___author___posts___responsesLocked'
  | 'posts___author___posts___isLockedResponse'
  | 'posts___author___posts___isPublishToEmail'
  | 'posts___author___posts___responseDistribution'
  | 'posts___author___posts___id'
  | 'posts___author___posts___children'
  | 'posts___author___optInToIceland'
  | 'posts___author___hasCompletedProfile'
  | 'posts___author___hasSeenIcelandOnboarding'
  | 'posts___author___id'
  | 'posts___author___parent___id'
  | 'posts___author___parent___children'
  | 'posts___author___children'
  | 'posts___author___children___id'
  | 'posts___author___children___children'
  | 'posts___author___internal___content'
  | 'posts___author___internal___contentDigest'
  | 'posts___author___internal___description'
  | 'posts___author___internal___fieldOwners'
  | 'posts___author___internal___ignoreType'
  | 'posts___author___internal___mediaType'
  | 'posts___author___internal___owner'
  | 'posts___author___internal___type'
  | 'posts___primaryTopicId'
  | 'posts___isNewsletter'
  | 'posts___responsesLocked'
  | 'posts___isLockedResponse'
  | 'posts___isPublishToEmail'
  | 'posts___responseDistribution'
  | 'posts___id'
  | 'posts___parent___id'
  | 'posts___parent___parent___id'
  | 'posts___parent___parent___children'
  | 'posts___parent___children'
  | 'posts___parent___children___id'
  | 'posts___parent___children___children'
  | 'posts___parent___internal___content'
  | 'posts___parent___internal___contentDigest'
  | 'posts___parent___internal___description'
  | 'posts___parent___internal___fieldOwners'
  | 'posts___parent___internal___ignoreType'
  | 'posts___parent___internal___mediaType'
  | 'posts___parent___internal___owner'
  | 'posts___parent___internal___type'
  | 'posts___children'
  | 'posts___children___id'
  | 'posts___children___parent___id'
  | 'posts___children___parent___children'
  | 'posts___children___children'
  | 'posts___children___children___id'
  | 'posts___children___children___children'
  | 'posts___children___internal___content'
  | 'posts___children___internal___contentDigest'
  | 'posts___children___internal___description'
  | 'posts___children___internal___fieldOwners'
  | 'posts___children___internal___ignoreType'
  | 'posts___children___internal___mediaType'
  | 'posts___children___internal___owner'
  | 'posts___children___internal___type'
  | 'posts___internal___content'
  | 'posts___internal___contentDigest'
  | 'posts___internal___description'
  | 'posts___internal___fieldOwners'
  | 'posts___internal___ignoreType'
  | 'posts___internal___mediaType'
  | 'posts___internal___owner'
  | 'posts___internal___type'
  | 'optInToIceland'
  | 'hasCompletedProfile'
  | 'hasSeenIcelandOnboarding'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MediumUserFilterInput = {
  userId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  mediumMemberAt?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  imageId?: Maybe<StringQueryOperatorInput>;
  backgroundImageId?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  twitterScreenName?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<IntQueryOperatorInput>;
  isWriterProgramEnrolled?: Maybe<BooleanQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isMembershipTrialEligible?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<MediumPostFilterListInput>;
  optInToIceland?: Maybe<BooleanQueryOperatorInput>;
  hasCompletedProfile?: Maybe<BooleanQueryOperatorInput>;
  hasSeenIcelandOnboarding?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MediumUserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MediumUserEdge>;
  nodes: Array<MediumUser>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MediumUserSortInput = {
  fields?: Maybe<Array<Maybe<MediumUserFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  mediumCollection?: Maybe<MediumCollection>;
  allMediumCollection: MediumCollectionConnection;
  mediumUser?: Maybe<MediumUser>;
  allMediumUser: MediumUserConnection;
  mediumPost?: Maybe<MediumPost>;
  allMediumPost: MediumPostConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  sanityAboutPage?: Maybe<SanityAboutPage>;
  allSanityAboutPage: SanityAboutPageConnection;
  sanityContactPage?: Maybe<SanityContactPage>;
  allSanityContactPage: SanityContactPageConnection;
  sanityFooter?: Maybe<SanityFooter>;
  allSanityFooter: SanityFooterConnection;
  sanityHomepage?: Maybe<SanityHomepage>;
  allSanityHomepage: SanityHomepageConnection;
  sanityIndivPage?: Maybe<SanityIndivPage>;
  allSanityIndivPage: SanityIndivPageConnection;
  sanityLentPage?: Maybe<SanityLentPage>;
  allSanityLentPage: SanityLentPageConnection;
  sanityOsloJazzPage?: Maybe<SanityOsloJazzPage>;
  allSanityOsloJazzPage: SanityOsloJazzPageConnection;
  sanityPage?: Maybe<SanityPage>;
  allSanityPage: SanityPageConnection;
  sanityPageText?: Maybe<SanityPageText>;
  allSanityPageText: SanityPageTextConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanityServicesPage?: Maybe<SanityServicesPage>;
  allSanityServicesPage: SanityServicesPageConnection;
  sanityTabetaltPage?: Maybe<SanityTabetaltPage>;
  allSanityTabetaltPage: SanityTabetaltPageConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumCollectionArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  shortDescription?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MediumCollectionImageFilterInput>;
  metadata?: Maybe<MediumCollectionMetadataFilterInput>;
  virtuals?: Maybe<MediumCollectionVirtualsFilterInput>;
  logo?: Maybe<MediumCollectionLogoFilterInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
  facebookPageName?: Maybe<StringQueryOperatorInput>;
  publicEmail?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  sections?: Maybe<MediumCollectionSectionsFilterListInput>;
  tintColor?: Maybe<StringQueryOperatorInput>;
  lightText?: Maybe<BooleanQueryOperatorInput>;
  favicon?: Maybe<MediumCollectionFaviconFilterInput>;
  colorPalette?: Maybe<MediumCollectionColorPaletteFilterInput>;
  navItems?: Maybe<MediumCollectionNavItemsFilterListInput>;
  colorBehavior?: Maybe<IntQueryOperatorInput>;
  instantArticlesState?: Maybe<IntQueryOperatorInput>;
  acceleratedMobilePagesState?: Maybe<IntQueryOperatorInput>;
  ampLogo?: Maybe<MediumCollectionAmpLogoFilterInput>;
  header?: Maybe<MediumCollectionHeaderFilterInput>;
  paidForDomainAt?: Maybe<DateQueryOperatorInput>;
  subscriberCount?: Maybe<IntQueryOperatorInput>;
  tagline?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  collectionMastheadId?: Maybe<StringQueryOperatorInput>;
  polarisCoverImage?: Maybe<MediumCollectionPolarisCoverImageFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumCollectionArgs = {
  filter?: Maybe<MediumCollectionFilterInput>;
  sort?: Maybe<MediumCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumUserArgs = {
  userId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  mediumMemberAt?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  imageId?: Maybe<StringQueryOperatorInput>;
  backgroundImageId?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  twitterScreenName?: Maybe<StringQueryOperatorInput>;
  allowNotes?: Maybe<IntQueryOperatorInput>;
  isWriterProgramEnrolled?: Maybe<BooleanQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isMembershipTrialEligible?: Maybe<BooleanQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  posts?: Maybe<MediumPostFilterListInput>;
  optInToIceland?: Maybe<BooleanQueryOperatorInput>;
  hasCompletedProfile?: Maybe<BooleanQueryOperatorInput>;
  hasSeenIcelandOnboarding?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumUserArgs = {
  filter?: Maybe<MediumUserFilterInput>;
  sort?: Maybe<MediumUserSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMediumPostArgs = {
  versionId?: Maybe<StringQueryOperatorInput>;
  creatorId?: Maybe<StringQueryOperatorInput>;
  homeCollectionId?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  detectedLanguage?: Maybe<StringQueryOperatorInput>;
  latestVersion?: Maybe<StringQueryOperatorInput>;
  latestPublishedVersion?: Maybe<StringQueryOperatorInput>;
  hasUnpublishedEdits?: Maybe<BooleanQueryOperatorInput>;
  latestRev?: Maybe<IntQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  acceptedAt?: Maybe<IntQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  latestPublishedAt?: Maybe<DateQueryOperatorInput>;
  vote?: Maybe<BooleanQueryOperatorInput>;
  experimentalCss?: Maybe<StringQueryOperatorInput>;
  displayAuthor?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<MediumPostContentFilterInput>;
  virtuals?: Maybe<MediumPostVirtualsFilterInput>;
  coverless?: Maybe<BooleanQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  translationSourcePostId?: Maybe<StringQueryOperatorInput>;
  translationSourceCreatorId?: Maybe<StringQueryOperatorInput>;
  isApprovedTranslation?: Maybe<BooleanQueryOperatorInput>;
  inResponseToPostId?: Maybe<StringQueryOperatorInput>;
  inResponseToRemovedAt?: Maybe<IntQueryOperatorInput>;
  isTitleSynthesized?: Maybe<BooleanQueryOperatorInput>;
  allowResponses?: Maybe<BooleanQueryOperatorInput>;
  importedUrl?: Maybe<StringQueryOperatorInput>;
  importedPublishedAt?: Maybe<IntQueryOperatorInput>;
  visibility?: Maybe<IntQueryOperatorInput>;
  uniqueSlug?: Maybe<StringQueryOperatorInput>;
  previewContent?: Maybe<MediumPostPreviewContentFilterInput>;
  license?: Maybe<IntQueryOperatorInput>;
  inResponseToMediaResourceId?: Maybe<StringQueryOperatorInput>;
  canonicalUrl?: Maybe<StringQueryOperatorInput>;
  approvedHomeCollectionId?: Maybe<StringQueryOperatorInput>;
  newsletterId?: Maybe<StringQueryOperatorInput>;
  webCanonicalUrl?: Maybe<StringQueryOperatorInput>;
  mediumUrl?: Maybe<StringQueryOperatorInput>;
  migrationId?: Maybe<StringQueryOperatorInput>;
  notifyFollowers?: Maybe<BooleanQueryOperatorInput>;
  notifyTwitter?: Maybe<BooleanQueryOperatorInput>;
  notifyFacebook?: Maybe<BooleanQueryOperatorInput>;
  responseHiddenOnParentPostAt?: Maybe<IntQueryOperatorInput>;
  isSeries?: Maybe<BooleanQueryOperatorInput>;
  isSubscriptionLocked?: Maybe<BooleanQueryOperatorInput>;
  seriesLastAppendedAt?: Maybe<DateQueryOperatorInput>;
  audioVersionDurationSec?: Maybe<IntQueryOperatorInput>;
  sequenceId?: Maybe<StringQueryOperatorInput>;
  isEligibleForRevenue?: Maybe<BooleanQueryOperatorInput>;
  isBlockedFromHightower?: Maybe<BooleanQueryOperatorInput>;
  deletedAt?: Maybe<IntQueryOperatorInput>;
  lockedPostSource?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeStartsAt?: Maybe<IntQueryOperatorInput>;
  hightowerMinimumGuaranteeEndsAt?: Maybe<IntQueryOperatorInput>;
  featureLockRequestAcceptedAt?: Maybe<IntQueryOperatorInput>;
  mongerRequestType?: Maybe<IntQueryOperatorInput>;
  layerCake?: Maybe<IntQueryOperatorInput>;
  socialTitle?: Maybe<StringQueryOperatorInput>;
  socialDek?: Maybe<StringQueryOperatorInput>;
  editorialPreviewTitle?: Maybe<StringQueryOperatorInput>;
  editorialPreviewDek?: Maybe<StringQueryOperatorInput>;
  isProxyPost?: Maybe<BooleanQueryOperatorInput>;
  proxyPostFaviconUrl?: Maybe<StringQueryOperatorInput>;
  proxyPostProviderName?: Maybe<StringQueryOperatorInput>;
  proxyPostType?: Maybe<IntQueryOperatorInput>;
  isSuspended?: Maybe<BooleanQueryOperatorInput>;
  isLimitedState?: Maybe<BooleanQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  previewContent2?: Maybe<MediumPostPreviewContent2FilterInput>;
  cardType?: Maybe<IntQueryOperatorInput>;
  isDistributionAlertDismissed?: Maybe<BooleanQueryOperatorInput>;
  isShortform?: Maybe<BooleanQueryOperatorInput>;
  shortformType?: Maybe<IntQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  medium_id?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<MediumUserFilterInput>;
  primaryTopicId?: Maybe<StringQueryOperatorInput>;
  isNewsletter?: Maybe<BooleanQueryOperatorInput>;
  responsesLocked?: Maybe<BooleanQueryOperatorInput>;
  isLockedResponse?: Maybe<BooleanQueryOperatorInput>;
  isPublishToEmail?: Maybe<BooleanQueryOperatorInput>;
  responseDistribution?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMediumPostArgs = {
  filter?: Maybe<MediumPostFilterInput>;
  sort?: Maybe<MediumPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryThemeUiConfigArgs = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllThemeUiConfigArgs = {
  filter?: Maybe<ThemeUiConfigFilterInput>;
  sort?: Maybe<ThemeUiConfigSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityAboutPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  boxes?: Maybe<SanityBoxFilterListInput>;
  image?: Maybe<SanityImageFilterInput>;
  bottomBox?: Maybe<SanityBoxWithoutTitleFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBoxes?: Maybe<JsonQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawBottomBox?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityAboutPageArgs = {
  filter?: Maybe<SanityAboutPageFilterInput>;
  sort?: Maybe<SanityAboutPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityContactPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  mainBox?: Maybe<SanityBoxFilterInput>;
  boxes?: Maybe<SanityImageDescriptionBoxFilterListInput>;
  _rawMainBox?: Maybe<JsonQueryOperatorInput>;
  _rawBoxes?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityContactPageArgs = {
  filter?: Maybe<SanityContactPageFilterInput>;
  sort?: Maybe<SanityContactPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFooterArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  leftFooterText?: Maybe<SanityPageTextFilterInput>;
  footerContacts?: Maybe<SanityFooterContactsFilterInput>;
  footerAddress?: Maybe<SanityPageTextFilterInput>;
  rightFooterText?: Maybe<SanityPageTextFilterInput>;
  footerSocialUrls?: Maybe<SanityFooterSocialNetworkFilterListInput>;
  _rawLeftFooterText?: Maybe<JsonQueryOperatorInput>;
  _rawFooterContacts?: Maybe<JsonQueryOperatorInput>;
  _rawFooterAddress?: Maybe<JsonQueryOperatorInput>;
  _rawRightFooterText?: Maybe<JsonQueryOperatorInput>;
  _rawFooterSocialUrls?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFooterArgs = {
  filter?: Maybe<SanityFooterFilterInput>;
  sort?: Maybe<SanityFooterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityHomepageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  headerText?: Maybe<SanityPageTextFilterInput>;
  headerButtonText?: Maybe<SanityLocaleStringFilterInput>;
  headerButtonLink?: Maybe<StringQueryOperatorInput>;
  headerVideoUrl?: Maybe<StringQueryOperatorInput>;
  homePageTopTitle?: Maybe<SanityLocaleStringFilterInput>;
  homePageTopDescription?: Maybe<SanityPageTextFilterInput>;
  ctaBoxes?: Maybe<SanityCtaBoxFilterListInput>;
  homePageMiddleTitle?: Maybe<SanityPageTextFilterInput>;
  ctaImages?: Maybe<SanityCtaImageFilterListInput>;
  _rawHeaderText?: Maybe<JsonQueryOperatorInput>;
  _rawHeaderButtonText?: Maybe<JsonQueryOperatorInput>;
  _rawHomePageTopTitle?: Maybe<JsonQueryOperatorInput>;
  _rawHomePageTopDescription?: Maybe<JsonQueryOperatorInput>;
  _rawCtaBoxes?: Maybe<JsonQueryOperatorInput>;
  _rawHomePageMiddleTitle?: Maybe<JsonQueryOperatorInput>;
  _rawCtaImages?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityHomepageArgs = {
  filter?: Maybe<SanityHomepageFilterInput>;
  sort?: Maybe<SanityHomepageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityIndivPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  indivInfo?: Maybe<SanityBoxFilterInput>;
  _rawIndivInfo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityIndivPageArgs = {
  filter?: Maybe<SanityIndivPageFilterInput>;
  sort?: Maybe<SanityIndivPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityLentPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  lentInfo?: Maybe<SanityBoxFilterInput>;
  _rawLentInfo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityLentPageArgs = {
  filter?: Maybe<SanityLentPageFilterInput>;
  sort?: Maybe<SanityLentPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityOsloJazzPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  osloJazzInfo?: Maybe<SanityBoxFilterInput>;
  _rawOsloJazzInfo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityOsloJazzPageArgs = {
  filter?: Maybe<SanityOsloJazzPageFilterInput>;
  sort?: Maybe<SanityOsloJazzPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  content?: Maybe<SanityPageTextFilterInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPageArgs = {
  filter?: Maybe<SanityPageFilterInput>;
  sort?: Maybe<SanityPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityPageTextArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  noText?: Maybe<SanityBlockFilterListInput>;
  enText?: Maybe<SanityBlockFilterListInput>;
  _rawNoText?: Maybe<JsonQueryOperatorInput>;
  _rawEnText?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityPageTextArgs = {
  filter?: Maybe<SanityPageTextFilterInput>;
  sort?: Maybe<SanityPageTextSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>;
  sort?: Maybe<SanityFileAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  fixed?: Maybe<SanityImageFixedFilterInput>;
  fluid?: Maybe<SanityImageFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>;
  sort?: Maybe<SanityImageAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityServicesPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  boxes?: Maybe<SanityBoxWithLinkFilterListInput>;
  firstImage?: Maybe<SanityImageFilterInput>;
  secondImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBoxes?: Maybe<JsonQueryOperatorInput>;
  _rawFirstImage?: Maybe<JsonQueryOperatorInput>;
  _rawSecondImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityServicesPageArgs = {
  filter?: Maybe<SanityServicesPageFilterInput>;
  sort?: Maybe<SanityServicesPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySanityTabetaltPageArgs = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  tabetaltInfo?: Maybe<SanityBoxFilterInput>;
  tabetaltBottomImage?: Maybe<SanityImageFilterInput>;
  _rawTabetaltInfo?: Maybe<JsonQueryOperatorInput>;
  _rawTabetaltBottomImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSanityTabetaltPageArgs = {
  filter?: Maybe<SanityTabetaltPageFilterInput>;
  sort?: Maybe<SanityTabetaltPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SanityAboutPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  boxes?: Maybe<Array<Maybe<SanityBox>>>;
  image?: Maybe<SanityImage>;
  bottomBox?: Maybe<SanityBoxWithoutTitle>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBoxes?: Maybe<Scalars['JSON']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawBottomBox?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityAboutPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityAboutPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityAboutPage_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityAboutPage_RawBoxesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityAboutPage_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityAboutPage_RawBottomBoxArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityAboutPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityAboutPageEdge>;
  nodes: Array<SanityAboutPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityAboutPageGroupConnection>;
};


export type SanityAboutPageConnectionDistinctArgs = {
  field: SanityAboutPageFieldsEnum;
};


export type SanityAboutPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityAboutPageFieldsEnum;
};

export type SanityAboutPageEdge = {
  next?: Maybe<SanityAboutPage>;
  node: SanityAboutPage;
  previous?: Maybe<SanityAboutPage>;
};

export type SanityAboutPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___no'
  | 'title___en'
  | 'boxes'
  | 'boxes____key'
  | 'boxes____type'
  | 'boxes___image____key'
  | 'boxes___image____type'
  | 'boxes___image___asset____id'
  | 'boxes___image___asset____type'
  | 'boxes___image___asset____createdAt'
  | 'boxes___image___asset____updatedAt'
  | 'boxes___image___asset____rev'
  | 'boxes___image___asset____key'
  | 'boxes___image___asset___originalFilename'
  | 'boxes___image___asset___label'
  | 'boxes___image___asset___title'
  | 'boxes___image___asset___description'
  | 'boxes___image___asset___sha1hash'
  | 'boxes___image___asset___extension'
  | 'boxes___image___asset___mimeType'
  | 'boxes___image___asset___size'
  | 'boxes___image___asset___assetId'
  | 'boxes___image___asset___path'
  | 'boxes___image___asset___url'
  | 'boxes___image___asset____rawMetadata'
  | 'boxes___image___asset____rawSource'
  | 'boxes___image___asset___id'
  | 'boxes___image___asset___children'
  | 'boxes___image___hotspot____key'
  | 'boxes___image___hotspot____type'
  | 'boxes___image___hotspot___x'
  | 'boxes___image___hotspot___y'
  | 'boxes___image___hotspot___height'
  | 'boxes___image___hotspot___width'
  | 'boxes___image___crop____key'
  | 'boxes___image___crop____type'
  | 'boxes___image___crop___top'
  | 'boxes___image___crop___bottom'
  | 'boxes___image___crop___left'
  | 'boxes___image___crop___right'
  | 'boxes___image____rawAsset'
  | 'boxes___image____rawHotspot'
  | 'boxes___image____rawCrop'
  | 'boxes___title____key'
  | 'boxes___title____type'
  | 'boxes___title___no'
  | 'boxes___title___en'
  | 'boxes___description____id'
  | 'boxes___description____type'
  | 'boxes___description____createdAt'
  | 'boxes___description____updatedAt'
  | 'boxes___description____rev'
  | 'boxes___description____key'
  | 'boxes___description___noText'
  | 'boxes___description___noText____key'
  | 'boxes___description___noText____type'
  | 'boxes___description___noText___children'
  | 'boxes___description___noText___style'
  | 'boxes___description___noText___list'
  | 'boxes___description___noText____rawChildren'
  | 'boxes___description___enText'
  | 'boxes___description___enText____key'
  | 'boxes___description___enText____type'
  | 'boxes___description___enText___children'
  | 'boxes___description___enText___style'
  | 'boxes___description___enText___list'
  | 'boxes___description___enText____rawChildren'
  | 'boxes___description____rawNoText'
  | 'boxes___description____rawEnText'
  | 'boxes___description___id'
  | 'boxes___description___parent___id'
  | 'boxes___description___parent___children'
  | 'boxes___description___children'
  | 'boxes___description___children___id'
  | 'boxes___description___children___children'
  | 'boxes___description___internal___content'
  | 'boxes___description___internal___contentDigest'
  | 'boxes___description___internal___description'
  | 'boxes___description___internal___fieldOwners'
  | 'boxes___description___internal___ignoreType'
  | 'boxes___description___internal___mediaType'
  | 'boxes___description___internal___owner'
  | 'boxes___description___internal___type'
  | 'boxes____rawImage'
  | 'boxes____rawTitle'
  | 'boxes____rawDescription'
  | 'image____key'
  | 'image____type'
  | 'image___asset____id'
  | 'image___asset____type'
  | 'image___asset____createdAt'
  | 'image___asset____updatedAt'
  | 'image___asset____rev'
  | 'image___asset____key'
  | 'image___asset___originalFilename'
  | 'image___asset___label'
  | 'image___asset___title'
  | 'image___asset___description'
  | 'image___asset___sha1hash'
  | 'image___asset___extension'
  | 'image___asset___mimeType'
  | 'image___asset___size'
  | 'image___asset___assetId'
  | 'image___asset___path'
  | 'image___asset___url'
  | 'image___asset___metadata____key'
  | 'image___asset___metadata____type'
  | 'image___asset___metadata___lqip'
  | 'image___asset___metadata___hasAlpha'
  | 'image___asset___metadata___isOpaque'
  | 'image___asset___metadata____rawLocation'
  | 'image___asset___metadata____rawDimensions'
  | 'image___asset___metadata____rawPalette'
  | 'image___asset___source____key'
  | 'image___asset___source____type'
  | 'image___asset___source___name'
  | 'image___asset___source___id'
  | 'image___asset___source___url'
  | 'image___asset____rawMetadata'
  | 'image___asset____rawSource'
  | 'image___asset___fixed___width'
  | 'image___asset___fixed___height'
  | 'image___asset___fixed___src'
  | 'image___asset___fixed___srcSet'
  | 'image___asset___fixed___base64'
  | 'image___asset___fixed___srcWebp'
  | 'image___asset___fixed___srcSetWebp'
  | 'image___asset___fluid___aspectRatio'
  | 'image___asset___fluid___src'
  | 'image___asset___fluid___srcSet'
  | 'image___asset___fluid___sizes'
  | 'image___asset___fluid___base64'
  | 'image___asset___fluid___srcWebp'
  | 'image___asset___fluid___srcSetWebp'
  | 'image___asset___id'
  | 'image___asset___parent___id'
  | 'image___asset___parent___children'
  | 'image___asset___children'
  | 'image___asset___children___id'
  | 'image___asset___children___children'
  | 'image___asset___internal___content'
  | 'image___asset___internal___contentDigest'
  | 'image___asset___internal___description'
  | 'image___asset___internal___fieldOwners'
  | 'image___asset___internal___ignoreType'
  | 'image___asset___internal___mediaType'
  | 'image___asset___internal___owner'
  | 'image___asset___internal___type'
  | 'image___hotspot____key'
  | 'image___hotspot____type'
  | 'image___hotspot___x'
  | 'image___hotspot___y'
  | 'image___hotspot___height'
  | 'image___hotspot___width'
  | 'image___crop____key'
  | 'image___crop____type'
  | 'image___crop___top'
  | 'image___crop___bottom'
  | 'image___crop___left'
  | 'image___crop___right'
  | 'image____rawAsset'
  | 'image____rawHotspot'
  | 'image____rawCrop'
  | 'bottomBox____key'
  | 'bottomBox____type'
  | 'bottomBox___image____key'
  | 'bottomBox___image____type'
  | 'bottomBox___image___asset____id'
  | 'bottomBox___image___asset____type'
  | 'bottomBox___image___asset____createdAt'
  | 'bottomBox___image___asset____updatedAt'
  | 'bottomBox___image___asset____rev'
  | 'bottomBox___image___asset____key'
  | 'bottomBox___image___asset___originalFilename'
  | 'bottomBox___image___asset___label'
  | 'bottomBox___image___asset___title'
  | 'bottomBox___image___asset___description'
  | 'bottomBox___image___asset___sha1hash'
  | 'bottomBox___image___asset___extension'
  | 'bottomBox___image___asset___mimeType'
  | 'bottomBox___image___asset___size'
  | 'bottomBox___image___asset___assetId'
  | 'bottomBox___image___asset___path'
  | 'bottomBox___image___asset___url'
  | 'bottomBox___image___asset____rawMetadata'
  | 'bottomBox___image___asset____rawSource'
  | 'bottomBox___image___asset___id'
  | 'bottomBox___image___asset___children'
  | 'bottomBox___image___hotspot____key'
  | 'bottomBox___image___hotspot____type'
  | 'bottomBox___image___hotspot___x'
  | 'bottomBox___image___hotspot___y'
  | 'bottomBox___image___hotspot___height'
  | 'bottomBox___image___hotspot___width'
  | 'bottomBox___image___crop____key'
  | 'bottomBox___image___crop____type'
  | 'bottomBox___image___crop___top'
  | 'bottomBox___image___crop___bottom'
  | 'bottomBox___image___crop___left'
  | 'bottomBox___image___crop___right'
  | 'bottomBox___image____rawAsset'
  | 'bottomBox___image____rawHotspot'
  | 'bottomBox___image____rawCrop'
  | 'bottomBox___description____id'
  | 'bottomBox___description____type'
  | 'bottomBox___description____createdAt'
  | 'bottomBox___description____updatedAt'
  | 'bottomBox___description____rev'
  | 'bottomBox___description____key'
  | 'bottomBox___description___noText'
  | 'bottomBox___description___noText____key'
  | 'bottomBox___description___noText____type'
  | 'bottomBox___description___noText___children'
  | 'bottomBox___description___noText___style'
  | 'bottomBox___description___noText___list'
  | 'bottomBox___description___noText____rawChildren'
  | 'bottomBox___description___enText'
  | 'bottomBox___description___enText____key'
  | 'bottomBox___description___enText____type'
  | 'bottomBox___description___enText___children'
  | 'bottomBox___description___enText___style'
  | 'bottomBox___description___enText___list'
  | 'bottomBox___description___enText____rawChildren'
  | 'bottomBox___description____rawNoText'
  | 'bottomBox___description____rawEnText'
  | 'bottomBox___description___id'
  | 'bottomBox___description___parent___id'
  | 'bottomBox___description___parent___children'
  | 'bottomBox___description___children'
  | 'bottomBox___description___children___id'
  | 'bottomBox___description___children___children'
  | 'bottomBox___description___internal___content'
  | 'bottomBox___description___internal___contentDigest'
  | 'bottomBox___description___internal___description'
  | 'bottomBox___description___internal___fieldOwners'
  | 'bottomBox___description___internal___ignoreType'
  | 'bottomBox___description___internal___mediaType'
  | 'bottomBox___description___internal___owner'
  | 'bottomBox___description___internal___type'
  | 'bottomBox___linkTo'
  | 'bottomBox___buttonText____key'
  | 'bottomBox___buttonText____type'
  | 'bottomBox___buttonText___no'
  | 'bottomBox___buttonText___en'
  | 'bottomBox____rawImage'
  | 'bottomBox____rawDescription'
  | 'bottomBox____rawButtonText'
  | '_rawTitle'
  | '_rawBoxes'
  | '_rawImage'
  | '_rawBottomBox'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityAboutPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  boxes?: Maybe<SanityBoxFilterListInput>;
  image?: Maybe<SanityImageFilterInput>;
  bottomBox?: Maybe<SanityBoxWithoutTitleFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBoxes?: Maybe<JsonQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawBottomBox?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityAboutPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityAboutPageEdge>;
  nodes: Array<SanityAboutPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityAboutPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityAboutPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  children?: Maybe<SanitySpanFilterListInput>;
  style?: Maybe<StringQueryOperatorInput>;
  list?: Maybe<StringQueryOperatorInput>;
  _rawChildren?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>;
};

export type SanityBlockOrImage = SanityBlock | SanityImage;

export type SanityBox = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  title?: Maybe<SanityLocaleString>;
  description?: Maybe<SanityPageText>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawDescription?: Maybe<Scalars['JSON']>;
};


export type SanityBox_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBox_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBox_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBoxFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  description?: Maybe<SanityPageTextFilterInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawDescription?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBoxFilterListInput = {
  elemMatch?: Maybe<SanityBoxFilterInput>;
};

export type SanityBoxWithLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  title?: Maybe<SanityLocaleString>;
  description?: Maybe<SanityPageText>;
  linkTo?: Maybe<Scalars['String']>;
  buttonText?: Maybe<SanityLocaleString>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawDescription?: Maybe<Scalars['JSON']>;
  _rawButtonText?: Maybe<Scalars['JSON']>;
};


export type SanityBoxWithLink_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBoxWithLink_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBoxWithLink_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBoxWithLink_RawButtonTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBoxWithLinkFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  description?: Maybe<SanityPageTextFilterInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  buttonText?: Maybe<SanityLocaleStringFilterInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawDescription?: Maybe<JsonQueryOperatorInput>;
  _rawButtonText?: Maybe<JsonQueryOperatorInput>;
};

export type SanityBoxWithLinkFilterListInput = {
  elemMatch?: Maybe<SanityBoxWithLinkFilterInput>;
};

export type SanityBoxWithoutTitle = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  description?: Maybe<SanityPageText>;
  linkTo?: Maybe<Scalars['String']>;
  buttonText?: Maybe<SanityLocaleString>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawDescription?: Maybe<Scalars['JSON']>;
  _rawButtonText?: Maybe<Scalars['JSON']>;
};


export type SanityBoxWithoutTitle_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBoxWithoutTitle_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityBoxWithoutTitle_RawButtonTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityBoxWithoutTitleFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  description?: Maybe<SanityPageTextFilterInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  buttonText?: Maybe<SanityLocaleStringFilterInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawDescription?: Maybe<JsonQueryOperatorInput>;
  _rawButtonText?: Maybe<JsonQueryOperatorInput>;
};

export type SanityContactPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  mainBox?: Maybe<SanityBox>;
  boxes?: Maybe<Array<Maybe<SanityImageDescriptionBox>>>;
  _rawMainBox?: Maybe<Scalars['JSON']>;
  _rawBoxes?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityContactPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityContactPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityContactPage_RawMainBoxArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityContactPage_RawBoxesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityContactPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityContactPageEdge>;
  nodes: Array<SanityContactPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityContactPageGroupConnection>;
};


export type SanityContactPageConnectionDistinctArgs = {
  field: SanityContactPageFieldsEnum;
};


export type SanityContactPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityContactPageFieldsEnum;
};

export type SanityContactPageEdge = {
  next?: Maybe<SanityContactPage>;
  node: SanityContactPage;
  previous?: Maybe<SanityContactPage>;
};

export type SanityContactPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'mainBox____key'
  | 'mainBox____type'
  | 'mainBox___image____key'
  | 'mainBox___image____type'
  | 'mainBox___image___asset____id'
  | 'mainBox___image___asset____type'
  | 'mainBox___image___asset____createdAt'
  | 'mainBox___image___asset____updatedAt'
  | 'mainBox___image___asset____rev'
  | 'mainBox___image___asset____key'
  | 'mainBox___image___asset___originalFilename'
  | 'mainBox___image___asset___label'
  | 'mainBox___image___asset___title'
  | 'mainBox___image___asset___description'
  | 'mainBox___image___asset___sha1hash'
  | 'mainBox___image___asset___extension'
  | 'mainBox___image___asset___mimeType'
  | 'mainBox___image___asset___size'
  | 'mainBox___image___asset___assetId'
  | 'mainBox___image___asset___path'
  | 'mainBox___image___asset___url'
  | 'mainBox___image___asset____rawMetadata'
  | 'mainBox___image___asset____rawSource'
  | 'mainBox___image___asset___id'
  | 'mainBox___image___asset___children'
  | 'mainBox___image___hotspot____key'
  | 'mainBox___image___hotspot____type'
  | 'mainBox___image___hotspot___x'
  | 'mainBox___image___hotspot___y'
  | 'mainBox___image___hotspot___height'
  | 'mainBox___image___hotspot___width'
  | 'mainBox___image___crop____key'
  | 'mainBox___image___crop____type'
  | 'mainBox___image___crop___top'
  | 'mainBox___image___crop___bottom'
  | 'mainBox___image___crop___left'
  | 'mainBox___image___crop___right'
  | 'mainBox___image____rawAsset'
  | 'mainBox___image____rawHotspot'
  | 'mainBox___image____rawCrop'
  | 'mainBox___title____key'
  | 'mainBox___title____type'
  | 'mainBox___title___no'
  | 'mainBox___title___en'
  | 'mainBox___description____id'
  | 'mainBox___description____type'
  | 'mainBox___description____createdAt'
  | 'mainBox___description____updatedAt'
  | 'mainBox___description____rev'
  | 'mainBox___description____key'
  | 'mainBox___description___noText'
  | 'mainBox___description___noText____key'
  | 'mainBox___description___noText____type'
  | 'mainBox___description___noText___children'
  | 'mainBox___description___noText___style'
  | 'mainBox___description___noText___list'
  | 'mainBox___description___noText____rawChildren'
  | 'mainBox___description___enText'
  | 'mainBox___description___enText____key'
  | 'mainBox___description___enText____type'
  | 'mainBox___description___enText___children'
  | 'mainBox___description___enText___style'
  | 'mainBox___description___enText___list'
  | 'mainBox___description___enText____rawChildren'
  | 'mainBox___description____rawNoText'
  | 'mainBox___description____rawEnText'
  | 'mainBox___description___id'
  | 'mainBox___description___parent___id'
  | 'mainBox___description___parent___children'
  | 'mainBox___description___children'
  | 'mainBox___description___children___id'
  | 'mainBox___description___children___children'
  | 'mainBox___description___internal___content'
  | 'mainBox___description___internal___contentDigest'
  | 'mainBox___description___internal___description'
  | 'mainBox___description___internal___fieldOwners'
  | 'mainBox___description___internal___ignoreType'
  | 'mainBox___description___internal___mediaType'
  | 'mainBox___description___internal___owner'
  | 'mainBox___description___internal___type'
  | 'mainBox____rawImage'
  | 'mainBox____rawTitle'
  | 'mainBox____rawDescription'
  | 'boxes'
  | 'boxes____key'
  | 'boxes____type'
  | 'boxes___image____key'
  | 'boxes___image____type'
  | 'boxes___image___asset____id'
  | 'boxes___image___asset____type'
  | 'boxes___image___asset____createdAt'
  | 'boxes___image___asset____updatedAt'
  | 'boxes___image___asset____rev'
  | 'boxes___image___asset____key'
  | 'boxes___image___asset___originalFilename'
  | 'boxes___image___asset___label'
  | 'boxes___image___asset___title'
  | 'boxes___image___asset___description'
  | 'boxes___image___asset___sha1hash'
  | 'boxes___image___asset___extension'
  | 'boxes___image___asset___mimeType'
  | 'boxes___image___asset___size'
  | 'boxes___image___asset___assetId'
  | 'boxes___image___asset___path'
  | 'boxes___image___asset___url'
  | 'boxes___image___asset____rawMetadata'
  | 'boxes___image___asset____rawSource'
  | 'boxes___image___asset___id'
  | 'boxes___image___asset___children'
  | 'boxes___image___hotspot____key'
  | 'boxes___image___hotspot____type'
  | 'boxes___image___hotspot___x'
  | 'boxes___image___hotspot___y'
  | 'boxes___image___hotspot___height'
  | 'boxes___image___hotspot___width'
  | 'boxes___image___crop____key'
  | 'boxes___image___crop____type'
  | 'boxes___image___crop___top'
  | 'boxes___image___crop___bottom'
  | 'boxes___image___crop___left'
  | 'boxes___image___crop___right'
  | 'boxes___image____rawAsset'
  | 'boxes___image____rawHotspot'
  | 'boxes___image____rawCrop'
  | 'boxes___description____id'
  | 'boxes___description____type'
  | 'boxes___description____createdAt'
  | 'boxes___description____updatedAt'
  | 'boxes___description____rev'
  | 'boxes___description____key'
  | 'boxes___description___noText'
  | 'boxes___description___noText____key'
  | 'boxes___description___noText____type'
  | 'boxes___description___noText___children'
  | 'boxes___description___noText___style'
  | 'boxes___description___noText___list'
  | 'boxes___description___noText____rawChildren'
  | 'boxes___description___enText'
  | 'boxes___description___enText____key'
  | 'boxes___description___enText____type'
  | 'boxes___description___enText___children'
  | 'boxes___description___enText___style'
  | 'boxes___description___enText___list'
  | 'boxes___description___enText____rawChildren'
  | 'boxes___description____rawNoText'
  | 'boxes___description____rawEnText'
  | 'boxes___description___id'
  | 'boxes___description___parent___id'
  | 'boxes___description___parent___children'
  | 'boxes___description___children'
  | 'boxes___description___children___id'
  | 'boxes___description___children___children'
  | 'boxes___description___internal___content'
  | 'boxes___description___internal___contentDigest'
  | 'boxes___description___internal___description'
  | 'boxes___description___internal___fieldOwners'
  | 'boxes___description___internal___ignoreType'
  | 'boxes___description___internal___mediaType'
  | 'boxes___description___internal___owner'
  | 'boxes___description___internal___type'
  | 'boxes____rawImage'
  | 'boxes____rawDescription'
  | '_rawMainBox'
  | '_rawBoxes'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityContactPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  mainBox?: Maybe<SanityBoxFilterInput>;
  boxes?: Maybe<SanityImageDescriptionBoxFilterListInput>;
  _rawMainBox?: Maybe<JsonQueryOperatorInput>;
  _rawBoxes?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityContactPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityContactPageEdge>;
  nodes: Array<SanityContactPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityContactPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityContactPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityContentEditor = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
};


export type SanityContentEditor_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityCtaBox = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  hoverImage?: Maybe<SanityImage>;
  title?: Maybe<SanityLocaleString>;
  description?: Maybe<SanityPageText>;
  bottomText?: Maybe<SanityLocaleString>;
  linkTo?: Maybe<Scalars['String']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawHoverImage?: Maybe<Scalars['JSON']>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawDescription?: Maybe<Scalars['JSON']>;
  _rawBottomText?: Maybe<Scalars['JSON']>;
};


export type SanityCtaBox_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCtaBox_RawHoverImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCtaBox_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCtaBox_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCtaBox_RawBottomTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityCtaBoxFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  hoverImage?: Maybe<SanityImageFilterInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  description?: Maybe<SanityPageTextFilterInput>;
  bottomText?: Maybe<SanityLocaleStringFilterInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawHoverImage?: Maybe<JsonQueryOperatorInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawDescription?: Maybe<JsonQueryOperatorInput>;
  _rawBottomText?: Maybe<JsonQueryOperatorInput>;
};

export type SanityCtaBoxFilterListInput = {
  elemMatch?: Maybe<SanityCtaBoxFilterInput>;
};

export type SanityCtaImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  linkTo?: Maybe<Scalars['String']>;
  linkText?: Maybe<SanityLocaleString>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawLinkText?: Maybe<Scalars['JSON']>;
};


export type SanityCtaImage_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityCtaImage_RawLinkTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityCtaImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  linkText?: Maybe<SanityLocaleStringFilterInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawLinkText?: Maybe<JsonQueryOperatorInput>;
};

export type SanityCtaImageFilterListInput = {
  elemMatch?: Maybe<SanityCtaImageFilterInput>;
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityFile = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
  _rawSource?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawSource'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityFooter = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  leftFooterText?: Maybe<SanityPageText>;
  footerContacts?: Maybe<SanityFooterContacts>;
  footerAddress?: Maybe<SanityPageText>;
  rightFooterText?: Maybe<SanityPageText>;
  footerSocialUrls?: Maybe<Array<Maybe<SanityFooterSocialNetwork>>>;
  _rawLeftFooterText?: Maybe<Scalars['JSON']>;
  _rawFooterContacts?: Maybe<Scalars['JSON']>;
  _rawFooterAddress?: Maybe<Scalars['JSON']>;
  _rawRightFooterText?: Maybe<Scalars['JSON']>;
  _rawFooterSocialUrls?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFooter_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFooter_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityFooter_RawLeftFooterTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFooter_RawFooterContactsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFooter_RawFooterAddressArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFooter_RawRightFooterTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityFooter_RawFooterSocialUrlsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFooterConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFooterEdge>;
  nodes: Array<SanityFooter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityFooterGroupConnection>;
};


export type SanityFooterConnectionDistinctArgs = {
  field: SanityFooterFieldsEnum;
};


export type SanityFooterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityFooterFieldsEnum;
};

export type SanityFooterContacts = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  footerContactsText?: Maybe<SanityPageText>;
  footerContactsUrl?: Maybe<Scalars['String']>;
  _rawFooterContactsText?: Maybe<Scalars['JSON']>;
};


export type SanityFooterContacts_RawFooterContactsTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFooterContactsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  footerContactsText?: Maybe<SanityPageTextFilterInput>;
  footerContactsUrl?: Maybe<StringQueryOperatorInput>;
  _rawFooterContactsText?: Maybe<JsonQueryOperatorInput>;
};

export type SanityFooterEdge = {
  next?: Maybe<SanityFooter>;
  node: SanityFooter;
  previous?: Maybe<SanityFooter>;
};

export type SanityFooterFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'leftFooterText____id'
  | 'leftFooterText____type'
  | 'leftFooterText____createdAt'
  | 'leftFooterText____updatedAt'
  | 'leftFooterText____rev'
  | 'leftFooterText____key'
  | 'leftFooterText___noText'
  | 'leftFooterText___noText____key'
  | 'leftFooterText___noText____type'
  | 'leftFooterText___noText___children'
  | 'leftFooterText___noText___children____key'
  | 'leftFooterText___noText___children____type'
  | 'leftFooterText___noText___children___marks'
  | 'leftFooterText___noText___children___text'
  | 'leftFooterText___noText___style'
  | 'leftFooterText___noText___list'
  | 'leftFooterText___noText____rawChildren'
  | 'leftFooterText___enText'
  | 'leftFooterText___enText____key'
  | 'leftFooterText___enText____type'
  | 'leftFooterText___enText___children'
  | 'leftFooterText___enText___children____key'
  | 'leftFooterText___enText___children____type'
  | 'leftFooterText___enText___children___marks'
  | 'leftFooterText___enText___children___text'
  | 'leftFooterText___enText___style'
  | 'leftFooterText___enText___list'
  | 'leftFooterText___enText____rawChildren'
  | 'leftFooterText____rawNoText'
  | 'leftFooterText____rawEnText'
  | 'leftFooterText___id'
  | 'leftFooterText___parent___id'
  | 'leftFooterText___parent___parent___id'
  | 'leftFooterText___parent___parent___children'
  | 'leftFooterText___parent___children'
  | 'leftFooterText___parent___children___id'
  | 'leftFooterText___parent___children___children'
  | 'leftFooterText___parent___internal___content'
  | 'leftFooterText___parent___internal___contentDigest'
  | 'leftFooterText___parent___internal___description'
  | 'leftFooterText___parent___internal___fieldOwners'
  | 'leftFooterText___parent___internal___ignoreType'
  | 'leftFooterText___parent___internal___mediaType'
  | 'leftFooterText___parent___internal___owner'
  | 'leftFooterText___parent___internal___type'
  | 'leftFooterText___children'
  | 'leftFooterText___children___id'
  | 'leftFooterText___children___parent___id'
  | 'leftFooterText___children___parent___children'
  | 'leftFooterText___children___children'
  | 'leftFooterText___children___children___id'
  | 'leftFooterText___children___children___children'
  | 'leftFooterText___children___internal___content'
  | 'leftFooterText___children___internal___contentDigest'
  | 'leftFooterText___children___internal___description'
  | 'leftFooterText___children___internal___fieldOwners'
  | 'leftFooterText___children___internal___ignoreType'
  | 'leftFooterText___children___internal___mediaType'
  | 'leftFooterText___children___internal___owner'
  | 'leftFooterText___children___internal___type'
  | 'leftFooterText___internal___content'
  | 'leftFooterText___internal___contentDigest'
  | 'leftFooterText___internal___description'
  | 'leftFooterText___internal___fieldOwners'
  | 'leftFooterText___internal___ignoreType'
  | 'leftFooterText___internal___mediaType'
  | 'leftFooterText___internal___owner'
  | 'leftFooterText___internal___type'
  | 'footerContacts____key'
  | 'footerContacts____type'
  | 'footerContacts___footerContactsText____id'
  | 'footerContacts___footerContactsText____type'
  | 'footerContacts___footerContactsText____createdAt'
  | 'footerContacts___footerContactsText____updatedAt'
  | 'footerContacts___footerContactsText____rev'
  | 'footerContacts___footerContactsText____key'
  | 'footerContacts___footerContactsText___noText'
  | 'footerContacts___footerContactsText___noText____key'
  | 'footerContacts___footerContactsText___noText____type'
  | 'footerContacts___footerContactsText___noText___children'
  | 'footerContacts___footerContactsText___noText___style'
  | 'footerContacts___footerContactsText___noText___list'
  | 'footerContacts___footerContactsText___noText____rawChildren'
  | 'footerContacts___footerContactsText___enText'
  | 'footerContacts___footerContactsText___enText____key'
  | 'footerContacts___footerContactsText___enText____type'
  | 'footerContacts___footerContactsText___enText___children'
  | 'footerContacts___footerContactsText___enText___style'
  | 'footerContacts___footerContactsText___enText___list'
  | 'footerContacts___footerContactsText___enText____rawChildren'
  | 'footerContacts___footerContactsText____rawNoText'
  | 'footerContacts___footerContactsText____rawEnText'
  | 'footerContacts___footerContactsText___id'
  | 'footerContacts___footerContactsText___parent___id'
  | 'footerContacts___footerContactsText___parent___children'
  | 'footerContacts___footerContactsText___children'
  | 'footerContacts___footerContactsText___children___id'
  | 'footerContacts___footerContactsText___children___children'
  | 'footerContacts___footerContactsText___internal___content'
  | 'footerContacts___footerContactsText___internal___contentDigest'
  | 'footerContacts___footerContactsText___internal___description'
  | 'footerContacts___footerContactsText___internal___fieldOwners'
  | 'footerContacts___footerContactsText___internal___ignoreType'
  | 'footerContacts___footerContactsText___internal___mediaType'
  | 'footerContacts___footerContactsText___internal___owner'
  | 'footerContacts___footerContactsText___internal___type'
  | 'footerContacts___footerContactsUrl'
  | 'footerContacts____rawFooterContactsText'
  | 'footerAddress____id'
  | 'footerAddress____type'
  | 'footerAddress____createdAt'
  | 'footerAddress____updatedAt'
  | 'footerAddress____rev'
  | 'footerAddress____key'
  | 'footerAddress___noText'
  | 'footerAddress___noText____key'
  | 'footerAddress___noText____type'
  | 'footerAddress___noText___children'
  | 'footerAddress___noText___children____key'
  | 'footerAddress___noText___children____type'
  | 'footerAddress___noText___children___marks'
  | 'footerAddress___noText___children___text'
  | 'footerAddress___noText___style'
  | 'footerAddress___noText___list'
  | 'footerAddress___noText____rawChildren'
  | 'footerAddress___enText'
  | 'footerAddress___enText____key'
  | 'footerAddress___enText____type'
  | 'footerAddress___enText___children'
  | 'footerAddress___enText___children____key'
  | 'footerAddress___enText___children____type'
  | 'footerAddress___enText___children___marks'
  | 'footerAddress___enText___children___text'
  | 'footerAddress___enText___style'
  | 'footerAddress___enText___list'
  | 'footerAddress___enText____rawChildren'
  | 'footerAddress____rawNoText'
  | 'footerAddress____rawEnText'
  | 'footerAddress___id'
  | 'footerAddress___parent___id'
  | 'footerAddress___parent___parent___id'
  | 'footerAddress___parent___parent___children'
  | 'footerAddress___parent___children'
  | 'footerAddress___parent___children___id'
  | 'footerAddress___parent___children___children'
  | 'footerAddress___parent___internal___content'
  | 'footerAddress___parent___internal___contentDigest'
  | 'footerAddress___parent___internal___description'
  | 'footerAddress___parent___internal___fieldOwners'
  | 'footerAddress___parent___internal___ignoreType'
  | 'footerAddress___parent___internal___mediaType'
  | 'footerAddress___parent___internal___owner'
  | 'footerAddress___parent___internal___type'
  | 'footerAddress___children'
  | 'footerAddress___children___id'
  | 'footerAddress___children___parent___id'
  | 'footerAddress___children___parent___children'
  | 'footerAddress___children___children'
  | 'footerAddress___children___children___id'
  | 'footerAddress___children___children___children'
  | 'footerAddress___children___internal___content'
  | 'footerAddress___children___internal___contentDigest'
  | 'footerAddress___children___internal___description'
  | 'footerAddress___children___internal___fieldOwners'
  | 'footerAddress___children___internal___ignoreType'
  | 'footerAddress___children___internal___mediaType'
  | 'footerAddress___children___internal___owner'
  | 'footerAddress___children___internal___type'
  | 'footerAddress___internal___content'
  | 'footerAddress___internal___contentDigest'
  | 'footerAddress___internal___description'
  | 'footerAddress___internal___fieldOwners'
  | 'footerAddress___internal___ignoreType'
  | 'footerAddress___internal___mediaType'
  | 'footerAddress___internal___owner'
  | 'footerAddress___internal___type'
  | 'rightFooterText____id'
  | 'rightFooterText____type'
  | 'rightFooterText____createdAt'
  | 'rightFooterText____updatedAt'
  | 'rightFooterText____rev'
  | 'rightFooterText____key'
  | 'rightFooterText___noText'
  | 'rightFooterText___noText____key'
  | 'rightFooterText___noText____type'
  | 'rightFooterText___noText___children'
  | 'rightFooterText___noText___children____key'
  | 'rightFooterText___noText___children____type'
  | 'rightFooterText___noText___children___marks'
  | 'rightFooterText___noText___children___text'
  | 'rightFooterText___noText___style'
  | 'rightFooterText___noText___list'
  | 'rightFooterText___noText____rawChildren'
  | 'rightFooterText___enText'
  | 'rightFooterText___enText____key'
  | 'rightFooterText___enText____type'
  | 'rightFooterText___enText___children'
  | 'rightFooterText___enText___children____key'
  | 'rightFooterText___enText___children____type'
  | 'rightFooterText___enText___children___marks'
  | 'rightFooterText___enText___children___text'
  | 'rightFooterText___enText___style'
  | 'rightFooterText___enText___list'
  | 'rightFooterText___enText____rawChildren'
  | 'rightFooterText____rawNoText'
  | 'rightFooterText____rawEnText'
  | 'rightFooterText___id'
  | 'rightFooterText___parent___id'
  | 'rightFooterText___parent___parent___id'
  | 'rightFooterText___parent___parent___children'
  | 'rightFooterText___parent___children'
  | 'rightFooterText___parent___children___id'
  | 'rightFooterText___parent___children___children'
  | 'rightFooterText___parent___internal___content'
  | 'rightFooterText___parent___internal___contentDigest'
  | 'rightFooterText___parent___internal___description'
  | 'rightFooterText___parent___internal___fieldOwners'
  | 'rightFooterText___parent___internal___ignoreType'
  | 'rightFooterText___parent___internal___mediaType'
  | 'rightFooterText___parent___internal___owner'
  | 'rightFooterText___parent___internal___type'
  | 'rightFooterText___children'
  | 'rightFooterText___children___id'
  | 'rightFooterText___children___parent___id'
  | 'rightFooterText___children___parent___children'
  | 'rightFooterText___children___children'
  | 'rightFooterText___children___children___id'
  | 'rightFooterText___children___children___children'
  | 'rightFooterText___children___internal___content'
  | 'rightFooterText___children___internal___contentDigest'
  | 'rightFooterText___children___internal___description'
  | 'rightFooterText___children___internal___fieldOwners'
  | 'rightFooterText___children___internal___ignoreType'
  | 'rightFooterText___children___internal___mediaType'
  | 'rightFooterText___children___internal___owner'
  | 'rightFooterText___children___internal___type'
  | 'rightFooterText___internal___content'
  | 'rightFooterText___internal___contentDigest'
  | 'rightFooterText___internal___description'
  | 'rightFooterText___internal___fieldOwners'
  | 'rightFooterText___internal___ignoreType'
  | 'rightFooterText___internal___mediaType'
  | 'rightFooterText___internal___owner'
  | 'rightFooterText___internal___type'
  | 'footerSocialUrls'
  | 'footerSocialUrls____key'
  | 'footerSocialUrls____type'
  | 'footerSocialUrls___image____key'
  | 'footerSocialUrls___image____type'
  | 'footerSocialUrls___image___asset____id'
  | 'footerSocialUrls___image___asset____type'
  | 'footerSocialUrls___image___asset____createdAt'
  | 'footerSocialUrls___image___asset____updatedAt'
  | 'footerSocialUrls___image___asset____rev'
  | 'footerSocialUrls___image___asset____key'
  | 'footerSocialUrls___image___asset___originalFilename'
  | 'footerSocialUrls___image___asset___label'
  | 'footerSocialUrls___image___asset___title'
  | 'footerSocialUrls___image___asset___description'
  | 'footerSocialUrls___image___asset___sha1hash'
  | 'footerSocialUrls___image___asset___extension'
  | 'footerSocialUrls___image___asset___mimeType'
  | 'footerSocialUrls___image___asset___size'
  | 'footerSocialUrls___image___asset___assetId'
  | 'footerSocialUrls___image___asset___path'
  | 'footerSocialUrls___image___asset___url'
  | 'footerSocialUrls___image___asset____rawMetadata'
  | 'footerSocialUrls___image___asset____rawSource'
  | 'footerSocialUrls___image___asset___id'
  | 'footerSocialUrls___image___asset___children'
  | 'footerSocialUrls___image___hotspot____key'
  | 'footerSocialUrls___image___hotspot____type'
  | 'footerSocialUrls___image___hotspot___x'
  | 'footerSocialUrls___image___hotspot___y'
  | 'footerSocialUrls___image___hotspot___height'
  | 'footerSocialUrls___image___hotspot___width'
  | 'footerSocialUrls___image___crop____key'
  | 'footerSocialUrls___image___crop____type'
  | 'footerSocialUrls___image___crop___top'
  | 'footerSocialUrls___image___crop___bottom'
  | 'footerSocialUrls___image___crop___left'
  | 'footerSocialUrls___image___crop___right'
  | 'footerSocialUrls___image____rawAsset'
  | 'footerSocialUrls___image____rawHotspot'
  | 'footerSocialUrls___image____rawCrop'
  | 'footerSocialUrls___linkUrl'
  | 'footerSocialUrls____rawImage'
  | '_rawLeftFooterText'
  | '_rawFooterContacts'
  | '_rawFooterAddress'
  | '_rawRightFooterText'
  | '_rawFooterSocialUrls'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFooterFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  leftFooterText?: Maybe<SanityPageTextFilterInput>;
  footerContacts?: Maybe<SanityFooterContactsFilterInput>;
  footerAddress?: Maybe<SanityPageTextFilterInput>;
  rightFooterText?: Maybe<SanityPageTextFilterInput>;
  footerSocialUrls?: Maybe<SanityFooterSocialNetworkFilterListInput>;
  _rawLeftFooterText?: Maybe<JsonQueryOperatorInput>;
  _rawFooterContacts?: Maybe<JsonQueryOperatorInput>;
  _rawFooterAddress?: Maybe<JsonQueryOperatorInput>;
  _rawRightFooterText?: Maybe<JsonQueryOperatorInput>;
  _rawFooterSocialUrls?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityFooterGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFooterEdge>;
  nodes: Array<SanityFooter>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityFooterSocialNetwork = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  linkUrl?: Maybe<Scalars['String']>;
  _rawImage?: Maybe<Scalars['JSON']>;
};


export type SanityFooterSocialNetwork_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityFooterSocialNetworkFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  linkUrl?: Maybe<StringQueryOperatorInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
};

export type SanityFooterSocialNetworkFilterListInput = {
  elemMatch?: Maybe<SanityFooterSocialNetworkFilterInput>;
};

export type SanityFooterSortInput = {
  fields?: Maybe<Array<Maybe<SanityFooterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
  lng?: Maybe<FloatQueryOperatorInput>;
  alt?: Maybe<FloatQueryOperatorInput>;
};

export type SanityHomepage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  headerText?: Maybe<SanityPageText>;
  headerButtonText?: Maybe<SanityLocaleString>;
  headerButtonLink?: Maybe<Scalars['String']>;
  headerVideoUrl?: Maybe<Scalars['String']>;
  homePageTopTitle?: Maybe<SanityLocaleString>;
  homePageTopDescription?: Maybe<SanityPageText>;
  ctaBoxes?: Maybe<Array<Maybe<SanityCtaBox>>>;
  homePageMiddleTitle?: Maybe<SanityPageText>;
  ctaImages?: Maybe<Array<Maybe<SanityCtaImage>>>;
  _rawHeaderText?: Maybe<Scalars['JSON']>;
  _rawHeaderButtonText?: Maybe<Scalars['JSON']>;
  _rawHomePageTopTitle?: Maybe<Scalars['JSON']>;
  _rawHomePageTopDescription?: Maybe<Scalars['JSON']>;
  _rawCtaBoxes?: Maybe<Scalars['JSON']>;
  _rawHomePageMiddleTitle?: Maybe<Scalars['JSON']>;
  _rawCtaImages?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityHomepage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHomepage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityHomepage_RawHeaderTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomepage_RawHeaderButtonTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomepage_RawHomePageTopTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomepage_RawHomePageTopDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomepage_RawCtaBoxesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomepage_RawHomePageMiddleTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityHomepage_RawCtaImagesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityHomepageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityHomepageEdge>;
  nodes: Array<SanityHomepage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityHomepageGroupConnection>;
};


export type SanityHomepageConnectionDistinctArgs = {
  field: SanityHomepageFieldsEnum;
};


export type SanityHomepageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityHomepageFieldsEnum;
};

export type SanityHomepageEdge = {
  next?: Maybe<SanityHomepage>;
  node: SanityHomepage;
  previous?: Maybe<SanityHomepage>;
};

export type SanityHomepageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'headerText____id'
  | 'headerText____type'
  | 'headerText____createdAt'
  | 'headerText____updatedAt'
  | 'headerText____rev'
  | 'headerText____key'
  | 'headerText___noText'
  | 'headerText___noText____key'
  | 'headerText___noText____type'
  | 'headerText___noText___children'
  | 'headerText___noText___children____key'
  | 'headerText___noText___children____type'
  | 'headerText___noText___children___marks'
  | 'headerText___noText___children___text'
  | 'headerText___noText___style'
  | 'headerText___noText___list'
  | 'headerText___noText____rawChildren'
  | 'headerText___enText'
  | 'headerText___enText____key'
  | 'headerText___enText____type'
  | 'headerText___enText___children'
  | 'headerText___enText___children____key'
  | 'headerText___enText___children____type'
  | 'headerText___enText___children___marks'
  | 'headerText___enText___children___text'
  | 'headerText___enText___style'
  | 'headerText___enText___list'
  | 'headerText___enText____rawChildren'
  | 'headerText____rawNoText'
  | 'headerText____rawEnText'
  | 'headerText___id'
  | 'headerText___parent___id'
  | 'headerText___parent___parent___id'
  | 'headerText___parent___parent___children'
  | 'headerText___parent___children'
  | 'headerText___parent___children___id'
  | 'headerText___parent___children___children'
  | 'headerText___parent___internal___content'
  | 'headerText___parent___internal___contentDigest'
  | 'headerText___parent___internal___description'
  | 'headerText___parent___internal___fieldOwners'
  | 'headerText___parent___internal___ignoreType'
  | 'headerText___parent___internal___mediaType'
  | 'headerText___parent___internal___owner'
  | 'headerText___parent___internal___type'
  | 'headerText___children'
  | 'headerText___children___id'
  | 'headerText___children___parent___id'
  | 'headerText___children___parent___children'
  | 'headerText___children___children'
  | 'headerText___children___children___id'
  | 'headerText___children___children___children'
  | 'headerText___children___internal___content'
  | 'headerText___children___internal___contentDigest'
  | 'headerText___children___internal___description'
  | 'headerText___children___internal___fieldOwners'
  | 'headerText___children___internal___ignoreType'
  | 'headerText___children___internal___mediaType'
  | 'headerText___children___internal___owner'
  | 'headerText___children___internal___type'
  | 'headerText___internal___content'
  | 'headerText___internal___contentDigest'
  | 'headerText___internal___description'
  | 'headerText___internal___fieldOwners'
  | 'headerText___internal___ignoreType'
  | 'headerText___internal___mediaType'
  | 'headerText___internal___owner'
  | 'headerText___internal___type'
  | 'headerButtonText____key'
  | 'headerButtonText____type'
  | 'headerButtonText___no'
  | 'headerButtonText___en'
  | 'headerButtonLink'
  | 'headerVideoUrl'
  | 'homePageTopTitle____key'
  | 'homePageTopTitle____type'
  | 'homePageTopTitle___no'
  | 'homePageTopTitle___en'
  | 'homePageTopDescription____id'
  | 'homePageTopDescription____type'
  | 'homePageTopDescription____createdAt'
  | 'homePageTopDescription____updatedAt'
  | 'homePageTopDescription____rev'
  | 'homePageTopDescription____key'
  | 'homePageTopDescription___noText'
  | 'homePageTopDescription___noText____key'
  | 'homePageTopDescription___noText____type'
  | 'homePageTopDescription___noText___children'
  | 'homePageTopDescription___noText___children____key'
  | 'homePageTopDescription___noText___children____type'
  | 'homePageTopDescription___noText___children___marks'
  | 'homePageTopDescription___noText___children___text'
  | 'homePageTopDescription___noText___style'
  | 'homePageTopDescription___noText___list'
  | 'homePageTopDescription___noText____rawChildren'
  | 'homePageTopDescription___enText'
  | 'homePageTopDescription___enText____key'
  | 'homePageTopDescription___enText____type'
  | 'homePageTopDescription___enText___children'
  | 'homePageTopDescription___enText___children____key'
  | 'homePageTopDescription___enText___children____type'
  | 'homePageTopDescription___enText___children___marks'
  | 'homePageTopDescription___enText___children___text'
  | 'homePageTopDescription___enText___style'
  | 'homePageTopDescription___enText___list'
  | 'homePageTopDescription___enText____rawChildren'
  | 'homePageTopDescription____rawNoText'
  | 'homePageTopDescription____rawEnText'
  | 'homePageTopDescription___id'
  | 'homePageTopDescription___parent___id'
  | 'homePageTopDescription___parent___parent___id'
  | 'homePageTopDescription___parent___parent___children'
  | 'homePageTopDescription___parent___children'
  | 'homePageTopDescription___parent___children___id'
  | 'homePageTopDescription___parent___children___children'
  | 'homePageTopDescription___parent___internal___content'
  | 'homePageTopDescription___parent___internal___contentDigest'
  | 'homePageTopDescription___parent___internal___description'
  | 'homePageTopDescription___parent___internal___fieldOwners'
  | 'homePageTopDescription___parent___internal___ignoreType'
  | 'homePageTopDescription___parent___internal___mediaType'
  | 'homePageTopDescription___parent___internal___owner'
  | 'homePageTopDescription___parent___internal___type'
  | 'homePageTopDescription___children'
  | 'homePageTopDescription___children___id'
  | 'homePageTopDescription___children___parent___id'
  | 'homePageTopDescription___children___parent___children'
  | 'homePageTopDescription___children___children'
  | 'homePageTopDescription___children___children___id'
  | 'homePageTopDescription___children___children___children'
  | 'homePageTopDescription___children___internal___content'
  | 'homePageTopDescription___children___internal___contentDigest'
  | 'homePageTopDescription___children___internal___description'
  | 'homePageTopDescription___children___internal___fieldOwners'
  | 'homePageTopDescription___children___internal___ignoreType'
  | 'homePageTopDescription___children___internal___mediaType'
  | 'homePageTopDescription___children___internal___owner'
  | 'homePageTopDescription___children___internal___type'
  | 'homePageTopDescription___internal___content'
  | 'homePageTopDescription___internal___contentDigest'
  | 'homePageTopDescription___internal___description'
  | 'homePageTopDescription___internal___fieldOwners'
  | 'homePageTopDescription___internal___ignoreType'
  | 'homePageTopDescription___internal___mediaType'
  | 'homePageTopDescription___internal___owner'
  | 'homePageTopDescription___internal___type'
  | 'ctaBoxes'
  | 'ctaBoxes____key'
  | 'ctaBoxes____type'
  | 'ctaBoxes___image____key'
  | 'ctaBoxes___image____type'
  | 'ctaBoxes___image___asset____id'
  | 'ctaBoxes___image___asset____type'
  | 'ctaBoxes___image___asset____createdAt'
  | 'ctaBoxes___image___asset____updatedAt'
  | 'ctaBoxes___image___asset____rev'
  | 'ctaBoxes___image___asset____key'
  | 'ctaBoxes___image___asset___originalFilename'
  | 'ctaBoxes___image___asset___label'
  | 'ctaBoxes___image___asset___title'
  | 'ctaBoxes___image___asset___description'
  | 'ctaBoxes___image___asset___sha1hash'
  | 'ctaBoxes___image___asset___extension'
  | 'ctaBoxes___image___asset___mimeType'
  | 'ctaBoxes___image___asset___size'
  | 'ctaBoxes___image___asset___assetId'
  | 'ctaBoxes___image___asset___path'
  | 'ctaBoxes___image___asset___url'
  | 'ctaBoxes___image___asset____rawMetadata'
  | 'ctaBoxes___image___asset____rawSource'
  | 'ctaBoxes___image___asset___id'
  | 'ctaBoxes___image___asset___children'
  | 'ctaBoxes___image___hotspot____key'
  | 'ctaBoxes___image___hotspot____type'
  | 'ctaBoxes___image___hotspot___x'
  | 'ctaBoxes___image___hotspot___y'
  | 'ctaBoxes___image___hotspot___height'
  | 'ctaBoxes___image___hotspot___width'
  | 'ctaBoxes___image___crop____key'
  | 'ctaBoxes___image___crop____type'
  | 'ctaBoxes___image___crop___top'
  | 'ctaBoxes___image___crop___bottom'
  | 'ctaBoxes___image___crop___left'
  | 'ctaBoxes___image___crop___right'
  | 'ctaBoxes___image____rawAsset'
  | 'ctaBoxes___image____rawHotspot'
  | 'ctaBoxes___image____rawCrop'
  | 'ctaBoxes___hoverImage____key'
  | 'ctaBoxes___hoverImage____type'
  | 'ctaBoxes___hoverImage___asset____id'
  | 'ctaBoxes___hoverImage___asset____type'
  | 'ctaBoxes___hoverImage___asset____createdAt'
  | 'ctaBoxes___hoverImage___asset____updatedAt'
  | 'ctaBoxes___hoverImage___asset____rev'
  | 'ctaBoxes___hoverImage___asset____key'
  | 'ctaBoxes___hoverImage___asset___originalFilename'
  | 'ctaBoxes___hoverImage___asset___label'
  | 'ctaBoxes___hoverImage___asset___title'
  | 'ctaBoxes___hoverImage___asset___description'
  | 'ctaBoxes___hoverImage___asset___sha1hash'
  | 'ctaBoxes___hoverImage___asset___extension'
  | 'ctaBoxes___hoverImage___asset___mimeType'
  | 'ctaBoxes___hoverImage___asset___size'
  | 'ctaBoxes___hoverImage___asset___assetId'
  | 'ctaBoxes___hoverImage___asset___path'
  | 'ctaBoxes___hoverImage___asset___url'
  | 'ctaBoxes___hoverImage___asset____rawMetadata'
  | 'ctaBoxes___hoverImage___asset____rawSource'
  | 'ctaBoxes___hoverImage___asset___id'
  | 'ctaBoxes___hoverImage___asset___children'
  | 'ctaBoxes___hoverImage___hotspot____key'
  | 'ctaBoxes___hoverImage___hotspot____type'
  | 'ctaBoxes___hoverImage___hotspot___x'
  | 'ctaBoxes___hoverImage___hotspot___y'
  | 'ctaBoxes___hoverImage___hotspot___height'
  | 'ctaBoxes___hoverImage___hotspot___width'
  | 'ctaBoxes___hoverImage___crop____key'
  | 'ctaBoxes___hoverImage___crop____type'
  | 'ctaBoxes___hoverImage___crop___top'
  | 'ctaBoxes___hoverImage___crop___bottom'
  | 'ctaBoxes___hoverImage___crop___left'
  | 'ctaBoxes___hoverImage___crop___right'
  | 'ctaBoxes___hoverImage____rawAsset'
  | 'ctaBoxes___hoverImage____rawHotspot'
  | 'ctaBoxes___hoverImage____rawCrop'
  | 'ctaBoxes___title____key'
  | 'ctaBoxes___title____type'
  | 'ctaBoxes___title___no'
  | 'ctaBoxes___title___en'
  | 'ctaBoxes___description____id'
  | 'ctaBoxes___description____type'
  | 'ctaBoxes___description____createdAt'
  | 'ctaBoxes___description____updatedAt'
  | 'ctaBoxes___description____rev'
  | 'ctaBoxes___description____key'
  | 'ctaBoxes___description___noText'
  | 'ctaBoxes___description___noText____key'
  | 'ctaBoxes___description___noText____type'
  | 'ctaBoxes___description___noText___children'
  | 'ctaBoxes___description___noText___style'
  | 'ctaBoxes___description___noText___list'
  | 'ctaBoxes___description___noText____rawChildren'
  | 'ctaBoxes___description___enText'
  | 'ctaBoxes___description___enText____key'
  | 'ctaBoxes___description___enText____type'
  | 'ctaBoxes___description___enText___children'
  | 'ctaBoxes___description___enText___style'
  | 'ctaBoxes___description___enText___list'
  | 'ctaBoxes___description___enText____rawChildren'
  | 'ctaBoxes___description____rawNoText'
  | 'ctaBoxes___description____rawEnText'
  | 'ctaBoxes___description___id'
  | 'ctaBoxes___description___parent___id'
  | 'ctaBoxes___description___parent___children'
  | 'ctaBoxes___description___children'
  | 'ctaBoxes___description___children___id'
  | 'ctaBoxes___description___children___children'
  | 'ctaBoxes___description___internal___content'
  | 'ctaBoxes___description___internal___contentDigest'
  | 'ctaBoxes___description___internal___description'
  | 'ctaBoxes___description___internal___fieldOwners'
  | 'ctaBoxes___description___internal___ignoreType'
  | 'ctaBoxes___description___internal___mediaType'
  | 'ctaBoxes___description___internal___owner'
  | 'ctaBoxes___description___internal___type'
  | 'ctaBoxes___bottomText____key'
  | 'ctaBoxes___bottomText____type'
  | 'ctaBoxes___bottomText___no'
  | 'ctaBoxes___bottomText___en'
  | 'ctaBoxes___linkTo'
  | 'ctaBoxes____rawImage'
  | 'ctaBoxes____rawHoverImage'
  | 'ctaBoxes____rawTitle'
  | 'ctaBoxes____rawDescription'
  | 'ctaBoxes____rawBottomText'
  | 'homePageMiddleTitle____id'
  | 'homePageMiddleTitle____type'
  | 'homePageMiddleTitle____createdAt'
  | 'homePageMiddleTitle____updatedAt'
  | 'homePageMiddleTitle____rev'
  | 'homePageMiddleTitle____key'
  | 'homePageMiddleTitle___noText'
  | 'homePageMiddleTitle___noText____key'
  | 'homePageMiddleTitle___noText____type'
  | 'homePageMiddleTitle___noText___children'
  | 'homePageMiddleTitle___noText___children____key'
  | 'homePageMiddleTitle___noText___children____type'
  | 'homePageMiddleTitle___noText___children___marks'
  | 'homePageMiddleTitle___noText___children___text'
  | 'homePageMiddleTitle___noText___style'
  | 'homePageMiddleTitle___noText___list'
  | 'homePageMiddleTitle___noText____rawChildren'
  | 'homePageMiddleTitle___enText'
  | 'homePageMiddleTitle___enText____key'
  | 'homePageMiddleTitle___enText____type'
  | 'homePageMiddleTitle___enText___children'
  | 'homePageMiddleTitle___enText___children____key'
  | 'homePageMiddleTitle___enText___children____type'
  | 'homePageMiddleTitle___enText___children___marks'
  | 'homePageMiddleTitle___enText___children___text'
  | 'homePageMiddleTitle___enText___style'
  | 'homePageMiddleTitle___enText___list'
  | 'homePageMiddleTitle___enText____rawChildren'
  | 'homePageMiddleTitle____rawNoText'
  | 'homePageMiddleTitle____rawEnText'
  | 'homePageMiddleTitle___id'
  | 'homePageMiddleTitle___parent___id'
  | 'homePageMiddleTitle___parent___parent___id'
  | 'homePageMiddleTitle___parent___parent___children'
  | 'homePageMiddleTitle___parent___children'
  | 'homePageMiddleTitle___parent___children___id'
  | 'homePageMiddleTitle___parent___children___children'
  | 'homePageMiddleTitle___parent___internal___content'
  | 'homePageMiddleTitle___parent___internal___contentDigest'
  | 'homePageMiddleTitle___parent___internal___description'
  | 'homePageMiddleTitle___parent___internal___fieldOwners'
  | 'homePageMiddleTitle___parent___internal___ignoreType'
  | 'homePageMiddleTitle___parent___internal___mediaType'
  | 'homePageMiddleTitle___parent___internal___owner'
  | 'homePageMiddleTitle___parent___internal___type'
  | 'homePageMiddleTitle___children'
  | 'homePageMiddleTitle___children___id'
  | 'homePageMiddleTitle___children___parent___id'
  | 'homePageMiddleTitle___children___parent___children'
  | 'homePageMiddleTitle___children___children'
  | 'homePageMiddleTitle___children___children___id'
  | 'homePageMiddleTitle___children___children___children'
  | 'homePageMiddleTitle___children___internal___content'
  | 'homePageMiddleTitle___children___internal___contentDigest'
  | 'homePageMiddleTitle___children___internal___description'
  | 'homePageMiddleTitle___children___internal___fieldOwners'
  | 'homePageMiddleTitle___children___internal___ignoreType'
  | 'homePageMiddleTitle___children___internal___mediaType'
  | 'homePageMiddleTitle___children___internal___owner'
  | 'homePageMiddleTitle___children___internal___type'
  | 'homePageMiddleTitle___internal___content'
  | 'homePageMiddleTitle___internal___contentDigest'
  | 'homePageMiddleTitle___internal___description'
  | 'homePageMiddleTitle___internal___fieldOwners'
  | 'homePageMiddleTitle___internal___ignoreType'
  | 'homePageMiddleTitle___internal___mediaType'
  | 'homePageMiddleTitle___internal___owner'
  | 'homePageMiddleTitle___internal___type'
  | 'ctaImages'
  | 'ctaImages____key'
  | 'ctaImages____type'
  | 'ctaImages___image____key'
  | 'ctaImages___image____type'
  | 'ctaImages___image___asset____id'
  | 'ctaImages___image___asset____type'
  | 'ctaImages___image___asset____createdAt'
  | 'ctaImages___image___asset____updatedAt'
  | 'ctaImages___image___asset____rev'
  | 'ctaImages___image___asset____key'
  | 'ctaImages___image___asset___originalFilename'
  | 'ctaImages___image___asset___label'
  | 'ctaImages___image___asset___title'
  | 'ctaImages___image___asset___description'
  | 'ctaImages___image___asset___sha1hash'
  | 'ctaImages___image___asset___extension'
  | 'ctaImages___image___asset___mimeType'
  | 'ctaImages___image___asset___size'
  | 'ctaImages___image___asset___assetId'
  | 'ctaImages___image___asset___path'
  | 'ctaImages___image___asset___url'
  | 'ctaImages___image___asset____rawMetadata'
  | 'ctaImages___image___asset____rawSource'
  | 'ctaImages___image___asset___id'
  | 'ctaImages___image___asset___children'
  | 'ctaImages___image___hotspot____key'
  | 'ctaImages___image___hotspot____type'
  | 'ctaImages___image___hotspot___x'
  | 'ctaImages___image___hotspot___y'
  | 'ctaImages___image___hotspot___height'
  | 'ctaImages___image___hotspot___width'
  | 'ctaImages___image___crop____key'
  | 'ctaImages___image___crop____type'
  | 'ctaImages___image___crop___top'
  | 'ctaImages___image___crop___bottom'
  | 'ctaImages___image___crop___left'
  | 'ctaImages___image___crop___right'
  | 'ctaImages___image____rawAsset'
  | 'ctaImages___image____rawHotspot'
  | 'ctaImages___image____rawCrop'
  | 'ctaImages___linkTo'
  | 'ctaImages___linkText____key'
  | 'ctaImages___linkText____type'
  | 'ctaImages___linkText___no'
  | 'ctaImages___linkText___en'
  | 'ctaImages____rawImage'
  | 'ctaImages____rawLinkText'
  | '_rawHeaderText'
  | '_rawHeaderButtonText'
  | '_rawHomePageTopTitle'
  | '_rawHomePageTopDescription'
  | '_rawCtaBoxes'
  | '_rawHomePageMiddleTitle'
  | '_rawCtaImages'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityHomepageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  headerText?: Maybe<SanityPageTextFilterInput>;
  headerButtonText?: Maybe<SanityLocaleStringFilterInput>;
  headerButtonLink?: Maybe<StringQueryOperatorInput>;
  headerVideoUrl?: Maybe<StringQueryOperatorInput>;
  homePageTopTitle?: Maybe<SanityLocaleStringFilterInput>;
  homePageTopDescription?: Maybe<SanityPageTextFilterInput>;
  ctaBoxes?: Maybe<SanityCtaBoxFilterListInput>;
  homePageMiddleTitle?: Maybe<SanityPageTextFilterInput>;
  ctaImages?: Maybe<SanityCtaImageFilterListInput>;
  _rawHeaderText?: Maybe<JsonQueryOperatorInput>;
  _rawHeaderButtonText?: Maybe<JsonQueryOperatorInput>;
  _rawHomePageTopTitle?: Maybe<JsonQueryOperatorInput>;
  _rawHomePageTopDescription?: Maybe<JsonQueryOperatorInput>;
  _rawCtaBoxes?: Maybe<JsonQueryOperatorInput>;
  _rawHomePageMiddleTitle?: Maybe<JsonQueryOperatorInput>;
  _rawCtaImages?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityHomepageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityHomepageEdge>;
  nodes: Array<SanityHomepage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityHomepageSortInput = {
  fields?: Maybe<Array<Maybe<SanityHomepageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  fixed?: Maybe<SanityImageFixed>;
  fluid?: Maybe<SanityImageFluid>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<SanityImageFormat>;
};


export type SanityImageAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  toFormat?: Maybe<SanityImageFormat>;
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export type SanityImageAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'metadata____key'
  | 'metadata____type'
  | 'metadata___location____key'
  | 'metadata___location____type'
  | 'metadata___location___lat'
  | 'metadata___location___lng'
  | 'metadata___location___alt'
  | 'metadata___dimensions____key'
  | 'metadata___dimensions____type'
  | 'metadata___dimensions___height'
  | 'metadata___dimensions___width'
  | 'metadata___dimensions___aspectRatio'
  | 'metadata___palette____key'
  | 'metadata___palette____type'
  | 'metadata___palette___darkMuted____key'
  | 'metadata___palette___darkMuted____type'
  | 'metadata___palette___darkMuted___background'
  | 'metadata___palette___darkMuted___foreground'
  | 'metadata___palette___darkMuted___population'
  | 'metadata___palette___darkMuted___title'
  | 'metadata___palette___lightVibrant____key'
  | 'metadata___palette___lightVibrant____type'
  | 'metadata___palette___lightVibrant___background'
  | 'metadata___palette___lightVibrant___foreground'
  | 'metadata___palette___lightVibrant___population'
  | 'metadata___palette___lightVibrant___title'
  | 'metadata___palette___darkVibrant____key'
  | 'metadata___palette___darkVibrant____type'
  | 'metadata___palette___darkVibrant___background'
  | 'metadata___palette___darkVibrant___foreground'
  | 'metadata___palette___darkVibrant___population'
  | 'metadata___palette___darkVibrant___title'
  | 'metadata___palette___vibrant____key'
  | 'metadata___palette___vibrant____type'
  | 'metadata___palette___vibrant___background'
  | 'metadata___palette___vibrant___foreground'
  | 'metadata___palette___vibrant___population'
  | 'metadata___palette___vibrant___title'
  | 'metadata___palette___dominant____key'
  | 'metadata___palette___dominant____type'
  | 'metadata___palette___dominant___background'
  | 'metadata___palette___dominant___foreground'
  | 'metadata___palette___dominant___population'
  | 'metadata___palette___dominant___title'
  | 'metadata___palette___lightMuted____key'
  | 'metadata___palette___lightMuted____type'
  | 'metadata___palette___lightMuted___background'
  | 'metadata___palette___lightMuted___foreground'
  | 'metadata___palette___lightMuted___population'
  | 'metadata___palette___lightMuted___title'
  | 'metadata___palette___muted____key'
  | 'metadata___palette___muted____type'
  | 'metadata___palette___muted___background'
  | 'metadata___palette___muted___foreground'
  | 'metadata___palette___muted___population'
  | 'metadata___palette___muted___title'
  | 'metadata___palette____rawDarkMuted'
  | 'metadata___palette____rawLightVibrant'
  | 'metadata___palette____rawDarkVibrant'
  | 'metadata___palette____rawVibrant'
  | 'metadata___palette____rawDominant'
  | 'metadata___palette____rawLightMuted'
  | 'metadata___palette____rawMuted'
  | 'metadata___lqip'
  | 'metadata___hasAlpha'
  | 'metadata___isOpaque'
  | 'metadata____rawLocation'
  | 'metadata____rawDimensions'
  | 'metadata____rawPalette'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawMetadata'
  | '_rawSource'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___base64'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___sizes'
  | 'fluid___base64'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  originalFilename?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sha1hash?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<FloatQueryOperatorInput>;
  assetId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  metadata?: Maybe<SanityImageMetadataFilterInput>;
  source?: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: Maybe<JsonQueryOperatorInput>;
  _rawSource?: Maybe<JsonQueryOperatorInput>;
  fixed?: Maybe<SanityImageFixedFilterInput>;
  fluid?: Maybe<SanityImageFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  top?: Maybe<FloatQueryOperatorInput>;
  bottom?: Maybe<FloatQueryOperatorInput>;
  left?: Maybe<FloatQueryOperatorInput>;
  right?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageDescriptionBox = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  description?: Maybe<SanityPageText>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawDescription?: Maybe<Scalars['JSON']>;
};


export type SanityImageDescriptionBox_RawImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageDescriptionBox_RawDescriptionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageDescriptionBoxFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<SanityImageFilterInput>;
  description?: Maybe<SanityPageTextFilterInput>;
  _rawImage?: Maybe<JsonQueryOperatorInput>;
  _rawDescription?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImageDescriptionBoxFilterListInput = {
  elemMatch?: Maybe<SanityImageDescriptionBoxFilterInput>;
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  asset?: Maybe<SanityImageAssetFilterInput>;
  hotspot?: Maybe<SanityImageHotspotFilterInput>;
  crop?: Maybe<SanityImageCropFilterInput>;
  _rawAsset?: Maybe<JsonQueryOperatorInput>;
  _rawHotspot?: Maybe<JsonQueryOperatorInput>;
  _rawCrop?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImageFixed = {
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  base64?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type SanityImageFixedFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageFluid = {
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Scalars['String'];
  base64?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type SanityImageFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type SanityImageFormat =
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  x?: Maybe<FloatQueryOperatorInput>;
  y?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<SanityGeopointFilterInput>;
  dimensions?: Maybe<SanityImageDimensionsFilterInput>;
  palette?: Maybe<SanityImagePaletteFilterInput>;
  lqip?: Maybe<StringQueryOperatorInput>;
  hasAlpha?: Maybe<BooleanQueryOperatorInput>;
  isOpaque?: Maybe<BooleanQueryOperatorInput>;
  _rawLocation?: Maybe<JsonQueryOperatorInput>;
  _rawDimensions?: Maybe<JsonQueryOperatorInput>;
  _rawPalette?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: Maybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawVibrant?: Maybe<JsonQueryOperatorInput>;
  _rawDominant?: Maybe<JsonQueryOperatorInput>;
  _rawLightMuted?: Maybe<JsonQueryOperatorInput>;
  _rawMuted?: Maybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  foreground?: Maybe<StringQueryOperatorInput>;
  population?: Maybe<FloatQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SanityIndivPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  indivInfo?: Maybe<SanityBox>;
  _rawIndivInfo?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityIndivPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityIndivPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityIndivPage_RawIndivInfoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityIndivPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityIndivPageEdge>;
  nodes: Array<SanityIndivPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityIndivPageGroupConnection>;
};


export type SanityIndivPageConnectionDistinctArgs = {
  field: SanityIndivPageFieldsEnum;
};


export type SanityIndivPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityIndivPageFieldsEnum;
};

export type SanityIndivPageEdge = {
  next?: Maybe<SanityIndivPage>;
  node: SanityIndivPage;
  previous?: Maybe<SanityIndivPage>;
};

export type SanityIndivPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'indivInfo____key'
  | 'indivInfo____type'
  | 'indivInfo___image____key'
  | 'indivInfo___image____type'
  | 'indivInfo___image___asset____id'
  | 'indivInfo___image___asset____type'
  | 'indivInfo___image___asset____createdAt'
  | 'indivInfo___image___asset____updatedAt'
  | 'indivInfo___image___asset____rev'
  | 'indivInfo___image___asset____key'
  | 'indivInfo___image___asset___originalFilename'
  | 'indivInfo___image___asset___label'
  | 'indivInfo___image___asset___title'
  | 'indivInfo___image___asset___description'
  | 'indivInfo___image___asset___sha1hash'
  | 'indivInfo___image___asset___extension'
  | 'indivInfo___image___asset___mimeType'
  | 'indivInfo___image___asset___size'
  | 'indivInfo___image___asset___assetId'
  | 'indivInfo___image___asset___path'
  | 'indivInfo___image___asset___url'
  | 'indivInfo___image___asset____rawMetadata'
  | 'indivInfo___image___asset____rawSource'
  | 'indivInfo___image___asset___id'
  | 'indivInfo___image___asset___children'
  | 'indivInfo___image___hotspot____key'
  | 'indivInfo___image___hotspot____type'
  | 'indivInfo___image___hotspot___x'
  | 'indivInfo___image___hotspot___y'
  | 'indivInfo___image___hotspot___height'
  | 'indivInfo___image___hotspot___width'
  | 'indivInfo___image___crop____key'
  | 'indivInfo___image___crop____type'
  | 'indivInfo___image___crop___top'
  | 'indivInfo___image___crop___bottom'
  | 'indivInfo___image___crop___left'
  | 'indivInfo___image___crop___right'
  | 'indivInfo___image____rawAsset'
  | 'indivInfo___image____rawHotspot'
  | 'indivInfo___image____rawCrop'
  | 'indivInfo___title____key'
  | 'indivInfo___title____type'
  | 'indivInfo___title___no'
  | 'indivInfo___title___en'
  | 'indivInfo___description____id'
  | 'indivInfo___description____type'
  | 'indivInfo___description____createdAt'
  | 'indivInfo___description____updatedAt'
  | 'indivInfo___description____rev'
  | 'indivInfo___description____key'
  | 'indivInfo___description___noText'
  | 'indivInfo___description___noText____key'
  | 'indivInfo___description___noText____type'
  | 'indivInfo___description___noText___children'
  | 'indivInfo___description___noText___style'
  | 'indivInfo___description___noText___list'
  | 'indivInfo___description___noText____rawChildren'
  | 'indivInfo___description___enText'
  | 'indivInfo___description___enText____key'
  | 'indivInfo___description___enText____type'
  | 'indivInfo___description___enText___children'
  | 'indivInfo___description___enText___style'
  | 'indivInfo___description___enText___list'
  | 'indivInfo___description___enText____rawChildren'
  | 'indivInfo___description____rawNoText'
  | 'indivInfo___description____rawEnText'
  | 'indivInfo___description___id'
  | 'indivInfo___description___parent___id'
  | 'indivInfo___description___parent___children'
  | 'indivInfo___description___children'
  | 'indivInfo___description___children___id'
  | 'indivInfo___description___children___children'
  | 'indivInfo___description___internal___content'
  | 'indivInfo___description___internal___contentDigest'
  | 'indivInfo___description___internal___description'
  | 'indivInfo___description___internal___fieldOwners'
  | 'indivInfo___description___internal___ignoreType'
  | 'indivInfo___description___internal___mediaType'
  | 'indivInfo___description___internal___owner'
  | 'indivInfo___description___internal___type'
  | 'indivInfo____rawImage'
  | 'indivInfo____rawTitle'
  | 'indivInfo____rawDescription'
  | '_rawIndivInfo'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityIndivPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  indivInfo?: Maybe<SanityBoxFilterInput>;
  _rawIndivInfo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityIndivPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityIndivPageEdge>;
  nodes: Array<SanityIndivPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityIndivPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityIndivPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityLentPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  lentInfo?: Maybe<SanityBox>;
  _rawLentInfo?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityLentPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityLentPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityLentPage_RawLentInfoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityLentPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityLentPageEdge>;
  nodes: Array<SanityLentPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityLentPageGroupConnection>;
};


export type SanityLentPageConnectionDistinctArgs = {
  field: SanityLentPageFieldsEnum;
};


export type SanityLentPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityLentPageFieldsEnum;
};

export type SanityLentPageEdge = {
  next?: Maybe<SanityLentPage>;
  node: SanityLentPage;
  previous?: Maybe<SanityLentPage>;
};

export type SanityLentPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'lentInfo____key'
  | 'lentInfo____type'
  | 'lentInfo___image____key'
  | 'lentInfo___image____type'
  | 'lentInfo___image___asset____id'
  | 'lentInfo___image___asset____type'
  | 'lentInfo___image___asset____createdAt'
  | 'lentInfo___image___asset____updatedAt'
  | 'lentInfo___image___asset____rev'
  | 'lentInfo___image___asset____key'
  | 'lentInfo___image___asset___originalFilename'
  | 'lentInfo___image___asset___label'
  | 'lentInfo___image___asset___title'
  | 'lentInfo___image___asset___description'
  | 'lentInfo___image___asset___sha1hash'
  | 'lentInfo___image___asset___extension'
  | 'lentInfo___image___asset___mimeType'
  | 'lentInfo___image___asset___size'
  | 'lentInfo___image___asset___assetId'
  | 'lentInfo___image___asset___path'
  | 'lentInfo___image___asset___url'
  | 'lentInfo___image___asset____rawMetadata'
  | 'lentInfo___image___asset____rawSource'
  | 'lentInfo___image___asset___id'
  | 'lentInfo___image___asset___children'
  | 'lentInfo___image___hotspot____key'
  | 'lentInfo___image___hotspot____type'
  | 'lentInfo___image___hotspot___x'
  | 'lentInfo___image___hotspot___y'
  | 'lentInfo___image___hotspot___height'
  | 'lentInfo___image___hotspot___width'
  | 'lentInfo___image___crop____key'
  | 'lentInfo___image___crop____type'
  | 'lentInfo___image___crop___top'
  | 'lentInfo___image___crop___bottom'
  | 'lentInfo___image___crop___left'
  | 'lentInfo___image___crop___right'
  | 'lentInfo___image____rawAsset'
  | 'lentInfo___image____rawHotspot'
  | 'lentInfo___image____rawCrop'
  | 'lentInfo___title____key'
  | 'lentInfo___title____type'
  | 'lentInfo___title___no'
  | 'lentInfo___title___en'
  | 'lentInfo___description____id'
  | 'lentInfo___description____type'
  | 'lentInfo___description____createdAt'
  | 'lentInfo___description____updatedAt'
  | 'lentInfo___description____rev'
  | 'lentInfo___description____key'
  | 'lentInfo___description___noText'
  | 'lentInfo___description___noText____key'
  | 'lentInfo___description___noText____type'
  | 'lentInfo___description___noText___children'
  | 'lentInfo___description___noText___style'
  | 'lentInfo___description___noText___list'
  | 'lentInfo___description___noText____rawChildren'
  | 'lentInfo___description___enText'
  | 'lentInfo___description___enText____key'
  | 'lentInfo___description___enText____type'
  | 'lentInfo___description___enText___children'
  | 'lentInfo___description___enText___style'
  | 'lentInfo___description___enText___list'
  | 'lentInfo___description___enText____rawChildren'
  | 'lentInfo___description____rawNoText'
  | 'lentInfo___description____rawEnText'
  | 'lentInfo___description___id'
  | 'lentInfo___description___parent___id'
  | 'lentInfo___description___parent___children'
  | 'lentInfo___description___children'
  | 'lentInfo___description___children___id'
  | 'lentInfo___description___children___children'
  | 'lentInfo___description___internal___content'
  | 'lentInfo___description___internal___contentDigest'
  | 'lentInfo___description___internal___description'
  | 'lentInfo___description___internal___fieldOwners'
  | 'lentInfo___description___internal___ignoreType'
  | 'lentInfo___description___internal___mediaType'
  | 'lentInfo___description___internal___owner'
  | 'lentInfo___description___internal___type'
  | 'lentInfo____rawImage'
  | 'lentInfo____rawTitle'
  | 'lentInfo____rawDescription'
  | '_rawLentInfo'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityLentPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  lentInfo?: Maybe<SanityBoxFilterInput>;
  _rawLentInfo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityLentPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityLentPageEdge>;
  nodes: Array<SanityLentPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityLentPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityLentPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityLocaleString = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type SanityLocaleStringFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  no?: Maybe<StringQueryOperatorInput>;
  en?: Maybe<StringQueryOperatorInput>;
};

export type SanityOsloJazzPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  osloJazzInfo?: Maybe<SanityBox>;
  _rawOsloJazzInfo?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityOsloJazzPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityOsloJazzPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityOsloJazzPage_RawOsloJazzInfoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityOsloJazzPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityOsloJazzPageEdge>;
  nodes: Array<SanityOsloJazzPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityOsloJazzPageGroupConnection>;
};


export type SanityOsloJazzPageConnectionDistinctArgs = {
  field: SanityOsloJazzPageFieldsEnum;
};


export type SanityOsloJazzPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityOsloJazzPageFieldsEnum;
};

export type SanityOsloJazzPageEdge = {
  next?: Maybe<SanityOsloJazzPage>;
  node: SanityOsloJazzPage;
  previous?: Maybe<SanityOsloJazzPage>;
};

export type SanityOsloJazzPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'osloJazzInfo____key'
  | 'osloJazzInfo____type'
  | 'osloJazzInfo___image____key'
  | 'osloJazzInfo___image____type'
  | 'osloJazzInfo___image___asset____id'
  | 'osloJazzInfo___image___asset____type'
  | 'osloJazzInfo___image___asset____createdAt'
  | 'osloJazzInfo___image___asset____updatedAt'
  | 'osloJazzInfo___image___asset____rev'
  | 'osloJazzInfo___image___asset____key'
  | 'osloJazzInfo___image___asset___originalFilename'
  | 'osloJazzInfo___image___asset___label'
  | 'osloJazzInfo___image___asset___title'
  | 'osloJazzInfo___image___asset___description'
  | 'osloJazzInfo___image___asset___sha1hash'
  | 'osloJazzInfo___image___asset___extension'
  | 'osloJazzInfo___image___asset___mimeType'
  | 'osloJazzInfo___image___asset___size'
  | 'osloJazzInfo___image___asset___assetId'
  | 'osloJazzInfo___image___asset___path'
  | 'osloJazzInfo___image___asset___url'
  | 'osloJazzInfo___image___asset____rawMetadata'
  | 'osloJazzInfo___image___asset____rawSource'
  | 'osloJazzInfo___image___asset___id'
  | 'osloJazzInfo___image___asset___children'
  | 'osloJazzInfo___image___hotspot____key'
  | 'osloJazzInfo___image___hotspot____type'
  | 'osloJazzInfo___image___hotspot___x'
  | 'osloJazzInfo___image___hotspot___y'
  | 'osloJazzInfo___image___hotspot___height'
  | 'osloJazzInfo___image___hotspot___width'
  | 'osloJazzInfo___image___crop____key'
  | 'osloJazzInfo___image___crop____type'
  | 'osloJazzInfo___image___crop___top'
  | 'osloJazzInfo___image___crop___bottom'
  | 'osloJazzInfo___image___crop___left'
  | 'osloJazzInfo___image___crop___right'
  | 'osloJazzInfo___image____rawAsset'
  | 'osloJazzInfo___image____rawHotspot'
  | 'osloJazzInfo___image____rawCrop'
  | 'osloJazzInfo___title____key'
  | 'osloJazzInfo___title____type'
  | 'osloJazzInfo___title___no'
  | 'osloJazzInfo___title___en'
  | 'osloJazzInfo___description____id'
  | 'osloJazzInfo___description____type'
  | 'osloJazzInfo___description____createdAt'
  | 'osloJazzInfo___description____updatedAt'
  | 'osloJazzInfo___description____rev'
  | 'osloJazzInfo___description____key'
  | 'osloJazzInfo___description___noText'
  | 'osloJazzInfo___description___noText____key'
  | 'osloJazzInfo___description___noText____type'
  | 'osloJazzInfo___description___noText___children'
  | 'osloJazzInfo___description___noText___style'
  | 'osloJazzInfo___description___noText___list'
  | 'osloJazzInfo___description___noText____rawChildren'
  | 'osloJazzInfo___description___enText'
  | 'osloJazzInfo___description___enText____key'
  | 'osloJazzInfo___description___enText____type'
  | 'osloJazzInfo___description___enText___children'
  | 'osloJazzInfo___description___enText___style'
  | 'osloJazzInfo___description___enText___list'
  | 'osloJazzInfo___description___enText____rawChildren'
  | 'osloJazzInfo___description____rawNoText'
  | 'osloJazzInfo___description____rawEnText'
  | 'osloJazzInfo___description___id'
  | 'osloJazzInfo___description___parent___id'
  | 'osloJazzInfo___description___parent___children'
  | 'osloJazzInfo___description___children'
  | 'osloJazzInfo___description___children___id'
  | 'osloJazzInfo___description___children___children'
  | 'osloJazzInfo___description___internal___content'
  | 'osloJazzInfo___description___internal___contentDigest'
  | 'osloJazzInfo___description___internal___description'
  | 'osloJazzInfo___description___internal___fieldOwners'
  | 'osloJazzInfo___description___internal___ignoreType'
  | 'osloJazzInfo___description___internal___mediaType'
  | 'osloJazzInfo___description___internal___owner'
  | 'osloJazzInfo___description___internal___type'
  | 'osloJazzInfo____rawImage'
  | 'osloJazzInfo____rawTitle'
  | 'osloJazzInfo____rawDescription'
  | '_rawOsloJazzInfo'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityOsloJazzPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  osloJazzInfo?: Maybe<SanityBoxFilterInput>;
  _rawOsloJazzInfo?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityOsloJazzPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityOsloJazzPageEdge>;
  nodes: Array<SanityOsloJazzPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityOsloJazzPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityOsloJazzPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  content?: Maybe<SanityPageText>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPage_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawContentArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPageGroupConnection>;
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageEdge = {
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

export type SanityPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'content____id'
  | 'content____type'
  | 'content____createdAt'
  | 'content____updatedAt'
  | 'content____rev'
  | 'content____key'
  | 'content___noText'
  | 'content___noText____key'
  | 'content___noText____type'
  | 'content___noText___children'
  | 'content___noText___children____key'
  | 'content___noText___children____type'
  | 'content___noText___children___marks'
  | 'content___noText___children___text'
  | 'content___noText___style'
  | 'content___noText___list'
  | 'content___noText____rawChildren'
  | 'content___enText'
  | 'content___enText____key'
  | 'content___enText____type'
  | 'content___enText___children'
  | 'content___enText___children____key'
  | 'content___enText___children____type'
  | 'content___enText___children___marks'
  | 'content___enText___children___text'
  | 'content___enText___style'
  | 'content___enText___list'
  | 'content___enText____rawChildren'
  | 'content____rawNoText'
  | 'content____rawEnText'
  | 'content___id'
  | 'content___parent___id'
  | 'content___parent___parent___id'
  | 'content___parent___parent___children'
  | 'content___parent___children'
  | 'content___parent___children___id'
  | 'content___parent___children___children'
  | 'content___parent___internal___content'
  | 'content___parent___internal___contentDigest'
  | 'content___parent___internal___description'
  | 'content___parent___internal___fieldOwners'
  | 'content___parent___internal___ignoreType'
  | 'content___parent___internal___mediaType'
  | 'content___parent___internal___owner'
  | 'content___parent___internal___type'
  | 'content___children'
  | 'content___children___id'
  | 'content___children___parent___id'
  | 'content___children___parent___children'
  | 'content___children___children'
  | 'content___children___children___id'
  | 'content___children___children___children'
  | 'content___children___internal___content'
  | 'content___children___internal___contentDigest'
  | 'content___children___internal___description'
  | 'content___children___internal___fieldOwners'
  | 'content___children___internal___ignoreType'
  | 'content___children___internal___mediaType'
  | 'content___children___internal___owner'
  | 'content___children___internal___type'
  | 'content___internal___content'
  | 'content___internal___contentDigest'
  | 'content___internal___description'
  | 'content___internal___fieldOwners'
  | 'content___internal___ignoreType'
  | 'content___internal___mediaType'
  | 'content___internal___owner'
  | 'content___internal___type'
  | '_rawSlug'
  | '_rawContent'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<SanitySlugFilterInput>;
  content?: Maybe<SanityPageTextFilterInput>;
  _rawSlug?: Maybe<JsonQueryOperatorInput>;
  _rawContent?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityPageText = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  noText?: Maybe<Array<Maybe<SanityBlock>>>;
  enText?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawNoText?: Maybe<Scalars['JSON']>;
  _rawEnText?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPageText_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPageText_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityPageText_RawNoTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityPageText_RawEnTextArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageTextConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageTextEdge>;
  nodes: Array<SanityPageText>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityPageTextGroupConnection>;
};


export type SanityPageTextConnectionDistinctArgs = {
  field: SanityPageTextFieldsEnum;
};


export type SanityPageTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityPageTextFieldsEnum;
};

export type SanityPageTextEdge = {
  next?: Maybe<SanityPageText>;
  node: SanityPageText;
  previous?: Maybe<SanityPageText>;
};

export type SanityPageTextFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'noText'
  | 'noText____key'
  | 'noText____type'
  | 'noText___children'
  | 'noText___children____key'
  | 'noText___children____type'
  | 'noText___children___marks'
  | 'noText___children___text'
  | 'noText___style'
  | 'noText___list'
  | 'noText____rawChildren'
  | 'enText'
  | 'enText____key'
  | 'enText____type'
  | 'enText___children'
  | 'enText___children____key'
  | 'enText___children____type'
  | 'enText___children___marks'
  | 'enText___children___text'
  | 'enText___style'
  | 'enText___list'
  | 'enText____rawChildren'
  | '_rawNoText'
  | '_rawEnText'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPageTextFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  noText?: Maybe<SanityBlockFilterListInput>;
  enText?: Maybe<SanityBlockFilterListInput>;
  _rawNoText?: Maybe<JsonQueryOperatorInput>;
  _rawEnText?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityPageTextGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageTextEdge>;
  nodes: Array<SanityPageText>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityPageTextSortInput = {
  fields?: Maybe<Array<Maybe<SanityPageTextFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type SanityServicesPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<SanityLocaleString>;
  boxes?: Maybe<Array<Maybe<SanityBoxWithLink>>>;
  firstImage?: Maybe<SanityImage>;
  secondImage?: Maybe<SanityImage>;
  _rawTitle?: Maybe<Scalars['JSON']>;
  _rawBoxes?: Maybe<Scalars['JSON']>;
  _rawFirstImage?: Maybe<Scalars['JSON']>;
  _rawSecondImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityServicesPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityServicesPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityServicesPage_RawTitleArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityServicesPage_RawBoxesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityServicesPage_RawFirstImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityServicesPage_RawSecondImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityServicesPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityServicesPageEdge>;
  nodes: Array<SanityServicesPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityServicesPageGroupConnection>;
};


export type SanityServicesPageConnectionDistinctArgs = {
  field: SanityServicesPageFieldsEnum;
};


export type SanityServicesPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityServicesPageFieldsEnum;
};

export type SanityServicesPageEdge = {
  next?: Maybe<SanityServicesPage>;
  node: SanityServicesPage;
  previous?: Maybe<SanityServicesPage>;
};

export type SanityServicesPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title____key'
  | 'title____type'
  | 'title___no'
  | 'title___en'
  | 'boxes'
  | 'boxes____key'
  | 'boxes____type'
  | 'boxes___image____key'
  | 'boxes___image____type'
  | 'boxes___image___asset____id'
  | 'boxes___image___asset____type'
  | 'boxes___image___asset____createdAt'
  | 'boxes___image___asset____updatedAt'
  | 'boxes___image___asset____rev'
  | 'boxes___image___asset____key'
  | 'boxes___image___asset___originalFilename'
  | 'boxes___image___asset___label'
  | 'boxes___image___asset___title'
  | 'boxes___image___asset___description'
  | 'boxes___image___asset___sha1hash'
  | 'boxes___image___asset___extension'
  | 'boxes___image___asset___mimeType'
  | 'boxes___image___asset___size'
  | 'boxes___image___asset___assetId'
  | 'boxes___image___asset___path'
  | 'boxes___image___asset___url'
  | 'boxes___image___asset____rawMetadata'
  | 'boxes___image___asset____rawSource'
  | 'boxes___image___asset___id'
  | 'boxes___image___asset___children'
  | 'boxes___image___hotspot____key'
  | 'boxes___image___hotspot____type'
  | 'boxes___image___hotspot___x'
  | 'boxes___image___hotspot___y'
  | 'boxes___image___hotspot___height'
  | 'boxes___image___hotspot___width'
  | 'boxes___image___crop____key'
  | 'boxes___image___crop____type'
  | 'boxes___image___crop___top'
  | 'boxes___image___crop___bottom'
  | 'boxes___image___crop___left'
  | 'boxes___image___crop___right'
  | 'boxes___image____rawAsset'
  | 'boxes___image____rawHotspot'
  | 'boxes___image____rawCrop'
  | 'boxes___title____key'
  | 'boxes___title____type'
  | 'boxes___title___no'
  | 'boxes___title___en'
  | 'boxes___description____id'
  | 'boxes___description____type'
  | 'boxes___description____createdAt'
  | 'boxes___description____updatedAt'
  | 'boxes___description____rev'
  | 'boxes___description____key'
  | 'boxes___description___noText'
  | 'boxes___description___noText____key'
  | 'boxes___description___noText____type'
  | 'boxes___description___noText___children'
  | 'boxes___description___noText___style'
  | 'boxes___description___noText___list'
  | 'boxes___description___noText____rawChildren'
  | 'boxes___description___enText'
  | 'boxes___description___enText____key'
  | 'boxes___description___enText____type'
  | 'boxes___description___enText___children'
  | 'boxes___description___enText___style'
  | 'boxes___description___enText___list'
  | 'boxes___description___enText____rawChildren'
  | 'boxes___description____rawNoText'
  | 'boxes___description____rawEnText'
  | 'boxes___description___id'
  | 'boxes___description___parent___id'
  | 'boxes___description___parent___children'
  | 'boxes___description___children'
  | 'boxes___description___children___id'
  | 'boxes___description___children___children'
  | 'boxes___description___internal___content'
  | 'boxes___description___internal___contentDigest'
  | 'boxes___description___internal___description'
  | 'boxes___description___internal___fieldOwners'
  | 'boxes___description___internal___ignoreType'
  | 'boxes___description___internal___mediaType'
  | 'boxes___description___internal___owner'
  | 'boxes___description___internal___type'
  | 'boxes___linkTo'
  | 'boxes___buttonText____key'
  | 'boxes___buttonText____type'
  | 'boxes___buttonText___no'
  | 'boxes___buttonText___en'
  | 'boxes____rawImage'
  | 'boxes____rawTitle'
  | 'boxes____rawDescription'
  | 'boxes____rawButtonText'
  | 'firstImage____key'
  | 'firstImage____type'
  | 'firstImage___asset____id'
  | 'firstImage___asset____type'
  | 'firstImage___asset____createdAt'
  | 'firstImage___asset____updatedAt'
  | 'firstImage___asset____rev'
  | 'firstImage___asset____key'
  | 'firstImage___asset___originalFilename'
  | 'firstImage___asset___label'
  | 'firstImage___asset___title'
  | 'firstImage___asset___description'
  | 'firstImage___asset___sha1hash'
  | 'firstImage___asset___extension'
  | 'firstImage___asset___mimeType'
  | 'firstImage___asset___size'
  | 'firstImage___asset___assetId'
  | 'firstImage___asset___path'
  | 'firstImage___asset___url'
  | 'firstImage___asset___metadata____key'
  | 'firstImage___asset___metadata____type'
  | 'firstImage___asset___metadata___lqip'
  | 'firstImage___asset___metadata___hasAlpha'
  | 'firstImage___asset___metadata___isOpaque'
  | 'firstImage___asset___metadata____rawLocation'
  | 'firstImage___asset___metadata____rawDimensions'
  | 'firstImage___asset___metadata____rawPalette'
  | 'firstImage___asset___source____key'
  | 'firstImage___asset___source____type'
  | 'firstImage___asset___source___name'
  | 'firstImage___asset___source___id'
  | 'firstImage___asset___source___url'
  | 'firstImage___asset____rawMetadata'
  | 'firstImage___asset____rawSource'
  | 'firstImage___asset___fixed___width'
  | 'firstImage___asset___fixed___height'
  | 'firstImage___asset___fixed___src'
  | 'firstImage___asset___fixed___srcSet'
  | 'firstImage___asset___fixed___base64'
  | 'firstImage___asset___fixed___srcWebp'
  | 'firstImage___asset___fixed___srcSetWebp'
  | 'firstImage___asset___fluid___aspectRatio'
  | 'firstImage___asset___fluid___src'
  | 'firstImage___asset___fluid___srcSet'
  | 'firstImage___asset___fluid___sizes'
  | 'firstImage___asset___fluid___base64'
  | 'firstImage___asset___fluid___srcWebp'
  | 'firstImage___asset___fluid___srcSetWebp'
  | 'firstImage___asset___id'
  | 'firstImage___asset___parent___id'
  | 'firstImage___asset___parent___children'
  | 'firstImage___asset___children'
  | 'firstImage___asset___children___id'
  | 'firstImage___asset___children___children'
  | 'firstImage___asset___internal___content'
  | 'firstImage___asset___internal___contentDigest'
  | 'firstImage___asset___internal___description'
  | 'firstImage___asset___internal___fieldOwners'
  | 'firstImage___asset___internal___ignoreType'
  | 'firstImage___asset___internal___mediaType'
  | 'firstImage___asset___internal___owner'
  | 'firstImage___asset___internal___type'
  | 'firstImage___hotspot____key'
  | 'firstImage___hotspot____type'
  | 'firstImage___hotspot___x'
  | 'firstImage___hotspot___y'
  | 'firstImage___hotspot___height'
  | 'firstImage___hotspot___width'
  | 'firstImage___crop____key'
  | 'firstImage___crop____type'
  | 'firstImage___crop___top'
  | 'firstImage___crop___bottom'
  | 'firstImage___crop___left'
  | 'firstImage___crop___right'
  | 'firstImage____rawAsset'
  | 'firstImage____rawHotspot'
  | 'firstImage____rawCrop'
  | 'secondImage____key'
  | 'secondImage____type'
  | 'secondImage___asset____id'
  | 'secondImage___asset____type'
  | 'secondImage___asset____createdAt'
  | 'secondImage___asset____updatedAt'
  | 'secondImage___asset____rev'
  | 'secondImage___asset____key'
  | 'secondImage___asset___originalFilename'
  | 'secondImage___asset___label'
  | 'secondImage___asset___title'
  | 'secondImage___asset___description'
  | 'secondImage___asset___sha1hash'
  | 'secondImage___asset___extension'
  | 'secondImage___asset___mimeType'
  | 'secondImage___asset___size'
  | 'secondImage___asset___assetId'
  | 'secondImage___asset___path'
  | 'secondImage___asset___url'
  | 'secondImage___asset___metadata____key'
  | 'secondImage___asset___metadata____type'
  | 'secondImage___asset___metadata___lqip'
  | 'secondImage___asset___metadata___hasAlpha'
  | 'secondImage___asset___metadata___isOpaque'
  | 'secondImage___asset___metadata____rawLocation'
  | 'secondImage___asset___metadata____rawDimensions'
  | 'secondImage___asset___metadata____rawPalette'
  | 'secondImage___asset___source____key'
  | 'secondImage___asset___source____type'
  | 'secondImage___asset___source___name'
  | 'secondImage___asset___source___id'
  | 'secondImage___asset___source___url'
  | 'secondImage___asset____rawMetadata'
  | 'secondImage___asset____rawSource'
  | 'secondImage___asset___fixed___width'
  | 'secondImage___asset___fixed___height'
  | 'secondImage___asset___fixed___src'
  | 'secondImage___asset___fixed___srcSet'
  | 'secondImage___asset___fixed___base64'
  | 'secondImage___asset___fixed___srcWebp'
  | 'secondImage___asset___fixed___srcSetWebp'
  | 'secondImage___asset___fluid___aspectRatio'
  | 'secondImage___asset___fluid___src'
  | 'secondImage___asset___fluid___srcSet'
  | 'secondImage___asset___fluid___sizes'
  | 'secondImage___asset___fluid___base64'
  | 'secondImage___asset___fluid___srcWebp'
  | 'secondImage___asset___fluid___srcSetWebp'
  | 'secondImage___asset___id'
  | 'secondImage___asset___parent___id'
  | 'secondImage___asset___parent___children'
  | 'secondImage___asset___children'
  | 'secondImage___asset___children___id'
  | 'secondImage___asset___children___children'
  | 'secondImage___asset___internal___content'
  | 'secondImage___asset___internal___contentDigest'
  | 'secondImage___asset___internal___description'
  | 'secondImage___asset___internal___fieldOwners'
  | 'secondImage___asset___internal___ignoreType'
  | 'secondImage___asset___internal___mediaType'
  | 'secondImage___asset___internal___owner'
  | 'secondImage___asset___internal___type'
  | 'secondImage___hotspot____key'
  | 'secondImage___hotspot____type'
  | 'secondImage___hotspot___x'
  | 'secondImage___hotspot___y'
  | 'secondImage___hotspot___height'
  | 'secondImage___hotspot___width'
  | 'secondImage___crop____key'
  | 'secondImage___crop____type'
  | 'secondImage___crop___top'
  | 'secondImage___crop___bottom'
  | 'secondImage___crop___left'
  | 'secondImage___crop___right'
  | 'secondImage____rawAsset'
  | 'secondImage____rawHotspot'
  | 'secondImage____rawCrop'
  | '_rawTitle'
  | '_rawBoxes'
  | '_rawFirstImage'
  | '_rawSecondImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityServicesPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<SanityLocaleStringFilterInput>;
  boxes?: Maybe<SanityBoxWithLinkFilterListInput>;
  firstImage?: Maybe<SanityImageFilterInput>;
  secondImage?: Maybe<SanityImageFilterInput>;
  _rawTitle?: Maybe<JsonQueryOperatorInput>;
  _rawBoxes?: Maybe<JsonQueryOperatorInput>;
  _rawFirstImage?: Maybe<JsonQueryOperatorInput>;
  _rawSecondImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityServicesPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityServicesPageEdge>;
  nodes: Array<SanityServicesPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityServicesPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityServicesPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  current?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>;
};

export type SanityTabetaltPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  tabetaltInfo?: Maybe<SanityBox>;
  tabetaltBottomImage?: Maybe<SanityImage>;
  _rawTabetaltInfo?: Maybe<Scalars['JSON']>;
  _rawTabetaltBottomImage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityTabetaltPage_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityTabetaltPage_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SanityTabetaltPage_RawTabetaltInfoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};


export type SanityTabetaltPage_RawTabetaltBottomImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>;
};

export type SanityTabetaltPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityTabetaltPageEdge>;
  nodes: Array<SanityTabetaltPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SanityTabetaltPageGroupConnection>;
};


export type SanityTabetaltPageConnectionDistinctArgs = {
  field: SanityTabetaltPageFieldsEnum;
};


export type SanityTabetaltPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SanityTabetaltPageFieldsEnum;
};

export type SanityTabetaltPageEdge = {
  next?: Maybe<SanityTabetaltPage>;
  node: SanityTabetaltPage;
  previous?: Maybe<SanityTabetaltPage>;
};

export type SanityTabetaltPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'tabetaltInfo____key'
  | 'tabetaltInfo____type'
  | 'tabetaltInfo___image____key'
  | 'tabetaltInfo___image____type'
  | 'tabetaltInfo___image___asset____id'
  | 'tabetaltInfo___image___asset____type'
  | 'tabetaltInfo___image___asset____createdAt'
  | 'tabetaltInfo___image___asset____updatedAt'
  | 'tabetaltInfo___image___asset____rev'
  | 'tabetaltInfo___image___asset____key'
  | 'tabetaltInfo___image___asset___originalFilename'
  | 'tabetaltInfo___image___asset___label'
  | 'tabetaltInfo___image___asset___title'
  | 'tabetaltInfo___image___asset___description'
  | 'tabetaltInfo___image___asset___sha1hash'
  | 'tabetaltInfo___image___asset___extension'
  | 'tabetaltInfo___image___asset___mimeType'
  | 'tabetaltInfo___image___asset___size'
  | 'tabetaltInfo___image___asset___assetId'
  | 'tabetaltInfo___image___asset___path'
  | 'tabetaltInfo___image___asset___url'
  | 'tabetaltInfo___image___asset____rawMetadata'
  | 'tabetaltInfo___image___asset____rawSource'
  | 'tabetaltInfo___image___asset___id'
  | 'tabetaltInfo___image___asset___children'
  | 'tabetaltInfo___image___hotspot____key'
  | 'tabetaltInfo___image___hotspot____type'
  | 'tabetaltInfo___image___hotspot___x'
  | 'tabetaltInfo___image___hotspot___y'
  | 'tabetaltInfo___image___hotspot___height'
  | 'tabetaltInfo___image___hotspot___width'
  | 'tabetaltInfo___image___crop____key'
  | 'tabetaltInfo___image___crop____type'
  | 'tabetaltInfo___image___crop___top'
  | 'tabetaltInfo___image___crop___bottom'
  | 'tabetaltInfo___image___crop___left'
  | 'tabetaltInfo___image___crop___right'
  | 'tabetaltInfo___image____rawAsset'
  | 'tabetaltInfo___image____rawHotspot'
  | 'tabetaltInfo___image____rawCrop'
  | 'tabetaltInfo___title____key'
  | 'tabetaltInfo___title____type'
  | 'tabetaltInfo___title___no'
  | 'tabetaltInfo___title___en'
  | 'tabetaltInfo___description____id'
  | 'tabetaltInfo___description____type'
  | 'tabetaltInfo___description____createdAt'
  | 'tabetaltInfo___description____updatedAt'
  | 'tabetaltInfo___description____rev'
  | 'tabetaltInfo___description____key'
  | 'tabetaltInfo___description___noText'
  | 'tabetaltInfo___description___noText____key'
  | 'tabetaltInfo___description___noText____type'
  | 'tabetaltInfo___description___noText___children'
  | 'tabetaltInfo___description___noText___style'
  | 'tabetaltInfo___description___noText___list'
  | 'tabetaltInfo___description___noText____rawChildren'
  | 'tabetaltInfo___description___enText'
  | 'tabetaltInfo___description___enText____key'
  | 'tabetaltInfo___description___enText____type'
  | 'tabetaltInfo___description___enText___children'
  | 'tabetaltInfo___description___enText___style'
  | 'tabetaltInfo___description___enText___list'
  | 'tabetaltInfo___description___enText____rawChildren'
  | 'tabetaltInfo___description____rawNoText'
  | 'tabetaltInfo___description____rawEnText'
  | 'tabetaltInfo___description___id'
  | 'tabetaltInfo___description___parent___id'
  | 'tabetaltInfo___description___parent___children'
  | 'tabetaltInfo___description___children'
  | 'tabetaltInfo___description___children___id'
  | 'tabetaltInfo___description___children___children'
  | 'tabetaltInfo___description___internal___content'
  | 'tabetaltInfo___description___internal___contentDigest'
  | 'tabetaltInfo___description___internal___description'
  | 'tabetaltInfo___description___internal___fieldOwners'
  | 'tabetaltInfo___description___internal___ignoreType'
  | 'tabetaltInfo___description___internal___mediaType'
  | 'tabetaltInfo___description___internal___owner'
  | 'tabetaltInfo___description___internal___type'
  | 'tabetaltInfo____rawImage'
  | 'tabetaltInfo____rawTitle'
  | 'tabetaltInfo____rawDescription'
  | 'tabetaltBottomImage____key'
  | 'tabetaltBottomImage____type'
  | 'tabetaltBottomImage___asset____id'
  | 'tabetaltBottomImage___asset____type'
  | 'tabetaltBottomImage___asset____createdAt'
  | 'tabetaltBottomImage___asset____updatedAt'
  | 'tabetaltBottomImage___asset____rev'
  | 'tabetaltBottomImage___asset____key'
  | 'tabetaltBottomImage___asset___originalFilename'
  | 'tabetaltBottomImage___asset___label'
  | 'tabetaltBottomImage___asset___title'
  | 'tabetaltBottomImage___asset___description'
  | 'tabetaltBottomImage___asset___sha1hash'
  | 'tabetaltBottomImage___asset___extension'
  | 'tabetaltBottomImage___asset___mimeType'
  | 'tabetaltBottomImage___asset___size'
  | 'tabetaltBottomImage___asset___assetId'
  | 'tabetaltBottomImage___asset___path'
  | 'tabetaltBottomImage___asset___url'
  | 'tabetaltBottomImage___asset___metadata____key'
  | 'tabetaltBottomImage___asset___metadata____type'
  | 'tabetaltBottomImage___asset___metadata___lqip'
  | 'tabetaltBottomImage___asset___metadata___hasAlpha'
  | 'tabetaltBottomImage___asset___metadata___isOpaque'
  | 'tabetaltBottomImage___asset___metadata____rawLocation'
  | 'tabetaltBottomImage___asset___metadata____rawDimensions'
  | 'tabetaltBottomImage___asset___metadata____rawPalette'
  | 'tabetaltBottomImage___asset___source____key'
  | 'tabetaltBottomImage___asset___source____type'
  | 'tabetaltBottomImage___asset___source___name'
  | 'tabetaltBottomImage___asset___source___id'
  | 'tabetaltBottomImage___asset___source___url'
  | 'tabetaltBottomImage___asset____rawMetadata'
  | 'tabetaltBottomImage___asset____rawSource'
  | 'tabetaltBottomImage___asset___fixed___width'
  | 'tabetaltBottomImage___asset___fixed___height'
  | 'tabetaltBottomImage___asset___fixed___src'
  | 'tabetaltBottomImage___asset___fixed___srcSet'
  | 'tabetaltBottomImage___asset___fixed___base64'
  | 'tabetaltBottomImage___asset___fixed___srcWebp'
  | 'tabetaltBottomImage___asset___fixed___srcSetWebp'
  | 'tabetaltBottomImage___asset___fluid___aspectRatio'
  | 'tabetaltBottomImage___asset___fluid___src'
  | 'tabetaltBottomImage___asset___fluid___srcSet'
  | 'tabetaltBottomImage___asset___fluid___sizes'
  | 'tabetaltBottomImage___asset___fluid___base64'
  | 'tabetaltBottomImage___asset___fluid___srcWebp'
  | 'tabetaltBottomImage___asset___fluid___srcSetWebp'
  | 'tabetaltBottomImage___asset___id'
  | 'tabetaltBottomImage___asset___parent___id'
  | 'tabetaltBottomImage___asset___parent___children'
  | 'tabetaltBottomImage___asset___children'
  | 'tabetaltBottomImage___asset___children___id'
  | 'tabetaltBottomImage___asset___children___children'
  | 'tabetaltBottomImage___asset___internal___content'
  | 'tabetaltBottomImage___asset___internal___contentDigest'
  | 'tabetaltBottomImage___asset___internal___description'
  | 'tabetaltBottomImage___asset___internal___fieldOwners'
  | 'tabetaltBottomImage___asset___internal___ignoreType'
  | 'tabetaltBottomImage___asset___internal___mediaType'
  | 'tabetaltBottomImage___asset___internal___owner'
  | 'tabetaltBottomImage___asset___internal___type'
  | 'tabetaltBottomImage___hotspot____key'
  | 'tabetaltBottomImage___hotspot____type'
  | 'tabetaltBottomImage___hotspot___x'
  | 'tabetaltBottomImage___hotspot___y'
  | 'tabetaltBottomImage___hotspot___height'
  | 'tabetaltBottomImage___hotspot___width'
  | 'tabetaltBottomImage___crop____key'
  | 'tabetaltBottomImage___crop____type'
  | 'tabetaltBottomImage___crop___top'
  | 'tabetaltBottomImage___crop___bottom'
  | 'tabetaltBottomImage___crop___left'
  | 'tabetaltBottomImage___crop___right'
  | 'tabetaltBottomImage____rawAsset'
  | 'tabetaltBottomImage____rawHotspot'
  | 'tabetaltBottomImage____rawCrop'
  | '_rawTabetaltInfo'
  | '_rawTabetaltBottomImage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityTabetaltPageFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>;
  _type?: Maybe<StringQueryOperatorInput>;
  _createdAt?: Maybe<DateQueryOperatorInput>;
  _updatedAt?: Maybe<DateQueryOperatorInput>;
  _rev?: Maybe<StringQueryOperatorInput>;
  _key?: Maybe<StringQueryOperatorInput>;
  tabetaltInfo?: Maybe<SanityBoxFilterInput>;
  tabetaltBottomImage?: Maybe<SanityImageFilterInput>;
  _rawTabetaltInfo?: Maybe<JsonQueryOperatorInput>;
  _rawTabetaltBottomImage?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SanityTabetaltPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityTabetaltPageEdge>;
  nodes: Array<SanityTabetaltPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SanityTabetaltPageSortInput = {
  fields?: Maybe<Array<Maybe<SanityTabetaltPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  language?: Maybe<Scalars['String']>;
  intl?: Maybe<SitePageContextIntl>;
};

export type SitePageContextFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  intl?: Maybe<SitePageContextIntlFilterInput>;
};

export type SitePageContextIntl = {
  language?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  messages?: Maybe<SitePageContextIntlMessages>;
  routed?: Maybe<Scalars['Boolean']>;
  originalPath?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  defaultLanguage?: Maybe<Scalars['String']>;
};

export type SitePageContextIntlFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<SitePageContextIntlMessagesFilterInput>;
  routed?: Maybe<BooleanQueryOperatorInput>;
  originalPath?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextIntlMessages = {
  language?: Maybe<Scalars['String']>;
};

export type SitePageContextIntlMessagesFilterInput = {
  language?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___language'
  | 'context___intl___language'
  | 'context___intl___languages'
  | 'context___intl___messages___language'
  | 'context___intl___routed'
  | 'context___intl___originalPath'
  | 'context___intl___redirect'
  | 'context___intl___defaultLanguage'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___username'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___custom___families'
  | 'pluginCreator___pluginOptions___custom___urls'
  | 'pluginCreator___pluginOptions___projectId'
  | 'pluginCreator___pluginOptions___dataset'
  | 'pluginCreator___pluginOptions___watchMode'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___languages'
  | 'pluginCreator___pluginOptions___defaultLanguage'
  | 'pluginCreator___pluginOptions___redirect'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___fileName'
  | 'pluginOptions___username'
  | 'pluginOptions___preset___base___space'
  | 'pluginOptions___preset___base___fontSizes'
  | 'pluginOptions___preset___default___space'
  | 'pluginOptions___preset___default___fontSizes'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___custom___families'
  | 'pluginOptions___custom___urls'
  | 'pluginOptions___projectId'
  | 'pluginOptions___dataset'
  | 'pluginOptions___watchMode'
  | 'pluginOptions___path'
  | 'pluginOptions___languages'
  | 'pluginOptions___defaultLanguage'
  | 'pluginOptions___redirect'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  fileName?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  preset?: Maybe<SitePluginPluginOptionsPreset>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  custom?: Maybe<SitePluginPluginOptionsCustom>;
  projectId?: Maybe<Scalars['String']>;
  dataset?: Maybe<Scalars['String']>;
  watchMode?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  defaultLanguage?: Maybe<Scalars['String']>;
  redirect?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsCustom = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
  urls?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsCustomFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
  urls?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  preset?: Maybe<SitePluginPluginOptionsPresetFilterInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  custom?: Maybe<SitePluginPluginOptionsCustomFilterInput>;
  projectId?: Maybe<StringQueryOperatorInput>;
  dataset?: Maybe<StringQueryOperatorInput>;
  watchMode?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  defaultLanguage?: Maybe<StringQueryOperatorInput>;
  redirect?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPreset = {
  base?: Maybe<SitePluginPluginOptionsPresetBase>;
  default?: Maybe<SitePluginPluginOptionsPresetDefault>;
};

export type SitePluginPluginOptionsPresetBase = {
  space?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fonts?: Maybe<SitePluginPluginOptionsPresetBaseFonts>;
  fontSizes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetBaseFontWeights>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetBaseLineHeights>;
  colors?: Maybe<SitePluginPluginOptionsPresetBaseColors>;
  styles?: Maybe<SitePluginPluginOptionsPresetBaseStyles>;
};

export type SitePluginPluginOptionsPresetBaseColors = {
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseColorsFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
  secondary?: Maybe<StringQueryOperatorInput>;
  muted?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseFilterInput = {
  space?: Maybe<IntQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsPresetBaseFontsFilterInput>;
  fontSizes?: Maybe<IntQueryOperatorInput>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetBaseFontWeightsFilterInput>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetBaseLineHeightsFilterInput>;
  colors?: Maybe<SitePluginPluginOptionsPresetBaseColorsFilterInput>;
  styles?: Maybe<SitePluginPluginOptionsPresetBaseStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetBaseFonts = {
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  monospace?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseFontsFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  monospace?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseFontWeights = {
  body?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  bold?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseFontWeightsFilterInput = {
  body?: Maybe<IntQueryOperatorInput>;
  heading?: Maybe<IntQueryOperatorInput>;
  bold?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseLineHeights = {
  body?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetBaseLineHeightsFilterInput = {
  body?: Maybe<FloatQueryOperatorInput>;
  heading?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStyles = {
  root?: Maybe<SitePluginPluginOptionsPresetBaseStylesRoot>;
  h1?: Maybe<SitePluginPluginOptionsPresetBaseStylesH1>;
  h2?: Maybe<SitePluginPluginOptionsPresetBaseStylesH2>;
  h3?: Maybe<SitePluginPluginOptionsPresetBaseStylesH3>;
  h4?: Maybe<SitePluginPluginOptionsPresetBaseStylesH4>;
  h5?: Maybe<SitePluginPluginOptionsPresetBaseStylesH5>;
  h6?: Maybe<SitePluginPluginOptionsPresetBaseStylesH6>;
  p?: Maybe<SitePluginPluginOptionsPresetBaseStylesP>;
  a?: Maybe<SitePluginPluginOptionsPresetBaseStylesA>;
  pre?: Maybe<SitePluginPluginOptionsPresetBaseStylesPre>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesCode>;
  table?: Maybe<SitePluginPluginOptionsPresetBaseStylesTable>;
  th?: Maybe<SitePluginPluginOptionsPresetBaseStylesTh>;
  td?: Maybe<SitePluginPluginOptionsPresetBaseStylesTd>;
  img?: Maybe<SitePluginPluginOptionsPresetBaseStylesImg>;
};

export type SitePluginPluginOptionsPresetBaseStylesA = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesAFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesCode = {
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesCodeFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesFilterInput = {
  root?: Maybe<SitePluginPluginOptionsPresetBaseStylesRootFilterInput>;
  h1?: Maybe<SitePluginPluginOptionsPresetBaseStylesH1FilterInput>;
  h2?: Maybe<SitePluginPluginOptionsPresetBaseStylesH2FilterInput>;
  h3?: Maybe<SitePluginPluginOptionsPresetBaseStylesH3FilterInput>;
  h4?: Maybe<SitePluginPluginOptionsPresetBaseStylesH4FilterInput>;
  h5?: Maybe<SitePluginPluginOptionsPresetBaseStylesH5FilterInput>;
  h6?: Maybe<SitePluginPluginOptionsPresetBaseStylesH6FilterInput>;
  p?: Maybe<SitePluginPluginOptionsPresetBaseStylesPFilterInput>;
  a?: Maybe<SitePluginPluginOptionsPresetBaseStylesAFilterInput>;
  pre?: Maybe<SitePluginPluginOptionsPresetBaseStylesPreFilterInput>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesCodeFilterInput>;
  table?: Maybe<SitePluginPluginOptionsPresetBaseStylesTableFilterInput>;
  th?: Maybe<SitePluginPluginOptionsPresetBaseStylesThFilterInput>;
  td?: Maybe<SitePluginPluginOptionsPresetBaseStylesTdFilterInput>;
  img?: Maybe<SitePluginPluginOptionsPresetBaseStylesImgFilterInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH1 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH1FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH2 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH2FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH3 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH3FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH4 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH4FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH5 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH5FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesH6 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesH6FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesImg = {
  maxWidth?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesImgFilterInput = {
  maxWidth?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesP = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesPFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesPre = {
  fontFamily?: Maybe<Scalars['String']>;
  overflowX?: Maybe<Scalars['String']>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesPreCode>;
};

export type SitePluginPluginOptionsPresetBaseStylesPreCode = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesPreCodeFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesPreFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  overflowX?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<SitePluginPluginOptionsPresetBaseStylesPreCodeFilterInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesRoot = {
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesRootFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesTable = {
  width?: Maybe<Scalars['String']>;
  borderCollapse?: Maybe<Scalars['String']>;
  borderSpacing?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetBaseStylesTableFilterInput = {
  width?: Maybe<StringQueryOperatorInput>;
  borderCollapse?: Maybe<StringQueryOperatorInput>;
  borderSpacing?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesTd = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesTdFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetBaseStylesTh = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetBaseStylesThFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefault = {
  space?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fonts?: Maybe<SitePluginPluginOptionsPresetDefaultFonts>;
  fontSizes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetDefaultFontWeights>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetDefaultLineHeights>;
  colors?: Maybe<SitePluginPluginOptionsPresetDefaultColors>;
  styles?: Maybe<SitePluginPluginOptionsPresetDefaultStyles>;
};

export type SitePluginPluginOptionsPresetDefaultColors = {
  text?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['String']>;
  secondary?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultColorsFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
  secondary?: Maybe<StringQueryOperatorInput>;
  muted?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFilterInput = {
  space?: Maybe<IntQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsPresetDefaultFontsFilterInput>;
  fontSizes?: Maybe<IntQueryOperatorInput>;
  fontWeights?: Maybe<SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput>;
  lineHeights?: Maybe<SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput>;
  colors?: Maybe<SitePluginPluginOptionsPresetDefaultColorsFilterInput>;
  styles?: Maybe<SitePluginPluginOptionsPresetDefaultStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultFonts = {
  body?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  monospace?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultFontsFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  monospace?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeights = {
  body?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  bold?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput = {
  body?: Maybe<IntQueryOperatorInput>;
  heading?: Maybe<IntQueryOperatorInput>;
  bold?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeights = {
  body?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput = {
  body?: Maybe<FloatQueryOperatorInput>;
  heading?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStyles = {
  root?: Maybe<SitePluginPluginOptionsPresetDefaultStylesRoot>;
  h1?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1>;
  h2?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2>;
  h3?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3>;
  h4?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4>;
  h5?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5>;
  h6?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6>;
  p?: Maybe<SitePluginPluginOptionsPresetDefaultStylesP>;
  a?: Maybe<SitePluginPluginOptionsPresetDefaultStylesA>;
  pre?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPre>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesCode>;
  table?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTable>;
  th?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTh>;
  td?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTd>;
  img?: Maybe<SitePluginPluginOptionsPresetDefaultStylesImg>;
};

export type SitePluginPluginOptionsPresetDefaultStylesA = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesAFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesCode = {
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesCodeFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesFilterInput = {
  root?: Maybe<SitePluginPluginOptionsPresetDefaultStylesRootFilterInput>;
  h1?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1FilterInput>;
  h2?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2FilterInput>;
  h3?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3FilterInput>;
  h4?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4FilterInput>;
  h5?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5FilterInput>;
  h6?: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6FilterInput>;
  p?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPFilterInput>;
  a?: Maybe<SitePluginPluginOptionsPresetDefaultStylesAFilterInput>;
  pre?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreFilterInput>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesCodeFilterInput>;
  table?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTableFilterInput>;
  th?: Maybe<SitePluginPluginOptionsPresetDefaultStylesThFilterInput>;
  td?: Maybe<SitePluginPluginOptionsPresetDefaultStylesTdFilterInput>;
  img?: Maybe<SitePluginPluginOptionsPresetDefaultStylesImgFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6 = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6FilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  fontSize?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImg = {
  maxWidth?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImgFilterInput = {
  maxWidth?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesP = {
  color?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
  fontFamily?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPre = {
  fontFamily?: Maybe<Scalars['String']>;
  overflowX?: Maybe<Scalars['String']>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreCode>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreCode = {
  color?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreCodeFilterInput = {
  color?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  overflowX?: Maybe<StringQueryOperatorInput>;
  code?: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreCodeFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRoot = {
  fontFamily?: Maybe<Scalars['String']>;
  lineHeight?: Maybe<Scalars['String']>;
  fontWeight?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRootFilterInput = {
  fontFamily?: Maybe<StringQueryOperatorInput>;
  lineHeight?: Maybe<StringQueryOperatorInput>;
  fontWeight?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTable = {
  width?: Maybe<Scalars['String']>;
  borderCollapse?: Maybe<Scalars['String']>;
  borderSpacing?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTableFilterInput = {
  width?: Maybe<StringQueryOperatorInput>;
  borderCollapse?: Maybe<StringQueryOperatorInput>;
  borderSpacing?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTd = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTdFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTh = {
  textAlign?: Maybe<Scalars['String']>;
  borderBottomStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesThFilterInput = {
  textAlign?: Maybe<StringQueryOperatorInput>;
  borderBottomStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFilterInput = {
  base?: Maybe<SitePluginPluginOptionsPresetBaseFilterInput>;
  default?: Maybe<SitePluginPluginOptionsPresetDefaultFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ThemeUiConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ThemeUiConfigGroupConnection>;
};


export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ThemeUiConfigFieldsEnum;
};

export type ThemeUiConfigEdge = {
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export type ThemeUiConfigFieldsEnum =
  | 'preset'
  | 'prismPreset'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ThemeUiConfigFilterInput = {
  preset?: Maybe<JsonQueryOperatorInput>;
  prismPreset?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ThemeUiConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ThemeUiConfigSortInput = {
  fields?: Maybe<Array<Maybe<ThemeUiConfigFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AboutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQueryQuery = { allSanityAboutPage: { nodes: Array<{ title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, boxes?: Maybe<Array<Maybe<{ description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }>, title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>> }>>>, bottomBox?: Maybe<(
        Pick<SanityBoxWithoutTitle, 'linkTo'>
        & { buttonText?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }
      )>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }> } };

export type ContactQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactQueryQuery = { allSanityContactPage: { nodes: Array<{ mainBox?: Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text' | 'marks'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }>, boxes?: Maybe<Array<Maybe<{ description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text' | 'marks'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text' | 'marks'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }>>> }> } };

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQueryQuery = { allSanityHomepage: { nodes: Array<(
      Pick<SanityHomepage, 'headerButtonLink' | 'headerVideoUrl'>
      & { headerButtonText?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, headerText?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, ctaBoxes?: Maybe<Array<Maybe<(
        Pick<SanityCtaBox, 'linkTo'>
        & { image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }>, title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, hoverImage?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, bottomText?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>> }
      )>>>, homePageTopTitle?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, homePageTopDescription?: Maybe<{ noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, homePageMiddleTitle?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, ctaImages?: Maybe<Array<Maybe<(
        Pick<SanityCtaImage, 'linkTo'>
        & { image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }>, linkText?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>> }
      )>>> }
    )> } };

export type IndivQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IndivQueryQuery = { allSanityIndivPage: { nodes: Array<{ indivInfo?: Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }> }> } };

export type LentQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LentQueryQuery = { allSanityLentPage: { nodes: Array<{ lentInfo?: Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }> }> } };

export type OsloJazzQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OsloJazzQueryQuery = { allSanityOsloJazzPage: { nodes: Array<{ osloJazzInfo?: Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }> }> } };

export type TabetaltQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TabetaltQueryQuery = { allSanityTabetaltPage: { nodes: Array<{ tabetaltInfo?: Maybe<{ title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }>, tabetaltBottomImage?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }> } };

export type ServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesQuery = { allSanityServicesPage: { nodes: Array<{ title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, boxes?: Maybe<Array<Maybe<(
        Pick<SanityBoxWithLink, 'linkTo'>
        & { title?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, image?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }>, buttonText?: Maybe<Pick<SanityLocaleString, 'en' | 'no'>>, description?: Maybe<{ enText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>>, noText?: Maybe<Array<Maybe<{ children?: Maybe<Array<Maybe<Pick<SanitySpan, 'text'>>>> }>>> }> }
      )>>>, firstImage?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }>, secondImage?: Maybe<{ asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }> }> } };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { themeUiConfig?: Maybe<Pick<ThemeUiConfig, 'preset' | 'prismPreset'>> };

export type GatsbySanityImageFixedFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFixed_NoBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFixed_WithWebpFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFixed_WithWebp_NoBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFluidFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbySanityImageFluid_NoBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbySanityImageFluid_WithWebpFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbySanityImageFluid_WithWebp_NoBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
