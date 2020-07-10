const { v4: uuidv4 } = require('uuid');
const string1 =
  '/learn-ml/01---supervised-learning/1--regression/06---generating-non-linear-hypothesis-using-linear-regression/';
const string2 =
  '/learn-ml/01---supervised-learning/1--regression/07---generating-non-linear-hypothesis-using-linear-regression/';
const string3 =
  '/learn-ml/01---supervised-learning/09---generating-non-linear-hypothesis-using-linear-regression/';
const string4 =
  '/learn-ml/01---supervised-learning/06---generating-non-linear-hypothesis-using-linear-regression/';

// @required : what we want : wanted-output
/*
  1. table =>
    {
        "learn-ml": {
            "01---supervised-learning": {
                "1--regression": {
                    "files": [
                        "06---generating-non-linear-hypothesis-using-linear-regression_1b219f43-eb10-4aa8-8b3a-4af7bd799e5f",
                        "07---generating-non-linear-hypothesis-using-linear-regression_f8a239c8-7905-4a62-914c-c71b3fe4597d"
                    ]
                },
                "files": [
                    "09---generating-non-linear-hypothesis-using-linear-regression_f244c551-e70c-4bd2-8c22-d88f6c163e21",
                    "06---generating-non-linear-hypothesis-using-linear-regression_9f9cb4ef-c0a4-4b29-b23e-0348b3ac8445"
                ]
            }
        }
    }
     
 2. paths =>
    {
        "06---generating-non-linear-hypothesis-using-linear-regression_1b219f43-eb10-4aa8-8b3a-4af7bd799e5f": "learn-ml/01---supervised-learning/1--regression/06---generating-non-linear-hypothesis-using-linear-regression_1b219f43-eb10-4aa8-8b3a-4af7bd799e5f",
        "07---generating-non-linear-hypothesis-using-linear-regression_f8a239c8-7905-4a62-914c-c71b3fe4597d": "learn-ml/01---supervised-learning/1--regression/07---generating-non-linear-hypothesis-using-linear-regression_f8a239c8-7905-4a62-914c-c71b3fe4597d",
        "09---generating-non-linear-hypothesis-using-linear-regression_f244c551-e70c-4bd2-8c22-d88f6c163e21": "learn-ml/01---supervised-learning/09---generating-non-linear-hypothesis-using-linear-regression_f244c551-e70c-4bd2-8c22-d88f6c163e21",
        "06---generating-non-linear-hypothesis-using-linear-regression_9f9cb4ef-c0a4-4b29-b23e-0348b3ac8445": "learn-ml/01---supervised-learning/06---generating-non-linear-hypothesis-using-linear-regression_9f9cb4ef-c0a4-4b29-b23e-0348b3ac8445"
    }
*/

// TODO: Convert it into a Pure function if not
const getTableContent_helper = (arr, index, n, obj, paths) => {
  if (index === n - 1) {
    // To avoid file name clashed in entire repo.
    const pathid = uuidv4();
    if (obj.hasOwnProperty('files')) {
      obj['files'].push(`${arr[n - 1]}_${pathid}`);
    } else {
      obj['files'] = [`${arr[n - 1]}_${pathid}`];
    }

    // check to see if files names clashes
    if (paths.hasOwnProperty(arr[n - 1]))
      throw new Error('Same name Files Gotcha');

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

const [table, paths] = getTableContent([string1, string2, string3, string4]);
console.log(
  'table =>\n',
  JSON.stringify(table, null, 4),
  '\n',
  'paths =>\n',
  JSON.stringify(paths, null, 4)
);
