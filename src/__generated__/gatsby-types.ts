/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  url = 'url',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type GhostAuthor = Node & {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly profile_image: Maybe<Scalars['String']>;
  readonly cover_image: Maybe<Scalars['String']>;
  readonly bio: Maybe<Scalars['String']>;
  readonly website: Maybe<Scalars['String']>;
  readonly location: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly postCount: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  readonly profileImageSharp: Maybe<File>;
  readonly coverImageSharp: Maybe<File>;
  readonly count: Maybe<GhostAuthorCount>;
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GhostAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostAuthorEdge>;
  readonly nodes: ReadonlyArray<GhostAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GhostAuthorGroupConnection>;
};


type GhostAuthorConnection_distinctArgs = {
  field: GhostAuthorFieldsEnum;
};


type GhostAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostAuthorFieldsEnum;
};

type GhostAuthorCount = {
  readonly posts: Maybe<Scalars['Int']>;
};

type GhostAuthorCountFilterInput = {
  readonly posts: Maybe<IntQueryOperatorInput>;
};

type GhostAuthorEdge = {
  readonly next: Maybe<GhostAuthor>;
  readonly node: GhostAuthor;
  readonly previous: Maybe<GhostAuthor>;
};

enum GhostAuthorFieldsEnum {
  id = 'id',
  name = 'name',
  slug = 'slug',
  profile_image = 'profile_image',
  cover_image = 'cover_image',
  bio = 'bio',
  website = 'website',
  location = 'location',
  facebook = 'facebook',
  twitter = 'twitter',
  meta_title = 'meta_title',
  meta_description = 'meta_description',
  postCount = 'postCount',
  url = 'url',
  profileImageSharp___sourceInstanceName = 'profileImageSharp.sourceInstanceName',
  profileImageSharp___absolutePath = 'profileImageSharp.absolutePath',
  profileImageSharp___relativePath = 'profileImageSharp.relativePath',
  profileImageSharp___extension = 'profileImageSharp.extension',
  profileImageSharp___size = 'profileImageSharp.size',
  profileImageSharp___prettySize = 'profileImageSharp.prettySize',
  profileImageSharp___modifiedTime = 'profileImageSharp.modifiedTime',
  profileImageSharp___accessTime = 'profileImageSharp.accessTime',
  profileImageSharp___changeTime = 'profileImageSharp.changeTime',
  profileImageSharp___birthTime = 'profileImageSharp.birthTime',
  profileImageSharp___root = 'profileImageSharp.root',
  profileImageSharp___dir = 'profileImageSharp.dir',
  profileImageSharp___base = 'profileImageSharp.base',
  profileImageSharp___ext = 'profileImageSharp.ext',
  profileImageSharp___name = 'profileImageSharp.name',
  profileImageSharp___relativeDirectory = 'profileImageSharp.relativeDirectory',
  profileImageSharp___dev = 'profileImageSharp.dev',
  profileImageSharp___mode = 'profileImageSharp.mode',
  profileImageSharp___nlink = 'profileImageSharp.nlink',
  profileImageSharp___uid = 'profileImageSharp.uid',
  profileImageSharp___gid = 'profileImageSharp.gid',
  profileImageSharp___rdev = 'profileImageSharp.rdev',
  profileImageSharp___ino = 'profileImageSharp.ino',
  profileImageSharp___atimeMs = 'profileImageSharp.atimeMs',
  profileImageSharp___mtimeMs = 'profileImageSharp.mtimeMs',
  profileImageSharp___ctimeMs = 'profileImageSharp.ctimeMs',
  profileImageSharp___atime = 'profileImageSharp.atime',
  profileImageSharp___mtime = 'profileImageSharp.mtime',
  profileImageSharp___ctime = 'profileImageSharp.ctime',
  profileImageSharp___birthtime = 'profileImageSharp.birthtime',
  profileImageSharp___birthtimeMs = 'profileImageSharp.birthtimeMs',
  profileImageSharp___blksize = 'profileImageSharp.blksize',
  profileImageSharp___blocks = 'profileImageSharp.blocks',
  profileImageSharp___url = 'profileImageSharp.url',
  profileImageSharp___publicURL = 'profileImageSharp.publicURL',
  profileImageSharp___childImageSharp___fixed___base64 = 'profileImageSharp.childImageSharp.fixed.base64',
  profileImageSharp___childImageSharp___fixed___tracedSVG = 'profileImageSharp.childImageSharp.fixed.tracedSVG',
  profileImageSharp___childImageSharp___fixed___aspectRatio = 'profileImageSharp.childImageSharp.fixed.aspectRatio',
  profileImageSharp___childImageSharp___fixed___width = 'profileImageSharp.childImageSharp.fixed.width',
  profileImageSharp___childImageSharp___fixed___height = 'profileImageSharp.childImageSharp.fixed.height',
  profileImageSharp___childImageSharp___fixed___src = 'profileImageSharp.childImageSharp.fixed.src',
  profileImageSharp___childImageSharp___fixed___srcSet = 'profileImageSharp.childImageSharp.fixed.srcSet',
  profileImageSharp___childImageSharp___fixed___srcWebp = 'profileImageSharp.childImageSharp.fixed.srcWebp',
  profileImageSharp___childImageSharp___fixed___srcSetWebp = 'profileImageSharp.childImageSharp.fixed.srcSetWebp',
  profileImageSharp___childImageSharp___fixed___originalName = 'profileImageSharp.childImageSharp.fixed.originalName',
  profileImageSharp___childImageSharp___resolutions___base64 = 'profileImageSharp.childImageSharp.resolutions.base64',
  profileImageSharp___childImageSharp___resolutions___tracedSVG = 'profileImageSharp.childImageSharp.resolutions.tracedSVG',
  profileImageSharp___childImageSharp___resolutions___aspectRatio = 'profileImageSharp.childImageSharp.resolutions.aspectRatio',
  profileImageSharp___childImageSharp___resolutions___width = 'profileImageSharp.childImageSharp.resolutions.width',
  profileImageSharp___childImageSharp___resolutions___height = 'profileImageSharp.childImageSharp.resolutions.height',
  profileImageSharp___childImageSharp___resolutions___src = 'profileImageSharp.childImageSharp.resolutions.src',
  profileImageSharp___childImageSharp___resolutions___srcSet = 'profileImageSharp.childImageSharp.resolutions.srcSet',
  profileImageSharp___childImageSharp___resolutions___srcWebp = 'profileImageSharp.childImageSharp.resolutions.srcWebp',
  profileImageSharp___childImageSharp___resolutions___srcSetWebp = 'profileImageSharp.childImageSharp.resolutions.srcSetWebp',
  profileImageSharp___childImageSharp___resolutions___originalName = 'profileImageSharp.childImageSharp.resolutions.originalName',
  profileImageSharp___childImageSharp___fluid___base64 = 'profileImageSharp.childImageSharp.fluid.base64',
  profileImageSharp___childImageSharp___fluid___tracedSVG = 'profileImageSharp.childImageSharp.fluid.tracedSVG',
  profileImageSharp___childImageSharp___fluid___aspectRatio = 'profileImageSharp.childImageSharp.fluid.aspectRatio',
  profileImageSharp___childImageSharp___fluid___src = 'profileImageSharp.childImageSharp.fluid.src',
  profileImageSharp___childImageSharp___fluid___srcSet = 'profileImageSharp.childImageSharp.fluid.srcSet',
  profileImageSharp___childImageSharp___fluid___srcWebp = 'profileImageSharp.childImageSharp.fluid.srcWebp',
  profileImageSharp___childImageSharp___fluid___srcSetWebp = 'profileImageSharp.childImageSharp.fluid.srcSetWebp',
  profileImageSharp___childImageSharp___fluid___sizes = 'profileImageSharp.childImageSharp.fluid.sizes',
  profileImageSharp___childImageSharp___fluid___originalImg = 'profileImageSharp.childImageSharp.fluid.originalImg',
  profileImageSharp___childImageSharp___fluid___originalName = 'profileImageSharp.childImageSharp.fluid.originalName',
  profileImageSharp___childImageSharp___fluid___presentationWidth = 'profileImageSharp.childImageSharp.fluid.presentationWidth',
  profileImageSharp___childImageSharp___fluid___presentationHeight = 'profileImageSharp.childImageSharp.fluid.presentationHeight',
  profileImageSharp___childImageSharp___sizes___base64 = 'profileImageSharp.childImageSharp.sizes.base64',
  profileImageSharp___childImageSharp___sizes___tracedSVG = 'profileImageSharp.childImageSharp.sizes.tracedSVG',
  profileImageSharp___childImageSharp___sizes___aspectRatio = 'profileImageSharp.childImageSharp.sizes.aspectRatio',
  profileImageSharp___childImageSharp___sizes___src = 'profileImageSharp.childImageSharp.sizes.src',
  profileImageSharp___childImageSharp___sizes___srcSet = 'profileImageSharp.childImageSharp.sizes.srcSet',
  profileImageSharp___childImageSharp___sizes___srcWebp = 'profileImageSharp.childImageSharp.sizes.srcWebp',
  profileImageSharp___childImageSharp___sizes___srcSetWebp = 'profileImageSharp.childImageSharp.sizes.srcSetWebp',
  profileImageSharp___childImageSharp___sizes___sizes = 'profileImageSharp.childImageSharp.sizes.sizes',
  profileImageSharp___childImageSharp___sizes___originalImg = 'profileImageSharp.childImageSharp.sizes.originalImg',
  profileImageSharp___childImageSharp___sizes___originalName = 'profileImageSharp.childImageSharp.sizes.originalName',
  profileImageSharp___childImageSharp___sizes___presentationWidth = 'profileImageSharp.childImageSharp.sizes.presentationWidth',
  profileImageSharp___childImageSharp___sizes___presentationHeight = 'profileImageSharp.childImageSharp.sizes.presentationHeight',
  profileImageSharp___childImageSharp___original___width = 'profileImageSharp.childImageSharp.original.width',
  profileImageSharp___childImageSharp___original___height = 'profileImageSharp.childImageSharp.original.height',
  profileImageSharp___childImageSharp___original___src = 'profileImageSharp.childImageSharp.original.src',
  profileImageSharp___childImageSharp___resize___src = 'profileImageSharp.childImageSharp.resize.src',
  profileImageSharp___childImageSharp___resize___tracedSVG = 'profileImageSharp.childImageSharp.resize.tracedSVG',
  profileImageSharp___childImageSharp___resize___width = 'profileImageSharp.childImageSharp.resize.width',
  profileImageSharp___childImageSharp___resize___height = 'profileImageSharp.childImageSharp.resize.height',
  profileImageSharp___childImageSharp___resize___aspectRatio = 'profileImageSharp.childImageSharp.resize.aspectRatio',
  profileImageSharp___childImageSharp___resize___originalName = 'profileImageSharp.childImageSharp.resize.originalName',
  profileImageSharp___childImageSharp___id = 'profileImageSharp.childImageSharp.id',
  profileImageSharp___childImageSharp___parent___id = 'profileImageSharp.childImageSharp.parent.id',
  profileImageSharp___childImageSharp___parent___children = 'profileImageSharp.childImageSharp.parent.children',
  profileImageSharp___childImageSharp___children = 'profileImageSharp.childImageSharp.children',
  profileImageSharp___childImageSharp___children___id = 'profileImageSharp.childImageSharp.children.id',
  profileImageSharp___childImageSharp___children___children = 'profileImageSharp.childImageSharp.children.children',
  profileImageSharp___childImageSharp___internal___content = 'profileImageSharp.childImageSharp.internal.content',
  profileImageSharp___childImageSharp___internal___contentDigest = 'profileImageSharp.childImageSharp.internal.contentDigest',
  profileImageSharp___childImageSharp___internal___description = 'profileImageSharp.childImageSharp.internal.description',
  profileImageSharp___childImageSharp___internal___fieldOwners = 'profileImageSharp.childImageSharp.internal.fieldOwners',
  profileImageSharp___childImageSharp___internal___ignoreType = 'profileImageSharp.childImageSharp.internal.ignoreType',
  profileImageSharp___childImageSharp___internal___mediaType = 'profileImageSharp.childImageSharp.internal.mediaType',
  profileImageSharp___childImageSharp___internal___owner = 'profileImageSharp.childImageSharp.internal.owner',
  profileImageSharp___childImageSharp___internal___type = 'profileImageSharp.childImageSharp.internal.type',
  profileImageSharp___id = 'profileImageSharp.id',
  profileImageSharp___parent___id = 'profileImageSharp.parent.id',
  profileImageSharp___parent___parent___id = 'profileImageSharp.parent.parent.id',
  profileImageSharp___parent___parent___children = 'profileImageSharp.parent.parent.children',
  profileImageSharp___parent___children = 'profileImageSharp.parent.children',
  profileImageSharp___parent___children___id = 'profileImageSharp.parent.children.id',
  profileImageSharp___parent___children___children = 'profileImageSharp.parent.children.children',
  profileImageSharp___parent___internal___content = 'profileImageSharp.parent.internal.content',
  profileImageSharp___parent___internal___contentDigest = 'profileImageSharp.parent.internal.contentDigest',
  profileImageSharp___parent___internal___description = 'profileImageSharp.parent.internal.description',
  profileImageSharp___parent___internal___fieldOwners = 'profileImageSharp.parent.internal.fieldOwners',
  profileImageSharp___parent___internal___ignoreType = 'profileImageSharp.parent.internal.ignoreType',
  profileImageSharp___parent___internal___mediaType = 'profileImageSharp.parent.internal.mediaType',
  profileImageSharp___parent___internal___owner = 'profileImageSharp.parent.internal.owner',
  profileImageSharp___parent___internal___type = 'profileImageSharp.parent.internal.type',
  profileImageSharp___children = 'profileImageSharp.children',
  profileImageSharp___children___id = 'profileImageSharp.children.id',
  profileImageSharp___children___parent___id = 'profileImageSharp.children.parent.id',
  profileImageSharp___children___parent___children = 'profileImageSharp.children.parent.children',
  profileImageSharp___children___children = 'profileImageSharp.children.children',
  profileImageSharp___children___children___id = 'profileImageSharp.children.children.id',
  profileImageSharp___children___children___children = 'profileImageSharp.children.children.children',
  profileImageSharp___children___internal___content = 'profileImageSharp.children.internal.content',
  profileImageSharp___children___internal___contentDigest = 'profileImageSharp.children.internal.contentDigest',
  profileImageSharp___children___internal___description = 'profileImageSharp.children.internal.description',
  profileImageSharp___children___internal___fieldOwners = 'profileImageSharp.children.internal.fieldOwners',
  profileImageSharp___children___internal___ignoreType = 'profileImageSharp.children.internal.ignoreType',
  profileImageSharp___children___internal___mediaType = 'profileImageSharp.children.internal.mediaType',
  profileImageSharp___children___internal___owner = 'profileImageSharp.children.internal.owner',
  profileImageSharp___children___internal___type = 'profileImageSharp.children.internal.type',
  profileImageSharp___internal___content = 'profileImageSharp.internal.content',
  profileImageSharp___internal___contentDigest = 'profileImageSharp.internal.contentDigest',
  profileImageSharp___internal___description = 'profileImageSharp.internal.description',
  profileImageSharp___internal___fieldOwners = 'profileImageSharp.internal.fieldOwners',
  profileImageSharp___internal___ignoreType = 'profileImageSharp.internal.ignoreType',
  profileImageSharp___internal___mediaType = 'profileImageSharp.internal.mediaType',
  profileImageSharp___internal___owner = 'profileImageSharp.internal.owner',
  profileImageSharp___internal___type = 'profileImageSharp.internal.type',
  coverImageSharp___sourceInstanceName = 'coverImageSharp.sourceInstanceName',
  coverImageSharp___absolutePath = 'coverImageSharp.absolutePath',
  coverImageSharp___relativePath = 'coverImageSharp.relativePath',
  coverImageSharp___extension = 'coverImageSharp.extension',
  coverImageSharp___size = 'coverImageSharp.size',
  coverImageSharp___prettySize = 'coverImageSharp.prettySize',
  coverImageSharp___modifiedTime = 'coverImageSharp.modifiedTime',
  coverImageSharp___accessTime = 'coverImageSharp.accessTime',
  coverImageSharp___changeTime = 'coverImageSharp.changeTime',
  coverImageSharp___birthTime = 'coverImageSharp.birthTime',
  coverImageSharp___root = 'coverImageSharp.root',
  coverImageSharp___dir = 'coverImageSharp.dir',
  coverImageSharp___base = 'coverImageSharp.base',
  coverImageSharp___ext = 'coverImageSharp.ext',
  coverImageSharp___name = 'coverImageSharp.name',
  coverImageSharp___relativeDirectory = 'coverImageSharp.relativeDirectory',
  coverImageSharp___dev = 'coverImageSharp.dev',
  coverImageSharp___mode = 'coverImageSharp.mode',
  coverImageSharp___nlink = 'coverImageSharp.nlink',
  coverImageSharp___uid = 'coverImageSharp.uid',
  coverImageSharp___gid = 'coverImageSharp.gid',
  coverImageSharp___rdev = 'coverImageSharp.rdev',
  coverImageSharp___ino = 'coverImageSharp.ino',
  coverImageSharp___atimeMs = 'coverImageSharp.atimeMs',
  coverImageSharp___mtimeMs = 'coverImageSharp.mtimeMs',
  coverImageSharp___ctimeMs = 'coverImageSharp.ctimeMs',
  coverImageSharp___atime = 'coverImageSharp.atime',
  coverImageSharp___mtime = 'coverImageSharp.mtime',
  coverImageSharp___ctime = 'coverImageSharp.ctime',
  coverImageSharp___birthtime = 'coverImageSharp.birthtime',
  coverImageSharp___birthtimeMs = 'coverImageSharp.birthtimeMs',
  coverImageSharp___blksize = 'coverImageSharp.blksize',
  coverImageSharp___blocks = 'coverImageSharp.blocks',
  coverImageSharp___url = 'coverImageSharp.url',
  coverImageSharp___publicURL = 'coverImageSharp.publicURL',
  coverImageSharp___childImageSharp___fixed___base64 = 'coverImageSharp.childImageSharp.fixed.base64',
  coverImageSharp___childImageSharp___fixed___tracedSVG = 'coverImageSharp.childImageSharp.fixed.tracedSVG',
  coverImageSharp___childImageSharp___fixed___aspectRatio = 'coverImageSharp.childImageSharp.fixed.aspectRatio',
  coverImageSharp___childImageSharp___fixed___width = 'coverImageSharp.childImageSharp.fixed.width',
  coverImageSharp___childImageSharp___fixed___height = 'coverImageSharp.childImageSharp.fixed.height',
  coverImageSharp___childImageSharp___fixed___src = 'coverImageSharp.childImageSharp.fixed.src',
  coverImageSharp___childImageSharp___fixed___srcSet = 'coverImageSharp.childImageSharp.fixed.srcSet',
  coverImageSharp___childImageSharp___fixed___srcWebp = 'coverImageSharp.childImageSharp.fixed.srcWebp',
  coverImageSharp___childImageSharp___fixed___srcSetWebp = 'coverImageSharp.childImageSharp.fixed.srcSetWebp',
  coverImageSharp___childImageSharp___fixed___originalName = 'coverImageSharp.childImageSharp.fixed.originalName',
  coverImageSharp___childImageSharp___resolutions___base64 = 'coverImageSharp.childImageSharp.resolutions.base64',
  coverImageSharp___childImageSharp___resolutions___tracedSVG = 'coverImageSharp.childImageSharp.resolutions.tracedSVG',
  coverImageSharp___childImageSharp___resolutions___aspectRatio = 'coverImageSharp.childImageSharp.resolutions.aspectRatio',
  coverImageSharp___childImageSharp___resolutions___width = 'coverImageSharp.childImageSharp.resolutions.width',
  coverImageSharp___childImageSharp___resolutions___height = 'coverImageSharp.childImageSharp.resolutions.height',
  coverImageSharp___childImageSharp___resolutions___src = 'coverImageSharp.childImageSharp.resolutions.src',
  coverImageSharp___childImageSharp___resolutions___srcSet = 'coverImageSharp.childImageSharp.resolutions.srcSet',
  coverImageSharp___childImageSharp___resolutions___srcWebp = 'coverImageSharp.childImageSharp.resolutions.srcWebp',
  coverImageSharp___childImageSharp___resolutions___srcSetWebp = 'coverImageSharp.childImageSharp.resolutions.srcSetWebp',
  coverImageSharp___childImageSharp___resolutions___originalName = 'coverImageSharp.childImageSharp.resolutions.originalName',
  coverImageSharp___childImageSharp___fluid___base64 = 'coverImageSharp.childImageSharp.fluid.base64',
  coverImageSharp___childImageSharp___fluid___tracedSVG = 'coverImageSharp.childImageSharp.fluid.tracedSVG',
  coverImageSharp___childImageSharp___fluid___aspectRatio = 'coverImageSharp.childImageSharp.fluid.aspectRatio',
  coverImageSharp___childImageSharp___fluid___src = 'coverImageSharp.childImageSharp.fluid.src',
  coverImageSharp___childImageSharp___fluid___srcSet = 'coverImageSharp.childImageSharp.fluid.srcSet',
  coverImageSharp___childImageSharp___fluid___srcWebp = 'coverImageSharp.childImageSharp.fluid.srcWebp',
  coverImageSharp___childImageSharp___fluid___srcSetWebp = 'coverImageSharp.childImageSharp.fluid.srcSetWebp',
  coverImageSharp___childImageSharp___fluid___sizes = 'coverImageSharp.childImageSharp.fluid.sizes',
  coverImageSharp___childImageSharp___fluid___originalImg = 'coverImageSharp.childImageSharp.fluid.originalImg',
  coverImageSharp___childImageSharp___fluid___originalName = 'coverImageSharp.childImageSharp.fluid.originalName',
  coverImageSharp___childImageSharp___fluid___presentationWidth = 'coverImageSharp.childImageSharp.fluid.presentationWidth',
  coverImageSharp___childImageSharp___fluid___presentationHeight = 'coverImageSharp.childImageSharp.fluid.presentationHeight',
  coverImageSharp___childImageSharp___sizes___base64 = 'coverImageSharp.childImageSharp.sizes.base64',
  coverImageSharp___childImageSharp___sizes___tracedSVG = 'coverImageSharp.childImageSharp.sizes.tracedSVG',
  coverImageSharp___childImageSharp___sizes___aspectRatio = 'coverImageSharp.childImageSharp.sizes.aspectRatio',
  coverImageSharp___childImageSharp___sizes___src = 'coverImageSharp.childImageSharp.sizes.src',
  coverImageSharp___childImageSharp___sizes___srcSet = 'coverImageSharp.childImageSharp.sizes.srcSet',
  coverImageSharp___childImageSharp___sizes___srcWebp = 'coverImageSharp.childImageSharp.sizes.srcWebp',
  coverImageSharp___childImageSharp___sizes___srcSetWebp = 'coverImageSharp.childImageSharp.sizes.srcSetWebp',
  coverImageSharp___childImageSharp___sizes___sizes = 'coverImageSharp.childImageSharp.sizes.sizes',
  coverImageSharp___childImageSharp___sizes___originalImg = 'coverImageSharp.childImageSharp.sizes.originalImg',
  coverImageSharp___childImageSharp___sizes___originalName = 'coverImageSharp.childImageSharp.sizes.originalName',
  coverImageSharp___childImageSharp___sizes___presentationWidth = 'coverImageSharp.childImageSharp.sizes.presentationWidth',
  coverImageSharp___childImageSharp___sizes___presentationHeight = 'coverImageSharp.childImageSharp.sizes.presentationHeight',
  coverImageSharp___childImageSharp___original___width = 'coverImageSharp.childImageSharp.original.width',
  coverImageSharp___childImageSharp___original___height = 'coverImageSharp.childImageSharp.original.height',
  coverImageSharp___childImageSharp___original___src = 'coverImageSharp.childImageSharp.original.src',
  coverImageSharp___childImageSharp___resize___src = 'coverImageSharp.childImageSharp.resize.src',
  coverImageSharp___childImageSharp___resize___tracedSVG = 'coverImageSharp.childImageSharp.resize.tracedSVG',
  coverImageSharp___childImageSharp___resize___width = 'coverImageSharp.childImageSharp.resize.width',
  coverImageSharp___childImageSharp___resize___height = 'coverImageSharp.childImageSharp.resize.height',
  coverImageSharp___childImageSharp___resize___aspectRatio = 'coverImageSharp.childImageSharp.resize.aspectRatio',
  coverImageSharp___childImageSharp___resize___originalName = 'coverImageSharp.childImageSharp.resize.originalName',
  coverImageSharp___childImageSharp___id = 'coverImageSharp.childImageSharp.id',
  coverImageSharp___childImageSharp___parent___id = 'coverImageSharp.childImageSharp.parent.id',
  coverImageSharp___childImageSharp___parent___children = 'coverImageSharp.childImageSharp.parent.children',
  coverImageSharp___childImageSharp___children = 'coverImageSharp.childImageSharp.children',
  coverImageSharp___childImageSharp___children___id = 'coverImageSharp.childImageSharp.children.id',
  coverImageSharp___childImageSharp___children___children = 'coverImageSharp.childImageSharp.children.children',
  coverImageSharp___childImageSharp___internal___content = 'coverImageSharp.childImageSharp.internal.content',
  coverImageSharp___childImageSharp___internal___contentDigest = 'coverImageSharp.childImageSharp.internal.contentDigest',
  coverImageSharp___childImageSharp___internal___description = 'coverImageSharp.childImageSharp.internal.description',
  coverImageSharp___childImageSharp___internal___fieldOwners = 'coverImageSharp.childImageSharp.internal.fieldOwners',
  coverImageSharp___childImageSharp___internal___ignoreType = 'coverImageSharp.childImageSharp.internal.ignoreType',
  coverImageSharp___childImageSharp___internal___mediaType = 'coverImageSharp.childImageSharp.internal.mediaType',
  coverImageSharp___childImageSharp___internal___owner = 'coverImageSharp.childImageSharp.internal.owner',
  coverImageSharp___childImageSharp___internal___type = 'coverImageSharp.childImageSharp.internal.type',
  coverImageSharp___id = 'coverImageSharp.id',
  coverImageSharp___parent___id = 'coverImageSharp.parent.id',
  coverImageSharp___parent___parent___id = 'coverImageSharp.parent.parent.id',
  coverImageSharp___parent___parent___children = 'coverImageSharp.parent.parent.children',
  coverImageSharp___parent___children = 'coverImageSharp.parent.children',
  coverImageSharp___parent___children___id = 'coverImageSharp.parent.children.id',
  coverImageSharp___parent___children___children = 'coverImageSharp.parent.children.children',
  coverImageSharp___parent___internal___content = 'coverImageSharp.parent.internal.content',
  coverImageSharp___parent___internal___contentDigest = 'coverImageSharp.parent.internal.contentDigest',
  coverImageSharp___parent___internal___description = 'coverImageSharp.parent.internal.description',
  coverImageSharp___parent___internal___fieldOwners = 'coverImageSharp.parent.internal.fieldOwners',
  coverImageSharp___parent___internal___ignoreType = 'coverImageSharp.parent.internal.ignoreType',
  coverImageSharp___parent___internal___mediaType = 'coverImageSharp.parent.internal.mediaType',
  coverImageSharp___parent___internal___owner = 'coverImageSharp.parent.internal.owner',
  coverImageSharp___parent___internal___type = 'coverImageSharp.parent.internal.type',
  coverImageSharp___children = 'coverImageSharp.children',
  coverImageSharp___children___id = 'coverImageSharp.children.id',
  coverImageSharp___children___parent___id = 'coverImageSharp.children.parent.id',
  coverImageSharp___children___parent___children = 'coverImageSharp.children.parent.children',
  coverImageSharp___children___children = 'coverImageSharp.children.children',
  coverImageSharp___children___children___id = 'coverImageSharp.children.children.id',
  coverImageSharp___children___children___children = 'coverImageSharp.children.children.children',
  coverImageSharp___children___internal___content = 'coverImageSharp.children.internal.content',
  coverImageSharp___children___internal___contentDigest = 'coverImageSharp.children.internal.contentDigest',
  coverImageSharp___children___internal___description = 'coverImageSharp.children.internal.description',
  coverImageSharp___children___internal___fieldOwners = 'coverImageSharp.children.internal.fieldOwners',
  coverImageSharp___children___internal___ignoreType = 'coverImageSharp.children.internal.ignoreType',
  coverImageSharp___children___internal___mediaType = 'coverImageSharp.children.internal.mediaType',
  coverImageSharp___children___internal___owner = 'coverImageSharp.children.internal.owner',
  coverImageSharp___children___internal___type = 'coverImageSharp.children.internal.type',
  coverImageSharp___internal___content = 'coverImageSharp.internal.content',
  coverImageSharp___internal___contentDigest = 'coverImageSharp.internal.contentDigest',
  coverImageSharp___internal___description = 'coverImageSharp.internal.description',
  coverImageSharp___internal___fieldOwners = 'coverImageSharp.internal.fieldOwners',
  coverImageSharp___internal___ignoreType = 'coverImageSharp.internal.ignoreType',
  coverImageSharp___internal___mediaType = 'coverImageSharp.internal.mediaType',
  coverImageSharp___internal___owner = 'coverImageSharp.internal.owner',
  coverImageSharp___internal___type = 'coverImageSharp.internal.type',
  count___posts = 'count.posts',
  ghostId = 'ghostId',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type GhostAuthorFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly profile_image: Maybe<StringQueryOperatorInput>;
  readonly cover_image: Maybe<StringQueryOperatorInput>;
  readonly bio: Maybe<StringQueryOperatorInput>;
  readonly website: Maybe<StringQueryOperatorInput>;
  readonly location: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly postCount: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly profileImageSharp: Maybe<FileFilterInput>;
  readonly coverImageSharp: Maybe<FileFilterInput>;
  readonly count: Maybe<GhostAuthorCountFilterInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostAuthorFilterListInput = {
  readonly elemMatch: Maybe<GhostAuthorFilterInput>;
};

type GhostAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostAuthorEdge>;
  readonly nodes: ReadonlyArray<GhostAuthor>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostPage = Node & {
  readonly id: Scalars['ID'];
  readonly uuid: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly comment_id: Maybe<Scalars['String']>;
  readonly plaintext: Maybe<Scalars['String']>;
  readonly feature_image: Maybe<Scalars['String']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly visibility: Maybe<Scalars['String']>;
  readonly created_at: Maybe<Scalars['Date']>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly published_at: Maybe<Scalars['Date']>;
  readonly custom_excerpt: Maybe<Scalars['String']>;
  readonly codeinjection_head: Maybe<Scalars['String']>;
  readonly codeinjection_foot: Maybe<Scalars['String']>;
  readonly codeinjection_styles: Maybe<Scalars['String']>;
  readonly custom_template: Maybe<Scalars['String']>;
  readonly canonical_url: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<GhostTag>>>;
  readonly authors: Maybe<ReadonlyArray<Maybe<GhostAuthor>>>;
  readonly primary_author: Maybe<GhostAuthor>;
  readonly primary_tag: Maybe<GhostTag>;
  readonly url: Maybe<Scalars['String']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly reading_time: Maybe<Scalars['Int']>;
  readonly page: Maybe<Scalars['Boolean']>;
  readonly og_image: Maybe<Scalars['String']>;
  readonly og_title: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly twitter_image: Maybe<Scalars['String']>;
  readonly twitter_title: Maybe<Scalars['String']>;
  readonly twitter_description: Maybe<Scalars['String']>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly featureImageSharp: Maybe<File>;
  readonly childHtmlRehype: Maybe<HtmlRehype>;
  readonly access: Maybe<Scalars['Boolean']>;
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type GhostPage_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPage_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPage_published_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GhostPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPageEdge>;
  readonly nodes: ReadonlyArray<GhostPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GhostPageGroupConnection>;
};


type GhostPageConnection_distinctArgs = {
  field: GhostPageFieldsEnum;
};


type GhostPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostPageFieldsEnum;
};

