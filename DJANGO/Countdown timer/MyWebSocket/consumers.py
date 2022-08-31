from channels.generic.websocket import WebsocketConsumer
import json
import datetime as dt
import time

class MyConsumer(WebsocketConsumer):

    def connect(self):
        self.accept()
        event1 = dt.datetime(2022,12,25)
        event2 = dt.datetime(2023,1,1)
        while event1.year == 2022:
            today = dt.datetime.now()
            timeToEv1 = str(event1 - today)
            timeToEv2 = str(event2 - today)
            self.send(text_data=json.dumps({'ev1':timeToEv1[0:-7],'ev2':timeToEv2[0:-7]}))
            time.sleep(1)

#    def receive(self):
#        self.send(text_data="Hello world!")

    def disconnect(self, close_code):
        # Called when the socket closes
        self.close()
