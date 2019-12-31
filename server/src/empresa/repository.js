const database = require('../../database');
const pgFormat = require('pg-format');

async function getAll({ page, itemsPerPage, sortBy, filterBy }) {
  const getAllQuery = /* sql */ `
    SELECT
      public."Empresas".*
    FROM
      public."Empresas"
    WHERE
      %s
    ORDER BY
      %s
    LIMIT %L
    OFFSET %L
  `;

  const getAllQueryReplacements = [
    itemsPerPage,
    page * itemsPerPage,
    'true',
    'public."Empresas".id ASC'
  ];

  try {
    const getAllFormatedQuery = pgFormat(
      getAllQuery,
      getAllQueryReplacements[2],
      getAllQueryReplacements[3],
      getAllQueryReplacements[0],
      getAllQueryReplacements[1]
    );

    const getAllQueryResult = await database.db().query(getAllFormatedQuery);

    console.log(getAllQueryResult.rows);

    return [];
  } catch (exception) {
    console.log(exception);
    return [];
  }
}

module.exports = { getAll };