type GhostPageEdge = {
  readonly next: Maybe<GhostPage>;
  readonly node: GhostPage;
  readonly previous: Maybe<GhostPage>;
};

enum GhostPageFieldsEnum {
  id = 'id',
  uuid = 'uuid',
  title = 'title',
  slug = 'slug',
  html = 'html',
  comment_id = 'comment_id',
  plaintext = 'plaintext',
  feature_image = 'feature_image',
  featured = 'featured',
  visibility = 'visibility',
  created_at = 'created_at',
  updated_at = 'updated_at',
  published_at = 'published_at',
  custom_excerpt = 'custom_excerpt',
  codeinjection_head = 'codeinjection_head',
  codeinjection_foot = 'codeinjection_foot',
  codeinjection_styles = 'codeinjection_styles',
  custom_template = 'custom_template',
  canonical_url = 'canonical_url',
  tags = 'tags',
  tags___id = 'tags.id',
  tags___name = 'tags.name',
  tags___slug = 'tags.slug',
  tags___description = 'tags.description',
  tags___feature_image = 'tags.feature_image',
  tags___visibility = 'tags.visibility',
  tags___meta_title = 'tags.meta_title',
  tags___meta_description = 'tags.meta_description',
  tags___postCount = 'tags.postCount',
  tags___url = 'tags.url',
  tags___featureImageSharp___sourceInstanceName = 'tags.featureImageSharp.sourceInstanceName',
  tags___featureImageSharp___absolutePath = 'tags.featureImageSharp.absolutePath',
  tags___featureImageSharp___relativePath = 'tags.featureImageSharp.relativePath',
  tags___featureImageSharp___extension = 'tags.featureImageSharp.extension',
  tags___featureImageSharp___size = 'tags.featureImageSharp.size',
  tags___featureImageSharp___prettySize = 'tags.featureImageSharp.prettySize',
  tags___featureImageSharp___modifiedTime = 'tags.featureImageSharp.modifiedTime',
  tags___featureImageSharp___accessTime = 'tags.featureImageSharp.accessTime',
  tags___featureImageSharp___changeTime = 'tags.featureImageSharp.changeTime',
  tags___featureImageSharp___birthTime = 'tags.featureImageSharp.birthTime',
  tags___featureImageSharp___root = 'tags.featureImageSharp.root',
  tags___featureImageSharp___dir = 'tags.featureImageSharp.dir',
  tags___featureImageSharp___base = 'tags.featureImageSharp.base',
  tags___featureImageSharp___ext = 'tags.featureImageSharp.ext',
  tags___featureImageSharp___name = 'tags.featureImageSharp.name',
  tags___featureImageSharp___relativeDirectory = 'tags.featureImageSharp.relativeDirectory',
  tags___featureImageSharp___dev = 'tags.featureImageSharp.dev',
  tags___featureImageSharp___mode = 'tags.featureImageSharp.mode',
  tags___featureImageSharp___nlink = 'tags.featureImageSharp.nlink',
  tags___featureImageSharp___uid = 'tags.featureImageSharp.uid',
  tags___featureImageSharp___gid = 'tags.featureImageSharp.gid',
  tags___featureImageSharp___rdev = 'tags.featureImageSharp.rdev',
  tags___featureImageSharp___ino = 'tags.featureImageSharp.ino',
  tags___featureImageSharp___atimeMs = 'tags.featureImageSharp.atimeMs',
  tags___featureImageSharp___mtimeMs = 'tags.featureImageSharp.mtimeMs',
  tags___featureImageSharp___ctimeMs = 'tags.featureImageSharp.ctimeMs',
  tags___featureImageSharp___atime = 'tags.featureImageSharp.atime',
  tags___featureImageSharp___mtime = 'tags.featureImageSharp.mtime',
  tags___featureImageSharp___ctime = 'tags.featureImageSharp.ctime',
  tags___featureImageSharp___birthtime = 'tags.featureImageSharp.birthtime',
  tags___featureImageSharp___birthtimeMs = 'tags.featureImageSharp.birthtimeMs',
  tags___featureImageSharp___blksize = 'tags.featureImageSharp.blksize',
  tags___featureImageSharp___blocks = 'tags.featureImageSharp.blocks',
  tags___featureImageSharp___url = 'tags.featureImageSharp.url',
  tags___featureImageSharp___publicURL = 'tags.featureImageSharp.publicURL',
  tags___featureImageSharp___childImageSharp___id = 'tags.featureImageSharp.childImageSharp.id',
  tags___featureImageSharp___childImageSharp___children = 'tags.featureImageSharp.childImageSharp.children',
  tags___featureImageSharp___id = 'tags.featureImageSharp.id',
  tags___featureImageSharp___parent___id = 'tags.featureImageSharp.parent.id',
  tags___featureImageSharp___parent___children = 'tags.featureImageSharp.parent.children',
  tags___featureImageSharp___children = 'tags.featureImageSharp.children',
  tags___featureImageSharp___children___id = 'tags.featureImageSharp.children.id',
  tags___featureImageSharp___children___children = 'tags.featureImageSharp.children.children',
  tags___featureImageSharp___internal___content = 'tags.featureImageSharp.internal.content',
  tags___featureImageSharp___internal___contentDigest = 'tags.featureImageSharp.internal.contentDigest',
  tags___featureImageSharp___internal___description = 'tags.featureImageSharp.internal.description',
  tags___featureImageSharp___internal___fieldOwners = 'tags.featureImageSharp.internal.fieldOwners',
  tags___featureImageSharp___internal___ignoreType = 'tags.featureImageSharp.internal.ignoreType',
  tags___featureImageSharp___internal___mediaType = 'tags.featureImageSharp.internal.mediaType',
  tags___featureImageSharp___internal___owner = 'tags.featureImageSharp.internal.owner',
  tags___featureImageSharp___internal___type = 'tags.featureImageSharp.internal.type',
  tags___accent_color = 'tags.accent_color',
  tags___count___posts = 'tags.count.posts',
  tags___ghostId = 'tags.ghostId',
  tags___parent___id = 'tags.parent.id',
  tags___parent___parent___id = 'tags.parent.parent.id',
  tags___parent___parent___children = 'tags.parent.parent.children',
  tags___parent___children = 'tags.parent.children',
  tags___parent___children___id = 'tags.parent.children.id',
  tags___parent___children___children = 'tags.parent.children.children',
  tags___parent___internal___content = 'tags.parent.internal.content',
  tags___parent___internal___contentDigest = 'tags.parent.internal.contentDigest',
  tags___parent___internal___description = 'tags.parent.internal.description',
  tags___parent___internal___fieldOwners = 'tags.parent.internal.fieldOwners',
  tags___parent___internal___ignoreType = 'tags.parent.internal.ignoreType',
  tags___parent___internal___mediaType = 'tags.parent.internal.mediaType',
  tags___parent___internal___owner = 'tags.parent.internal.owner',
  tags___parent___internal___type = 'tags.parent.internal.type',
  tags___children = 'tags.children',
  tags___children___id = 'tags.children.id',
  tags___children___parent___id = 'tags.children.parent.id',
  tags___children___parent___children = 'tags.children.parent.children',
  tags___children___children = 'tags.children.children',
  tags___children___children___id = 'tags.children.children.id',
  tags___children___children___children = 'tags.children.children.children',
  tags___children___internal___content = 'tags.children.internal.content',
  tags___children___internal___contentDigest = 'tags.children.internal.contentDigest',
  tags___children___internal___description = 'tags.children.internal.description',
  tags___children___internal___fieldOwners = 'tags.children.internal.fieldOwners',
  tags___children___internal___ignoreType = 'tags.children.internal.ignoreType',
  tags___children___internal___mediaType = 'tags.children.internal.mediaType',
  tags___children___internal___owner = 'tags.children.internal.owner',
  tags___children___internal___type = 'tags.children.internal.type',
  tags___internal___content = 'tags.internal.content',
  tags___internal___contentDigest = 'tags.internal.contentDigest',
  tags___internal___description = 'tags.internal.description',
  tags___internal___fieldOwners = 'tags.internal.fieldOwners',
  tags___internal___ignoreType = 'tags.internal.ignoreType',
  tags___internal___mediaType = 'tags.internal.mediaType',
  tags___internal___owner = 'tags.internal.owner',
  tags___internal___type = 'tags.internal.type',
  authors = 'authors',
  authors___id = 'authors.id',
  authors___name = 'authors.name',
  authors___slug = 'authors.slug',
  authors___profile_image = 'authors.profile_image',
  authors___cover_image = 'authors.cover_image',
  authors___bio = 'authors.bio',
  authors___website = 'authors.website',
  authors___location = 'authors.location',
  authors___facebook = 'authors.facebook',
  authors___twitter = 'authors.twitter',
  authors___meta_title = 'authors.meta_title',
  authors___meta_description = 'authors.meta_description',
  authors___postCount = 'authors.postCount',
  authors___url = 'authors.url',
  authors___profileImageSharp___sourceInstanceName = 'authors.profileImageSharp.sourceInstanceName',
  authors___profileImageSharp___absolutePath = 'authors.profileImageSharp.absolutePath',
  authors___profileImageSharp___relativePath = 'authors.profileImageSharp.relativePath',
  authors___profileImageSharp___extension = 'authors.profileImageSharp.extension',
  authors___profileImageSharp___size = 'authors.profileImageSharp.size',
  authors___profileImageSharp___prettySize = 'authors.profileImageSharp.prettySize',
  authors___profileImageSharp___modifiedTime = 'authors.profileImageSharp.modifiedTime',
  authors___profileImageSharp___accessTime = 'authors.profileImageSharp.accessTime',
  authors___profileImageSharp___changeTime = 'authors.profileImageSharp.changeTime',
  authors___profileImageSharp___birthTime = 'authors.profileImageSharp.birthTime',
  authors___profileImageSharp___root = 'authors.profileImageSharp.root',
  authors___profileImageSharp___dir = 'authors.profileImageSharp.dir',
  authors___profileImageSharp___base = 'authors.profileImageSharp.base',
  authors___profileImageSharp___ext = 'authors.profileImageSharp.ext',
  authors___profileImageSharp___name = 'authors.profileImageSharp.name',
  authors___profileImageSharp___relativeDirectory = 'authors.profileImageSharp.relativeDirectory',
  authors___profileImageSharp___dev = 'authors.profileImageSharp.dev',
  authors___profileImageSharp___mode = 'authors.profileImageSharp.mode',
  authors___profileImageSharp___nlink = 'authors.profileImageSharp.nlink',
  authors___profileImageSharp___uid = 'authors.profileImageSharp.uid',
  authors___profileImageSharp___gid = 'authors.profileImageSharp.gid',
  authors___profileImageSharp___rdev = 'authors.profileImageSharp.rdev',
  authors___profileImageSharp___ino = 'authors.profileImageSharp.ino',
  authors___profileImageSharp___atimeMs = 'authors.profileImageSharp.atimeMs',
  authors___profileImageSharp___mtimeMs = 'authors.profileImageSharp.mtimeMs',
  authors___profileImageSharp___ctimeMs = 'authors.profileImageSharp.ctimeMs',
  authors___profileImageSharp___atime = 'authors.profileImageSharp.atime',
  authors___profileImageSharp___mtime = 'authors.profileImageSharp.mtime',
  authors___profileImageSharp___ctime = 'authors.profileImageSharp.ctime',
  authors___profileImageSharp___birthtime = 'authors.profileImageSharp.birthtime',
  authors___profileImageSharp___birthtimeMs = 'authors.profileImageSharp.birthtimeMs',
  authors___profileImageSharp___blksize = 'authors.profileImageSharp.blksize',
  authors___profileImageSharp___blocks = 'authors.profileImageSharp.blocks',
  authors___profileImageSharp___url = 'authors.profileImageSharp.url',
  authors___profileImageSharp___publicURL = 'authors.profileImageSharp.publicURL',
  authors___profileImageSharp___childImageSharp___id = 'authors.profileImageSharp.childImageSharp.id',
  authors___profileImageSharp___childImageSharp___children = 'authors.profileImageSharp.childImageSharp.children',
  authors___profileImageSharp___id = 'authors.profileImageSharp.id',
  authors___profileImageSharp___parent___id = 'authors.profileImageSharp.parent.id',
  authors___profileImageSharp___parent___children = 'authors.profileImageSharp.parent.children',
  authors___profileImageSharp___children = 'authors.profileImageSharp.children',
  authors___profileImageSharp___children___id = 'authors.profileImageSharp.children.id',
  authors___profileImageSharp___children___children = 'authors.profileImageSharp.children.children',
  authors___profileImageSharp___internal___content = 'authors.profileImageSharp.internal.content',
  authors___profileImageSharp___internal___contentDigest = 'authors.profileImageSharp.internal.contentDigest',
  authors___profileImageSharp___internal___description = 'authors.profileImageSharp.internal.description',
  authors___profileImageSharp___internal___fieldOwners = 'authors.profileImageSharp.internal.fieldOwners',
  authors___profileImageSharp___internal___ignoreType = 'authors.profileImageSharp.internal.ignoreType',
  authors___profileImageSharp___internal___mediaType = 'authors.profileImageSharp.internal.mediaType',
  authors___profileImageSharp___internal___owner = 'authors.profileImageSharp.internal.owner',
  authors___profileImageSharp___internal___type = 'authors.profileImageSharp.internal.type',
  authors___coverImageSharp___sourceInstanceName = 'authors.coverImageSharp.sourceInstanceName',
  authors___coverImageSharp___absolutePath = 'authors.coverImageSharp.absolutePath',
  authors___coverImageSharp___relativePath = 'authors.coverImageSharp.relativePath',
  authors___coverImageSharp___extension = 'authors.coverImageSharp.extension',
  authors___coverImageSharp___size = 'authors.coverImageSharp.size',
  authors___coverImageSharp___prettySize = 'authors.coverImageSharp.prettySize',
  authors___coverImageSharp___modifiedTime = 'authors.coverImageSharp.modifiedTime',
  authors___coverImageSharp___accessTime = 'authors.coverImageSharp.accessTime',
  authors___coverImageSharp___changeTime = 'authors.coverImageSharp.changeTime',
  authors___coverImageSharp___birthTime = 'authors.coverImageSharp.birthTime',
  authors___coverImageSharp___root = 'authors.coverImageSharp.root',
  authors___coverImageSharp___dir = 'authors.coverImageSharp.dir',
  authors___coverImageSharp___base = 'authors.coverImageSharp.base',
  authors___coverImageSharp___ext = 'authors.coverImageSharp.ext',
  authors___coverImageSharp___name = 'authors.coverImageSharp.name',
  authors___coverImageSharp___relativeDirectory = 'authors.coverImageSharp.relativeDirectory',
  authors___coverImageSharp___dev = 'authors.coverImageSharp.dev',
  authors___coverImageSharp___mode = 'authors.coverImageSharp.mode',
  authors___coverImageSharp___nlink = 'authors.coverImageSharp.nlink',
  authors___coverImageSharp___uid = 'authors.coverImageSharp.uid',
  authors___coverImageSharp___gid = 'authors.coverImageSharp.gid',
  authors___coverImageSharp___rdev = 'authors.coverImageSharp.rdev',
  authors___coverImageSharp___ino = 'authors.coverImageSharp.ino',
  authors___coverImageSharp___atimeMs = 'authors.coverImageSharp.atimeMs',
  authors___coverImageSharp___mtimeMs = 'authors.coverImageSharp.mtimeMs',
  authors___coverImageSharp___ctimeMs = 'authors.coverImageSharp.ctimeMs',
  authors___coverImageSharp___atime = 'authors.coverImageSharp.atime',
  authors___coverImageSharp___mtime = 'authors.coverImageSharp.mtime',
  authors___coverImageSharp___ctime = 'authors.coverImageSharp.ctime',
  authors___coverImageSharp___birthtime = 'authors.coverImageSharp.birthtime',
  authors___coverImageSharp___birthtimeMs = 'authors.coverImageSharp.birthtimeMs',
  authors___coverImageSharp___blksize = 'authors.coverImageSharp.blksize',
  authors___coverImageSharp___blocks = 'authors.coverImageSharp.blocks',
  authors___coverImageSharp___url = 'authors.coverImageSharp.url',
  authors___coverImageSharp___publicURL = 'authors.coverImageSharp.publicURL',
  authors___coverImageSharp___childImageSharp___id = 'authors.coverImageSharp.childImageSharp.id',
  authors___coverImageSharp___childImageSharp___children = 'authors.coverImageSharp.childImageSharp.children',
  authors___coverImageSharp___id = 'authors.coverImageSharp.id',
  authors___coverImageSharp___parent___id = 'authors.coverImageSharp.parent.id',
  authors___coverImageSharp___parent___children = 'authors.coverImageSharp.parent.children',
  authors___coverImageSharp___children = 'authors.coverImageSharp.children',
  authors___coverImageSharp___children___id = 'authors.coverImageSharp.children.id',
  authors___coverImageSharp___children___children = 'authors.coverImageSharp.children.children',
  authors___coverImageSharp___internal___content = 'authors.coverImageSharp.internal.content',
  authors___coverImageSharp___internal___contentDigest = 'authors.coverImageSharp.internal.contentDigest',
  authors___coverImageSharp___internal___description = 'authors.coverImageSharp.internal.description',
  authors___coverImageSharp___internal___fieldOwners = 'authors.coverImageSharp.internal.fieldOwners',
  authors___coverImageSharp___internal___ignoreType = 'authors.coverImageSharp.internal.ignoreType',
  authors___coverImageSharp___internal___mediaType = 'authors.coverImageSharp.internal.mediaType',
  authors___coverImageSharp___internal___owner = 'authors.coverImageSharp.internal.owner',
  authors___coverImageSharp___internal___type = 'authors.coverImageSharp.internal.type',
  authors___count___posts = 'authors.count.posts',
  authors___ghostId = 'authors.ghostId',
  authors___parent___id = 'authors.parent.id',
  authors___parent___parent___id = 'authors.parent.parent.id',
  authors___parent___parent___children = 'authors.parent.parent.children',
  authors___parent___children = 'authors.parent.children',
  authors___parent___children___id = 'authors.parent.children.id',
  authors___parent___children___children = 'authors.parent.children.children',
  authors___parent___internal___content = 'authors.parent.internal.content',
  authors___parent___internal___contentDigest = 'authors.parent.internal.contentDigest',
  authors___parent___internal___description = 'authors.parent.internal.description',
  authors___parent___internal___fieldOwners = 'authors.parent.internal.fieldOwners',
  authors___parent___internal___ignoreType = 'authors.parent.internal.ignoreType',
  authors___parent___internal___mediaType = 'authors.parent.internal.mediaType',
  authors___parent___internal___owner = 'authors.parent.internal.owner',
  authors___parent___internal___type = 'authors.parent.internal.type',
  authors___children = 'authors.children',
  authors___children___id = 'authors.children.id',
  authors___children___parent___id = 'authors.children.parent.id',
  authors___children___parent___children = 'authors.children.parent.children',
  authors___children___children = 'authors.children.children',
  authors___children___children___id = 'authors.children.children.id',
  authors___children___children___children = 'authors.children.children.children',
  authors___children___internal___content = 'authors.children.internal.content',
  authors___children___internal___contentDigest = 'authors.children.internal.contentDigest',
  authors___children___internal___description = 'authors.children.internal.description',
  authors___children___internal___fieldOwners = 'authors.children.internal.fieldOwners',
  authors___children___internal___ignoreType = 'authors.children.internal.ignoreType',
  authors___children___internal___mediaType = 'authors.children.internal.mediaType',
  authors___children___internal___owner = 'authors.children.internal.owner',
  authors___children___internal___type = 'authors.children.internal.type',
  authors___internal___content = 'authors.internal.content',
  authors___internal___contentDigest = 'authors.internal.contentDigest',
  authors___internal___description = 'authors.internal.description',
  authors___internal___fieldOwners = 'authors.internal.fieldOwners',
  authors___internal___ignoreType = 'authors.internal.ignoreType',
  authors___internal___mediaType = 'authors.internal.mediaType',
  authors___internal___owner = 'authors.internal.owner',
  authors___internal___type = 'authors.internal.type',
  primary_author___id = 'primary_author.id',
  primary_author___name = 'primary_author.name',
  primary_author___slug = 'primary_author.slug',
  primary_author___profile_image = 'primary_author.profile_image',
  primary_author___cover_image = 'primary_author.cover_image',
  primary_author___bio = 'primary_author.bio',
  primary_author___website = 'primary_author.website',
  primary_author___location = 'primary_author.location',
  primary_author___facebook = 'primary_author.facebook',
  primary_author___twitter = 'primary_author.twitter',
  primary_author___meta_title = 'primary_author.meta_title',
  primary_author___meta_description = 'primary_author.meta_description',
  primary_author___postCount = 'primary_author.postCount',
  primary_author___url = 'primary_author.url',
  primary_author___profileImageSharp___sourceInstanceName = 'primary_author.profileImageSharp.sourceInstanceName',
  primary_author___profileImageSharp___absolutePath = 'primary_author.profileImageSharp.absolutePath',
  primary_author___profileImageSharp___relativePath = 'primary_author.profileImageSharp.relativePath',
  primary_author___profileImageSharp___extension = 'primary_author.profileImageSharp.extension',
  primary_author___profileImageSharp___size = 'primary_author.profileImageSharp.size',
  primary_author___profileImageSharp___prettySize = 'primary_author.profileImageSharp.prettySize',
  primary_author___profileImageSharp___modifiedTime = 'primary_author.profileImageSharp.modifiedTime',
  primary_author___profileImageSharp___accessTime = 'primary_author.profileImageSharp.accessTime',
  primary_author___profileImageSharp___changeTime = 'primary_author.profileImageSharp.changeTime',
  primary_author___profileImageSharp___birthTime = 'primary_author.profileImageSharp.birthTime',
  primary_author___profileImageSharp___root = 'primary_author.profileImageSharp.root',
  primary_author___profileImageSharp___dir = 'primary_author.profileImageSharp.dir',
  primary_author___profileImageSharp___base = 'primary_author.profileImageSharp.base',
  primary_author___profileImageSharp___ext = 'primary_author.profileImageSharp.ext',
  primary_author___profileImageSharp___name = 'primary_author.profileImageSharp.name',
  primary_author___profileImageSharp___relativeDirectory = 'primary_author.profileImageSharp.relativeDirectory',
  primary_author___profileImageSharp___dev = 'primary_author.profileImageSharp.dev',
  primary_author___profileImageSharp___mode = 'primary_author.profileImageSharp.mode',
  primary_author___profileImageSharp___nlink = 'primary_author.profileImageSharp.nlink',
  primary_author___profileImageSharp___uid = 'primary_author.profileImageSharp.uid',
  primary_author___profileImageSharp___gid = 'primary_author.profileImageSharp.gid',
  primary_author___profileImageSharp___rdev = 'primary_author.profileImageSharp.rdev',
  primary_author___profileImageSharp___ino = 'primary_author.profileImageSharp.ino',
  primary_author___profileImageSharp___atimeMs = 'primary_author.profileImageSharp.atimeMs',
  primary_author___profileImageSharp___mtimeMs = 'primary_author.profileImageSharp.mtimeMs',
  primary_author___profileImageSharp___ctimeMs = 'primary_author.profileImageSharp.ctimeMs',
  primary_author___profileImageSharp___atime = 'primary_author.profileImageSharp.atime',
  primary_author___profileImageSharp___mtime = 'primary_author.profileImageSharp.mtime',
  primary_author___profileImageSharp___ctime = 'primary_author.profileImageSharp.ctime',
  primary_author___profileImageSharp___birthtime = 'primary_author.profileImageSharp.birthtime',
  primary_author___profileImageSharp___birthtimeMs = 'primary_author.profileImageSharp.birthtimeMs',
  primary_author___profileImageSharp___blksize = 'primary_author.profileImageSharp.blksize',
  primary_author___profileImageSharp___blocks = 'primary_author.profileImageSharp.blocks',
  primary_author___profileImageSharp___url = 'primary_author.profileImageSharp.url',
  primary_author___profileImageSharp___publicURL = 'primary_author.profileImageSharp.publicURL',
  primary_author___profileImageSharp___childImageSharp___id = 'primary_author.profileImageSharp.childImageSharp.id',
  primary_author___profileImageSharp___childImageSharp___children = 'primary_author.profileImageSharp.childImageSharp.children',
  primary_author___profileImageSharp___id = 'primary_author.profileImageSharp.id',
  primary_author___profileImageSharp___parent___id = 'primary_author.profileImageSharp.parent.id',
  primary_author___profileImageSharp___parent___children = 'primary_author.profileImageSharp.parent.children',
  primary_author___profileImageSharp___children = 'primary_author.profileImageSharp.children',
  primary_author___profileImageSharp___children___id = 'primary_author.profileImageSharp.children.id',
  primary_author___profileImageSharp___children___children = 'primary_author.profileImageSharp.children.children',
  primary_author___profileImageSharp___internal___content = 'primary_author.profileImageSharp.internal.content',
  primary_author___profileImageSharp___internal___contentDigest = 'primary_author.profileImageSharp.internal.contentDigest',
  primary_author___profileImageSharp___internal___description = 'primary_author.profileImageSharp.internal.description',
  primary_author___profileImageSharp___internal___fieldOwners = 'primary_author.profileImageSharp.internal.fieldOwners',
  primary_author___profileImageSharp___internal___ignoreType = 'primary_author.profileImageSharp.internal.ignoreType',
  primary_author___profileImageSharp___internal___mediaType = 'primary_author.profileImageSharp.internal.mediaType',
  primary_author___profileImageSharp___internal___owner = 'primary_author.profileImageSharp.internal.owner',
  primary_author___profileImageSharp___internal___type = 'primary_author.profileImageSharp.internal.type',
  primary_author___coverImageSharp___sourceInstanceName = 'primary_author.coverImageSharp.sourceInstanceName',
  primary_author___coverImageSharp___absolutePath = 'primary_author.coverImageSharp.absolutePath',
  primary_author___coverImageSharp___relativePath = 'primary_author.coverImageSharp.relativePath',
  primary_author___coverImageSharp___extension = 'primary_author.coverImageSharp.extension',
  primary_author___coverImageSharp___size = 'primary_author.coverImageSharp.size',
  primary_author___coverImageSharp___prettySize = 'primary_author.coverImageSharp.prettySize',
  primary_author___coverImageSharp___modifiedTime = 'primary_author.coverImageSharp.modifiedTime',
  primary_author___coverImageSharp___accessTime = 'primary_author.coverImageSharp.accessTime',
  primary_author___coverImageSharp___changeTime = 'primary_author.coverImageSharp.changeTime',
  primary_author___coverImageSharp___birthTime = 'primary_author.coverImageSharp.birthTime',
  primary_author___coverImageSharp___root = 'primary_author.coverImageSharp.root',
  primary_author___coverImageSharp___dir = 'primary_author.coverImageSharp.dir',
  primary_author___coverImageSharp___base = 'primary_author.coverImageSharp.base',
  primary_author___coverImageSharp___ext = 'primary_author.coverImageSharp.ext',
  primary_author___coverImageSharp___name = 'primary_author.coverImageSharp.name',
  primary_author___coverImageSharp___relativeDirectory = 'primary_author.coverImageSharp.relativeDirectory',
  primary_author___coverImageSharp___dev = 'primary_author.coverImageSharp.dev',
  primary_author___coverImageSharp___mode = 'primary_author.coverImageSharp.mode',
  primary_author___coverImageSharp___nlink = 'primary_author.coverImageSharp.nlink',
  primary_author___coverImageSharp___uid = 'primary_author.coverImageSharp.uid',
  primary_author___coverImageSharp___gid = 'primary_author.coverImageSharp.gid',
  primary_author___coverImageSharp___rdev = 'primary_author.coverImageSharp.rdev',
  primary_author___coverImageSharp___ino = 'primary_author.coverImageSharp.ino',
  primary_author___coverImageSharp___atimeMs = 'primary_author.coverImageSharp.atimeMs',
  primary_author___coverImageSharp___mtimeMs = 'primary_author.coverImageSharp.mtimeMs',
  primary_author___coverImageSharp___ctimeMs = 'primary_author.coverImageSharp.ctimeMs',
  primary_author___coverImageSharp___atime = 'primary_author.coverImageSharp.atime',
  primary_author___coverImageSharp___mtime = 'primary_author.coverImageSharp.mtime',
  primary_author___coverImageSharp___ctime = 'primary_author.coverImageSharp.ctime',
  primary_author___coverImageSharp___birthtime = 'primary_author.coverImageSharp.birthtime',
  primary_author___coverImageSharp___birthtimeMs = 'primary_author.coverImageSharp.birthtimeMs',
  primary_author___coverImageSharp___blksize = 'primary_author.coverImageSharp.blksize',
  primary_author___coverImageSharp___blocks = 'primary_author.coverImageSharp.blocks',
  primary_author___coverImageSharp___url = 'primary_author.coverImageSharp.url',
  primary_author___coverImageSharp___publicURL = 'primary_author.coverImageSharp.publicURL',
  primary_author___coverImageSharp___childImageSharp___id = 'primary_author.coverImageSharp.childImageSharp.id',
  primary_author___coverImageSharp___childImageSharp___children = 'primary_author.coverImageSharp.childImageSharp.children',
  primary_author___coverImageSharp___id = 'primary_author.coverImageSharp.id',
  primary_author___coverImageSharp___parent___id = 'primary_author.coverImageSharp.parent.id',
  primary_author___coverImageSharp___parent___children = 'primary_author.coverImageSharp.parent.children',
  primary_author___coverImageSharp___children = 'primary_author.coverImageSharp.children',
  primary_author___coverImageSharp___children___id = 'primary_author.coverImageSharp.children.id',
  primary_author___coverImageSharp___children___children = 'primary_author.coverImageSharp.children.children',
  primary_author___coverImageSharp___internal___content = 'primary_author.coverImageSharp.internal.content',
  primary_author___coverImageSharp___internal___contentDigest = 'primary_author.coverImageSharp.internal.contentDigest',
  primary_author___coverImageSharp___internal___description = 'primary_author.coverImageSharp.internal.description',
  primary_author___coverImageSharp___internal___fieldOwners = 'primary_author.coverImageSharp.internal.fieldOwners',
  primary_author___coverImageSharp___internal___ignoreType = 'primary_author.coverImageSharp.internal.ignoreType',
  primary_author___coverImageSharp___internal___mediaType = 'primary_author.coverImageSharp.internal.mediaType',
  primary_author___coverImageSharp___internal___owner = 'primary_author.coverImageSharp.internal.owner',
  primary_author___coverImageSharp___internal___type = 'primary_author.coverImageSharp.internal.type',
  primary_author___count___posts = 'primary_author.count.posts',
  primary_author___ghostId = 'primary_author.ghostId',
  primary_author___parent___id = 'primary_author.parent.id',
  primary_author___parent___parent___id = 'primary_author.parent.parent.id',
  primary_author___parent___parent___children = 'primary_author.parent.parent.children',
  primary_author___parent___children = 'primary_author.parent.children',
  primary_author___parent___children___id = 'primary_author.parent.children.id',
  primary_author___parent___children___children = 'primary_author.parent.children.children',
  primary_author___parent___internal___content = 'primary_author.parent.internal.content',
  primary_author___parent___internal___contentDigest = 'primary_author.parent.internal.contentDigest',
  primary_author___parent___internal___description = 'primary_author.parent.internal.description',
  primary_author___parent___internal___fieldOwners = 'primary_author.parent.internal.fieldOwners',
  primary_author___parent___internal___ignoreType = 'primary_author.parent.internal.ignoreType',
  primary_author___parent___internal___mediaType = 'primary_author.parent.internal.mediaType',
  primary_author___parent___internal___owner = 'primary_author.parent.internal.owner',
  primary_author___parent___internal___type = 'primary_author.parent.internal.type',
  primary_author___children = 'primary_author.children',
  primary_author___children___id = 'primary_author.children.id',
  primary_author___children___parent___id = 'primary_author.children.parent.id',
  primary_author___children___parent___children = 'primary_author.children.parent.children',
  primary_author___children___children = 'primary_author.children.children',
  primary_author___children___children___id = 'primary_author.children.children.id',
  primary_author___children___children___children = 'primary_author.children.children.children',
  primary_author___children___internal___content = 'primary_author.children.internal.content',
  primary_author___children___internal___contentDigest = 'primary_author.children.internal.contentDigest',
  primary_author___children___internal___description = 'primary_author.children.internal.description',
  primary_author___children___internal___fieldOwners = 'primary_author.children.internal.fieldOwners',
  primary_author___children___internal___ignoreType = 'primary_author.children.internal.ignoreType',
  primary_author___children___internal___mediaType = 'primary_author.children.internal.mediaType',
  primary_author___children___internal___owner = 'primary_author.children.internal.owner',
  primary_author___children___internal___type = 'primary_author.children.internal.type',
  primary_author___internal___content = 'primary_author.internal.content',
  primary_author___internal___contentDigest = 'primary_author.internal.contentDigest',
  primary_author___internal___description = 'primary_author.internal.description',
  primary_author___internal___fieldOwners = 'primary_author.internal.fieldOwners',
  primary_author___internal___ignoreType = 'primary_author.internal.ignoreType',
  primary_author___internal___mediaType = 'primary_author.internal.mediaType',
  primary_author___internal___owner = 'primary_author.internal.owner',
  primary_author___internal___type = 'primary_author.internal.type',
  primary_tag___id = 'primary_tag.id',
  primary_tag___name = 'primary_tag.name',
  primary_tag___slug = 'primary_tag.slug',
  primary_tag___description = 'primary_tag.description',
  primary_tag___feature_image = 'primary_tag.feature_image',
  primary_tag___visibility = 'primary_tag.visibility',
  primary_tag___meta_title = 'primary_tag.meta_title',
  primary_tag___meta_description = 'primary_tag.meta_description',
  primary_tag___postCount = 'primary_tag.postCount',
  primary_tag___url = 'primary_tag.url',
  primary_tag___featureImageSharp___sourceInstanceName = 'primary_tag.featureImageSharp.sourceInstanceName',
  primary_tag___featureImageSharp___absolutePath = 'primary_tag.featureImageSharp.absolutePath',
  primary_tag___featureImageSharp___relativePath = 'primary_tag.featureImageSharp.relativePath',
  primary_tag___featureImageSharp___extension = 'primary_tag.featureImageSharp.extension',
  primary_tag___featureImageSharp___size = 'primary_tag.featureImageSharp.size',
  primary_tag___featureImageSharp___prettySize = 'primary_tag.featureImageSharp.prettySize',
  primary_tag___featureImageSharp___modifiedTime = 'primary_tag.featureImageSharp.modifiedTime',
  primary_tag___featureImageSharp___accessTime = 'primary_tag.featureImageSharp.accessTime',
  primary_tag___featureImageSharp___changeTime = 'primary_tag.featureImageSharp.changeTime',
  primary_tag___featureImageSharp___birthTime = 'primary_tag.featureImageSharp.birthTime',
  primary_tag___featureImageSharp___root = 'primary_tag.featureImageSharp.root',
  primary_tag___featureImageSharp___dir = 'primary_tag.featureImageSharp.dir',
  primary_tag___featureImageSharp___base = 'primary_tag.featureImageSharp.base',
  primary_tag___featureImageSharp___ext = 'primary_tag.featureImageSharp.ext',
  primary_tag___featureImageSharp___name = 'primary_tag.featureImageSharp.name',
  primary_tag___featureImageSharp___relativeDirectory = 'primary_tag.featureImageSharp.relativeDirectory',
  primary_tag___featureImageSharp___dev = 'primary_tag.featureImageSharp.dev',
  primary_tag___featureImageSharp___mode = 'primary_tag.featureImageSharp.mode',
  primary_tag___featureImageSharp___nlink = 'primary_tag.featureImageSharp.nlink',
  primary_tag___featureImageSharp___uid = 'primary_tag.featureImageSharp.uid',
  primary_tag___featureImageSharp___gid = 'primary_tag.featureImageSharp.gid',
  primary_tag___featureImageSharp___rdev = 'primary_tag.featureImageSharp.rdev',
  primary_tag___featureImageSharp___ino = 'primary_tag.featureImageSharp.ino',
  primary_tag___featureImageSharp___atimeMs = 'primary_tag.featureImageSharp.atimeMs',
  primary_tag___featureImageSharp___mtimeMs = 'primary_tag.featureImageSharp.mtimeMs',
  primary_tag___featureImageSharp___ctimeMs = 'primary_tag.featureImageSharp.ctimeMs',
  primary_tag___featureImageSharp___atime = 'primary_tag.featureImageSharp.atime',
  primary_tag___featureImageSharp___mtime = 'primary_tag.featureImageSharp.mtime',
  primary_tag___featureImageSharp___ctime = 'primary_tag.featureImageSharp.ctime',
  primary_tag___featureImageSharp___birthtime = 'primary_tag.featureImageSharp.birthtime',
  primary_tag___featureImageSharp___birthtimeMs = 'primary_tag.featureImageSharp.birthtimeMs',
  primary_tag___featureImageSharp___blksize = 'primary_tag.featureImageSharp.blksize',
  primary_tag___featureImageSharp___blocks = 'primary_tag.featureImageSharp.blocks',
  primary_tag___featureImageSharp___url = 'primary_tag.featureImageSharp.url',
  primary_tag___featureImageSharp___publicURL = 'primary_tag.featureImageSharp.publicURL',
  primary_tag___featureImageSharp___childImageSharp___id = 'primary_tag.featureImageSharp.childImageSharp.id',
  primary_tag___featureImageSharp___childImageSharp___children = 'primary_tag.featureImageSharp.childImageSharp.children',
  primary_tag___featureImageSharp___id = 'primary_tag.featureImageSharp.id',
  primary_tag___featureImageSharp___parent___id = 'primary_tag.featureImageSharp.parent.id',
  primary_tag___featureImageSharp___parent___children = 'primary_tag.featureImageSharp.parent.children',
  primary_tag___featureImageSharp___children = 'primary_tag.featureImageSharp.children',
  primary_tag___featureImageSharp___children___id = 'primary_tag.featureImageSharp.children.id',
  primary_tag___featureImageSharp___children___children = 'primary_tag.featureImageSharp.children.children',
  primary_tag___featureImageSharp___internal___content = 'primary_tag.featureImageSharp.internal.content',
  primary_tag___featureImageSharp___internal___contentDigest = 'primary_tag.featureImageSharp.internal.contentDigest',
  primary_tag___featureImageSharp___internal___description = 'primary_tag.featureImageSharp.internal.description',
  primary_tag___featureImageSharp___internal___fieldOwners = 'primary_tag.featureImageSharp.internal.fieldOwners',
  primary_tag___featureImageSharp___internal___ignoreType = 'primary_tag.featureImageSharp.internal.ignoreType',
  primary_tag___featureImageSharp___internal___mediaType = 'primary_tag.featureImageSharp.internal.mediaType',
  primary_tag___featureImageSharp___internal___owner = 'primary_tag.featureImageSharp.internal.owner',
  primary_tag___featureImageSharp___internal___type = 'primary_tag.featureImageSharp.internal.type',
  primary_tag___accent_color = 'primary_tag.accent_color',
  primary_tag___count___posts = 'primary_tag.count.posts',
  primary_tag___ghostId = 'primary_tag.ghostId',
  primary_tag___parent___id = 'primary_tag.parent.id',
  primary_tag___parent___parent___id = 'primary_tag.parent.parent.id',
  primary_tag___parent___parent___children = 'primary_tag.parent.parent.children',
  primary_tag___parent___children = 'primary_tag.parent.children',
  primary_tag___parent___children___id = 'primary_tag.parent.children.id',
  primary_tag___parent___children___children = 'primary_tag.parent.children.children',
  primary_tag___parent___internal___content = 'primary_tag.parent.internal.content',
  primary_tag___parent___internal___contentDigest = 'primary_tag.parent.internal.contentDigest',
  primary_tag___parent___internal___description = 'primary_tag.parent.internal.description',
  primary_tag___parent___internal___fieldOwners = 'primary_tag.parent.internal.fieldOwners',
  primary_tag___parent___internal___ignoreType = 'primary_tag.parent.internal.ignoreType',
  primary_tag___parent___internal___mediaType = 'primary_tag.parent.internal.mediaType',
  primary_tag___parent___internal___owner = 'primary_tag.parent.internal.owner',
  primary_tag___parent___internal___type = 'primary_tag.parent.internal.type',
  primary_tag___children = 'primary_tag.children',
  primary_tag___children___id = 'primary_tag.children.id',
  primary_tag___children___parent___id = 'primary_tag.children.parent.id',
  primary_tag___children___parent___children = 'primary_tag.children.parent.children',
  primary_tag___children___children = 'primary_tag.children.children',
  primary_tag___children___children___id = 'primary_tag.children.children.id',
  primary_tag___children___children___children = 'primary_tag.children.children.children',
  primary_tag___children___internal___content = 'primary_tag.children.internal.content',
  primary_tag___children___internal___contentDigest = 'primary_tag.children.internal.contentDigest',
  primary_tag___children___internal___description = 'primary_tag.children.internal.description',
  primary_tag___children___internal___fieldOwners = 'primary_tag.children.internal.fieldOwners',
  primary_tag___children___internal___ignoreType = 'primary_tag.children.internal.ignoreType',
  primary_tag___children___internal___mediaType = 'primary_tag.children.internal.mediaType',
  primary_tag___children___internal___owner = 'primary_tag.children.internal.owner',
  primary_tag___children___internal___type = 'primary_tag.children.internal.type',
  primary_tag___internal___content = 'primary_tag.internal.content',
  primary_tag___internal___contentDigest = 'primary_tag.internal.contentDigest',
  primary_tag___internal___description = 'primary_tag.internal.description',
  primary_tag___internal___fieldOwners = 'primary_tag.internal.fieldOwners',
  primary_tag___internal___ignoreType = 'primary_tag.internal.ignoreType',
  primary_tag___internal___mediaType = 'primary_tag.internal.mediaType',
  primary_tag___internal___owner = 'primary_tag.internal.owner',
  primary_tag___internal___type = 'primary_tag.internal.type',
  url = 'url',
  excerpt = 'excerpt',
  reading_time = 'reading_time',
  page = 'page',
  og_image = 'og_image',
  og_title = 'og_title',
  og_description = 'og_description',
  twitter_image = 'twitter_image',
  twitter_title = 'twitter_title',
  twitter_description = 'twitter_description',
  meta_title = 'meta_title',
  meta_description = 'meta_description',
  featureImageSharp___sourceInstanceName = 'featureImageSharp.sourceInstanceName',
  featureImageSharp___absolutePath = 'featureImageSharp.absolutePath',
  featureImageSharp___relativePath = 'featureImageSharp.relativePath',
  featureImageSharp___extension = 'featureImageSharp.extension',
  featureImageSharp___size = 'featureImageSharp.size',
  featureImageSharp___prettySize = 'featureImageSharp.prettySize',
  featureImageSharp___modifiedTime = 'featureImageSharp.modifiedTime',
  featureImageSharp___accessTime = 'featureImageSharp.accessTime',
  featureImageSharp___changeTime = 'featureImageSharp.changeTime',
  featureImageSharp___birthTime = 'featureImageSharp.birthTime',
  featureImageSharp___root = 'featureImageSharp.root',
  featureImageSharp___dir = 'featureImageSharp.dir',
  featureImageSharp___base = 'featureImageSharp.base',
  featureImageSharp___ext = 'featureImageSharp.ext',
  featureImageSharp___name = 'featureImageSharp.name',
  featureImageSharp___relativeDirectory = 'featureImageSharp.relativeDirectory',
  featureImageSharp___dev = 'featureImageSharp.dev',
  featureImageSharp___mode = 'featureImageSharp.mode',
  featureImageSharp___nlink = 'featureImageSharp.nlink',
  featureImageSharp___uid = 'featureImageSharp.uid',
  featureImageSharp___gid = 'featureImageSharp.gid',
  featureImageSharp___rdev = 'featureImageSharp.rdev',
  featureImageSharp___ino = 'featureImageSharp.ino',
  featureImageSharp___atimeMs = 'featureImageSharp.atimeMs',
  featureImageSharp___mtimeMs = 'featureImageSharp.mtimeMs',
  featureImageSharp___ctimeMs = 'featureImageSharp.ctimeMs',
  featureImageSharp___atime = 'featureImageSharp.atime',
  featureImageSharp___mtime = 'featureImageSharp.mtime',
  featureImageSharp___ctime = 'featureImageSharp.ctime',
  featureImageSharp___birthtime = 'featureImageSharp.birthtime',
  featureImageSharp___birthtimeMs = 'featureImageSharp.birthtimeMs',
  featureImageSharp___blksize = 'featureImageSharp.blksize',
  featureImageSharp___blocks = 'featureImageSharp.blocks',
  featureImageSharp___url = 'featureImageSharp.url',
  featureImageSharp___publicURL = 'featureImageSharp.publicURL',
  featureImageSharp___childImageSharp___fixed___base64 = 'featureImageSharp.childImageSharp.fixed.base64',
  featureImageSharp___childImageSharp___fixed___tracedSVG = 'featureImageSharp.childImageSharp.fixed.tracedSVG',
  featureImageSharp___childImageSharp___fixed___aspectRatio = 'featureImageSharp.childImageSharp.fixed.aspectRatio',
  featureImageSharp___childImageSharp___fixed___width = 'featureImageSharp.childImageSharp.fixed.width',
  featureImageSharp___childImageSharp___fixed___height = 'featureImageSharp.childImageSharp.fixed.height',
  featureImageSharp___childImageSharp___fixed___src = 'featureImageSharp.childImageSharp.fixed.src',
  featureImageSharp___childImageSharp___fixed___srcSet = 'featureImageSharp.childImageSharp.fixed.srcSet',
  featureImageSharp___childImageSharp___fixed___srcWebp = 'featureImageSharp.childImageSharp.fixed.srcWebp',
  featureImageSharp___childImageSharp___fixed___srcSetWebp = 'featureImageSharp.childImageSharp.fixed.srcSetWebp',
  featureImageSharp___childImageSharp___fixed___originalName = 'featureImageSharp.childImageSharp.fixed.originalName',
  featureImageSharp___childImageSharp___resolutions___base64 = 'featureImageSharp.childImageSharp.resolutions.base64',
  featureImageSharp___childImageSharp___resolutions___tracedSVG = 'featureImageSharp.childImageSharp.resolutions.tracedSVG',
  featureImageSharp___childImageSharp___resolutions___aspectRatio = 'featureImageSharp.childImageSharp.resolutions.aspectRatio',
  featureImageSharp___childImageSharp___resolutions___width = 'featureImageSharp.childImageSharp.resolutions.width',
  featureImageSharp___childImageSharp___resolutions___height = 'featureImageSharp.childImageSharp.resolutions.height',
  featureImageSharp___childImageSharp___resolutions___src = 'featureImageSharp.childImageSharp.resolutions.src',
  featureImageSharp___childImageSharp___resolutions___srcSet = 'featureImageSharp.childImageSharp.resolutions.srcSet',
  featureImageSharp___childImageSharp___resolutions___srcWebp = 'featureImageSharp.childImageSharp.resolutions.srcWebp',
  featureImageSharp___childImageSharp___resolutions___srcSetWebp = 'featureImageSharp.childImageSharp.resolutions.srcSetWebp',
  featureImageSharp___childImageSharp___resolutions___originalName = 'featureImageSharp.childImageSharp.resolutions.originalName',
  featureImageSharp___childImageSharp___fluid___base64 = 'featureImageSharp.childImageSharp.fluid.base64',
  featureImageSharp___childImageSharp___fluid___tracedSVG = 'featureImageSharp.childImageSharp.fluid.tracedSVG',
  featureImageSharp___childImageSharp___fluid___aspectRatio = 'featureImageSharp.childImageSharp.fluid.aspectRatio',
  featureImageSharp___childImageSharp___fluid___src = 'featureImageSharp.childImageSharp.fluid.src',
  featureImageSharp___childImageSharp___fluid___srcSet = 'featureImageSharp.childImageSharp.fluid.srcSet',
  featureImageSharp___childImageSharp___fluid___srcWebp = 'featureImageSharp.childImageSharp.fluid.srcWebp',
  featureImageSharp___childImageSharp___fluid___srcSetWebp = 'featureImageSharp.childImageSharp.fluid.srcSetWebp',
  featureImageSharp___childImageSharp___fluid___sizes = 'featureImageSharp.childImageSharp.fluid.sizes',
  featureImageSharp___childImageSharp___fluid___originalImg = 'featureImageSharp.childImageSharp.fluid.originalImg',
  featureImageSharp___childImageSharp___fluid___originalName = 'featureImageSharp.childImageSharp.fluid.originalName',
  featureImageSharp___childImageSharp___fluid___presentationWidth = 'featureImageSharp.childImageSharp.fluid.presentationWidth',
  featureImageSharp___childImageSharp___fluid___presentationHeight = 'featureImageSharp.childImageSharp.fluid.presentationHeight',
  featureImageSharp___childImageSharp___sizes___base64 = 'featureImageSharp.childImageSharp.sizes.base64',
  featureImageSharp___childImageSharp___sizes___tracedSVG = 'featureImageSharp.childImageSharp.sizes.tracedSVG',
  featureImageSharp___childImageSharp___sizes___aspectRatio = 'featureImageSharp.childImageSharp.sizes.aspectRatio',
  featureImageSharp___childImageSharp___sizes___src = 'featureImageSharp.childImageSharp.sizes.src',
  featureImageSharp___childImageSharp___sizes___srcSet = 'featureImageSharp.childImageSharp.sizes.srcSet',
  featureImageSharp___childImageSharp___sizes___srcWebp = 'featureImageSharp.childImageSharp.sizes.srcWebp',
  featureImageSharp___childImageSharp___sizes___srcSetWebp = 'featureImageSharp.childImageSharp.sizes.srcSetWebp',
  featureImageSharp___childImageSharp___sizes___sizes = 'featureImageSharp.childImageSharp.sizes.sizes',
  featureImageSharp___childImageSharp___sizes___originalImg = 'featureImageSharp.childImageSharp.sizes.originalImg',
  featureImageSharp___childImageSharp___sizes___originalName = 'featureImageSharp.childImageSharp.sizes.originalName',
  featureImageSharp___childImageSharp___sizes___presentationWidth = 'featureImageSharp.childImageSharp.sizes.presentationWidth',
  featureImageSharp___childImageSharp___sizes___presentationHeight = 'featureImageSharp.childImageSharp.sizes.presentationHeight',
  featureImageSharp___childImageSharp___original___width = 'featureImageSharp.childImageSharp.original.width',
  featureImageSharp___childImageSharp___original___height = 'featureImageSharp.childImageSharp.original.height',
  featureImageSharp___childImageSharp___original___src = 'featureImageSharp.childImageSharp.original.src',
  featureImageSharp___childImageSharp___resize___src = 'featureImageSharp.childImageSharp.resize.src',
  featureImageSharp___childImageSharp___resize___tracedSVG = 'featureImageSharp.childImageSharp.resize.tracedSVG',
  featureImageSharp___childImageSharp___resize___width = 'featureImageSharp.childImageSharp.resize.width',
  featureImageSharp___childImageSharp___resize___height = 'featureImageSharp.childImageSharp.resize.height',
  featureImageSharp___childImageSharp___resize___aspectRatio = 'featureImageSharp.childImageSharp.resize.aspectRatio',
  featureImageSharp___childImageSharp___resize___originalName = 'featureImageSharp.childImageSharp.resize.originalName',
  featureImageSharp___childImageSharp___id = 'featureImageSharp.childImageSharp.id',
  featureImageSharp___childImageSharp___parent___id = 'featureImageSharp.childImageSharp.parent.id',
  featureImageSharp___childImageSharp___parent___children = 'featureImageSharp.childImageSharp.parent.children',
  featureImageSharp___childImageSharp___children = 'featureImageSharp.childImageSharp.children',
  featureImageSharp___childImageSharp___children___id = 'featureImageSharp.childImageSharp.children.id',
  featureImageSharp___childImageSharp___children___children = 'featureImageSharp.childImageSharp.children.children',
  featureImageSharp___childImageSharp___internal___content = 'featureImageSharp.childImageSharp.internal.content',
  featureImageSharp___childImageSharp___internal___contentDigest = 'featureImageSharp.childImageSharp.internal.contentDigest',
  featureImageSharp___childImageSharp___internal___description = 'featureImageSharp.childImageSharp.internal.description',
  featureImageSharp___childImageSharp___internal___fieldOwners = 'featureImageSharp.childImageSharp.internal.fieldOwners',
  featureImageSharp___childImageSharp___internal___ignoreType = 'featureImageSharp.childImageSharp.internal.ignoreType',
  featureImageSharp___childImageSharp___internal___mediaType = 'featureImageSharp.childImageSharp.internal.mediaType',
  featureImageSharp___childImageSharp___internal___owner = 'featureImageSharp.childImageSharp.internal.owner',
  featureImageSharp___childImageSharp___internal___type = 'featureImageSharp.childImageSharp.internal.type',
  featureImageSharp___id = 'featureImageSharp.id',
  featureImageSharp___parent___id = 'featureImageSharp.parent.id',
  featureImageSharp___parent___parent___id = 'featureImageSharp.parent.parent.id',
  featureImageSharp___parent___parent___children = 'featureImageSharp.parent.parent.children',
  featureImageSharp___parent___children = 'featureImageSharp.parent.children',
  featureImageSharp___parent___children___id = 'featureImageSharp.parent.children.id',
  featureImageSharp___parent___children___children = 'featureImageSharp.parent.children.children',
  featureImageSharp___parent___internal___content = 'featureImageSharp.parent.internal.content',
  featureImageSharp___parent___internal___contentDigest = 'featureImageSharp.parent.internal.contentDigest',
  featureImageSharp___parent___internal___description = 'featureImageSharp.parent.internal.description',
  featureImageSharp___parent___internal___fieldOwners = 'featureImageSharp.parent.internal.fieldOwners',
  featureImageSharp___parent___internal___ignoreType = 'featureImageSharp.parent.internal.ignoreType',
  featureImageSharp___parent___internal___mediaType = 'featureImageSharp.parent.internal.mediaType',
  featureImageSharp___parent___internal___owner = 'featureImageSharp.parent.internal.owner',
  featureImageSharp___parent___internal___type = 'featureImageSharp.parent.internal.type',
  featureImageSharp___children = 'featureImageSharp.children',
  featureImageSharp___children___id = 'featureImageSharp.children.id',
  featureImageSharp___children___parent___id = 'featureImageSharp.children.parent.id',
  featureImageSharp___children___parent___children = 'featureImageSharp.children.parent.children',
  featureImageSharp___children___children = 'featureImageSharp.children.children',
  featureImageSharp___children___children___id = 'featureImageSharp.children.children.id',
  featureImageSharp___children___children___children = 'featureImageSharp.children.children.children',
  featureImageSharp___children___internal___content = 'featureImageSharp.children.internal.content',
  featureImageSharp___children___internal___contentDigest = 'featureImageSharp.children.internal.contentDigest',
  featureImageSharp___children___internal___description = 'featureImageSharp.children.internal.description',
  featureImageSharp___children___internal___fieldOwners = 'featureImageSharp.children.internal.fieldOwners',
  featureImageSharp___children___internal___ignoreType = 'featureImageSharp.children.internal.ignoreType',
  featureImageSharp___children___internal___mediaType = 'featureImageSharp.children.internal.mediaType',
  featureImageSharp___children___internal___owner = 'featureImageSharp.children.internal.owner',
  featureImageSharp___children___internal___type = 'featureImageSharp.children.internal.type',
  featureImageSharp___internal___content = 'featureImageSharp.internal.content',
  featureImageSharp___internal___contentDigest = 'featureImageSharp.internal.contentDigest',
  featureImageSharp___internal___description = 'featureImageSharp.internal.description',
  featureImageSharp___internal___fieldOwners = 'featureImageSharp.internal.fieldOwners',
  featureImageSharp___internal___ignoreType = 'featureImageSharp.internal.ignoreType',
  featureImageSharp___internal___mediaType = 'featureImageSharp.internal.mediaType',
  featureImageSharp___internal___owner = 'featureImageSharp.internal.owner',
  featureImageSharp___internal___type = 'featureImageSharp.internal.type',
  childHtmlRehype___html = 'childHtmlRehype.html',
  childHtmlRehype___htmlAst = 'childHtmlRehype.htmlAst',
  childHtmlRehype___tableOfContents = 'childHtmlRehype.tableOfContents',
  childHtmlRehype___id = 'childHtmlRehype.id',
  childHtmlRehype___parent___id = 'childHtmlRehype.parent.id',
  childHtmlRehype___parent___parent___id = 'childHtmlRehype.parent.parent.id',
  childHtmlRehype___parent___parent___children = 'childHtmlRehype.parent.parent.children',
  childHtmlRehype___parent___children = 'childHtmlRehype.parent.children',
  childHtmlRehype___parent___children___id = 'childHtmlRehype.parent.children.id',
  childHtmlRehype___parent___children___children = 'childHtmlRehype.parent.children.children',
  childHtmlRehype___parent___internal___content = 'childHtmlRehype.parent.internal.content',
  childHtmlRehype___parent___internal___contentDigest = 'childHtmlRehype.parent.internal.contentDigest',
  childHtmlRehype___parent___internal___description = 'childHtmlRehype.parent.internal.description',
  childHtmlRehype___parent___internal___fieldOwners = 'childHtmlRehype.parent.internal.fieldOwners',
  childHtmlRehype___parent___internal___ignoreType = 'childHtmlRehype.parent.internal.ignoreType',
  childHtmlRehype___parent___internal___mediaType = 'childHtmlRehype.parent.internal.mediaType',
  childHtmlRehype___parent___internal___owner = 'childHtmlRehype.parent.internal.owner',
  childHtmlRehype___parent___internal___type = 'childHtmlRehype.parent.internal.type',
  childHtmlRehype___children = 'childHtmlRehype.children',
  childHtmlRehype___children___id = 'childHtmlRehype.children.id',
  childHtmlRehype___children___parent___id = 'childHtmlRehype.children.parent.id',
  childHtmlRehype___children___parent___children = 'childHtmlRehype.children.parent.children',
  childHtmlRehype___children___children = 'childHtmlRehype.children.children',
  childHtmlRehype___children___children___id = 'childHtmlRehype.children.children.id',
  childHtmlRehype___children___children___children = 'childHtmlRehype.children.children.children',
  childHtmlRehype___children___internal___content = 'childHtmlRehype.children.internal.content',
  childHtmlRehype___children___internal___contentDigest = 'childHtmlRehype.children.internal.contentDigest',
  childHtmlRehype___children___internal___description = 'childHtmlRehype.children.internal.description',
  childHtmlRehype___children___internal___fieldOwners = 'childHtmlRehype.children.internal.fieldOwners',
  childHtmlRehype___children___internal___ignoreType = 'childHtmlRehype.children.internal.ignoreType',
  childHtmlRehype___children___internal___mediaType = 'childHtmlRehype.children.internal.mediaType',
  childHtmlRehype___children___internal___owner = 'childHtmlRehype.children.internal.owner',
  childHtmlRehype___children___internal___type = 'childHtmlRehype.children.internal.type',
  childHtmlRehype___internal___content = 'childHtmlRehype.internal.content',
  childHtmlRehype___internal___contentDigest = 'childHtmlRehype.internal.contentDigest',
  childHtmlRehype___internal___description = 'childHtmlRehype.internal.description',
  childHtmlRehype___internal___fieldOwners = 'childHtmlRehype.internal.fieldOwners',
  childHtmlRehype___internal___ignoreType = 'childHtmlRehype.internal.ignoreType',
  childHtmlRehype___internal___mediaType = 'childHtmlRehype.internal.mediaType',
  childHtmlRehype___internal___owner = 'childHtmlRehype.internal.owner',
  childHtmlRehype___internal___type = 'childHtmlRehype.internal.type',
  access = 'access',
  ghostId = 'ghostId',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type GhostPageFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly uuid: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly comment_id: Maybe<StringQueryOperatorInput>;
  readonly plaintext: Maybe<StringQueryOperatorInput>;
  readonly feature_image: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly visibility: Maybe<StringQueryOperatorInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly published_at: Maybe<DateQueryOperatorInput>;
  readonly custom_excerpt: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_head: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_foot: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_styles: Maybe<StringQueryOperatorInput>;
  readonly custom_template: Maybe<StringQueryOperatorInput>;
  readonly canonical_url: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<GhostTagFilterListInput>;
  readonly authors: Maybe<GhostAuthorFilterListInput>;
  readonly primary_author: Maybe<GhostAuthorFilterInput>;
  readonly primary_tag: Maybe<GhostTagFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly reading_time: Maybe<IntQueryOperatorInput>;
  readonly page: Maybe<BooleanQueryOperatorInput>;
  readonly og_image: Maybe<StringQueryOperatorInput>;
  readonly og_title: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly twitter_image: Maybe<StringQueryOperatorInput>;
  readonly twitter_title: Maybe<StringQueryOperatorInput>;
  readonly twitter_description: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly featureImageSharp: Maybe<FileFilterInput>;
  readonly childHtmlRehype: Maybe<HtmlRehypeFilterInput>;
  readonly access: Maybe<BooleanQueryOperatorInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPageEdge>;
  readonly nodes: ReadonlyArray<GhostPage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostPost = Node & {
  readonly id: Scalars['ID'];
  readonly uuid: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly comment_id: Maybe<Scalars['String']>;
  readonly plaintext: Maybe<Scalars['String']>;
  readonly feature_image: Maybe<Scalars['String']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly visibility: Maybe<Scalars['String']>;
  readonly send_email_when_published: Maybe<Scalars['Boolean']>;
  readonly created_at: Maybe<Scalars['Date']>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly published_at: Maybe<Scalars['Date']>;
  readonly custom_excerpt: Maybe<Scalars['String']>;
  readonly codeinjection_head: Maybe<Scalars['String']>;
  readonly codeinjection_foot: Maybe<Scalars['String']>;
  readonly codeinjection_styles: Maybe<Scalars['String']>;
  readonly custom_template: Maybe<Scalars['String']>;
  readonly canonical_url: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<GhostTag>>>;
  readonly authors: Maybe<ReadonlyArray<Maybe<GhostAuthor>>>;
  readonly primary_author: Maybe<GhostAuthor>;
  readonly primary_tag: Maybe<GhostTag>;
  readonly url: Maybe<Scalars['String']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly reading_time: Maybe<Scalars['Int']>;
  readonly og_image: Maybe<Scalars['String']>;
  readonly og_title: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly twitter_image: Maybe<Scalars['String']>;
  readonly twitter_title: Maybe<Scalars['String']>;
  readonly twitter_description: Maybe<Scalars['String']>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly email_subject: Maybe<Scalars['String']>;
  readonly featureImageSharp: Maybe<File>;
  readonly childHtmlRehype: Maybe<HtmlRehype>;
  readonly access: Maybe<Scalars['Boolean']>;
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type GhostPost_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPost_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPost_published_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GhostPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPostEdge>;
  readonly nodes: ReadonlyArray<GhostPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GhostPostGroupConnection>;
};


type GhostPostConnection_distinctArgs = {
  field: GhostPostFieldsEnum;
};


type GhostPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostPostFieldsEnum;
};

