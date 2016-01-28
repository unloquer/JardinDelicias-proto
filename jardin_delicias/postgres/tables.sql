CREATE TABLE sensor_post (
    sensorId     varchar(64) CONSTRAINT firstkey PRIMARY KEY,
    value        real NOT NULL,
    date         date NOT NULL
);
