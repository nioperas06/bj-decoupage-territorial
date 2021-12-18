FROM mysql:8.0

COPY decoupage_territorial_benin.sql /docker-entrypoint-initdb.d/

RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/

CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_0900_ai_ci"]

#RUN /mysql/init_database.sh