type GhostPostEdge = {
  readonly next: Maybe<GhostPost>;
  readonly node: GhostPost;
  readonly previous: Maybe<GhostPost>;
};

enum GhostPostFieldsEnum {
  id = 'id',
  uuid = 'uuid',
  title = 'title',
  slug = 'slug',
  html = 'html',
  comment_id = 'comment_id',
  plaintext = 'plaintext',
  feature_image = 'feature_image',
  featured = 'featured',
  visibility = 'visibility',
  send_email_when_published = 'send_email_when_published',
  created_at = 'created_at',
  updated_at = 'updated_at',
  published_at = 'published_at',
  custom_excerpt = 'custom_excerpt',
  codeinjection_head = 'codeinjection_head',
  codeinjection_foot = 'codeinjection_foot',
  codeinjection_styles = 'codeinjection_styles',
  custom_template = 'custom_template',
  canonical_url = 'canonical_url',
  tags = 'tags',
  tags___id = 'tags.id',
  tags___name = 'tags.name',
  tags___slug = 'tags.slug',
  tags___description = 'tags.description',
  tags___feature_image = 'tags.feature_image',
  tags___visibility = 'tags.visibility',
  tags___meta_title = 'tags.meta_title',
  tags___meta_description = 'tags.meta_description',
  tags___postCount = 'tags.postCount',
  tags___url = 'tags.url',
  tags___featureImageSharp___sourceInstanceName = 'tags.featureImageSharp.sourceInstanceName',
  tags___featureImageSharp___absolutePath = 'tags.featureImageSharp.absolutePath',
  tags___featureImageSharp___relativePath = 'tags.featureImageSharp.relativePath',
  tags___featureImageSharp___extension = 'tags.featureImageSharp.extension',
  tags___featureImageSharp___size = 'tags.featureImageSharp.size',
  tags___featureImageSharp___prettySize = 'tags.featureImageSharp.prettySize',
  tags___featureImageSharp___modifiedTime = 'tags.featureImageSharp.modifiedTime',
  tags___featureImageSharp___accessTime = 'tags.featureImageSharp.accessTime',
  tags___featureImageSharp___changeTime = 'tags.featureImageSharp.changeTime',
  tags___featureImageSharp___birthTime = 'tags.featureImageSharp.birthTime',
  tags___featureImageSharp___root = 'tags.featureImageSharp.root',
  tags___featureImageSharp___dir = 'tags.featureImageSharp.dir',
  tags___featureImageSharp___base = 'tags.featureImageSharp.base',
  tags___featureImageSharp___ext = 'tags.featureImageSharp.ext',
  tags___featureImageSharp___name = 'tags.featureImageSharp.name',
  tags___featureImageSharp___relativeDirectory = 'tags.featureImageSharp.relativeDirectory',
  tags___featureImageSharp___dev = 'tags.featureImageSharp.dev',
  tags___featureImageSharp___mode = 'tags.featureImageSharp.mode',
  tags___featureImageSharp___nlink = 'tags.featureImageSharp.nlink',
  tags___featureImageSharp___uid = 'tags.featureImageSharp.uid',
  tags___featureImageSharp___gid = 'tags.featureImageSharp.gid',
  tags___featureImageSharp___rdev = 'tags.featureImageSharp.rdev',
  tags___featureImageSharp___ino = 'tags.featureImageSharp.ino',
  tags___featureImageSharp___atimeMs = 'tags.featureImageSharp.atimeMs',
  tags___featureImageSharp___mtimeMs = 'tags.featureImageSharp.mtimeMs',
  tags___featureImageSharp___ctimeMs = 'tags.featureImageSharp.ctimeMs',
  tags___featureImageSharp___atime = 'tags.featureImageSharp.atime',
  tags___featureImageSharp___mtime = 'tags.featureImageSharp.mtime',
  tags___featureImageSharp___ctime = 'tags.featureImageSharp.ctime',
  tags___featureImageSharp___birthtime = 'tags.featureImageSharp.birthtime',
  tags___featureImageSharp___birthtimeMs = 'tags.featureImageSharp.birthtimeMs',
  tags___featureImageSharp___blksize = 'tags.featureImageSharp.blksize',
  tags___featureImageSharp___blocks = 'tags.featureImageSharp.blocks',
  tags___featureImageSharp___url = 'tags.featureImageSharp.url',
  tags___featureImageSharp___publicURL = 'tags.featureImageSharp.publicURL',
  tags___featureImageSharp___childImageSharp___id = 'tags.featureImageSharp.childImageSharp.id',
  tags___featureImageSharp___childImageSharp___children = 'tags.featureImageSharp.childImageSharp.children',
  tags___featureImageSharp___id = 'tags.featureImageSharp.id',
  tags___featureImageSharp___parent___id = 'tags.featureImageSharp.parent.id',
  tags___featureImageSharp___parent___children = 'tags.featureImageSharp.parent.children',
  tags___featureImageSharp___children = 'tags.featureImageSharp.children',
  tags___featureImageSharp___children___id = 'tags.featureImageSharp.children.id',
  tags___featureImageSharp___children___children = 'tags.featureImageSharp.children.children',
  tags___featureImageSharp___internal___content = 'tags.featureImageSharp.internal.content',
  tags___featureImageSharp___internal___contentDigest = 'tags.featureImageSharp.internal.contentDigest',
  tags___featureImageSharp___internal___description = 'tags.featureImageSharp.internal.description',
  tags___featureImageSharp___internal___fieldOwners = 'tags.featureImageSharp.internal.fieldOwners',
  tags___featureImageSharp___internal___ignoreType = 'tags.featureImageSharp.internal.ignoreType',
  tags___featureImageSharp___internal___mediaType = 'tags.featureImageSharp.internal.mediaType',
  tags___featureImageSharp___internal___owner = 'tags.featureImageSharp.internal.owner',
  tags___featureImageSharp___internal___type = 'tags.featureImageSharp.internal.type',
  tags___accent_color = 'tags.accent_color',
  tags___count___posts = 'tags.count.posts',
  tags___ghostId = 'tags.ghostId',
  tags___parent___id = 'tags.parent.id',
  tags___parent___parent___id = 'tags.parent.parent.id',
  tags___parent___parent___children = 'tags.parent.parent.children',
  tags___parent___children = 'tags.parent.children',
  tags___parent___children___id = 'tags.parent.children.id',
  tags___parent___children___children = 'tags.parent.children.children',
  tags___parent___internal___content = 'tags.parent.internal.content',
  tags___parent___internal___contentDigest = 'tags.parent.internal.contentDigest',
  tags___parent___internal___description = 'tags.parent.internal.description',
  tags___parent___internal___fieldOwners = 'tags.parent.internal.fieldOwners',
  tags___parent___internal___ignoreType = 'tags.parent.internal.ignoreType',
  tags___parent___internal___mediaType = 'tags.parent.internal.mediaType',
  tags___parent___internal___owner = 'tags.parent.internal.owner',
  tags___parent___internal___type = 'tags.parent.internal.type',
  tags___children = 'tags.children',
  tags___children___id = 'tags.children.id',
  tags___children___parent___id = 'tags.children.parent.id',
  tags___children___parent___children = 'tags.children.parent.children',
  tags___children___children = 'tags.children.children',
  tags___children___children___id = 'tags.children.children.id',
  tags___children___children___children = 'tags.children.children.children',
  tags___children___internal___content = 'tags.children.internal.content',
  tags___children___internal___contentDigest = 'tags.children.internal.contentDigest',
  tags___children___internal___description = 'tags.children.internal.description',
  tags___children___internal___fieldOwners = 'tags.children.internal.fieldOwners',
  tags___children___internal___ignoreType = 'tags.children.internal.ignoreType',
  tags___children___internal___mediaType = 'tags.children.internal.mediaType',
  tags___children___internal___owner = 'tags.children.internal.owner',
  tags___children___internal___type = 'tags.children.internal.type',
  tags___internal___content = 'tags.internal.content',
  tags___internal___contentDigest = 'tags.internal.contentDigest',
  tags___internal___description = 'tags.internal.description',
  tags___internal___fieldOwners = 'tags.internal.fieldOwners',
  tags___internal___ignoreType = 'tags.internal.ignoreType',
  tags___internal___mediaType = 'tags.internal.mediaType',
  tags___internal___owner = 'tags.internal.owner',
  tags___internal___type = 'tags.internal.type',
  authors = 'authors',
  authors___id = 'authors.id',
  authors___name = 'authors.name',
  authors___slug = 'authors.slug',
  authors___profile_image = 'authors.profile_image',
  authors___cover_image = 'authors.cover_image',
  authors___bio = 'authors.bio',
  authors___website = 'authors.website',
  authors___location = 'authors.location',
  authors___facebook = 'authors.facebook',
  authors___twitter = 'authors.twitter',
  authors___meta_title = 'authors.meta_title',
  authors___meta_description = 'authors.meta_description',
  authors___postCount = 'authors.postCount',
  authors___url = 'authors.url',
  authors___profileImageSharp___sourceInstanceName = 'authors.profileImageSharp.sourceInstanceName',
  authors___profileImageSharp___absolutePath = 'authors.profileImageSharp.absolutePath',
  authors___profileImageSharp___relativePath = 'authors.profileImageSharp.relativePath',
  authors___profileImageSharp___extension = 'authors.profileImageSharp.extension',
  authors___profileImageSharp___size = 'authors.profileImageSharp.size',
  authors___profileImageSharp___prettySize = 'authors.profileImageSharp.prettySize',
  authors___profileImageSharp___modifiedTime = 'authors.profileImageSharp.modifiedTime',
  authors___profileImageSharp___accessTime = 'authors.profileImageSharp.accessTime',
  authors___profileImageSharp___changeTime = 'authors.profileImageSharp.changeTime',
  authors___profileImageSharp___birthTime = 'authors.profileImageSharp.birthTime',
  authors___profileImageSharp___root = 'authors.profileImageSharp.root',
  authors___profileImageSharp___dir = 'authors.profileImageSharp.dir',
  authors___profileImageSharp___base = 'authors.profileImageSharp.base',
  authors___profileImageSharp___ext = 'authors.profileImageSharp.ext',
  authors___profileImageSharp___name = 'authors.profileImageSharp.name',
  authors___profileImageSharp___relativeDirectory = 'authors.profileImageSharp.relativeDirectory',
  authors___profileImageSharp___dev = 'authors.profileImageSharp.dev',
  authors___profileImageSharp___mode = 'authors.profileImageSharp.mode',
  authors___profileImageSharp___nlink = 'authors.profileImageSharp.nlink',
  authors___profileImageSharp___uid = 'authors.profileImageSharp.uid',
  authors___profileImageSharp___gid = 'authors.profileImageSharp.gid',
  authors___profileImageSharp___rdev = 'authors.profileImageSharp.rdev',
  authors___profileImageSharp___ino = 'authors.profileImageSharp.ino',
  authors___profileImageSharp___atimeMs = 'authors.profileImageSharp.atimeMs',
  authors___profileImageSharp___mtimeMs = 'authors.profileImageSharp.mtimeMs',
  authors___profileImageSharp___ctimeMs = 'authors.profileImageSharp.ctimeMs',
  authors___profileImageSharp___atime = 'authors.profileImageSharp.atime',
  authors___profileImageSharp___mtime = 'authors.profileImageSharp.mtime',
  authors___profileImageSharp___ctime = 'authors.profileImageSharp.ctime',
  authors___profileImageSharp___birthtime = 'authors.profileImageSharp.birthtime',
  authors___profileImageSharp___birthtimeMs = 'authors.profileImageSharp.birthtimeMs',
  authors___profileImageSharp___blksize = 'authors.profileImageSharp.blksize',
  authors___profileImageSharp___blocks = 'authors.profileImageSharp.blocks',
  authors___profileImageSharp___url = 'authors.profileImageSharp.url',
  authors___profileImageSharp___publicURL = 'authors.profileImageSharp.publicURL',
  authors___profileImageSharp___childImageSharp___id = 'authors.profileImageSharp.childImageSharp.id',
  authors___profileImageSharp___childImageSharp___children = 'authors.profileImageSharp.childImageSharp.children',
  authors___profileImageSharp___id = 'authors.profileImageSharp.id',
  authors___profileImageSharp___parent___id = 'authors.profileImageSharp.parent.id',
  authors___profileImageSharp___parent___children = 'authors.profileImageSharp.parent.children',
  authors___profileImageSharp___children = 'authors.profileImageSharp.children',
  authors___profileImageSharp___children___id = 'authors.profileImageSharp.children.id',
  authors___profileImageSharp___children___children = 'authors.profileImageSharp.children.children',
  authors___profileImageSharp___internal___content = 'authors.profileImageSharp.internal.content',
  authors___profileImageSharp___internal___contentDigest = 'authors.profileImageSharp.internal.contentDigest',
  authors___profileImageSharp___internal___description = 'authors.profileImageSharp.internal.description',
  authors___profileImageSharp___internal___fieldOwners = 'authors.profileImageSharp.internal.fieldOwners',
  authors___profileImageSharp___internal___ignoreType = 'authors.profileImageSharp.internal.ignoreType',
  authors___profileImageSharp___internal___mediaType = 'authors.profileImageSharp.internal.mediaType',
  authors___profileImageSharp___internal___owner = 'authors.profileImageSharp.internal.owner',
  authors___profileImageSharp___internal___type = 'authors.profileImageSharp.internal.type',
  authors___coverImageSharp___sourceInstanceName = 'authors.coverImageSharp.sourceInstanceName',
  authors___coverImageSharp___absolutePath = 'authors.coverImageSharp.absolutePath',
  authors___coverImageSharp___relativePath = 'authors.coverImageSharp.relativePath',
  authors___coverImageSharp___extension = 'authors.coverImageSharp.extension',
  authors___coverImageSharp___size = 'authors.coverImageSharp.size',
  authors___coverImageSharp___prettySize = 'authors.coverImageSharp.prettySize',
  authors___coverImageSharp___modifiedTime = 'authors.coverImageSharp.modifiedTime',
  authors___coverImageSharp___accessTime = 'authors.coverImageSharp.accessTime',
  authors___coverImageSharp___changeTime = 'authors.coverImageSharp.changeTime',
  authors___coverImageSharp___birthTime = 'authors.coverImageSharp.birthTime',
  authors___coverImageSharp___root = 'authors.coverImageSharp.root',
  authors___coverImageSharp___dir = 'authors.coverImageSharp.dir',
  authors___coverImageSharp___base = 'authors.coverImageSharp.base',
  authors___coverImageSharp___ext = 'authors.coverImageSharp.ext',
  authors___coverImageSharp___name = 'authors.coverImageSharp.name',
  authors___coverImageSharp___relativeDirectory = 'authors.coverImageSharp.relativeDirectory',
  authors___coverImageSharp___dev = 'authors.coverImageSharp.dev',
  authors___coverImageSharp___mode = 'authors.coverImageSharp.mode',
  authors___coverImageSharp___nlink = 'authors.coverImageSharp.nlink',
  authors___coverImageSharp___uid = 'authors.coverImageSharp.uid',
  authors___coverImageSharp___gid = 'authors.coverImageSharp.gid',
  authors___coverImageSharp___rdev = 'authors.coverImageSharp.rdev',
  authors___coverImageSharp___ino = 'authors.coverImageSharp.ino',
  authors___coverImageSharp___atimeMs = 'authors.coverImageSharp.atimeMs',
  authors___coverImageSharp___mtimeMs = 'authors.coverImageSharp.mtimeMs',
  authors___coverImageSharp___ctimeMs = 'authors.coverImageSharp.ctimeMs',
  authors___coverImageSharp___atime = 'authors.coverImageSharp.atime',
  authors___coverImageSharp___mtime = 'authors.coverImageSharp.mtime',
  authors___coverImageSharp___ctime = 'authors.coverImageSharp.ctime',
  authors___coverImageSharp___birthtime = 'authors.coverImageSharp.birthtime',
  authors___coverImageSharp___birthtimeMs = 'authors.coverImageSharp.birthtimeMs',
  authors___coverImageSharp___blksize = 'authors.coverImageSharp.blksize',
  authors___coverImageSharp___blocks = 'authors.coverImageSharp.blocks',
  authors___coverImageSharp___url = 'authors.coverImageSharp.url',
  authors___coverImageSharp___publicURL = 'authors.coverImageSharp.publicURL',
  authors___coverImageSharp___childImageSharp___id = 'authors.coverImageSharp.childImageSharp.id',
  authors___coverImageSharp___childImageSharp___children = 'authors.coverImageSharp.childImageSharp.children',
  authors___coverImageSharp___id = 'authors.coverImageSharp.id',
  authors___coverImageSharp___parent___id = 'authors.coverImageSharp.parent.id',
  authors___coverImageSharp___parent___children = 'authors.coverImageSharp.parent.children',
  authors___coverImageSharp___children = 'authors.coverImageSharp.children',
  authors___coverImageSharp___children___id = 'authors.coverImageSharp.children.id',
  authors___coverImageSharp___children___children = 'authors.coverImageSharp.children.children',
  authors___coverImageSharp___internal___content = 'authors.coverImageSharp.internal.content',
  authors___coverImageSharp___internal___contentDigest = 'authors.coverImageSharp.internal.contentDigest',
  authors___coverImageSharp___internal___description = 'authors.coverImageSharp.internal.description',
  authors___coverImageSharp___internal___fieldOwners = 'authors.coverImageSharp.internal.fieldOwners',
  authors___coverImageSharp___internal___ignoreType = 'authors.coverImageSharp.internal.ignoreType',
  authors___coverImageSharp___internal___mediaType = 'authors.coverImageSharp.internal.mediaType',
  authors___coverImageSharp___internal___owner = 'authors.coverImageSharp.internal.owner',
  authors___coverImageSharp___internal___type = 'authors.coverImageSharp.internal.type',
  authors___count___posts = 'authors.count.posts',
  authors___ghostId = 'authors.ghostId',
  authors___parent___id = 'authors.parent.id',
  authors___parent___parent___id = 'authors.parent.parent.id',
  authors___parent___parent___children = 'authors.parent.parent.children',
  authors___parent___children = 'authors.parent.children',
  authors___parent___children___id = 'authors.parent.children.id',
  authors___parent___children___children = 'authors.parent.children.children',
  authors___parent___internal___content = 'authors.parent.internal.content',
  authors___parent___internal___contentDigest = 'authors.parent.internal.contentDigest',
  authors___parent___internal___description = 'authors.parent.internal.description',
  authors___parent___internal___fieldOwners = 'authors.parent.internal.fieldOwners',
  authors___parent___internal___ignoreType = 'authors.parent.internal.ignoreType',
  authors___parent___internal___mediaType = 'authors.parent.internal.mediaType',
  authors___parent___internal___owner = 'authors.parent.internal.owner',
  authors___parent___internal___type = 'authors.parent.internal.type',
  authors___children = 'authors.children',
  authors___children___id = 'authors.children.id',
  authors___children___parent___id = 'authors.children.parent.id',
  authors___children___parent___children = 'authors.children.parent.children',
  authors___children___children = 'authors.children.children',
  authors___children___children___id = 'authors.children.children.id',
  authors___children___children___children = 'authors.children.children.children',
  authors___children___internal___content = 'authors.children.internal.content',
  authors___children___internal___contentDigest = 'authors.children.internal.contentDigest',
  authors___children___internal___description = 'authors.children.internal.description',
  authors___children___internal___fieldOwners = 'authors.children.internal.fieldOwners',
  authors___children___internal___ignoreType = 'authors.children.internal.ignoreType',
  authors___children___internal___mediaType = 'authors.children.internal.mediaType',
  authors___children___internal___owner = 'authors.children.internal.owner',
  authors___children___internal___type = 'authors.children.internal.type',
  authors___internal___content = 'authors.internal.content',
  authors___internal___contentDigest = 'authors.internal.contentDigest',
  authors___internal___description = 'authors.internal.description',
  authors___internal___fieldOwners = 'authors.internal.fieldOwners',
  authors___internal___ignoreType = 'authors.internal.ignoreType',
  authors___internal___mediaType = 'authors.internal.mediaType',
  authors___internal___owner = 'authors.internal.owner',
  authors___internal___type = 'authors.internal.type',
  primary_author___id = 'primary_author.id',
  primary_author___name = 'primary_author.name',
  primary_author___slug = 'primary_author.slug',
  primary_author___profile_image = 'primary_author.profile_image',
  primary_author___cover_image = 'primary_author.cover_image',
  primary_author___bio = 'primary_author.bio',
  primary_author___website = 'primary_author.website',
  primary_author___location = 'primary_author.location',
  primary_author___facebook = 'primary_author.facebook',
  primary_author___twitter = 'primary_author.twitter',
  primary_author___meta_title = 'primary_author.meta_title',
  primary_author___meta_description = 'primary_author.meta_description',
  primary_author___postCount = 'primary_author.postCount',
  primary_author___url = 'primary_author.url',
  primary_author___profileImageSharp___sourceInstanceName = 'primary_author.profileImageSharp.sourceInstanceName',
  primary_author___profileImageSharp___absolutePath = 'primary_author.profileImageSharp.absolutePath',
  primary_author___profileImageSharp___relativePath = 'primary_author.profileImageSharp.relativePath',
  primary_author___profileImageSharp___extension = 'primary_author.profileImageSharp.extension',
  primary_author___profileImageSharp___size = 'primary_author.profileImageSharp.size',
  primary_author___profileImageSharp___prettySize = 'primary_author.profileImageSharp.prettySize',
  primary_author___profileImageSharp___modifiedTime = 'primary_author.profileImageSharp.modifiedTime',
  primary_author___profileImageSharp___accessTime = 'primary_author.profileImageSharp.accessTime',
  primary_author___profileImageSharp___changeTime = 'primary_author.profileImageSharp.changeTime',
  primary_author___profileImageSharp___birthTime = 'primary_author.profileImageSharp.birthTime',
  primary_author___profileImageSharp___root = 'primary_author.profileImageSharp.root',
  primary_author___profileImageSharp___dir = 'primary_author.profileImageSharp.dir',
  primary_author___profileImageSharp___base = 'primary_author.profileImageSharp.base',
  primary_author___profileImageSharp___ext = 'primary_author.profileImageSharp.ext',
  primary_author___profileImageSharp___name = 'primary_author.profileImageSharp.name',
  primary_author___profileImageSharp___relativeDirectory = 'primary_author.profileImageSharp.relativeDirectory',
  primary_author___profileImageSharp___dev = 'primary_author.profileImageSharp.dev',
  primary_author___profileImageSharp___mode = 'primary_author.profileImageSharp.mode',
  primary_author___profileImageSharp___nlink = 'primary_author.profileImageSharp.nlink',
  primary_author___profileImageSharp___uid = 'primary_author.profileImageSharp.uid',
  primary_author___profileImageSharp___gid = 'primary_author.profileImageSharp.gid',
  primary_author___profileImageSharp___rdev = 'primary_author.profileImageSharp.rdev',
  primary_author___profileImageSharp___ino = 'primary_author.profileImageSharp.ino',
  primary_author___profileImageSharp___atimeMs = 'primary_author.profileImageSharp.atimeMs',
  primary_author___profileImageSharp___mtimeMs = 'primary_author.profileImageSharp.mtimeMs',
  primary_author___profileImageSharp___ctimeMs = 'primary_author.profileImageSharp.ctimeMs',
  primary_author___profileImageSharp___atime = 'primary_author.profileImageSharp.atime',
  primary_author___profileImageSharp___mtime = 'primary_author.profileImageSharp.mtime',
  primary_author___profileImageSharp___ctime = 'primary_author.profileImageSharp.ctime',
  primary_author___profileImageSharp___birthtime = 'primary_author.profileImageSharp.birthtime',
  primary_author___profileImageSharp___birthtimeMs = 'primary_author.profileImageSharp.birthtimeMs',
  primary_author___profileImageSharp___blksize = 'primary_author.profileImageSharp.blksize',
  primary_author___profileImageSharp___blocks = 'primary_author.profileImageSharp.blocks',
  primary_author___profileImageSharp___url = 'primary_author.profileImageSharp.url',
  primary_author___profileImageSharp___publicURL = 'primary_author.profileImageSharp.publicURL',
  primary_author___profileImageSharp___childImageSharp___id = 'primary_author.profileImageSharp.childImageSharp.id',
  primary_author___profileImageSharp___childImageSharp___children = 'primary_author.profileImageSharp.childImageSharp.children',
  primary_author___profileImageSharp___id = 'primary_author.profileImageSharp.id',
  primary_author___profileImageSharp___parent___id = 'primary_author.profileImageSharp.parent.id',
  primary_author___profileImageSharp___parent___children = 'primary_author.profileImageSharp.parent.children',
  primary_author___profileImageSharp___children = 'primary_author.profileImageSharp.children',
  primary_author___profileImageSharp___children___id = 'primary_author.profileImageSharp.children.id',
  primary_author___profileImageSharp___children___children = 'primary_author.profileImageSharp.children.children',
  primary_author___profileImageSharp___internal___content = 'primary_author.profileImageSharp.internal.content',
  primary_author___profileImageSharp___internal___contentDigest = 'primary_author.profileImageSharp.internal.contentDigest',
  primary_author___profileImageSharp___internal___description = 'primary_author.profileImageSharp.internal.description',
  primary_author___profileImageSharp___internal___fieldOwners = 'primary_author.profileImageSharp.internal.fieldOwners',
  primary_author___profileImageSharp___internal___ignoreType = 'primary_author.profileImageSharp.internal.ignoreType',
  primary_author___profileImageSharp___internal___mediaType = 'primary_author.profileImageSharp.internal.mediaType',
  primary_author___profileImageSharp___internal___owner = 'primary_author.profileImageSharp.internal.owner',
  primary_author___profileImageSharp___internal___type = 'primary_author.profileImageSharp.internal.type',
  primary_author___coverImageSharp___sourceInstanceName = 'primary_author.coverImageSharp.sourceInstanceName',
  primary_author___coverImageSharp___absolutePath = 'primary_author.coverImageSharp.absolutePath',
  primary_author___coverImageSharp___relativePath = 'primary_author.coverImageSharp.relativePath',
  primary_author___coverImageSharp___extension = 'primary_author.coverImageSharp.extension',
  primary_author___coverImageSharp___size = 'primary_author.coverImageSharp.size',
  primary_author___coverImageSharp___prettySize = 'primary_author.coverImageSharp.prettySize',
  primary_author___coverImageSharp___modifiedTime = 'primary_author.coverImageSharp.modifiedTime',
  primary_author___coverImageSharp___accessTime = 'primary_author.coverImageSharp.accessTime',
  primary_author___coverImageSharp___changeTime = 'primary_author.coverImageSharp.changeTime',
  primary_author___coverImageSharp___birthTime = 'primary_author.coverImageSharp.birthTime',
  primary_author___coverImageSharp___root = 'primary_author.coverImageSharp.root',
  primary_author___coverImageSharp___dir = 'primary_author.coverImageSharp.dir',
  primary_author___coverImageSharp___base = 'primary_author.coverImageSharp.base',
  primary_author___coverImageSharp___ext = 'primary_author.coverImageSharp.ext',
  primary_author___coverImageSharp___name = 'primary_author.coverImageSharp.name',
  primary_author___coverImageSharp___relativeDirectory = 'primary_author.coverImageSharp.relativeDirectory',
  primary_author___coverImageSharp___dev = 'primary_author.coverImageSharp.dev',
  primary_author___coverImageSharp___mode = 'primary_author.coverImageSharp.mode',
  primary_author___coverImageSharp___nlink = 'primary_author.coverImageSharp.nlink',
  primary_author___coverImageSharp___uid = 'primary_author.coverImageSharp.uid',
  primary_author___coverImageSharp___gid = 'primary_author.coverImageSharp.gid',
  primary_author___coverImageSharp___rdev = 'primary_author.coverImageSharp.rdev',
  primary_author___coverImageSharp___ino = 'primary_author.coverImageSharp.ino',
  primary_author___coverImageSharp___atimeMs = 'primary_author.coverImageSharp.atimeMs',
  primary_author___coverImageSharp___mtimeMs = 'primary_author.coverImageSharp.mtimeMs',
  primary_author___coverImageSharp___ctimeMs = 'primary_author.coverImageSharp.ctimeMs',
  primary_author___coverImageSharp___atime = 'primary_author.coverImageSharp.atime',
  primary_author___coverImageSharp___mtime = 'primary_author.coverImageSharp.mtime',
  primary_author___coverImageSharp___ctime = 'primary_author.coverImageSharp.ctime',
  primary_author___coverImageSharp___birthtime = 'primary_author.coverImageSharp.birthtime',
  primary_author___coverImageSharp___birthtimeMs = 'primary_author.coverImageSharp.birthtimeMs',
  primary_author___coverImageSharp___blksize = 'primary_author.coverImageSharp.blksize',
  primary_author___coverImageSharp___blocks = 'primary_author.coverImageSharp.blocks',
  primary_author___coverImageSharp___url = 'primary_author.coverImageSharp.url',
  primary_author___coverImageSharp___publicURL = 'primary_author.coverImageSharp.publicURL',
  primary_author___coverImageSharp___childImageSharp___id = 'primary_author.coverImageSharp.childImageSharp.id',
  primary_author___coverImageSharp___childImageSharp___children = 'primary_author.coverImageSharp.childImageSharp.children',
  primary_author___coverImageSharp___id = 'primary_author.coverImageSharp.id',
  primary_author___coverImageSharp___parent___id = 'primary_author.coverImageSharp.parent.id',
  primary_author___coverImageSharp___parent___children = 'primary_author.coverImageSharp.parent.children',
  primary_author___coverImageSharp___children = 'primary_author.coverImageSharp.children',
  primary_author___coverImageSharp___children___id = 'primary_author.coverImageSharp.children.id',
  primary_author___coverImageSharp___children___children = 'primary_author.coverImageSharp.children.children',
  primary_author___coverImageSharp___internal___content = 'primary_author.coverImageSharp.internal.content',
  primary_author___coverImageSharp___internal___contentDigest = 'primary_author.coverImageSharp.internal.contentDigest',
  primary_author___coverImageSharp___internal___description = 'primary_author.coverImageSharp.internal.description',
  primary_author___coverImageSharp___internal___fieldOwners = 'primary_author.coverImageSharp.internal.fieldOwners',
  primary_author___coverImageSharp___internal___ignoreType = 'primary_author.coverImageSharp.internal.ignoreType',
  primary_author___coverImageSharp___internal___mediaType = 'primary_author.coverImageSharp.internal.mediaType',
  primary_author___coverImageSharp___internal___owner = 'primary_author.coverImageSharp.internal.owner',
  primary_author___coverImageSharp___internal___type = 'primary_author.coverImageSharp.internal.type',
  primary_author___count___posts = 'primary_author.count.posts',
  primary_author___ghostId = 'primary_author.ghostId',
  primary_author___parent___id = 'primary_author.parent.id',
  primary_author___parent___parent___id = 'primary_author.parent.parent.id',
  primary_author___parent___parent___children = 'primary_author.parent.parent.children',
  primary_author___parent___children = 'primary_author.parent.children',
  primary_author___parent___children___id = 'primary_author.parent.children.id',
  primary_author___parent___children___children = 'primary_author.parent.children.children',
  primary_author___parent___internal___content = 'primary_author.parent.internal.content',
  primary_author___parent___internal___contentDigest = 'primary_author.parent.internal.contentDigest',
  primary_author___parent___internal___description = 'primary_author.parent.internal.description',
  primary_author___parent___internal___fieldOwners = 'primary_author.parent.internal.fieldOwners',
  primary_author___parent___internal___ignoreType = 'primary_author.parent.internal.ignoreType',
  primary_author___parent___internal___mediaType = 'primary_author.parent.internal.mediaType',
  primary_author___parent___internal___owner = 'primary_author.parent.internal.owner',
  primary_author___parent___internal___type = 'primary_author.parent.internal.type',
  primary_author___children = 'primary_author.children',
  primary_author___children___id = 'primary_author.children.id',
  primary_author___children___parent___id = 'primary_author.children.parent.id',
  primary_author___children___parent___children = 'primary_author.children.parent.children',
  primary_author___children___children = 'primary_author.children.children',
  primary_author___children___children___id = 'primary_author.children.children.id',
  primary_author___children___children___children = 'primary_author.children.children.children',
  primary_author___children___internal___content = 'primary_author.children.internal.content',
  primary_author___children___internal___contentDigest = 'primary_author.children.internal.contentDigest',
  primary_author___children___internal___description = 'primary_author.children.internal.description',
  primary_author___children___internal___fieldOwners = 'primary_author.children.internal.fieldOwners',
  primary_author___children___internal___ignoreType = 'primary_author.children.internal.ignoreType',
  primary_author___children___internal___mediaType = 'primary_author.children.internal.mediaType',
  primary_author___children___internal___owner = 'primary_author.children.internal.owner',
  primary_author___children___internal___type = 'primary_author.children.internal.type',
  primary_author___internal___content = 'primary_author.internal.content',
  primary_author___internal___contentDigest = 'primary_author.internal.contentDigest',
  primary_author___internal___description = 'primary_author.internal.description',
  primary_author___internal___fieldOwners = 'primary_author.internal.fieldOwners',
  primary_author___internal___ignoreType = 'primary_author.internal.ignoreType',
  primary_author___internal___mediaType = 'primary_author.internal.mediaType',
  primary_author___internal___owner = 'primary_author.internal.owner',
  primary_author___internal___type = 'primary_author.internal.type',
  primary_tag___id = 'primary_tag.id',
  primary_tag___name = 'primary_tag.name',
  primary_tag___slug = 'primary_tag.slug',
  primary_tag___description = 'primary_tag.description',
  primary_tag___feature_image = 'primary_tag.feature_image',
  primary_tag___visibility = 'primary_tag.visibility',
  primary_tag___meta_title = 'primary_tag.meta_title',
  primary_tag___meta_description = 'primary_tag.meta_description',
  primary_tag___postCount = 'primary_tag.postCount',
  primary_tag___url = 'primary_tag.url',
  primary_tag___featureImageSharp___sourceInstanceName = 'primary_tag.featureImageSharp.sourceInstanceName',
  primary_tag___featureImageSharp___absolutePath = 'primary_tag.featureImageSharp.absolutePath',
  primary_tag___featureImageSharp___relativePath = 'primary_tag.featureImageSharp.relativePath',
  primary_tag___featureImageSharp___extension = 'primary_tag.featureImageSharp.extension',
  primary_tag___featureImageSharp___size = 'primary_tag.featureImageSharp.size',
  primary_tag___featureImageSharp___prettySize = 'primary_tag.featureImageSharp.prettySize',
  primary_tag___featureImageSharp___modifiedTime = 'primary_tag.featureImageSharp.modifiedTime',
  primary_tag___featureImageSharp___accessTime = 'primary_tag.featureImageSharp.accessTime',
  primary_tag___featureImageSharp___changeTime = 'primary_tag.featureImageSharp.changeTime',
  primary_tag___featureImageSharp___birthTime = 'primary_tag.featureImageSharp.birthTime',
  primary_tag___featureImageSharp___root = 'primary_tag.featureImageSharp.root',
  primary_tag___featureImageSharp___dir = 'primary_tag.featureImageSharp.dir',
  primary_tag___featureImageSharp___base = 'primary_tag.featureImageSharp.base',
  primary_tag___featureImageSharp___ext = 'primary_tag.featureImageSharp.ext',
  primary_tag___featureImageSharp___name = 'primary_tag.featureImageSharp.name',
  primary_tag___featureImageSharp___relativeDirectory = 'primary_tag.featureImageSharp.relativeDirectory',
  primary_tag___featureImageSharp___dev = 'primary_tag.featureImageSharp.dev',
  primary_tag___featureImageSharp___mode = 'primary_tag.featureImageSharp.mode',
  primary_tag___featureImageSharp___nlink = 'primary_tag.featureImageSharp.nlink',
  primary_tag___featureImageSharp___uid = 'primary_tag.featureImageSharp.uid',
  primary_tag___featureImageSharp___gid = 'primary_tag.featureImageSharp.gid',
  primary_tag___featureImageSharp___rdev = 'primary_tag.featureImageSharp.rdev',
  primary_tag___featureImageSharp___ino = 'primary_tag.featureImageSharp.ino',
  primary_tag___featureImageSharp___atimeMs = 'primary_tag.featureImageSharp.atimeMs',
  primary_tag___featureImageSharp___mtimeMs = 'primary_tag.featureImageSharp.mtimeMs',
  primary_tag___featureImageSharp___ctimeMs = 'primary_tag.featureImageSharp.ctimeMs',
  primary_tag___featureImageSharp___atime = 'primary_tag.featureImageSharp.atime',
  primary_tag___featureImageSharp___mtime = 'primary_tag.featureImageSharp.mtime',
  primary_tag___featureImageSharp___ctime = 'primary_tag.featureImageSharp.ctime',
  primary_tag___featureImageSharp___birthtime = 'primary_tag.featureImageSharp.birthtime',
  primary_tag___featureImageSharp___birthtimeMs = 'primary_tag.featureImageSharp.birthtimeMs',
  primary_tag___featureImageSharp___blksize = 'primary_tag.featureImageSharp.blksize',
  primary_tag___featureImageSharp___blocks = 'primary_tag.featureImageSharp.blocks',
  primary_tag___featureImageSharp___url = 'primary_tag.featureImageSharp.url',
  primary_tag___featureImageSharp___publicURL = 'primary_tag.featureImageSharp.publicURL',
  primary_tag___featureImageSharp___childImageSharp___id = 'primary_tag.featureImageSharp.childImageSharp.id',
  primary_tag___featureImageSharp___childImageSharp___children = 'primary_tag.featureImageSharp.childImageSharp.children',
  primary_tag___featureImageSharp___id = 'primary_tag.featureImageSharp.id',
  primary_tag___featureImageSharp___parent___id = 'primary_tag.featureImageSharp.parent.id',
  primary_tag___featureImageSharp___parent___children = 'primary_tag.featureImageSharp.parent.children',
  primary_tag___featureImageSharp___children = 'primary_tag.featureImageSharp.children',
  primary_tag___featureImageSharp___children___id = 'primary_tag.featureImageSharp.children.id',
  primary_tag___featureImageSharp___children___children = 'primary_tag.featureImageSharp.children.children',
  primary_tag___featureImageSharp___internal___content = 'primary_tag.featureImageSharp.internal.content',
  primary_tag___featureImageSharp___internal___contentDigest = 'primary_tag.featureImageSharp.internal.contentDigest',
  primary_tag___featureImageSharp___internal___description = 'primary_tag.featureImageSharp.internal.description',
  primary_tag___featureImageSharp___internal___fieldOwners = 'primary_tag.featureImageSharp.internal.fieldOwners',
  primary_tag___featureImageSharp___internal___ignoreType = 'primary_tag.featureImageSharp.internal.ignoreType',
  primary_tag___featureImageSharp___internal___mediaType = 'primary_tag.featureImageSharp.internal.mediaType',
  primary_tag___featureImageSharp___internal___owner = 'primary_tag.featureImageSharp.internal.owner',
  primary_tag___featureImageSharp___internal___type = 'primary_tag.featureImageSharp.internal.type',
  primary_tag___accent_color = 'primary_tag.accent_color',
  primary_tag___count___posts = 'primary_tag.count.posts',
  primary_tag___ghostId = 'primary_tag.ghostId',
  primary_tag___parent___id = 'primary_tag.parent.id',
  primary_tag___parent___parent___id = 'primary_tag.parent.parent.id',
  primary_tag___parent___parent___children = 'primary_tag.parent.parent.children',
  primary_tag___parent___children = 'primary_tag.parent.children',
  primary_tag___parent___children___id = 'primary_tag.parent.children.id',
  primary_tag___parent___children___children = 'primary_tag.parent.children.children',
  primary_tag___parent___internal___content = 'primary_tag.parent.internal.content',
  primary_tag___parent___internal___contentDigest = 'primary_tag.parent.internal.contentDigest',
  primary_tag___parent___internal___description = 'primary_tag.parent.internal.description',
  primary_tag___parent___internal___fieldOwners = 'primary_tag.parent.internal.fieldOwners',
  primary_tag___parent___internal___ignoreType = 'primary_tag.parent.internal.ignoreType',
  primary_tag___parent___internal___mediaType = 'primary_tag.parent.internal.mediaType',
  primary_tag___parent___internal___owner = 'primary_tag.parent.internal.owner',
  primary_tag___parent___internal___type = 'primary_tag.parent.internal.type',
  primary_tag___children = 'primary_tag.children',
  primary_tag___children___id = 'primary_tag.children.id',
  primary_tag___children___parent___id = 'primary_tag.children.parent.id',
  primary_tag___children___parent___children = 'primary_tag.children.parent.children',
  primary_tag___children___children = 'primary_tag.children.children',
  primary_tag___children___children___id = 'primary_tag.children.children.id',
  primary_tag___children___children___children = 'primary_tag.children.children.children',
  primary_tag___children___internal___content = 'primary_tag.children.internal.content',
  primary_tag___children___internal___contentDigest = 'primary_tag.children.internal.contentDigest',
  primary_tag___children___internal___description = 'primary_tag.children.internal.description',
  primary_tag___children___internal___fieldOwners = 'primary_tag.children.internal.fieldOwners',
  primary_tag___children___internal___ignoreType = 'primary_tag.children.internal.ignoreType',
  primary_tag___children___internal___mediaType = 'primary_tag.children.internal.mediaType',
  primary_tag___children___internal___owner = 'primary_tag.children.internal.owner',
  primary_tag___children___internal___type = 'primary_tag.children.internal.type',
  primary_tag___internal___content = 'primary_tag.internal.content',
  primary_tag___internal___contentDigest = 'primary_tag.internal.contentDigest',
  primary_tag___internal___description = 'primary_tag.internal.description',
  primary_tag___internal___fieldOwners = 'primary_tag.internal.fieldOwners',
  primary_tag___internal___ignoreType = 'primary_tag.internal.ignoreType',
  primary_tag___internal___mediaType = 'primary_tag.internal.mediaType',
  primary_tag___internal___owner = 'primary_tag.internal.owner',
  primary_tag___internal___type = 'primary_tag.internal.type',
  url = 'url',
  excerpt = 'excerpt',
  reading_time = 'reading_time',
  og_image = 'og_image',
  og_title = 'og_title',
  og_description = 'og_description',
  twitter_image = 'twitter_image',
  twitter_title = 'twitter_title',
  twitter_description = 'twitter_description',
  meta_title = 'meta_title',
  meta_description = 'meta_description',
  email_subject = 'email_subject',
  featureImageSharp___sourceInstanceName = 'featureImageSharp.sourceInstanceName',
  featureImageSharp___absolutePath = 'featureImageSharp.absolutePath',
  featureImageSharp___relativePath = 'featureImageSharp.relativePath',
  featureImageSharp___extension = 'featureImageSharp.extension',
  featureImageSharp___size = 'featureImageSharp.size',
  featureImageSharp___prettySize = 'featureImageSharp.prettySize',
  featureImageSharp___modifiedTime = 'featureImageSharp.modifiedTime',
  featureImageSharp___accessTime = 'featureImageSharp.accessTime',
  featureImageSharp___changeTime = 'featureImageSharp.changeTime',
  featureImageSharp___birthTime = 'featureImageSharp.birthTime',
  featureImageSharp___root = 'featureImageSharp.root',
  featureImageSharp___dir = 'featureImageSharp.dir',
  featureImageSharp___base = 'featureImageSharp.base',
  featureImageSharp___ext = 'featureImageSharp.ext',
  featureImageSharp___name = 'featureImageSharp.name',
  featureImageSharp___relativeDirectory = 'featureImageSharp.relativeDirectory',
  featureImageSharp___dev = 'featureImageSharp.dev',
  featureImageSharp___mode = 'featureImageSharp.mode',
  featureImageSharp___nlink = 'featureImageSharp.nlink',
  featureImageSharp___uid = 'featureImageSharp.uid',
  featureImageSharp___gid = 'featureImageSharp.gid',
  featureImageSharp___rdev = 'featureImageSharp.rdev',
  featureImageSharp___ino = 'featureImageSharp.ino',
  featureImageSharp___atimeMs = 'featureImageSharp.atimeMs',
  featureImageSharp___mtimeMs = 'featureImageSharp.mtimeMs',
  featureImageSharp___ctimeMs = 'featureImageSharp.ctimeMs',
  featureImageSharp___atime = 'featureImageSharp.atime',
  featureImageSharp___mtime = 'featureImageSharp.mtime',
  featureImageSharp___ctime = 'featureImageSharp.ctime',
  featureImageSharp___birthtime = 'featureImageSharp.birthtime',
  featureImageSharp___birthtimeMs = 'featureImageSharp.birthtimeMs',
  featureImageSharp___blksize = 'featureImageSharp.blksize',
  featureImageSharp___blocks = 'featureImageSharp.blocks',
  featureImageSharp___url = 'featureImageSharp.url',
  featureImageSharp___publicURL = 'featureImageSharp.publicURL',
  featureImageSharp___childImageSharp___fixed___base64 = 'featureImageSharp.childImageSharp.fixed.base64',
  featureImageSharp___childImageSharp___fixed___tracedSVG = 'featureImageSharp.childImageSharp.fixed.tracedSVG',
  featureImageSharp___childImageSharp___fixed___aspectRatio = 'featureImageSharp.childImageSharp.fixed.aspectRatio',
  featureImageSharp___childImageSharp___fixed___width = 'featureImageSharp.childImageSharp.fixed.width',
  featureImageSharp___childImageSharp___fixed___height = 'featureImageSharp.childImageSharp.fixed.height',
  featureImageSharp___childImageSharp___fixed___src = 'featureImageSharp.childImageSharp.fixed.src',
  featureImageSharp___childImageSharp___fixed___srcSet = 'featureImageSharp.childImageSharp.fixed.srcSet',
  featureImageSharp___childImageSharp___fixed___srcWebp = 'featureImageSharp.childImageSharp.fixed.srcWebp',
  featureImageSharp___childImageSharp___fixed___srcSetWebp = 'featureImageSharp.childImageSharp.fixed.srcSetWebp',
  featureImageSharp___childImageSharp___fixed___originalName = 'featureImageSharp.childImageSharp.fixed.originalName',
  featureImageSharp___childImageSharp___resolutions___base64 = 'featureImageSharp.childImageSharp.resolutions.base64',
  featureImageSharp___childImageSharp___resolutions___tracedSVG = 'featureImageSharp.childImageSharp.resolutions.tracedSVG',
  featureImageSharp___childImageSharp___resolutions___aspectRatio = 'featureImageSharp.childImageSharp.resolutions.aspectRatio',
  featureImageSharp___childImageSharp___resolutions___width = 'featureImageSharp.childImageSharp.resolutions.width',
  featureImageSharp___childImageSharp___resolutions___height = 'featureImageSharp.childImageSharp.resolutions.height',
  featureImageSharp___childImageSharp___resolutions___src = 'featureImageSharp.childImageSharp.resolutions.src',
  featureImageSharp___childImageSharp___resolutions___srcSet = 'featureImageSharp.childImageSharp.resolutions.srcSet',
  featureImageSharp___childImageSharp___resolutions___srcWebp = 'featureImageSharp.childImageSharp.resolutions.srcWebp',
  featureImageSharp___childImageSharp___resolutions___srcSetWebp = 'featureImageSharp.childImageSharp.resolutions.srcSetWebp',
  featureImageSharp___childImageSharp___resolutions___originalName = 'featureImageSharp.childImageSharp.resolutions.originalName',
  featureImageSharp___childImageSharp___fluid___base64 = 'featureImageSharp.childImageSharp.fluid.base64',
  featureImageSharp___childImageSharp___fluid___tracedSVG = 'featureImageSharp.childImageSharp.fluid.tracedSVG',
  featureImageSharp___childImageSharp___fluid___aspectRatio = 'featureImageSharp.childImageSharp.fluid.aspectRatio',
  featureImageSharp___childImageSharp___fluid___src = 'featureImageSharp.childImageSharp.fluid.src',
  featureImageSharp___childImageSharp___fluid___srcSet = 'featureImageSharp.childImageSharp.fluid.srcSet',
  featureImageSharp___childImageSharp___fluid___srcWebp = 'featureImageSharp.childImageSharp.fluid.srcWebp',
  featureImageSharp___childImageSharp___fluid___srcSetWebp = 'featureImageSharp.childImageSharp.fluid.srcSetWebp',
  featureImageSharp___childImageSharp___fluid___sizes = 'featureImageSharp.childImageSharp.fluid.sizes',
  featureImageSharp___childImageSharp___fluid___originalImg = 'featureImageSharp.childImageSharp.fluid.originalImg',
  featureImageSharp___childImageSharp___fluid___originalName = 'featureImageSharp.childImageSharp.fluid.originalName',
  featureImageSharp___childImageSharp___fluid___presentationWidth = 'featureImageSharp.childImageSharp.fluid.presentationWidth',
  featureImageSharp___childImageSharp___fluid___presentationHeight = 'featureImageSharp.childImageSharp.fluid.presentationHeight',
  featureImageSharp___childImageSharp___sizes___base64 = 'featureImageSharp.childImageSharp.sizes.base64',
  featureImageSharp___childImageSharp___sizes___tracedSVG = 'featureImageSharp.childImageSharp.sizes.tracedSVG',
  featureImageSharp___childImageSharp___sizes___aspectRatio = 'featureImageSharp.childImageSharp.sizes.aspectRatio',
  featureImageSharp___childImageSharp___sizes___src = 'featureImageSharp.childImageSharp.sizes.src',
  featureImageSharp___childImageSharp___sizes___srcSet = 'featureImageSharp.childImageSharp.sizes.srcSet',
  featureImageSharp___childImageSharp___sizes___srcWebp = 'featureImageSharp.childImageSharp.sizes.srcWebp',
  featureImageSharp___childImageSharp___sizes___srcSetWebp = 'featureImageSharp.childImageSharp.sizes.srcSetWebp',
  featureImageSharp___childImageSharp___sizes___sizes = 'featureImageSharp.childImageSharp.sizes.sizes',
  featureImageSharp___childImageSharp___sizes___originalImg = 'featureImageSharp.childImageSharp.sizes.originalImg',
  featureImageSharp___childImageSharp___sizes___originalName = 'featureImageSharp.childImageSharp.sizes.originalName',
  featureImageSharp___childImageSharp___sizes___presentationWidth = 'featureImageSharp.childImageSharp.sizes.presentationWidth',
  featureImageSharp___childImageSharp___sizes___presentationHeight = 'featureImageSharp.childImageSharp.sizes.presentationHeight',
  featureImageSharp___childImageSharp___original___width = 'featureImageSharp.childImageSharp.original.width',
  featureImageSharp___childImageSharp___original___height = 'featureImageSharp.childImageSharp.original.height',
  featureImageSharp___childImageSharp___original___src = 'featureImageSharp.childImageSharp.original.src',
  featureImageSharp___childImageSharp___resize___src = 'featureImageSharp.childImageSharp.resize.src',
  featureImageSharp___childImageSharp___resize___tracedSVG = 'featureImageSharp.childImageSharp.resize.tracedSVG',
  featureImageSharp___childImageSharp___resize___width = 'featureImageSharp.childImageSharp.resize.width',
  featureImageSharp___childImageSharp___resize___height = 'featureImageSharp.childImageSharp.resize.height',
  featureImageSharp___childImageSharp___resize___aspectRatio = 'featureImageSharp.childImageSharp.resize.aspectRatio',
  featureImageSharp___childImageSharp___resize___originalName = 'featureImageSharp.childImageSharp.resize.originalName',
  featureImageSharp___childImageSharp___id = 'featureImageSharp.childImageSharp.id',
  featureImageSharp___childImageSharp___parent___id = 'featureImageSharp.childImageSharp.parent.id',
  featureImageSharp___childImageSharp___parent___children = 'featureImageSharp.childImageSharp.parent.children',
  featureImageSharp___childImageSharp___children = 'featureImageSharp.childImageSharp.children',
  featureImageSharp___childImageSharp___children___id = 'featureImageSharp.childImageSharp.children.id',
  featureImageSharp___childImageSharp___children___children = 'featureImageSharp.childImageSharp.children.children',
  featureImageSharp___childImageSharp___internal___content = 'featureImageSharp.childImageSharp.internal.content',
  featureImageSharp___childImageSharp___internal___contentDigest = 'featureImageSharp.childImageSharp.internal.contentDigest',
  featureImageSharp___childImageSharp___internal___description = 'featureImageSharp.childImageSharp.internal.description',
  featureImageSharp___childImageSharp___internal___fieldOwners = 'featureImageSharp.childImageSharp.internal.fieldOwners',
  featureImageSharp___childImageSharp___internal___ignoreType = 'featureImageSharp.childImageSharp.internal.ignoreType',
  featureImageSharp___childImageSharp___internal___mediaType = 'featureImageSharp.childImageSharp.internal.mediaType',
  featureImageSharp___childImageSharp___internal___owner = 'featureImageSharp.childImageSharp.internal.owner',
  featureImageSharp___childImageSharp___internal___type = 'featureImageSharp.childImageSharp.internal.type',
  featureImageSharp___id = 'featureImageSharp.id',
  featureImageSharp___parent___id = 'featureImageSharp.parent.id',
  featureImageSharp___parent___parent___id = 'featureImageSharp.parent.parent.id',
  featureImageSharp___parent___parent___children = 'featureImageSharp.parent.parent.children',
  featureImageSharp___parent___children = 'featureImageSharp.parent.children',
  featureImageSharp___parent___children___id = 'featureImageSharp.parent.children.id',
  featureImageSharp___parent___children___children = 'featureImageSharp.parent.children.children',
  featureImageSharp___parent___internal___content = 'featureImageSharp.parent.internal.content',
  featureImageSharp___parent___internal___contentDigest = 'featureImageSharp.parent.internal.contentDigest',
  featureImageSharp___parent___internal___description = 'featureImageSharp.parent.internal.description',
  featureImageSharp___parent___internal___fieldOwners = 'featureImageSharp.parent.internal.fieldOwners',
  featureImageSharp___parent___internal___ignoreType = 'featureImageSharp.parent.internal.ignoreType',
  featureImageSharp___parent___internal___mediaType = 'featureImageSharp.parent.internal.mediaType',
  featureImageSharp___parent___internal___owner = 'featureImageSharp.parent.internal.owner',
  featureImageSharp___parent___internal___type = 'featureImageSharp.parent.internal.type',
  featureImageSharp___children = 'featureImageSharp.children',
  featureImageSharp___children___id = 'featureImageSharp.children.id',
  featureImageSharp___children___parent___id = 'featureImageSharp.children.parent.id',
  featureImageSharp___children___parent___children = 'featureImageSharp.children.parent.children',
  featureImageSharp___children___children = 'featureImageSharp.children.children',
  featureImageSharp___children___children___id = 'featureImageSharp.children.children.id',
  featureImageSharp___children___children___children = 'featureImageSharp.children.children.children',
  featureImageSharp___children___internal___content = 'featureImageSharp.children.internal.content',
  featureImageSharp___children___internal___contentDigest = 'featureImageSharp.children.internal.contentDigest',
  featureImageSharp___children___internal___description = 'featureImageSharp.children.internal.description',
  featureImageSharp___children___internal___fieldOwners = 'featureImageSharp.children.internal.fieldOwners',
  featureImageSharp___children___internal___ignoreType = 'featureImageSharp.children.internal.ignoreType',
  featureImageSharp___children___internal___mediaType = 'featureImageSharp.children.internal.mediaType',
  featureImageSharp___children___internal___owner = 'featureImageSharp.children.internal.owner',
  featureImageSharp___children___internal___type = 'featureImageSharp.children.internal.type',
  featureImageSharp___internal___content = 'featureImageSharp.internal.content',
  featureImageSharp___internal___contentDigest = 'featureImageSharp.internal.contentDigest',
  featureImageSharp___internal___description = 'featureImageSharp.internal.description',
  featureImageSharp___internal___fieldOwners = 'featureImageSharp.internal.fieldOwners',
  featureImageSharp___internal___ignoreType = 'featureImageSharp.internal.ignoreType',
  featureImageSharp___internal___mediaType = 'featureImageSharp.internal.mediaType',
  featureImageSharp___internal___owner = 'featureImageSharp.internal.owner',
  featureImageSharp___internal___type = 'featureImageSharp.internal.type',
  childHtmlRehype___html = 'childHtmlRehype.html',
  childHtmlRehype___htmlAst = 'childHtmlRehype.htmlAst',
  childHtmlRehype___tableOfContents = 'childHtmlRehype.tableOfContents',
  childHtmlRehype___id = 'childHtmlRehype.id',
  childHtmlRehype___parent___id = 'childHtmlRehype.parent.id',
  childHtmlRehype___parent___parent___id = 'childHtmlRehype.parent.parent.id',
  childHtmlRehype___parent___parent___children = 'childHtmlRehype.parent.parent.children',
  childHtmlRehype___parent___children = 'childHtmlRehype.parent.children',
  childHtmlRehype___parent___children___id = 'childHtmlRehype.parent.children.id',
  childHtmlRehype___parent___children___children = 'childHtmlRehype.parent.children.children',
  childHtmlRehype___parent___internal___content = 'childHtmlRehype.parent.internal.content',
  childHtmlRehype___parent___internal___contentDigest = 'childHtmlRehype.parent.internal.contentDigest',
  childHtmlRehype___parent___internal___description = 'childHtmlRehype.parent.internal.description',
  childHtmlRehype___parent___internal___fieldOwners = 'childHtmlRehype.parent.internal.fieldOwners',
  childHtmlRehype___parent___internal___ignoreType = 'childHtmlRehype.parent.internal.ignoreType',
  childHtmlRehype___parent___internal___mediaType = 'childHtmlRehype.parent.internal.mediaType',
  childHtmlRehype___parent___internal___owner = 'childHtmlRehype.parent.internal.owner',
  childHtmlRehype___parent___internal___type = 'childHtmlRehype.parent.internal.type',
  childHtmlRehype___children = 'childHtmlRehype.children',
  childHtmlRehype___children___id = 'childHtmlRehype.children.id',
  childHtmlRehype___children___parent___id = 'childHtmlRehype.children.parent.id',
  childHtmlRehype___children___parent___children = 'childHtmlRehype.children.parent.children',
  childHtmlRehype___children___children = 'childHtmlRehype.children.children',
  childHtmlRehype___children___children___id = 'childHtmlRehype.children.children.id',
  childHtmlRehype___children___children___children = 'childHtmlRehype.children.children.children',
  childHtmlRehype___children___internal___content = 'childHtmlRehype.children.internal.content',
  childHtmlRehype___children___internal___contentDigest = 'childHtmlRehype.children.internal.contentDigest',
  childHtmlRehype___children___internal___description = 'childHtmlRehype.children.internal.description',
  childHtmlRehype___children___internal___fieldOwners = 'childHtmlRehype.children.internal.fieldOwners',
  childHtmlRehype___children___internal___ignoreType = 'childHtmlRehype.children.internal.ignoreType',
  childHtmlRehype___children___internal___mediaType = 'childHtmlRehype.children.internal.mediaType',
  childHtmlRehype___children___internal___owner = 'childHtmlRehype.children.internal.owner',
  childHtmlRehype___children___internal___type = 'childHtmlRehype.children.internal.type',
  childHtmlRehype___internal___content = 'childHtmlRehype.internal.content',
  childHtmlRehype___internal___contentDigest = 'childHtmlRehype.internal.contentDigest',
  childHtmlRehype___internal___description = 'childHtmlRehype.internal.description',
  childHtmlRehype___internal___fieldOwners = 'childHtmlRehype.internal.fieldOwners',
  childHtmlRehype___internal___ignoreType = 'childHtmlRehype.internal.ignoreType',
  childHtmlRehype___internal___mediaType = 'childHtmlRehype.internal.mediaType',
  childHtmlRehype___internal___owner = 'childHtmlRehype.internal.owner',
  childHtmlRehype___internal___type = 'childHtmlRehype.internal.type',
  access = 'access',
  ghostId = 'ghostId',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type GhostPostFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly uuid: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly comment_id: Maybe<StringQueryOperatorInput>;
  readonly plaintext: Maybe<StringQueryOperatorInput>;
  readonly feature_image: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly visibility: Maybe<StringQueryOperatorInput>;
  readonly send_email_when_published: Maybe<BooleanQueryOperatorInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly published_at: Maybe<DateQueryOperatorInput>;
  readonly custom_excerpt: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_head: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_foot: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_styles: Maybe<StringQueryOperatorInput>;
  readonly custom_template: Maybe<StringQueryOperatorInput>;
  readonly canonical_url: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<GhostTagFilterListInput>;
  readonly authors: Maybe<GhostAuthorFilterListInput>;
  readonly primary_author: Maybe<GhostAuthorFilterInput>;
  readonly primary_tag: Maybe<GhostTagFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly reading_time: Maybe<IntQueryOperatorInput>;
  readonly og_image: Maybe<StringQueryOperatorInput>;
  readonly og_title: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly twitter_image: Maybe<StringQueryOperatorInput>;
  readonly twitter_title: Maybe<StringQueryOperatorInput>;
  readonly twitter_description: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly email_subject: Maybe<StringQueryOperatorInput>;
  readonly featureImageSharp: Maybe<FileFilterInput>;
  readonly childHtmlRehype: Maybe<HtmlRehypeFilterInput>;
  readonly access: Maybe<BooleanQueryOperatorInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPostEdge>;
  readonly nodes: ReadonlyArray<GhostPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostSettings = Node & {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly logo: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly cover_image: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly timezone: Maybe<Scalars['String']>;
  readonly navigation: Maybe<ReadonlyArray<Maybe<Navigation>>>;
  readonly secondary_navigation: Maybe<ReadonlyArray<Maybe<Navigation>>>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly og_image: Maybe<Scalars['String']>;
  readonly og_title: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly twitter_image: Maybe<Scalars['String']>;
  readonly twitter_title: Maybe<Scalars['String']>;
  readonly twitter_description: Maybe<Scalars['String']>;
  readonly codeinjection_head: Maybe<Scalars['String']>;
  readonly codeinjection_foot: Maybe<Scalars['String']>;
  readonly codeinjection_styles: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly logoSharp: Maybe<File>;
  readonly iconSharp: Maybe<File>;
  readonly coverImageSharp: Maybe<File>;
  readonly members_support_address: Maybe<Scalars['String']>;
  readonly ghostId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GhostSettingsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostSettingsEdge>;
  readonly nodes: ReadonlyArray<GhostSettings>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GhostSettingsGroupConnection>;
};


type GhostSettingsConnection_distinctArgs = {
  field: GhostSettingsFieldsEnum;
};


type GhostSettingsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostSettingsFieldsEnum;
};

