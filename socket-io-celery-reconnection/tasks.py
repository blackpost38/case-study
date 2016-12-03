from celery import Celery
import time

app = Celery('tasks', backend='amqp://', broker='amqp://')

app.conf.update(
  CELERY_TASK_SERIALIZER='json',
  CELERY_ACCEPT_CONTENT=['json'],
  CELERY_RESULT_SERIALIZER='json'
)

@app.task
def add(x, y):
  time.sleep(10)
  return x + y

