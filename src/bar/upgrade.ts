import { elementClickSchema } from "../utils";

export default function ({ data, output }: any): boolean {
  if (!data.tempAnnotations) {
    data.tempAnnotations = [];
  }
  if (!data.config.padding) {
    data.config.padding = 'auto';
  }

  if (!data.useEmpty) {
    data.useEmpty = true;
  }
  if (!data.emptyText) {
    data.emptyText = '暂无数据';
  }

  if (data?.config?.label === undefined) {
    data.config.label = false;
  }


  /**
  * @description v1.0.5 增加事件配置项
  */
  if (!data.events) {
    data.events = [
      {
        id: 'eleClick',
        title: '元素点击',
        componentName: 'element',
        eventName: 'click'
      }
    ];
    output.add({
      id: 'eleClick',
      title: '元素点击',
      schema: elementClickSchema
    })
  }
  //=========== v1.0.5 end ===============

  return true;
}