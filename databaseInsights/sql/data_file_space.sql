declare @diskusage table(database_name nvarchar(30), 
                        database_size nvarchar(30), 
                        unallocated_space nvarchar(30), 
                        reserved nvarchar(30), data nvarchar(30), 
                        index_size nvarchar(30), unused nvarchar(30));

insert into @diskusage(database_name, database_size, unallocated_space, reserved, data, index_size, unused) 
exec sp_spaceused @oneresultset=1

SELECT  

        left(reserved, len(reserved)-3)/1024 as [reserved], 
        left(data, len(data)-3)/1024 as [data], 
        left(index_size,len(index_size)-3)/1024 as [index], 
        left(unused,len(unused)-3)/1024 as [unused] 
FROM @diskusage