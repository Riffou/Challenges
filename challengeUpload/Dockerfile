FROM lavoweb/php-5.6

WORKDIR /var/www/html
COPY index.php .
COPY upload.php .
COPY password.txt ../
COPY uploads ./uploads

RUN chown www-data /var/www/html /var/www/html/uploads
RUN chmod 755 /var/www /var/www/html /var/www/html/uploads

