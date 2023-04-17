## what is indexing?

- In databases indexing is a technique to optimize the performance of database queries.
- Indexing a tables column helps the data base to quickly lookup the values of the column. This helps to quickly locate the rows using index look up rather than scaning the whole table.
- Deciding which columns to index depends on various factors like how big is the table, how frequently a query is executed.
- generally you could consider indexing those columns that are frequently used in where clause and joins.
- over indexing can lead to lower write speeds and storage requirements.

exaple
create index indx_name on table_name(column1, column2, ...)
