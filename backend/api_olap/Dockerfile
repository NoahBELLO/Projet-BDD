FROM python:3.11-slim-buster

WORKDIR /usr/src/app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 3000

ENTRYPOINT ["python", "app.py"]