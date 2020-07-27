import React from 'react';
import { Link } from 'gatsby';

// uuid's id length is of 36 character.
const removeUUID = (str) => str.slice(0, -37);

const getTableLayout = (table, paths) => {
  return (
    <>
      <div style={{ marginLeft: '30px' }}>
        {Object.keys(table).map((section, index) => {
          return (
            <div key={index}>
              {section === 'files' ? null : (
                <div>
                  <h6>{section}</h6>
                </div>
              )}
              <div>
                {Array.isArray(table[section]) ? (
                  <div className="ioioo" style={{ marginLeft: '30px' }}>
                    {table[section].map((file, index) => (
                      <div key={1000 + index}>
                        <Link
                          to={`/${removeUUID(paths[file])}/`}
                          className="file"
                        >
                          {removeUUID(file)}
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  getTableLayout(table[section], paths)
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const TableContent = ({ table, paths }) => {
  return (
    <div>
      <h3>Table Content</h3>
      <div className="content">{getTableLayout(table, paths)}</div>
    </div>
  );
};

export default TableContent;
