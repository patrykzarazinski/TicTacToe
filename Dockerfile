FROM ubuntu:18.04

LABEL maintainer="Patryk Zarazinski"

RUN apt-get -yqq update
RUN apt-get -yqq install python3-pip

ADD flask-app /usr/src/flask-app
WORKDIR /usr/src/flask-app

RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python3", "app.py"]