type GhostSettingsEdge = {
  readonly next: Maybe<GhostSettings>;
  readonly node: GhostSettings;
  readonly previous: Maybe<GhostSettings>;
};

enum GhostSettingsFieldsEnum {
  title = 'title',
  description = 'description',
  logo = 'logo',
  icon = 'icon',
  cover_image = 'cover_image',
  facebook = 'facebook',
  twitter = 'twitter',
  lang = 'lang',
  timezone = 'timezone',
  navigation = 'navigation',
  navigation___label = 'navigation.label',
  navigation___url = 'navigation.url',
  secondary_navigation = 'secondary_navigation',
  secondary_navigation___label = 'secondary_navigation.label',
  secondary_navigation___url = 'secondary_navigation.url',
  meta_title = 'meta_title',
  meta_description = 'meta_description',
  og_image = 'og_image',
  og_title = 'og_title',
  og_description = 'og_description',
  twitter_image = 'twitter_image',
  twitter_title = 'twitter_title',
  twitter_description = 'twitter_description',
  codeinjection_head = 'codeinjection_head',
  codeinjection_foot = 'codeinjection_foot',
  codeinjection_styles = 'codeinjection_styles',
  url = 'url',
  logoSharp___sourceInstanceName = 'logoSharp.sourceInstanceName',
  logoSharp___absolutePath = 'logoSharp.absolutePath',
  logoSharp___relativePath = 'logoSharp.relativePath',
  logoSharp___extension = 'logoSharp.extension',
  logoSharp___size = 'logoSharp.size',
  logoSharp___prettySize = 'logoSharp.prettySize',
  logoSharp___modifiedTime = 'logoSharp.modifiedTime',
  logoSharp___accessTime = 'logoSharp.accessTime',
  logoSharp___changeTime = 'logoSharp.changeTime',
  logoSharp___birthTime = 'logoSharp.birthTime',
  logoSharp___root = 'logoSharp.root',
  logoSharp___dir = 'logoSharp.dir',
  logoSharp___base = 'logoSharp.base',
  logoSharp___ext = 'logoSharp.ext',
  logoSharp___name = 'logoSharp.name',
  logoSharp___relativeDirectory = 'logoSharp.relativeDirectory',
  logoSharp___dev = 'logoSharp.dev',
  logoSharp___mode = 'logoSharp.mode',
  logoSharp___nlink = 'logoSharp.nlink',
  logoSharp___uid = 'logoSharp.uid',
  logoSharp___gid = 'logoSharp.gid',
  logoSharp___rdev = 'logoSharp.rdev',
  logoSharp___ino = 'logoSharp.ino',
  logoSharp___atimeMs = 'logoSharp.atimeMs',
  logoSharp___mtimeMs = 'logoSharp.mtimeMs',
  logoSharp___ctimeMs = 'logoSharp.ctimeMs',
  logoSharp___atime = 'logoSharp.atime',
  logoSharp___mtime = 'logoSharp.mtime',
  logoSharp___ctime = 'logoSharp.ctime',
  logoSharp___birthtime = 'logoSharp.birthtime',
  logoSharp___birthtimeMs = 'logoSharp.birthtimeMs',
  logoSharp___blksize = 'logoSharp.blksize',
  logoSharp___blocks = 'logoSharp.blocks',
  logoSharp___url = 'logoSharp.url',
  logoSharp___publicURL = 'logoSharp.publicURL',
  logoSharp___childImageSharp___fixed___base64 = 'logoSharp.childImageSharp.fixed.base64',
  logoSharp___childImageSharp___fixed___tracedSVG = 'logoSharp.childImageSharp.fixed.tracedSVG',
  logoSharp___childImageSharp___fixed___aspectRatio = 'logoSharp.childImageSharp.fixed.aspectRatio',
  logoSharp___childImageSharp___fixed___width = 'logoSharp.childImageSharp.fixed.width',
  logoSharp___childImageSharp___fixed___height = 'logoSharp.childImageSharp.fixed.height',
  logoSharp___childImageSharp___fixed___src = 'logoSharp.childImageSharp.fixed.src',
  logoSharp___childImageSharp___fixed___srcSet = 'logoSharp.childImageSharp.fixed.srcSet',
  logoSharp___childImageSharp___fixed___srcWebp = 'logoSharp.childImageSharp.fixed.srcWebp',
  logoSharp___childImageSharp___fixed___srcSetWebp = 'logoSharp.childImageSharp.fixed.srcSetWebp',
  logoSharp___childImageSharp___fixed___originalName = 'logoSharp.childImageSharp.fixed.originalName',
  logoSharp___childImageSharp___resolutions___base64 = 'logoSharp.childImageSharp.resolutions.base64',
  logoSharp___childImageSharp___resolutions___tracedSVG = 'logoSharp.childImageSharp.resolutions.tracedSVG',
  logoSharp___childImageSharp___resolutions___aspectRatio = 'logoSharp.childImageSharp.resolutions.aspectRatio',
  logoSharp___childImageSharp___resolutions___width = 'logoSharp.childImageSharp.resolutions.width',
  logoSharp___childImageSharp___resolutions___height = 'logoSharp.childImageSharp.resolutions.height',
  logoSharp___childImageSharp___resolutions___src = 'logoSharp.childImageSharp.resolutions.src',
  logoSharp___childImageSharp___resolutions___srcSet = 'logoSharp.childImageSharp.resolutions.srcSet',
  logoSharp___childImageSharp___resolutions___srcWebp = 'logoSharp.childImageSharp.resolutions.srcWebp',
  logoSharp___childImageSharp___resolutions___srcSetWebp = 'logoSharp.childImageSharp.resolutions.srcSetWebp',
  logoSharp___childImageSharp___resolutions___originalName = 'logoSharp.childImageSharp.resolutions.originalName',
  logoSharp___childImageSharp___fluid___base64 = 'logoSharp.childImageSharp.fluid.base64',
  logoSharp___childImageSharp___fluid___tracedSVG = 'logoSharp.childImageSharp.fluid.tracedSVG',
  logoSharp___childImageSharp___fluid___aspectRatio = 'logoSharp.childImageSharp.fluid.aspectRatio',
  logoSharp___childImageSharp___fluid___src = 'logoSharp.childImageSharp.fluid.src',
  logoSharp___childImageSharp___fluid___srcSet = 'logoSharp.childImageSharp.fluid.srcSet',
  logoSharp___childImageSharp___fluid___srcWebp = 'logoSharp.childImageSharp.fluid.srcWebp',
  logoSharp___childImageSharp___fluid___srcSetWebp = 'logoSharp.childImageSharp.fluid.srcSetWebp',
  logoSharp___childImageSharp___fluid___sizes = 'logoSharp.childImageSharp.fluid.sizes',
  logoSharp___childImageSharp___fluid___originalImg = 'logoSharp.childImageSharp.fluid.originalImg',
  logoSharp___childImageSharp___fluid___originalName = 'logoSharp.childImageSharp.fluid.originalName',
  logoSharp___childImageSharp___fluid___presentationWidth = 'logoSharp.childImageSharp.fluid.presentationWidth',
  logoSharp___childImageSharp___fluid___presentationHeight = 'logoSharp.childImageSharp.fluid.presentationHeight',
  logoSharp___childImageSharp___sizes___base64 = 'logoSharp.childImageSharp.sizes.base64',
  logoSharp___childImageSharp___sizes___tracedSVG = 'logoSharp.childImageSharp.sizes.tracedSVG',
  logoSharp___childImageSharp___sizes___aspectRatio = 'logoSharp.childImageSharp.sizes.aspectRatio',
  logoSharp___childImageSharp___sizes___src = 'logoSharp.childImageSharp.sizes.src',
  logoSharp___childImageSharp___sizes___srcSet = 'logoSharp.childImageSharp.sizes.srcSet',
  logoSharp___childImageSharp___sizes___srcWebp = 'logoSharp.childImageSharp.sizes.srcWebp',
  logoSharp___childImageSharp___sizes___srcSetWebp = 'logoSharp.childImageSharp.sizes.srcSetWebp',
  logoSharp___childImageSharp___sizes___sizes = 'logoSharp.childImageSharp.sizes.sizes',
  logoSharp___childImageSharp___sizes___originalImg = 'logoSharp.childImageSharp.sizes.originalImg',
  logoSharp___childImageSharp___sizes___originalName = 'logoSharp.childImageSharp.sizes.originalName',
  logoSharp___childImageSharp___sizes___presentationWidth = 'logoSharp.childImageSharp.sizes.presentationWidth',
  logoSharp___childImageSharp___sizes___presentationHeight = 'logoSharp.childImageSharp.sizes.presentationHeight',
  logoSharp___childImageSharp___original___width = 'logoSharp.childImageSharp.original.width',
  logoSharp___childImageSharp___original___height = 'logoSharp.childImageSharp.original.height',
  logoSharp___childImageSharp___original___src = 'logoSharp.childImageSharp.original.src',
  logoSharp___childImageSharp___resize___src = 'logoSharp.childImageSharp.resize.src',
  logoSharp___childImageSharp___resize___tracedSVG = 'logoSharp.childImageSharp.resize.tracedSVG',
  logoSharp___childImageSharp___resize___width = 'logoSharp.childImageSharp.resize.width',
  logoSharp___childImageSharp___resize___height = 'logoSharp.childImageSharp.resize.height',
  logoSharp___childImageSharp___resize___aspectRatio = 'logoSharp.childImageSharp.resize.aspectRatio',
  logoSharp___childImageSharp___resize___originalName = 'logoSharp.childImageSharp.resize.originalName',
  logoSharp___childImageSharp___id = 'logoSharp.childImageSharp.id',
  logoSharp___childImageSharp___parent___id = 'logoSharp.childImageSharp.parent.id',
  logoSharp___childImageSharp___parent___children = 'logoSharp.childImageSharp.parent.children',
  logoSharp___childImageSharp___children = 'logoSharp.childImageSharp.children',
  logoSharp___childImageSharp___children___id = 'logoSharp.childImageSharp.children.id',
  logoSharp___childImageSharp___children___children = 'logoSharp.childImageSharp.children.children',
  logoSharp___childImageSharp___internal___content = 'logoSharp.childImageSharp.internal.content',
  logoSharp___childImageSharp___internal___contentDigest = 'logoSharp.childImageSharp.internal.contentDigest',
  logoSharp___childImageSharp___internal___description = 'logoSharp.childImageSharp.internal.description',
  logoSharp___childImageSharp___internal___fieldOwners = 'logoSharp.childImageSharp.internal.fieldOwners',
  logoSharp___childImageSharp___internal___ignoreType = 'logoSharp.childImageSharp.internal.ignoreType',
  logoSharp___childImageSharp___internal___mediaType = 'logoSharp.childImageSharp.internal.mediaType',
  logoSharp___childImageSharp___internal___owner = 'logoSharp.childImageSharp.internal.owner',
  logoSharp___childImageSharp___internal___type = 'logoSharp.childImageSharp.internal.type',
  logoSharp___id = 'logoSharp.id',
  logoSharp___parent___id = 'logoSharp.parent.id',
  logoSharp___parent___parent___id = 'logoSharp.parent.parent.id',
  logoSharp___parent___parent___children = 'logoSharp.parent.parent.children',
  logoSharp___parent___children = 'logoSharp.parent.children',
  logoSharp___parent___children___id = 'logoSharp.parent.children.id',
  logoSharp___parent___children___children = 'logoSharp.parent.children.children',
  logoSharp___parent___internal___content = 'logoSharp.parent.internal.content',
  logoSharp___parent___internal___contentDigest = 'logoSharp.parent.internal.contentDigest',
  logoSharp___parent___internal___description = 'logoSharp.parent.internal.description',
  logoSharp___parent___internal___fieldOwners = 'logoSharp.parent.internal.fieldOwners',
  logoSharp___parent___internal___ignoreType = 'logoSharp.parent.internal.ignoreType',
  logoSharp___parent___internal___mediaType = 'logoSharp.parent.internal.mediaType',
  logoSharp___parent___internal___owner = 'logoSharp.parent.internal.owner',
  logoSharp___parent___internal___type = 'logoSharp.parent.internal.type',
  logoSharp___children = 'logoSharp.children',
  logoSharp___children___id = 'logoSharp.children.id',
  logoSharp___children___parent___id = 'logoSharp.children.parent.id',
  logoSharp___children___parent___children = 'logoSharp.children.parent.children',
  logoSharp___children___children = 'logoSharp.children.children',
  logoSharp___children___children___id = 'logoSharp.children.children.id',
  logoSharp___children___children___children = 'logoSharp.children.children.children',
  logoSharp___children___internal___content = 'logoSharp.children.internal.content',
  logoSharp___children___internal___contentDigest = 'logoSharp.children.internal.contentDigest',
  logoSharp___children___internal___description = 'logoSharp.children.internal.description',
  logoSharp___children___internal___fieldOwners = 'logoSharp.children.internal.fieldOwners',
  logoSharp___children___internal___ignoreType = 'logoSharp.children.internal.ignoreType',
  logoSharp___children___internal___mediaType = 'logoSharp.children.internal.mediaType',
  logoSharp___children___internal___owner = 'logoSharp.children.internal.owner',
  logoSharp___children___internal___type = 'logoSharp.children.internal.type',
  logoSharp___internal___content = 'logoSharp.internal.content',
  logoSharp___internal___contentDigest = 'logoSharp.internal.contentDigest',
  logoSharp___internal___description = 'logoSharp.internal.description',
  logoSharp___internal___fieldOwners = 'logoSharp.internal.fieldOwners',
  logoSharp___internal___ignoreType = 'logoSharp.internal.ignoreType',
  logoSharp___internal___mediaType = 'logoSharp.internal.mediaType',
  logoSharp___internal___owner = 'logoSharp.internal.owner',
  logoSharp___internal___type = 'logoSharp.internal.type',
  iconSharp___sourceInstanceName = 'iconSharp.sourceInstanceName',
  iconSharp___absolutePath = 'iconSharp.absolutePath',
  iconSharp___relativePath = 'iconSharp.relativePath',
  iconSharp___extension = 'iconSharp.extension',
  iconSharp___size = 'iconSharp.size',
  iconSharp___prettySize = 'iconSharp.prettySize',
  iconSharp___modifiedTime = 'iconSharp.modifiedTime',
  iconSharp___accessTime = 'iconSharp.accessTime',
  iconSharp___changeTime = 'iconSharp.changeTime',
  iconSharp___birthTime = 'iconSharp.birthTime',
  iconSharp___root = 'iconSharp.root',
  iconSharp___dir = 'iconSharp.dir',
  iconSharp___base = 'iconSharp.base',
  iconSharp___ext = 'iconSharp.ext',
  iconSharp___name = 'iconSharp.name',
  iconSharp___relativeDirectory = 'iconSharp.relativeDirectory',
  iconSharp___dev = 'iconSharp.dev',
  iconSharp___mode = 'iconSharp.mode',
  iconSharp___nlink = 'iconSharp.nlink',
  iconSharp___uid = 'iconSharp.uid',
  iconSharp___gid = 'iconSharp.gid',
  iconSharp___rdev = 'iconSharp.rdev',
  iconSharp___ino = 'iconSharp.ino',
  iconSharp___atimeMs = 'iconSharp.atimeMs',
  iconSharp___mtimeMs = 'iconSharp.mtimeMs',
  iconSharp___ctimeMs = 'iconSharp.ctimeMs',
  iconSharp___atime = 'iconSharp.atime',
  iconSharp___mtime = 'iconSharp.mtime',
  iconSharp___ctime = 'iconSharp.ctime',
  iconSharp___birthtime = 'iconSharp.birthtime',
  iconSharp___birthtimeMs = 'iconSharp.birthtimeMs',
  iconSharp___blksize = 'iconSharp.blksize',
  iconSharp___blocks = 'iconSharp.blocks',
  iconSharp___url = 'iconSharp.url',
  iconSharp___publicURL = 'iconSharp.publicURL',
  iconSharp___childImageSharp___fixed___base64 = 'iconSharp.childImageSharp.fixed.base64',
  iconSharp___childImageSharp___fixed___tracedSVG = 'iconSharp.childImageSharp.fixed.tracedSVG',
  iconSharp___childImageSharp___fixed___aspectRatio = 'iconSharp.childImageSharp.fixed.aspectRatio',
  iconSharp___childImageSharp___fixed___width = 'iconSharp.childImageSharp.fixed.width',
  iconSharp___childImageSharp___fixed___height = 'iconSharp.childImageSharp.fixed.height',
  iconSharp___childImageSharp___fixed___src = 'iconSharp.childImageSharp.fixed.src',
  iconSharp___childImageSharp___fixed___srcSet = 'iconSharp.childImageSharp.fixed.srcSet',
  iconSharp___childImageSharp___fixed___srcWebp = 'iconSharp.childImageSharp.fixed.srcWebp',
  iconSharp___childImageSharp___fixed___srcSetWebp = 'iconSharp.childImageSharp.fixed.srcSetWebp',
  iconSharp___childImageSharp___fixed___originalName = 'iconSharp.childImageSharp.fixed.originalName',
  iconSharp___childImageSharp___resolutions___base64 = 'iconSharp.childImageSharp.resolutions.base64',
  iconSharp___childImageSharp___resolutions___tracedSVG = 'iconSharp.childImageSharp.resolutions.tracedSVG',
  iconSharp___childImageSharp___resolutions___aspectRatio = 'iconSharp.childImageSharp.resolutions.aspectRatio',
  iconSharp___childImageSharp___resolutions___width = 'iconSharp.childImageSharp.resolutions.width',
  iconSharp___childImageSharp___resolutions___height = 'iconSharp.childImageSharp.resolutions.height',
  iconSharp___childImageSharp___resolutions___src = 'iconSharp.childImageSharp.resolutions.src',
  iconSharp___childImageSharp___resolutions___srcSet = 'iconSharp.childImageSharp.resolutions.srcSet',
  iconSharp___childImageSharp___resolutions___srcWebp = 'iconSharp.childImageSharp.resolutions.srcWebp',
  iconSharp___childImageSharp___resolutions___srcSetWebp = 'iconSharp.childImageSharp.resolutions.srcSetWebp',
  iconSharp___childImageSharp___resolutions___originalName = 'iconSharp.childImageSharp.resolutions.originalName',
  iconSharp___childImageSharp___fluid___base64 = 'iconSharp.childImageSharp.fluid.base64',
  iconSharp___childImageSharp___fluid___tracedSVG = 'iconSharp.childImageSharp.fluid.tracedSVG',
  iconSharp___childImageSharp___fluid___aspectRatio = 'iconSharp.childImageSharp.fluid.aspectRatio',
  iconSharp___childImageSharp___fluid___src = 'iconSharp.childImageSharp.fluid.src',
  iconSharp___childImageSharp___fluid___srcSet = 'iconSharp.childImageSharp.fluid.srcSet',
  iconSharp___childImageSharp___fluid___srcWebp = 'iconSharp.childImageSharp.fluid.srcWebp',
  iconSharp___childImageSharp___fluid___srcSetWebp = 'iconSharp.childImageSharp.fluid.srcSetWebp',
  iconSharp___childImageSharp___fluid___sizes = 'iconSharp.childImageSharp.fluid.sizes',
  iconSharp___childImageSharp___fluid___originalImg = 'iconSharp.childImageSharp.fluid.originalImg',
  iconSharp___childImageSharp___fluid___originalName = 'iconSharp.childImageSharp.fluid.originalName',
  iconSharp___childImageSharp___fluid___presentationWidth = 'iconSharp.childImageSharp.fluid.presentationWidth',
  iconSharp___childImageSharp___fluid___presentationHeight = 'iconSharp.childImageSharp.fluid.presentationHeight',
  iconSharp___childImageSharp___sizes___base64 = 'iconSharp.childImageSharp.sizes.base64',
  iconSharp___childImageSharp___sizes___tracedSVG = 'iconSharp.childImageSharp.sizes.tracedSVG',
  iconSharp___childImageSharp___sizes___aspectRatio = 'iconSharp.childImageSharp.sizes.aspectRatio',
  iconSharp___childImageSharp___sizes___src = 'iconSharp.childImageSharp.sizes.src',
  iconSharp___childImageSharp___sizes___srcSet = 'iconSharp.childImageSharp.sizes.srcSet',
  iconSharp___childImageSharp___sizes___srcWebp = 'iconSharp.childImageSharp.sizes.srcWebp',
  iconSharp___childImageSharp___sizes___srcSetWebp = 'iconSharp.childImageSharp.sizes.srcSetWebp',
  iconSharp___childImageSharp___sizes___sizes = 'iconSharp.childImageSharp.sizes.sizes',
  iconSharp___childImageSharp___sizes___originalImg = 'iconSharp.childImageSharp.sizes.originalImg',
  iconSharp___childImageSharp___sizes___originalName = 'iconSharp.childImageSharp.sizes.originalName',
  iconSharp___childImageSharp___sizes___presentationWidth = 'iconSharp.childImageSharp.sizes.presentationWidth',
  iconSharp___childImageSharp___sizes___presentationHeight = 'iconSharp.childImageSharp.sizes.presentationHeight',
  iconSharp___childImageSharp___original___width = 'iconSharp.childImageSharp.original.width',
  iconSharp___childImageSharp___original___height = 'iconSharp.childImageSharp.original.height',
  iconSharp___childImageSharp___original___src = 'iconSharp.childImageSharp.original.src',
  iconSharp___childImageSharp___resize___src = 'iconSharp.childImageSharp.resize.src',
  iconSharp___childImageSharp___resize___tracedSVG = 'iconSharp.childImageSharp.resize.tracedSVG',
  iconSharp___childImageSharp___resize___width = 'iconSharp.childImageSharp.resize.width',
  iconSharp___childImageSharp___resize___height = 'iconSharp.childImageSharp.resize.height',
  iconSharp___childImageSharp___resize___aspectRatio = 'iconSharp.childImageSharp.resize.aspectRatio',
  iconSharp___childImageSharp___resize___originalName = 'iconSharp.childImageSharp.resize.originalName',
  iconSharp___childImageSharp___id = 'iconSharp.childImageSharp.id',
  iconSharp___childImageSharp___parent___id = 'iconSharp.childImageSharp.parent.id',
  iconSharp___childImageSharp___parent___children = 'iconSharp.childImageSharp.parent.children',
  iconSharp___childImageSharp___children = 'iconSharp.childImageSharp.children',
  iconSharp___childImageSharp___children___id = 'iconSharp.childImageSharp.children.id',
  iconSharp___childImageSharp___children___children = 'iconSharp.childImageSharp.children.children',
  iconSharp___childImageSharp___internal___content = 'iconSharp.childImageSharp.internal.content',
  iconSharp___childImageSharp___internal___contentDigest = 'iconSharp.childImageSharp.internal.contentDigest',
  iconSharp___childImageSharp___internal___description = 'iconSharp.childImageSharp.internal.description',
  iconSharp___childImageSharp___internal___fieldOwners = 'iconSharp.childImageSharp.internal.fieldOwners',
  iconSharp___childImageSharp___internal___ignoreType = 'iconSharp.childImageSharp.internal.ignoreType',
  iconSharp___childImageSharp___internal___mediaType = 'iconSharp.childImageSharp.internal.mediaType',
  iconSharp___childImageSharp___internal___owner = 'iconSharp.childImageSharp.internal.owner',
  iconSharp___childImageSharp___internal___type = 'iconSharp.childImageSharp.internal.type',
  iconSharp___id = 'iconSharp.id',
  iconSharp___parent___id = 'iconSharp.parent.id',
  iconSharp___parent___parent___id = 'iconSharp.parent.parent.id',
  iconSharp___parent___parent___children = 'iconSharp.parent.parent.children',
  iconSharp___parent___children = 'iconSharp.parent.children',
  iconSharp___parent___children___id = 'iconSharp.parent.children.id',
  iconSharp___parent___children___children = 'iconSharp.parent.children.children',
  iconSharp___parent___internal___content = 'iconSharp.parent.internal.content',
  iconSharp___parent___internal___contentDigest = 'iconSharp.parent.internal.contentDigest',
  iconSharp___parent___internal___description = 'iconSharp.parent.internal.description',
  iconSharp___parent___internal___fieldOwners = 'iconSharp.parent.internal.fieldOwners',
  iconSharp___parent___internal___ignoreType = 'iconSharp.parent.internal.ignoreType',
  iconSharp___parent___internal___mediaType = 'iconSharp.parent.internal.mediaType',
  iconSharp___parent___internal___owner = 'iconSharp.parent.internal.owner',
  iconSharp___parent___internal___type = 'iconSharp.parent.internal.type',
  iconSharp___children = 'iconSharp.children',
  iconSharp___children___id = 'iconSharp.children.id',
  iconSharp___children___parent___id = 'iconSharp.children.parent.id',
  iconSharp___children___parent___children = 'iconSharp.children.parent.children',
  iconSharp___children___children = 'iconSharp.children.children',
  iconSharp___children___children___id = 'iconSharp.children.children.id',
  iconSharp___children___children___children = 'iconSharp.children.children.children',
  iconSharp___children___internal___content = 'iconSharp.children.internal.content',
  iconSharp___children___internal___contentDigest = 'iconSharp.children.internal.contentDigest',
  iconSharp___children___internal___description = 'iconSharp.children.internal.description',
  iconSharp___children___internal___fieldOwners = 'iconSharp.children.internal.fieldOwners',
  iconSharp___children___internal___ignoreType = 'iconSharp.children.internal.ignoreType',
  iconSharp___children___internal___mediaType = 'iconSharp.children.internal.mediaType',
  iconSharp___children___internal___owner = 'iconSharp.children.internal.owner',
  iconSharp___children___internal___type = 'iconSharp.children.internal.type',
  iconSharp___internal___content = 'iconSharp.internal.content',
  iconSharp___internal___contentDigest = 'iconSharp.internal.contentDigest',
  iconSharp___internal___description = 'iconSharp.internal.description',
  iconSharp___internal___fieldOwners = 'iconSharp.internal.fieldOwners',
  iconSharp___internal___ignoreType = 'iconSharp.internal.ignoreType',
  iconSharp___internal___mediaType = 'iconSharp.internal.mediaType',
  iconSharp___internal___owner = 'iconSharp.internal.owner',
  iconSharp___internal___type = 'iconSharp.internal.type',
  coverImageSharp___sourceInstanceName = 'coverImageSharp.sourceInstanceName',
  coverImageSharp___absolutePath = 'coverImageSharp.absolutePath',
  coverImageSharp___relativePath = 'coverImageSharp.relativePath',
  coverImageSharp___extension = 'coverImageSharp.extension',
  coverImageSharp___size = 'coverImageSharp.size',
  coverImageSharp___prettySize = 'coverImageSharp.prettySize',
  coverImageSharp___modifiedTime = 'coverImageSharp.modifiedTime',
  coverImageSharp___accessTime = 'coverImageSharp.accessTime',
  coverImageSharp___changeTime = 'coverImageSharp.changeTime',
  coverImageSharp___birthTime = 'coverImageSharp.birthTime',
  coverImageSharp___root = 'coverImageSharp.root',
  coverImageSharp___dir = 'coverImageSharp.dir',
  coverImageSharp___base = 'coverImageSharp.base',
  coverImageSharp___ext = 'coverImageSharp.ext',
  coverImageSharp___name = 'coverImageSharp.name',
  coverImageSharp___relativeDirectory = 'coverImageSharp.relativeDirectory',
  coverImageSharp___dev = 'coverImageSharp.dev',
  coverImageSharp___mode = 'coverImageSharp.mode',
  coverImageSharp___nlink = 'coverImageSharp.nlink',
  coverImageSharp___uid = 'coverImageSharp.uid',
  coverImageSharp___gid = 'coverImageSharp.gid',
  coverImageSharp___rdev = 'coverImageSharp.rdev',
  coverImageSharp___ino = 'coverImageSharp.ino',
  coverImageSharp___atimeMs = 'coverImageSharp.atimeMs',
  coverImageSharp___mtimeMs = 'coverImageSharp.mtimeMs',
  coverImageSharp___ctimeMs = 'coverImageSharp.ctimeMs',
  coverImageSharp___atime = 'coverImageSharp.atime',
  coverImageSharp___mtime = 'coverImageSharp.mtime',
  coverImageSharp___ctime = 'coverImageSharp.ctime',
  coverImageSharp___birthtime = 'coverImageSharp.birthtime',
  coverImageSharp___birthtimeMs = 'coverImageSharp.birthtimeMs',
  coverImageSharp___blksize = 'coverImageSharp.blksize',
  coverImageSharp___blocks = 'coverImageSharp.blocks',
  coverImageSharp___url = 'coverImageSharp.url',
  coverImageSharp___publicURL = 'coverImageSharp.publicURL',
  coverImageSharp___childImageSharp___fixed___base64 = 'coverImageSharp.childImageSharp.fixed.base64',
  coverImageSharp___childImageSharp___fixed___tracedSVG = 'coverImageSharp.childImageSharp.fixed.tracedSVG',
  coverImageSharp___childImageSharp___fixed___aspectRatio = 'coverImageSharp.childImageSharp.fixed.aspectRatio',
  coverImageSharp___childImageSharp___fixed___width = 'coverImageSharp.childImageSharp.fixed.width',
  coverImageSharp___childImageSharp___fixed___height = 'coverImageSharp.childImageSharp.fixed.height',
  coverImageSharp___childImageSharp___fixed___src = 'coverImageSharp.childImageSharp.fixed.src',
  coverImageSharp___childImageSharp___fixed___srcSet = 'coverImageSharp.childImageSharp.fixed.srcSet',
  coverImageSharp___childImageSharp___fixed___srcWebp = 'coverImageSharp.childImageSharp.fixed.srcWebp',
  coverImageSharp___childImageSharp___fixed___srcSetWebp = 'coverImageSharp.childImageSharp.fixed.srcSetWebp',
  coverImageSharp___childImageSharp___fixed___originalName = 'coverImageSharp.childImageSharp.fixed.originalName',
  coverImageSharp___childImageSharp___resolutions___base64 = 'coverImageSharp.childImageSharp.resolutions.base64',
  coverImageSharp___childImageSharp___resolutions___tracedSVG = 'coverImageSharp.childImageSharp.resolutions.tracedSVG',
  coverImageSharp___childImageSharp___resolutions___aspectRatio = 'coverImageSharp.childImageSharp.resolutions.aspectRatio',
  coverImageSharp___childImageSharp___resolutions___width = 'coverImageSharp.childImageSharp.resolutions.width',
  coverImageSharp___childImageSharp___resolutions___height = 'coverImageSharp.childImageSharp.resolutions.height',
  coverImageSharp___childImageSharp___resolutions___src = 'coverImageSharp.childImageSharp.resolutions.src',
  coverImageSharp___childImageSharp___resolutions___srcSet = 'coverImageSharp.childImageSharp.resolutions.srcSet',
  coverImageSharp___childImageSharp___resolutions___srcWebp = 'coverImageSharp.childImageSharp.resolutions.srcWebp',
  coverImageSharp___childImageSharp___resolutions___srcSetWebp = 'coverImageSharp.childImageSharp.resolutions.srcSetWebp',
  coverImageSharp___childImageSharp___resolutions___originalName = 'coverImageSharp.childImageSharp.resolutions.originalName',
  coverImageSharp___childImageSharp___fluid___base64 = 'coverImageSharp.childImageSharp.fluid.base64',
  coverImageSharp___childImageSharp___fluid___tracedSVG = 'coverImageSharp.childImageSharp.fluid.tracedSVG',
  coverImageSharp___childImageSharp___fluid___aspectRatio = 'coverImageSharp.childImageSharp.fluid.aspectRatio',
  coverImageSharp___childImageSharp___fluid___src = 'coverImageSharp.childImageSharp.fluid.src',
  coverImageSharp___childImageSharp___fluid___srcSet = 'coverImageSharp.childImageSharp.fluid.srcSet',
  coverImageSharp___childImageSharp___fluid___srcWebp = 'coverImageSharp.childImageSharp.fluid.srcWebp',
  coverImageSharp___childImageSharp___fluid___srcSetWebp = 'coverImageSharp.childImageSharp.fluid.srcSetWebp',
  coverImageSharp___childImageSharp___fluid___sizes = 'coverImageSharp.childImageSharp.fluid.sizes',
  coverImageSharp___childImageSharp___fluid___originalImg = 'coverImageSharp.childImageSharp.fluid.originalImg',
  coverImageSharp___childImageSharp___fluid___originalName = 'coverImageSharp.childImageSharp.fluid.originalName',
  coverImageSharp___childImageSharp___fluid___presentationWidth = 'coverImageSharp.childImageSharp.fluid.presentationWidth',
  coverImageSharp___childImageSharp___fluid___presentationHeight = 'coverImageSharp.childImageSharp.fluid.presentationHeight',
  coverImageSharp___childImageSharp___sizes___base64 = 'coverImageSharp.childImageSharp.sizes.base64',
  coverImageSharp___childImageSharp___sizes___tracedSVG = 'coverImageSharp.childImageSharp.sizes.tracedSVG',
  coverImageSharp___childImageSharp___sizes___aspectRatio = 'coverImageSharp.childImageSharp.sizes.aspectRatio',
  coverImageSharp___childImageSharp___sizes___src = 'coverImageSharp.childImageSharp.sizes.src',
  coverImageSharp___childImageSharp___sizes___srcSet = 'coverImageSharp.childImageSharp.sizes.srcSet',
  coverImageSharp___childImageSharp___sizes___srcWebp = 'coverImageSharp.childImageSharp.sizes.srcWebp',
  coverImageSharp___childImageSharp___sizes___srcSetWebp = 'coverImageSharp.childImageSharp.sizes.srcSetWebp',
  coverImageSharp___childImageSharp___sizes___sizes = 'coverImageSharp.childImageSharp.sizes.sizes',
  coverImageSharp___childImageSharp___sizes___originalImg = 'coverImageSharp.childImageSharp.sizes.originalImg',
  coverImageSharp___childImageSharp___sizes___originalName = 'coverImageSharp.childImageSharp.sizes.originalName',
  coverImageSharp___childImageSharp___sizes___presentationWidth = 'coverImageSharp.childImageSharp.sizes.presentationWidth',
  coverImageSharp___childImageSharp___sizes___presentationHeight = 'coverImageSharp.childImageSharp.sizes.presentationHeight',
  coverImageSharp___childImageSharp___original___width = 'coverImageSharp.childImageSharp.original.width',
  coverImageSharp___childImageSharp___original___height = 'coverImageSharp.childImageSharp.original.height',
  coverImageSharp___childImageSharp___original___src = 'coverImageSharp.childImageSharp.original.src',
  coverImageSharp___childImageSharp___resize___src = 'coverImageSharp.childImageSharp.resize.src',
  coverImageSharp___childImageSharp___resize___tracedSVG = 'coverImageSharp.childImageSharp.resize.tracedSVG',
  coverImageSharp___childImageSharp___resize___width = 'coverImageSharp.childImageSharp.resize.width',
  coverImageSharp___childImageSharp___resize___height = 'coverImageSharp.childImageSharp.resize.height',
  coverImageSharp___childImageSharp___resize___aspectRatio = 'coverImageSharp.childImageSharp.resize.aspectRatio',
  coverImageSharp___childImageSharp___resize___originalName = 'coverImageSharp.childImageSharp.resize.originalName',
  coverImageSharp___childImageSharp___id = 'coverImageSharp.childImageSharp.id',
  coverImageSharp___childImageSharp___parent___id = 'coverImageSharp.childImageSharp.parent.id',
  coverImageSharp___childImageSharp___parent___children = 'coverImageSharp.childImageSharp.parent.children',
  coverImageSharp___childImageSharp___children = 'coverImageSharp.childImageSharp.children',
  coverImageSharp___childImageSharp___children___id = 'coverImageSharp.childImageSharp.children.id',
  coverImageSharp___childImageSharp___children___children = 'coverImageSharp.childImageSharp.children.children',
  coverImageSharp___childImageSharp___internal___content = 'coverImageSharp.childImageSharp.internal.content',
  coverImageSharp___childImageSharp___internal___contentDigest = 'coverImageSharp.childImageSharp.internal.contentDigest',
  coverImageSharp___childImageSharp___internal___description = 'coverImageSharp.childImageSharp.internal.description',
  coverImageSharp___childImageSharp___internal___fieldOwners = 'coverImageSharp.childImageSharp.internal.fieldOwners',
  coverImageSharp___childImageSharp___internal___ignoreType = 'coverImageSharp.childImageSharp.internal.ignoreType',
  coverImageSharp___childImageSharp___internal___mediaType = 'coverImageSharp.childImageSharp.internal.mediaType',
  coverImageSharp___childImageSharp___internal___owner = 'coverImageSharp.childImageSharp.internal.owner',
  coverImageSharp___childImageSharp___internal___type = 'coverImageSharp.childImageSharp.internal.type',
  coverImageSharp___id = 'coverImageSharp.id',
  coverImageSharp___parent___id = 'coverImageSharp.parent.id',
  coverImageSharp___parent___parent___id = 'coverImageSharp.parent.parent.id',
  coverImageSharp___parent___parent___children = 'coverImageSharp.parent.parent.children',
  coverImageSharp___parent___children = 'coverImageSharp.parent.children',
  coverImageSharp___parent___children___id = 'coverImageSharp.parent.children.id',
  coverImageSharp___parent___children___children = 'coverImageSharp.parent.children.children',
  coverImageSharp___parent___internal___content = 'coverImageSharp.parent.internal.content',
  coverImageSharp___parent___internal___contentDigest = 'coverImageSharp.parent.internal.contentDigest',
  coverImageSharp___parent___internal___description = 'coverImageSharp.parent.internal.description',
  coverImageSharp___parent___internal___fieldOwners = 'coverImageSharp.parent.internal.fieldOwners',
  coverImageSharp___parent___internal___ignoreType = 'coverImageSharp.parent.internal.ignoreType',
  coverImageSharp___parent___internal___mediaType = 'coverImageSharp.parent.internal.mediaType',
  coverImageSharp___parent___internal___owner = 'coverImageSharp.parent.internal.owner',
  coverImageSharp___parent___internal___type = 'coverImageSharp.parent.internal.type',
  coverImageSharp___children = 'coverImageSharp.children',
  coverImageSharp___children___id = 'coverImageSharp.children.id',
  coverImageSharp___children___parent___id = 'coverImageSharp.children.parent.id',
  coverImageSharp___children___parent___children = 'coverImageSharp.children.parent.children',
  coverImageSharp___children___children = 'coverImageSharp.children.children',
  coverImageSharp___children___children___id = 'coverImageSharp.children.children.id',
  coverImageSharp___children___children___children = 'coverImageSharp.children.children.children',
  coverImageSharp___children___internal___content = 'coverImageSharp.children.internal.content',
  coverImageSharp___children___internal___contentDigest = 'coverImageSharp.children.internal.contentDigest',
  coverImageSharp___children___internal___description = 'coverImageSharp.children.internal.description',
  coverImageSharp___children___internal___fieldOwners = 'coverImageSharp.children.internal.fieldOwners',
  coverImageSharp___children___internal___ignoreType = 'coverImageSharp.children.internal.ignoreType',
  coverImageSharp___children___internal___mediaType = 'coverImageSharp.children.internal.mediaType',
  coverImageSharp___children___internal___owner = 'coverImageSharp.children.internal.owner',
  coverImageSharp___children___internal___type = 'coverImageSharp.children.internal.type',
  coverImageSharp___internal___content = 'coverImageSharp.internal.content',
  coverImageSharp___internal___contentDigest = 'coverImageSharp.internal.contentDigest',
  coverImageSharp___internal___description = 'coverImageSharp.internal.description',
  coverImageSharp___internal___fieldOwners = 'coverImageSharp.internal.fieldOwners',
  coverImageSharp___internal___ignoreType = 'coverImageSharp.internal.ignoreType',
  coverImageSharp___internal___mediaType = 'coverImageSharp.internal.mediaType',
  coverImageSharp___internal___owner = 'coverImageSharp.internal.owner',
  coverImageSharp___internal___type = 'coverImageSharp.internal.type',
  members_support_address = 'members_support_address',
  ghostId = 'ghostId',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type GhostSettingsFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly logo: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly cover_image: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly timezone: Maybe<StringQueryOperatorInput>;
  readonly navigation: Maybe<NavigationFilterListInput>;
  readonly secondary_navigation: Maybe<NavigationFilterListInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly og_image: Maybe<StringQueryOperatorInput>;
  readonly og_title: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly twitter_image: Maybe<StringQueryOperatorInput>;
  readonly twitter_title: Maybe<StringQueryOperatorInput>;
  readonly twitter_description: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_head: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_foot: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_styles: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly logoSharp: Maybe<FileFilterInput>;
  readonly iconSharp: Maybe<FileFilterInput>;
  readonly coverImageSharp: Maybe<FileFilterInput>;
  readonly members_support_address: Maybe<StringQueryOperatorInput>;
  readonly ghostId: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostSettingsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostSettingsEdge>;
  readonly nodes: ReadonlyArray<GhostSettings>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostSettingsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostSettingsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostTag = Node & {
  readonly id: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly feature_image: Maybe<Scalars['String']>;
  readonly visibility: Maybe<Scalars['String']>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly postCount: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  readonly featureImageSharp: Maybe<File>;
  readonly accent_color: Maybe<Scalars['String']>;
  readonly count: Maybe<GhostTagCount>;
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GhostTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostTagEdge>;
  readonly nodes: ReadonlyArray<GhostTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GhostTagGroupConnection>;
};


type GhostTagConnection_distinctArgs = {
  field: GhostTagFieldsEnum;
};


type GhostTagConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostTagFieldsEnum;
};

