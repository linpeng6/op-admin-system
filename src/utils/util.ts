// 递归铺平树结构
const recurseFlattenTree = (tree: any[], list: any = []) => {
  if (!tree || !tree.length) return;
  tree.forEach((item) => {
    list.push(item);
    if (item.children?.length > 0) {
      recurseFlattenTree(item.children, list);
    }
  });
};

export { recurseFlattenTree };
