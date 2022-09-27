import { Data, SubTypeEnum } from '../constants';
import BaseEditor from './baseEditor';
import {
  getLegendEditor,
  getAxisEditor,
  getPaddingEditor,
  getEmptyEditor
} from '../../utils/editor';

export default {
  '@init'({ style }: EditorResult<Data>) {
    style.height = 400;
    style.width = '100%';
  },
  '@resize': {
    options: ['height', 'width']
  },
  ':root': ({}: EditorResult<Data>, cate0: any) => {
    cate0.title = '常规';
    cate0.items = [
      ...BaseEditor,
      ...getAxisEditor(),
      {
        ...getLegendEditor(),
        ifVisible: ({ data }: EditorResult<Data>) => {
          return data.subType !== SubTypeEnum.Default;
        }
      },
      ...getPaddingEditor(),
      ...getEmptyEditor()
    ];

    return { title: '柱状图' };
  }
};
