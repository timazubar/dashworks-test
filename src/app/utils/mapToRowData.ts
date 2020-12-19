import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

import {ApiData, Item, RowItem} from '../interfaces';

export function mapToRowData<T>(): OperatorFunction<ApiData, RowItem[]> {
  return map<ApiData, RowItem[]>(({items}) => {
    return items.map((item: Item) => ({
        thumbnail: item.snippet.thumbnails.default,
        publishedOn: item.snippet.publishedAt,
        videoTitle: {title: item.snippet.title, videoId: item.id.videoId},
        description: item.snippet.description,
      })
    );
  });
}
