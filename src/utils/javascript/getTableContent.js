import { v4 as uuidv4 } from 'uuid';
// optimized verion could be creating a Trie!

// TODO: Convert it into a Pure function
// Not a Pure Function

const getTableContent_helper = (arr, index, n, obj, paths) => {
  if (index === n - 1) {
    const pathid = uuidv4();

    if (obj.hasOwnProperty('files')) {
      obj['files'].push(`${arr[n - 1]}_${pathid}`);
    } else {
      obj['files'] = [`${arr[n - 1]}_${pathid}`];
    }

    // FIXME: Bug: Fixing using uuid
    if (paths.hasOwnProperty(arr[n - 1]))
      throw new Error(`Same name Files Gotcha: ${arr[n - 1]}`);

    paths[`${arr[n - 1]}_${pathid}`] = `${arr
      .slice(0, index + 1)
      .join('/')}_${pathid}`;
    return;
  }

  if (obj.hasOwnProperty(arr[index])) {
    const getSome = { ...obj[arr[index]] };
    getTableContent_helper(arr, index + 1, n, getSome, paths);
    obj[arr[index]] = { ...getSome };
    return;
  }

  const getSome = {};
  getTableContent_helper(arr, index + 1, n, getSome, paths);
  obj[arr[index]] = getSome;
};

const getTableContent = (contents) => {
  const tableOfContent = {};
  const paths = {};

  // remove first and last `/` so that while splitting we don't get empty strings
  const contents_2D = contents.map((content) =>
    content.substring(1, content.length - 1).split('/')
  );

  contents_2D.map((content) =>
    getTableContent_helper(content, 0, content.length, tableOfContent, paths)
  );

  return [tableOfContent, paths];
};

export default getTableContent;