type GhostTagCount = {
  readonly posts: Maybe<Scalars['Int']>;
};

type GhostTagCountFilterInput = {
  readonly posts: Maybe<IntQueryOperatorInput>;
};

type GhostTagEdge = {
  readonly next: Maybe<GhostTag>;
  readonly node: GhostTag;
  readonly previous: Maybe<GhostTag>;
};

enum GhostTagFieldsEnum {
  id = 'id',
  name = 'name',
  slug = 'slug',
  description = 'description',
  feature_image = 'feature_image',
  visibility = 'visibility',
  meta_title = 'meta_title',
  meta_description = 'meta_description',
  postCount = 'postCount',
  url = 'url',
  featureImageSharp___sourceInstanceName = 'featureImageSharp.sourceInstanceName',
  featureImageSharp___absolutePath = 'featureImageSharp.absolutePath',
  featureImageSharp___relativePath = 'featureImageSharp.relativePath',
  featureImageSharp___extension = 'featureImageSharp.extension',
  featureImageSharp___size = 'featureImageSharp.size',
  featureImageSharp___prettySize = 'featureImageSharp.prettySize',
  featureImageSharp___modifiedTime = 'featureImageSharp.modifiedTime',
  featureImageSharp___accessTime = 'featureImageSharp.accessTime',
  featureImageSharp___changeTime = 'featureImageSharp.changeTime',
  featureImageSharp___birthTime = 'featureImageSharp.birthTime',
  featureImageSharp___root = 'featureImageSharp.root',
  featureImageSharp___dir = 'featureImageSharp.dir',
  featureImageSharp___base = 'featureImageSharp.base',
  featureImageSharp___ext = 'featureImageSharp.ext',
  featureImageSharp___name = 'featureImageSharp.name',
  featureImageSharp___relativeDirectory = 'featureImageSharp.relativeDirectory',
  featureImageSharp___dev = 'featureImageSharp.dev',
  featureImageSharp___mode = 'featureImageSharp.mode',
  featureImageSharp___nlink = 'featureImageSharp.nlink',
  featureImageSharp___uid = 'featureImageSharp.uid',
  featureImageSharp___gid = 'featureImageSharp.gid',
  featureImageSharp___rdev = 'featureImageSharp.rdev',
  featureImageSharp___ino = 'featureImageSharp.ino',
  featureImageSharp___atimeMs = 'featureImageSharp.atimeMs',
  featureImageSharp___mtimeMs = 'featureImageSharp.mtimeMs',
  featureImageSharp___ctimeMs = 'featureImageSharp.ctimeMs',
  featureImageSharp___atime = 'featureImageSharp.atime',
  featureImageSharp___mtime = 'featureImageSharp.mtime',
  featureImageSharp___ctime = 'featureImageSharp.ctime',
  featureImageSharp___birthtime = 'featureImageSharp.birthtime',
  featureImageSharp___birthtimeMs = 'featureImageSharp.birthtimeMs',
  featureImageSharp___blksize = 'featureImageSharp.blksize',
  featureImageSharp___blocks = 'featureImageSharp.blocks',
  featureImageSharp___url = 'featureImageSharp.url',
  featureImageSharp___publicURL = 'featureImageSharp.publicURL',
  featureImageSharp___childImageSharp___fixed___base64 = 'featureImageSharp.childImageSharp.fixed.base64',
  featureImageSharp___childImageSharp___fixed___tracedSVG = 'featureImageSharp.childImageSharp.fixed.tracedSVG',
  featureImageSharp___childImageSharp___fixed___aspectRatio = 'featureImageSharp.childImageSharp.fixed.aspectRatio',
  featureImageSharp___childImageSharp___fixed___width = 'featureImageSharp.childImageSharp.fixed.width',
  featureImageSharp___childImageSharp___fixed___height = 'featureImageSharp.childImageSharp.fixed.height',
  featureImageSharp___childImageSharp___fixed___src = 'featureImageSharp.childImageSharp.fixed.src',
  featureImageSharp___childImageSharp___fixed___srcSet = 'featureImageSharp.childImageSharp.fixed.srcSet',
  featureImageSharp___childImageSharp___fixed___srcWebp = 'featureImageSharp.childImageSharp.fixed.srcWebp',
  featureImageSharp___childImageSharp___fixed___srcSetWebp = 'featureImageSharp.childImageSharp.fixed.srcSetWebp',
  featureImageSharp___childImageSharp___fixed___originalName = 'featureImageSharp.childImageSharp.fixed.originalName',
  featureImageSharp___childImageSharp___resolutions___base64 = 'featureImageSharp.childImageSharp.resolutions.base64',
  featureImageSharp___childImageSharp___resolutions___tracedSVG = 'featureImageSharp.childImageSharp.resolutions.tracedSVG',
  featureImageSharp___childImageSharp___resolutions___aspectRatio = 'featureImageSharp.childImageSharp.resolutions.aspectRatio',
  featureImageSharp___childImageSharp___resolutions___width = 'featureImageSharp.childImageSharp.resolutions.width',
  featureImageSharp___childImageSharp___resolutions___height = 'featureImageSharp.childImageSharp.resolutions.height',
  featureImageSharp___childImageSharp___resolutions___src = 'featureImageSharp.childImageSharp.resolutions.src',
  featureImageSharp___childImageSharp___resolutions___srcSet = 'featureImageSharp.childImageSharp.resolutions.srcSet',
  featureImageSharp___childImageSharp___resolutions___srcWebp = 'featureImageSharp.childImageSharp.resolutions.srcWebp',
  featureImageSharp___childImageSharp___resolutions___srcSetWebp = 'featureImageSharp.childImageSharp.resolutions.srcSetWebp',
  featureImageSharp___childImageSharp___resolutions___originalName = 'featureImageSharp.childImageSharp.resolutions.originalName',
  featureImageSharp___childImageSharp___fluid___base64 = 'featureImageSharp.childImageSharp.fluid.base64',
  featureImageSharp___childImageSharp___fluid___tracedSVG = 'featureImageSharp.childImageSharp.fluid.tracedSVG',
  featureImageSharp___childImageSharp___fluid___aspectRatio = 'featureImageSharp.childImageSharp.fluid.aspectRatio',
  featureImageSharp___childImageSharp___fluid___src = 'featureImageSharp.childImageSharp.fluid.src',
  featureImageSharp___childImageSharp___fluid___srcSet = 'featureImageSharp.childImageSharp.fluid.srcSet',
  featureImageSharp___childImageSharp___fluid___srcWebp = 'featureImageSharp.childImageSharp.fluid.srcWebp',
  featureImageSharp___childImageSharp___fluid___srcSetWebp = 'featureImageSharp.childImageSharp.fluid.srcSetWebp',
  featureImageSharp___childImageSharp___fluid___sizes = 'featureImageSharp.childImageSharp.fluid.sizes',
  featureImageSharp___childImageSharp___fluid___originalImg = 'featureImageSharp.childImageSharp.fluid.originalImg',
  featureImageSharp___childImageSharp___fluid___originalName = 'featureImageSharp.childImageSharp.fluid.originalName',
  featureImageSharp___childImageSharp___fluid___presentationWidth = 'featureImageSharp.childImageSharp.fluid.presentationWidth',
  featureImageSharp___childImageSharp___fluid___presentationHeight = 'featureImageSharp.childImageSharp.fluid.presentationHeight',
  featureImageSharp___childImageSharp___sizes___base64 = 'featureImageSharp.childImageSharp.sizes.base64',
  featureImageSharp___childImageSharp___sizes___tracedSVG = 'featureImageSharp.childImageSharp.sizes.tracedSVG',
  featureImageSharp___childImageSharp___sizes___aspectRatio = 'featureImageSharp.childImageSharp.sizes.aspectRatio',
  featureImageSharp___childImageSharp___sizes___src = 'featureImageSharp.childImageSharp.sizes.src',
  featureImageSharp___childImageSharp___sizes___srcSet = 'featureImageSharp.childImageSharp.sizes.srcSet',
  featureImageSharp___childImageSharp___sizes___srcWebp = 'featureImageSharp.childImageSharp.sizes.srcWebp',
  featureImageSharp___childImageSharp___sizes___srcSetWebp = 'featureImageSharp.childImageSharp.sizes.srcSetWebp',
  featureImageSharp___childImageSharp___sizes___sizes = 'featureImageSharp.childImageSharp.sizes.sizes',
  featureImageSharp___childImageSharp___sizes___originalImg = 'featureImageSharp.childImageSharp.sizes.originalImg',
  featureImageSharp___childImageSharp___sizes___originalName = 'featureImageSharp.childImageSharp.sizes.originalName',
  featureImageSharp___childImageSharp___sizes___presentationWidth = 'featureImageSharp.childImageSharp.sizes.presentationWidth',
  featureImageSharp___childImageSharp___sizes___presentationHeight = 'featureImageSharp.childImageSharp.sizes.presentationHeight',
  featureImageSharp___childImageSharp___original___width = 'featureImageSharp.childImageSharp.original.width',
  featureImageSharp___childImageSharp___original___height = 'featureImageSharp.childImageSharp.original.height',
  featureImageSharp___childImageSharp___original___src = 'featureImageSharp.childImageSharp.original.src',
  featureImageSharp___childImageSharp___resize___src = 'featureImageSharp.childImageSharp.resize.src',
  featureImageSharp___childImageSharp___resize___tracedSVG = 'featureImageSharp.childImageSharp.resize.tracedSVG',
  featureImageSharp___childImageSharp___resize___width = 'featureImageSharp.childImageSharp.resize.width',
  featureImageSharp___childImageSharp___resize___height = 'featureImageSharp.childImageSharp.resize.height',
  featureImageSharp___childImageSharp___resize___aspectRatio = 'featureImageSharp.childImageSharp.resize.aspectRatio',
  featureImageSharp___childImageSharp___resize___originalName = 'featureImageSharp.childImageSharp.resize.originalName',
  featureImageSharp___childImageSharp___id = 'featureImageSharp.childImageSharp.id',
  featureImageSharp___childImageSharp___parent___id = 'featureImageSharp.childImageSharp.parent.id',
  featureImageSharp___childImageSharp___parent___children = 'featureImageSharp.childImageSharp.parent.children',
  featureImageSharp___childImageSharp___children = 'featureImageSharp.childImageSharp.children',
  featureImageSharp___childImageSharp___children___id = 'featureImageSharp.childImageSharp.children.id',
  featureImageSharp___childImageSharp___children___children = 'featureImageSharp.childImageSharp.children.children',
  featureImageSharp___childImageSharp___internal___content = 'featureImageSharp.childImageSharp.internal.content',
  featureImageSharp___childImageSharp___internal___contentDigest = 'featureImageSharp.childImageSharp.internal.contentDigest',
  featureImageSharp___childImageSharp___internal___description = 'featureImageSharp.childImageSharp.internal.description',
  featureImageSharp___childImageSharp___internal___fieldOwners = 'featureImageSharp.childImageSharp.internal.fieldOwners',
  featureImageSharp___childImageSharp___internal___ignoreType = 'featureImageSharp.childImageSharp.internal.ignoreType',
  featureImageSharp___childImageSharp___internal___mediaType = 'featureImageSharp.childImageSharp.internal.mediaType',
  featureImageSharp___childImageSharp___internal___owner = 'featureImageSharp.childImageSharp.internal.owner',
  featureImageSharp___childImageSharp___internal___type = 'featureImageSharp.childImageSharp.internal.type',
  featureImageSharp___id = 'featureImageSharp.id',
  featureImageSharp___parent___id = 'featureImageSharp.parent.id',
  featureImageSharp___parent___parent___id = 'featureImageSharp.parent.parent.id',
  featureImageSharp___parent___parent___children = 'featureImageSharp.parent.parent.children',
  featureImageSharp___parent___children = 'featureImageSharp.parent.children',
  featureImageSharp___parent___children___id = 'featureImageSharp.parent.children.id',
  featureImageSharp___parent___children___children = 'featureImageSharp.parent.children.children',
  featureImageSharp___parent___internal___content = 'featureImageSharp.parent.internal.content',
  featureImageSharp___parent___internal___contentDigest = 'featureImageSharp.parent.internal.contentDigest',
  featureImageSharp___parent___internal___description = 'featureImageSharp.parent.internal.description',
  featureImageSharp___parent___internal___fieldOwners = 'featureImageSharp.parent.internal.fieldOwners',
  featureImageSharp___parent___internal___ignoreType = 'featureImageSharp.parent.internal.ignoreType',
  featureImageSharp___parent___internal___mediaType = 'featureImageSharp.parent.internal.mediaType',
  featureImageSharp___parent___internal___owner = 'featureImageSharp.parent.internal.owner',
  featureImageSharp___parent___internal___type = 'featureImageSharp.parent.internal.type',
  featureImageSharp___children = 'featureImageSharp.children',
  featureImageSharp___children___id = 'featureImageSharp.children.id',
  featureImageSharp___children___parent___id = 'featureImageSharp.children.parent.id',
  featureImageSharp___children___parent___children = 'featureImageSharp.children.parent.children',
  featureImageSharp___children___children = 'featureImageSharp.children.children',
  featureImageSharp___children___children___id = 'featureImageSharp.children.children.id',
  featureImageSharp___children___children___children = 'featureImageSharp.children.children.children',
  featureImageSharp___children___internal___content = 'featureImageSharp.children.internal.content',
  featureImageSharp___children___internal___contentDigest = 'featureImageSharp.children.internal.contentDigest',
  featureImageSharp___children___internal___description = 'featureImageSharp.children.internal.description',
  featureImageSharp___children___internal___fieldOwners = 'featureImageSharp.children.internal.fieldOwners',
  featureImageSharp___children___internal___ignoreType = 'featureImageSharp.children.internal.ignoreType',
  featureImageSharp___children___internal___mediaType = 'featureImageSharp.children.internal.mediaType',
  featureImageSharp___children___internal___owner = 'featureImageSharp.children.internal.owner',
  featureImageSharp___children___internal___type = 'featureImageSharp.children.internal.type',
  featureImageSharp___internal___content = 'featureImageSharp.internal.content',
  featureImageSharp___internal___contentDigest = 'featureImageSharp.internal.contentDigest',
  featureImageSharp___internal___description = 'featureImageSharp.internal.description',
  featureImageSharp___internal___fieldOwners = 'featureImageSharp.internal.fieldOwners',
  featureImageSharp___internal___ignoreType = 'featureImageSharp.internal.ignoreType',
  featureImageSharp___internal___mediaType = 'featureImageSharp.internal.mediaType',
  featureImageSharp___internal___owner = 'featureImageSharp.internal.owner',
  featureImageSharp___internal___type = 'featureImageSharp.internal.type',
  accent_color = 'accent_color',
  count___posts = 'count.posts',
  ghostId = 'ghostId',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type GhostTagFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly feature_image: Maybe<StringQueryOperatorInput>;
  readonly visibility: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly postCount: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly featureImageSharp: Maybe<FileFilterInput>;
  readonly accent_color: Maybe<StringQueryOperatorInput>;
  readonly count: Maybe<GhostTagCountFilterInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostTagFilterListInput = {
  readonly elemMatch: Maybe<GhostTagFilterInput>;
};

type GhostTagGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostTagEdge>;
  readonly nodes: ReadonlyArray<GhostTag>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostTagSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostTagFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type HtmlRehype = Node & {
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type HtmlRehypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<HtmlRehypeEdge>;
  readonly nodes: ReadonlyArray<HtmlRehype>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<HtmlRehypeGroupConnection>;
};


type HtmlRehypeConnection_distinctArgs = {
  field: HtmlRehypeFieldsEnum;
};


type HtmlRehypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: HtmlRehypeFieldsEnum;
};

