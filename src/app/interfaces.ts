export interface ApiData {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: Item[];
}

export interface RowItem {
  checkbox?: boolean;
  thumbnail: IThumbnailParams;
  publishedOn: string;
  videoTitle: IVideoTitleParams;
  description: string;
}

export interface IVideoTitleParams {
  title: string;
  videoId: string;
}

export interface Item {
  kind?: 'youtube#searchResult';
  etag: string;
  id: IVideoId;
  snippet: ISnippet;
}

export interface IVideoId {
  kind?: 'youtube#video';
  videoId: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnail;
  channelTitle: string;
  liveBroadcastContent?: 'none';
  publishTime: string;
}

export interface IThumbnail {
  default: IThumbnailParams;
  medium: IThumbnailParams;
  high: IThumbnailParams;
}

export interface IThumbnailParams {
  url: string;
  width: number;
  height: number;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export enum EColumnId {
  CHECKBOX = 'checkbox',
  THUMBNAIL = 'thumbnail',
  PUBLISHED_ON = 'publishedOn',
  VIDEO_TITLE = 'videoTitle',
  DESCRIPTION = 'description'
}
