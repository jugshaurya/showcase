const { getTableContent } = require('../../src/utils/getTableContent');

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

const [table, paths] = getTableContent([string1, string2, string3, string4]);

console.log(
  'table =>\n',
  JSON.stringify(table, null, 4),
  '\n',
  'paths =>\n',
  JSON.stringify(paths, null, 4)
);