type HtmlRehypeEdge = {
  readonly next: Maybe<HtmlRehype>;
  readonly node: HtmlRehype;
  readonly previous: Maybe<HtmlRehype>;
};

enum HtmlRehypeFieldsEnum {
  html = 'html',
  htmlAst = 'htmlAst',
  tableOfContents = 'tableOfContents',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type HtmlRehypeFilterInput = {
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type HtmlRehypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<HtmlRehypeEdge>;
  readonly nodes: ReadonlyArray<HtmlRehype>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type HtmlRehypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<HtmlRehypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type Navigation = {
  readonly label: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type NavigationFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type NavigationFilterListInput = {
  readonly elemMatch: Maybe<NavigationFilterInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly ghostTag: Maybe<GhostTag>;
  readonly allGhostTag: GhostTagConnection;
  readonly ghostAuthor: Maybe<GhostAuthor>;
  readonly allGhostAuthor: GhostAuthorConnection;
  readonly ghostPost: Maybe<GhostPost>;
  readonly allGhostPost: GhostPostConnection;
  readonly ghostPage: Maybe<GhostPage>;
  readonly allGhostPage: GhostPageConnection;
  readonly ghostSettings: Maybe<GhostSettings>;
  readonly allGhostSettings: GhostSettingsConnection;
  readonly htmlRehype: Maybe<HtmlRehype>;
  readonly allHtmlRehype: HtmlRehypeConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostTagArgs = {
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  feature_image: Maybe<StringQueryOperatorInput>;
  visibility: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  postCount: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  featureImageSharp: Maybe<FileFilterInput>;
  accent_color: Maybe<StringQueryOperatorInput>;
  count: Maybe<GhostTagCountFilterInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostTagArgs = {
  filter: Maybe<GhostTagFilterInput>;
  sort: Maybe<GhostTagSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostAuthorArgs = {
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  profile_image: Maybe<StringQueryOperatorInput>;
  cover_image: Maybe<StringQueryOperatorInput>;
  bio: Maybe<StringQueryOperatorInput>;
  website: Maybe<StringQueryOperatorInput>;
  location: Maybe<StringQueryOperatorInput>;
  facebook: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  postCount: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  profileImageSharp: Maybe<FileFilterInput>;
  coverImageSharp: Maybe<FileFilterInput>;
  count: Maybe<GhostAuthorCountFilterInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostAuthorArgs = {
  filter: Maybe<GhostAuthorFilterInput>;
  sort: Maybe<GhostAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostPostArgs = {
  id: Maybe<StringQueryOperatorInput>;
  uuid: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  comment_id: Maybe<StringQueryOperatorInput>;
  plaintext: Maybe<StringQueryOperatorInput>;
  feature_image: Maybe<StringQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  visibility: Maybe<StringQueryOperatorInput>;
  send_email_when_published: Maybe<BooleanQueryOperatorInput>;
  created_at: Maybe<DateQueryOperatorInput>;
  updated_at: Maybe<DateQueryOperatorInput>;
  published_at: Maybe<DateQueryOperatorInput>;
  custom_excerpt: Maybe<StringQueryOperatorInput>;
  codeinjection_head: Maybe<StringQueryOperatorInput>;
  codeinjection_foot: Maybe<StringQueryOperatorInput>;
  codeinjection_styles: Maybe<StringQueryOperatorInput>;
  custom_template: Maybe<StringQueryOperatorInput>;
  canonical_url: Maybe<StringQueryOperatorInput>;
  tags: Maybe<GhostTagFilterListInput>;
  authors: Maybe<GhostAuthorFilterListInput>;
  primary_author: Maybe<GhostAuthorFilterInput>;
  primary_tag: Maybe<GhostTagFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  reading_time: Maybe<IntQueryOperatorInput>;
  og_image: Maybe<StringQueryOperatorInput>;
  og_title: Maybe<StringQueryOperatorInput>;
  og_description: Maybe<StringQueryOperatorInput>;
  twitter_image: Maybe<StringQueryOperatorInput>;
  twitter_title: Maybe<StringQueryOperatorInput>;
  twitter_description: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  email_subject: Maybe<StringQueryOperatorInput>;
  featureImageSharp: Maybe<FileFilterInput>;
  childHtmlRehype: Maybe<HtmlRehypeFilterInput>;
  access: Maybe<BooleanQueryOperatorInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostPostArgs = {
  filter: Maybe<GhostPostFilterInput>;
  sort: Maybe<GhostPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostPageArgs = {
  id: Maybe<StringQueryOperatorInput>;
  uuid: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  comment_id: Maybe<StringQueryOperatorInput>;
  plaintext: Maybe<StringQueryOperatorInput>;
  feature_image: Maybe<StringQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  visibility: Maybe<StringQueryOperatorInput>;
  created_at: Maybe<DateQueryOperatorInput>;
  updated_at: Maybe<DateQueryOperatorInput>;
  published_at: Maybe<DateQueryOperatorInput>;
  custom_excerpt: Maybe<StringQueryOperatorInput>;
  codeinjection_head: Maybe<StringQueryOperatorInput>;
  codeinjection_foot: Maybe<StringQueryOperatorInput>;
  codeinjection_styles: Maybe<StringQueryOperatorInput>;
  custom_template: Maybe<StringQueryOperatorInput>;
  canonical_url: Maybe<StringQueryOperatorInput>;
  tags: Maybe<GhostTagFilterListInput>;
  authors: Maybe<GhostAuthorFilterListInput>;
  primary_author: Maybe<GhostAuthorFilterInput>;
  primary_tag: Maybe<GhostTagFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  reading_time: Maybe<IntQueryOperatorInput>;
  page: Maybe<BooleanQueryOperatorInput>;
  og_image: Maybe<StringQueryOperatorInput>;
  og_title: Maybe<StringQueryOperatorInput>;
  og_description: Maybe<StringQueryOperatorInput>;
  twitter_image: Maybe<StringQueryOperatorInput>;
  twitter_title: Maybe<StringQueryOperatorInput>;
  twitter_description: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  featureImageSharp: Maybe<FileFilterInput>;
  childHtmlRehype: Maybe<HtmlRehypeFilterInput>;
  access: Maybe<BooleanQueryOperatorInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostPageArgs = {
  filter: Maybe<GhostPageFilterInput>;
  sort: Maybe<GhostPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostSettingsArgs = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  logo: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  cover_image: Maybe<StringQueryOperatorInput>;
  facebook: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  timezone: Maybe<StringQueryOperatorInput>;
  navigation: Maybe<NavigationFilterListInput>;
  secondary_navigation: Maybe<NavigationFilterListInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  og_image: Maybe<StringQueryOperatorInput>;
  og_title: Maybe<StringQueryOperatorInput>;
  og_description: Maybe<StringQueryOperatorInput>;
  twitter_image: Maybe<StringQueryOperatorInput>;
  twitter_title: Maybe<StringQueryOperatorInput>;
  twitter_description: Maybe<StringQueryOperatorInput>;
  codeinjection_head: Maybe<StringQueryOperatorInput>;
  codeinjection_foot: Maybe<StringQueryOperatorInput>;
  codeinjection_styles: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  logoSharp: Maybe<FileFilterInput>;
  iconSharp: Maybe<FileFilterInput>;
  coverImageSharp: Maybe<FileFilterInput>;
  members_support_address: Maybe<StringQueryOperatorInput>;
  ghostId: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostSettingsArgs = {
  filter: Maybe<GhostSettingsFilterInput>;
  sort: Maybe<GhostSettingsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_htmlRehypeArgs = {
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allHtmlRehypeArgs = {
  filter: Maybe<HtmlRehypeFilterInput>;
  sort: Maybe<HtmlRehypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___author = 'siteMetadata.author',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  siteMetadata___keywords = 'siteMetadata.keywords',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___slug = 'context.slug',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
  pluginCreator___pluginOptions___root = 'pluginCreator.pluginOptions.root',
  pluginCreator___pluginOptions___aliases____components = 'pluginCreator.pluginOptions.aliases._components',
  pluginCreator___pluginOptions___aliases____hooks = 'pluginCreator.pluginOptions.aliases._hooks',
  pluginCreator___pluginOptions___aliases____templates = 'pluginCreator.pluginOptions.aliases._templates',
  pluginCreator___pluginOptions___aliases____assets = 'pluginCreator.pluginOptions.aliases._assets',
  pluginCreator___pluginOptions___aliases____pages = 'pluginCreator.pluginOptions.aliases._pages',
  pluginCreator___pluginOptions___aliases____src = 'pluginCreator.pluginOptions.aliases._src',
  pluginCreator___pluginOptions___ghostConfig___apiUrl = 'pluginCreator.pluginOptions.ghostConfig.apiUrl',
  pluginCreator___pluginOptions___ghostConfig___contentApiKey = 'pluginCreator.pluginOptions.ghostConfig.contentApiKey',
  pluginCreator___pluginOptions___lookup = 'pluginCreator.pluginOptions.lookup',
  pluginCreator___pluginOptions___lookup___type = 'pluginCreator.pluginOptions.lookup.type',
  pluginCreator___pluginOptions___lookup___imgTags = 'pluginCreator.pluginOptions.lookup.imgTags',
  pluginCreator___pluginOptions___verbose = 'pluginCreator.pluginOptions.verbose',
  pluginCreator___pluginOptions___disable = 'pluginCreator.pluginOptions.disable',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
  pluginOptions___root = 'pluginOptions.root',
  pluginOptions___aliases____components = 'pluginOptions.aliases._components',
  pluginOptions___aliases____hooks = 'pluginOptions.aliases._hooks',
  pluginOptions___aliases____templates = 'pluginOptions.aliases._templates',
  pluginOptions___aliases____assets = 'pluginOptions.aliases._assets',
  pluginOptions___aliases____pages = 'pluginOptions.aliases._pages',
  pluginOptions___aliases____src = 'pluginOptions.aliases._src',
  pluginOptions___ghostConfig___apiUrl = 'pluginOptions.ghostConfig.apiUrl',
  pluginOptions___ghostConfig___contentApiKey = 'pluginOptions.ghostConfig.contentApiKey',
  pluginOptions___lookup = 'pluginOptions.lookup',
  pluginOptions___lookup___type = 'pluginOptions.lookup.type',
  pluginOptions___lookup___imgTags = 'pluginOptions.lookup.imgTags',
  pluginOptions___verbose = 'pluginOptions.verbose',
  pluginOptions___disable = 'pluginOptions.disable',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly root: Maybe<Scalars['String']>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliases>;
  readonly ghostConfig: Maybe<SitePluginPluginOptionsGhostConfig>;
  readonly lookup: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsLookup>>>;
  readonly verbose: Maybe<Scalars['Boolean']>;
  readonly disable: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsAliases = {
  readonly _components: Maybe<Scalars['String']>;
  readonly _hooks: Maybe<Scalars['String']>;
  readonly _templates: Maybe<Scalars['String']>;
  readonly _assets: Maybe<Scalars['String']>;
  readonly _pages: Maybe<Scalars['String']>;
  readonly _src: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsAliasesFilterInput = {
  readonly _components: Maybe<StringQueryOperatorInput>;
  readonly _hooks: Maybe<StringQueryOperatorInput>;
  readonly _templates: Maybe<StringQueryOperatorInput>;
  readonly _assets: Maybe<StringQueryOperatorInput>;
  readonly _pages: Maybe<StringQueryOperatorInput>;
  readonly _src: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  readonly ghostConfig: Maybe<SitePluginPluginOptionsGhostConfigFilterInput>;
  readonly lookup: Maybe<SitePluginPluginOptionsLookupFilterListInput>;
  readonly verbose: Maybe<BooleanQueryOperatorInput>;
  readonly disable: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsGhostConfig = {
  readonly apiUrl: Maybe<Scalars['String']>;
  readonly contentApiKey: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsGhostConfigFilterInput = {
  readonly apiUrl: Maybe<StringQueryOperatorInput>;
  readonly contentApiKey: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsLookup = {
  readonly type: Maybe<Scalars['String']>;
  readonly imgTags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsLookupFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly imgTags: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsLookupFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsLookupFilterInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type PostQuery = { readonly ghostPost: Maybe<(
    Pick<GhostPost, 'id' | 'title' | 'slug' | 'featured' | 'excerpt' | 'custom_excerpt' | 'visibility' | 'created_at' | 'published_at' | 'updated_at' | 'meta_title' | 'meta_description' | 'og_description' | 'og_image' | 'og_title' | 'twitter_description' | 'twitter_image' | 'twitter_title' | 'plaintext' | 'html' | 'url' | 'canonical_url' | 'uuid' | 'codeinjection_foot' | 'codeinjection_head' | 'codeinjection_styles' | 'comment_id' | 'reading_time'>
    & { created_at_pretty: GhostPost['created_at'], published_at_pretty: GhostPost['published_at'], updated_at_pretty: GhostPost['updated_at'] }
    & { readonly featureImageSharp: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment> }> }>, readonly authors: Maybe<ReadonlyArray<Maybe<Pick<GhostAuthor, 'name' | 'slug' | 'bio' | 'profile_image' | 'twitter' | 'facebook' | 'website'>>>>, readonly primary_author: Maybe<Pick<GhostAuthor, 'name' | 'slug' | 'bio' | 'profile_image' | 'twitter' | 'facebook' | 'website'>>, readonly primary_tag: Maybe<Pick<GhostTag, 'name' | 'slug' | 'description' | 'feature_image' | 'meta_description' | 'meta_title' | 'visibility'>>, readonly tags: Maybe<ReadonlyArray<Maybe<Pick<GhostTag, 'name' | 'slug' | 'description' | 'feature_image' | 'meta_description' | 'meta_title' | 'visibility'>>>> }
  )> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}