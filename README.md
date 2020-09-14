# Flipr Full Stack Application Hackathon

## Theme : Covid19

Live demo: https://flipr-covid.herokuapp.com/

Task to be done

- Contact And Helpline Page
- Notification page
- Hospital and Medical colleges page
- Daily cases

To run in you local machine, first clone the repo then run the following command

```
npm run build && node src/server/index.js
```

This will run the production ready code.

## Stack Used

React, Hooks, Node, Express, MySQl, Chakra-UI

## Notice

The data provided for task 4 contained a lot of empty values, so I have populated the ageEstimate field with random values and set the default value gender to male.

## Importing data to the database

If you want to store the data in you local MySQl database, for the data given for task 4, use the following code to insert it into the database.

**flipr** is the database and **covid19india** is the table.

```
drop table if exists flipr.covid19india;

create table flipr.covid19india(
patientId int primary key,
reportedOn varchar(20),
onsetEstimate varchar(10),
ageEstimate varchar(10),
gender varchar(10) default "male",
city varchar(50),
district varchar(50),
state varchar(100),
status varchar(200),
notes varchar(1000),
contractedFrom varchar(1000)
);

load data infile "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/covid19india.csv" into table flipr.covid19india
fields terminated by ","
optionally enclosed by '"'
lines terminated by "\r\n"
ignore 1 lines
(@col1, @col2,@col3, @col4,@col5, @col6,@col7, @col8,@col9, @col10,@col11)
        SET patientId = @col1,
            reportedOn = nullif(@col2,''),
			onSetEstimate = nullif(@col3,''),
            ageEstimate = nullif(@col4,''),
            gender = nullif(@col5,''),
            city = nullif(@col6,''),
            district = nullif(@col7,''),
            state = nullif(@col8,''),
            status = nullif(@col9,''),
            notes = nullif(@col10,''),
            contractedFrom = nullif(@col11,'')
;


-- Filling random values for null fields in age for better output
update flipr.covid19india
set ageEstimate = FLOOR(RAND()*(100-20+1)+20)
where ageEstimate is null;

select ageEstimate from flipr.covid19india;

-- Update the defalt gender to male
update flipr.covid19india
set gender = "male"
where gender is null;
```

## Some screen Shots of the website

![Home](/md/home.jpg)
![Cases](/md/daily.jpg)
![Notification](/md/notification.jpg)
![Hospitals](/md/hospitals.jpg)
![Colleges](/md/medical.jpg)
