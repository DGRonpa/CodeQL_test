export interface IConvInfo {
  cid: string;
  name: string;
  avatar: string;
}
enum EConvListType {
  THUMB = 'THUMB',
  COMM = 'COMM',
}
const getConvThumbHtmlStr = (convItem: IConvInfo) => {
  return `<div class="qunliao-listitem" data-itemdata="${convItem.cid}">
    <div class="qunliao-name">${convItem.name}</div>
  </div>`;
};